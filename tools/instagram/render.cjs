#!/usr/bin/env node
// Genera las imágenes de una publicación de Instagram a partir de su ficha.
//
//   node tools/instagram/render.cjs posts/2026-11-06-plazos-pagina-web.json
//
// Cada lámina se arma como HTML con la línea gráfica de BrandUp (crema,
// negro y naranja; Anton + Instrument Sans) y se fotografía con Chrome sin
// ventana. Resultado: tools/instagram/out/<slug>/01.jpg, 02.jpg... en
// 1080x1350 (formato vertical 4:5, el que más espacio ocupa en el feed).
//
// Marcas en los textos:  *palabra*  → en naranja.   \n → salto de línea.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const HERE = __dirname;
const ROOT = path.join(HERE, '..', '..');
const W = 1080;
const H = 1350;

const CHROME = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
].find((p) => p && fs.existsSync(p));

const sharp = require(path.join(ROOT, 'node_modules', 'sharp'));

const fileUrl = (p) => 'file:///' + p.replace(/\\/g, '/');
const FONT_ANTON = fileUrl(path.join(ROOT, 'node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2'));
const FONT_SANS = fileUrl(path.join(ROOT, 'node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2'));

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = (s) => esc(s).replace(/\*(.+?)\*/g, '<span class="acc">$1</span>').replace(/\n/g, '<br>');

async function logoDataUrl() {
  const buf = await sharp(path.join(ROOT, 'src/assets/brand/logo-icon.webp')).resize({ height: 96 }).png().toBuffer();
  return 'data:image/png;base64,' + buf.toString('base64');
}

function imageDataUrl(p) {
  const abs = path.isAbsolute(p) ? p : path.join(HERE, p);
  const ext = path.extname(abs).slice(1).toLowerCase().replace('jpg', 'jpeg');
  return `data:image/${ext};base64,` + fs.readFileSync(abs).toString('base64');
}

const CSS = `
@font-face { font-family: Anton; src: url('${FONT_ANTON}') format('woff2'); }
@font-face { font-family: Sans; src: url('${FONT_SANS}') format('woff2'); font-weight: 100 900; }
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
body { font-family: Sans, sans-serif; background: #f1eee7; color: #141414; position: relative; }
.bar { position: absolute; left: 0; top: 0; bottom: 0; width: 18px; background: #f05e23; }
.dots { position: absolute; right: 80px; top: 96px; width: 170px; height: 150px;
  background-image: radial-gradient(#141414 2.6px, transparent 2.8px); background-size: 26px 26px; opacity: .85; }
.wrap { position: absolute; left: 80px; right: 80px; top: 150px; bottom: 170px; display: flex; flex-direction: column; justify-content: center; }
.kicker { font-weight: 800; font-size: 30px; letter-spacing: .2em; text-transform: uppercase; color: #f05e23; margin-bottom: 26px; }
.title { font-family: Anton, sans-serif; font-size: 150px; line-height: .98; text-transform: uppercase; letter-spacing: .005em; }
.acc { color: #f05e23; }
.body { margin-top: 40px; font-size: 42px; line-height: 1.4; color: #5c5a55; max-width: 860px; }
.num { font-family: Anton, sans-serif; font-size: 230px; line-height: .8; color: #f05e23; margin-bottom: 34px; }
.foot { position: absolute; left: 80px; right: 80px; bottom: 80px; display: flex; align-items: center; justify-content: space-between; }
.brand { display: flex; align-items: center; gap: 16px; font-weight: 800; font-size: 36px; }
.brand img { height: 48px; }
.brand .up { color: #f05e23; }
.hint { font-weight: 800; font-size: 28px; letter-spacing: .22em; color: #5c5a55; }
.page { position: absolute; right: 80px; top: 80px; font-weight: 800; font-size: 26px; letter-spacing: .14em; color: #5c5a55; }
/* Lámina oscura (cierre / llamado a la acción) */
body.dark { background: #141414; color: #f6f4ef; }
body.dark .dots { background-image: radial-gradient(#f6f4ef 2.6px, transparent 2.8px); opacity: .35; }
body.dark .body, body.dark .hint, body.dark .page { color: #b9b6ae; }
/* El logo tiene la "B" negra: sobre fondo oscuro va en una ficha clara. */
body.dark .brand img, body.withphoto .brand img { background: #f6f4ef; border-radius: 10px; padding: 6px 8px; height: 56px; }
.cta-pill { margin-top: 48px; align-self: flex-start; background: #f05e23; color: #fff; font-weight: 800; font-size: 38px; padding: 26px 44px; border-radius: 999px; }
/* Foto de fondo opcional: oscurecida para que el texto se lea */
.photo { position: absolute; inset: 0; background-size: cover; background-position: center; }
.photo::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,10,10,.25) 0%, rgba(10,10,10,.78) 70%); }
body.withphoto { color: #f6f4ef; }
body.withphoto .body, body.withphoto .hint, body.withphoto .page { color: #e3e0d8; }
`;

