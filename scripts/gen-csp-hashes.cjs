#!/usr/bin/env node
// Escanea dist/ (ya construido) en busca de cada <script> inline distinto,
// calcula su hash sha256 y reescribe la directiva script-src de vercel.json
// reemplazando 'unsafe-inline' por la lista exacta de hashes permitidos.
//
// Se corre después de `astro build` (ver "postbuild" en package.json) para
// que vercel.json quede siempre sincronizado con el HTML real antes de
// hacer commit — si agregas o cambias un script inline y no vuelves a
// buildear, el CSP de producción bloqueará ese script.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const VERCEL_JSON = path.join(ROOT, 'vercel.json');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

if (!fs.existsSync(DIST)) {
  console.error('[gen-csp-hashes] No existe dist/, corre "astro build" primero.');
  process.exit(1);
}

const files = walk(DIST);
// Captura <script ...>contenido</script> SIN atributo src (los inline).
const scriptRe = /<script(?![^>]*\ssrc=)([^>]*)>([\s\S]*?)<\/script>/gi;
const hashes = new Set();

// Bloques de DATOS, no de código: el navegador nunca los ejecuta, así que
// `script-src` no se les aplica y hashearlos no aporta ninguna seguridad.
// Cada página tiene su propio JSON-LD (canonical distinto), así que incluirlos
// hacía crecer la cabecera una entrada por página: 235 de 244 hashes eran
// basura y la CSP pesaba ~13,9 KB en CADA respuesta, cerca de los límites que
// algunos proxies y CDN imponen a las cabeceras.
const DATA_TYPES = /type\s*=\s*["']?application\/(ld\+json|json)["']?/i;

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = scriptRe.exec(html))) {
    const attrs = m[1];
    const content = m[2];
    if (!content.trim()) continue;
    if (DATA_TYPES.test(attrs)) continue;
    const hash = crypto.createHash('sha256').update(content, 'utf8').digest('base64');
    hashes.add(`'sha256-${hash}'`);
  }
}

const sorted = [...hashes].sort();
console.log(`[gen-csp-hashes] ${sorted.length} scripts inline únicos encontrados en ${files.length} páginas.`);

const cfg = JSON.parse(fs.readFileSync(VERCEL_JSON, 'utf8'));
const headerList = cfg.headers[0].headers;
const cspHeader = headerList.find((h) => h.key === 'Content-Security-Policy');
if (!cspHeader) {
  console.error('[gen-csp-hashes] No se encontró la cabecera Content-Security-Policy en vercel.json.');
  process.exit(1);
}

const directives = cspHeader.value.split(';').map((d) => d.trim()).filter(Boolean);
const scriptSrcIdx = directives.findIndex((d) => d.startsWith('script-src'));
if (scriptSrcIdx === -1) {
  console.error('[gen-csp-hashes] No se encontró script-src en la CSP.');
  process.exit(1);
}

// Mantiene los orígenes externos ya declarados (ej. googletagmanager.com),
// descarta 'unsafe-inline' / hashes viejos, y agrega los hashes actuales.
const scriptSrcParts = directives[scriptSrcIdx].split(/\s+/).slice(1);
const externalOrigins = scriptSrcParts.filter(
  (p) => p.startsWith('https://') || p === "'self'" || p === "'strict-dynamic'"
);
directives[scriptSrcIdx] = ['script-src', ...externalOrigins, ...sorted].join(' ');

cspHeader.value = directives.join('; ');
fs.writeFileSync(VERCEL_JSON, JSON.stringify(cfg, null, 2) + '\n');
console.log('[gen-csp-hashes] vercel.json actualizado con los hashes de script-src.');
