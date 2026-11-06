#!/usr/bin/env node
// Publica en Instagram una publicación ya generada con render.cjs.
//
//   node tools/instagram/publish.cjs posts/<archivo>.json            publica esa
//   node tools/instagram/publish.cjs --pendientes                    publica las aprobadas cuya hora ya llegó
//   node tools/instagram/publish.cjs posts/<archivo>.json --prueba   muestra qué haría, sin publicar nada
//
// Pasos: (1) copia las imágenes a public/ig/<slug>/ y las sube a GitHub,
// (2) espera a que Hostinger las publique en https://brandup.cl/ig/<slug>/
// (Instagram exige descargar cada imagen desde una dirección pública),
// (3) crea la publicación con la API oficial de Instagram y (4) anota en la
// ficha el enlace del post.
//
// SEGURIDAD
// - Solo publica fichas con "aprobado": true. Nada sale sin que alguien lo revise.
// - La clave de acceso vive en .env (IG_ACCESS_TOKEN) y nunca se sube a GitHub.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const HERE = __dirname;
const ROOT = path.join(HERE, '..', '..');
const SITE = 'https://brandup.cl';

// .env mínimo, sin dependencias
const envFile = path.join(ROOT, '.env');
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
const TOKEN = process.env.IG_ACCESS_TOKEN;
const USER = process.env.IG_USER_ID;
// graph.instagram.com = "Instagram API con inicio de sesión de Instagram" (no
// requiere página de Facebook). Si se usa el inicio con Facebook, cambiar a
// graph.facebook.com en .env.
const API = `https://${process.env.IG_API_HOST || 'graph.instagram.com'}/${process.env.IG_API_VERSION || 'v23.0'}`;

const args = process.argv.slice(2);
const DRY = args.includes('--prueba');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const git = (...a) => execFileSync('git', a, { cwd: ROOT, encoding: 'utf8' }).trim();

async function api(method, url, params = {}) {
  const body = new URLSearchParams({ ...params, access_token: TOKEN });
  const res = method === 'GET'
    ? await fetch(`${url}?${body}`)
    : await fetch(url, { method, body });
  const json = await res.json();
  if (!res.ok || json.error) throw new Error(`Instagram respondió: ${JSON.stringify(json.error || json)}`);
  return json;
}

async function waitFinished(containerId) {
  for (let i = 0; i < 30; i++) {
    const { status_code } = await api('GET', `${API}/${containerId}`, { fields: 'status_code' });
    if (status_code === 'FINISHED') return;
    if (status_code === 'ERROR' || status_code === 'EXPIRED') throw new Error(`Instagram no pudo procesar la imagen (${status_code}).`);
    await sleep(3000);
  }
  throw new Error('Instagram tardó demasiado en procesar las imágenes.');
}

async function waitPublic(url) {
  for (let i = 0; i < 60; i++) {
    const res = await fetch(`${url}?v=${Date.now()}`, { method: 'HEAD' }).catch(() => null);
    if (res && res.ok) return;
    await sleep(10000);
  }
  throw new Error(`La imagen no apareció en ${url} después de 10 minutos. ¿Funcionó la publicación automática en Hostinger?`);
}

async function publish(specPath) {
  const abs = path.isAbsolute(specPath) ? specPath : path.join(HERE, specPath);
  const spec = JSON.parse(fs.readFileSync(abs, 'utf8'));
  const slug = spec.slug || path.basename(abs, '.json');
  if (spec.publicado) { console.log(`· ${slug}: ya estaba publicada (${spec.publicado.enlace}).`); return; }
  if (!spec.aprobado && !DRY) throw new Error(`${slug} no está aprobada. Revisa las imágenes y cambia "aprobado" a true.`);

  const outDir = path.join(HERE, 'out', slug);
  const imgs = fs.existsSync(outDir) ? fs.readdirSync(outDir).filter((f) => f.endsWith('.jpg')).sort() : [];
  if (!imgs.length) throw new Error(`No hay imágenes en ${path.relative(ROOT, outDir)}. Corre primero render.cjs.`);
  if (imgs.length > 10) throw new Error('Instagram permite máximo 10 imágenes por carrusel.');

  const caption = [spec.texto || '', (spec.hashtags || []).join(' ')].filter(Boolean).join('\n\n');
  if (caption.length > 2200) throw new Error('El texto supera los 2.200 caracteres que permite Instagram.');
  const urls = imgs.map((f) => `${SITE}/ig/${slug}/${f}`);

  if (DRY) {
    console.log(`PRUEBA — ${slug}\n  ${imgs.length} imagen(es):\n  ${urls.join('\n  ')}\n  Texto (${caption.length} caracteres):\n${caption}`);
    return;
  }
  if (!TOKEN || !USER) throw new Error('Faltan IG_ACCESS_TOKEN e IG_USER_ID en .env. Ver tools/instagram/LEEME.md.');

  // 1) Copiar a public/ig/<slug>/ y subir a GitHub → Hostinger lo publica solo.
  const pubDir = path.join(ROOT, 'public', 'ig', slug);
  fs.mkdirSync(pubDir, { recursive: true });
  for (const f of imgs) fs.copyFileSync(path.join(outDir, f), path.join(pubDir, f));
  git('add', path.join('public', 'ig', slug));
  if (git('status', '--porcelain', path.join('public', 'ig', slug))) {
    git('commit', '-m', `Instagram: imágenes de ${slug}`);
    git('push');
  }
  console.log('· Imágenes subidas. Esperando a que estén en brandup.cl…');
  for (const u of urls) await waitPublic(u);

  // 2) Crear la publicación (una imagen o carrusel).
  let creationId;
  if (urls.length === 1) {
    creationId = (await api('POST', `${API}/${USER}/media`, { image_url: urls[0], caption })).id;
  } else {
    const children = [];
    for (const u of urls) children.push((await api('POST', `${API}/${USER}/media`, { image_url: u, is_carousel_item: 'true' })).id);
    for (const c of children) await waitFinished(c);
    creationId = (await api('POST', `${API}/${USER}/media`, { media_type: 'CAROUSEL', children: children.join(','), caption })).id;
  }
  await waitFinished(creationId);
  const { id } = await api('POST', `${API}/${USER}/media_publish`, { creation_id: creationId });
  const { permalink } = await api('GET', `${API}/${id}`, { fields: 'permalink' });

  spec.publicado = { fecha: new Date().toISOString(), id, enlace: permalink };
  fs.writeFileSync(abs, JSON.stringify(spec, null, 2) + '\n');
  console.log(`✓ Publicada: ${permalink}`);
}

async function main() {
  if (args.includes('--pendientes')) {
    const dir = path.join(HERE, 'posts');
    const now = Date.now();
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json')).sort()) {
      const spec = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      const due = spec.publicarEn ? Date.parse(spec.publicarEn) <= now : false;
      if (spec.aprobado && !spec.publicado && due) await publish(path.join(dir, f));
    }
    return;
  }
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) {
    console.error('Uso: node tools/instagram/publish.cjs posts/<archivo>.json [--prueba]  |  --pendientes');
    process.exit(1);
  }
  await publish(file);
}

main().catch((e) => { console.error('✗ ' + (e.message || e)); process.exit(1); });