// Achica el título hasta que todo el bloque quepa (sin cortar palabras).
const FIT = `
<script>
document.fonts.ready.then(() => {
  const wrap = document.querySelector('.wrap');
  const t = document.querySelector('.title');
  if (!t) return;
  let size = parseFloat(getComputedStyle(t).fontSize);
  const fits = () => wrap.scrollHeight <= wrap.clientHeight + 1 && t.scrollWidth <= t.clientWidth + 1;
  while (!fits() && size > 56) { size -= 4; t.style.fontSize = size + 'px'; }
  document.body.setAttribute('data-ready', '1');
});
</script>`;

function slideHtml(s, i, total, logo, opts) {
  const kind = s.tipo || (i === 0 ? 'portada' : i === total - 1 && total > 1 ? 'cierre' : 'punto');
  const dark = kind === 'cierre';
  const photo = s.imagen ? `<div class="photo" style="background-image:url('${imageDataUrl(s.imagen)}')"></div>` : '';
  const cls = [dark ? 'dark' : '', s.imagen ? 'withphoto' : ''].join(' ');
  const showBar = !s.imagen;
  const page = total > 1 && kind === 'punto' ? `<div class="page">${i + 1} / ${total}</div>` : '';
  const dots = kind !== 'punto' && !s.imagen ? '<div class="dots"></div>' : '';
  const hint = total > 1 && i < total - 1 ? 'DESLIZA →' : (opts.footer || 'BRANDUP.CL');

  let inner = '';
  if (s.kicker) inner += `<div class="kicker">${rich(s.kicker)}</div>`;
  if (kind === 'punto' && s.numero !== false) inner += `<div class="num">${esc(s.numero ?? String(i).padStart(2, '0'))}</div>`;
  if (s.titulo) inner += `<div class="title" style="font-size:${s.tamano || (kind === 'punto' ? 120 : 150)}px">${rich(s.titulo)}</div>`;
  if (s.texto) inner += `<div class="body">${rich(s.texto)}</div>`;
  if (s.boton) inner += `<div class="cta-pill">${rich(s.boton)}</div>`;

  return `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head>
<body class="${cls}">${photo}${showBar ? '<div class="bar"></div>' : ''}${dots}${page}
<div class="wrap">${inner}</div>
<div class="foot"><div class="brand"><img src="${logo}" alt=""><span>Brand<span class="up">Up</span></span></div><div class="hint">${esc(hint)}</div></div>
${FIT}</body></html>`;
}

async function main() {
  const specPath = process.argv[2];
  if (!specPath) {
    console.error('Uso: node tools/instagram/render.cjs posts/<archivo>.json');
    process.exit(1);
  }
  if (!CHROME) throw new Error('No encontré Chrome. Define CHROME_PATH.');
  const abs = path.isAbsolute(specPath) ? specPath : path.join(HERE, specPath);
  const spec = JSON.parse(fs.readFileSync(abs, 'utf8'));
  const slug = spec.slug || path.basename(abs, '.json');
  const out = path.join(HERE, 'out', slug);
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  const tmp = path.join(out, '_html');
  fs.mkdirSync(tmp);

  const logo = await logoDataUrl();
  const slides = spec.laminas;
  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    const htmlFile = path.join(tmp, `${n}.html`);
    fs.writeFileSync(htmlFile, slideHtml(slides[i], i, slides.length, logo, spec));
    const png = path.join(tmp, `${n}.png`);
    execFileSync(CHROME, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
      '--force-device-scale-factor=1', `--window-size=${W},${H}`,
      '--virtual-time-budget=6000', `--screenshot=${png}`, fileUrl(htmlFile),
    ], { stdio: 'ignore' });
    // Instagram solo acepta JPEG por API.
    await sharp(png).resize(W, H).flatten({ background: '#f1eee7' }).jpeg({ quality: 92, mozjpeg: true })
      .toFile(path.join(out, `${n}.jpg`));
  }
  fs.rmSync(tmp, { recursive: true, force: true });
  fs.writeFileSync(path.join(out, 'texto.txt'), [spec.texto || '', '', (spec.hashtags || []).join(' ')].join('\n').trim() + '\n');
  console.log(`Listo: ${slides.length} imagen(es) en ${path.relative(ROOT, out)}`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
