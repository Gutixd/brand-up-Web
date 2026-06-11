// One-off script: copies brand assets from the source folders on the Desktop
// into src/assets as optimized WebP. Originals are never modified.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const DESKTOP = 'C:/Users/chini/OneDrive/Desktop';
const WORK = `${DESKTOP}/Trabajos brand up`;
const BRAND = `${DESKTOP}/informacion de logo brand up`;
const OUT = new URL('../src/assets', import.meta.url).pathname.replace(/^\/(\w:)/, '$1');

mkdirSync(join(OUT, 'logos'), { recursive: true });
mkdirSync(join(OUT, 'team'), { recursive: true });
mkdirSync(join(OUT, 'brand'), { recursive: true });

const jobs = [
  // Client logos (marquee + project cards)
  [`${WORK}/logos/logos con los que trabajamos/chachapollo.jpeg`, 'logos/chachapollo.webp', 480],
  [`${WORK}/logos/logos con los que trabajamos/logo jdcargo.png`, 'logos/jdcargo.webp', 480],
  [`${WORK}/logos/logos con los que trabajamos/Logo jdcargo sin fondo.png`, 'logos/jdcargo-nobg.webp', 480],
  [`${WORK}/logos/logos con los que trabajamos/logo aracnida store.jpeg`, 'logos/aracnida.webp', 480],
  [`${WORK}/logos/logos con los que trabajamos/templo maipu.jpeg`, 'logos/templo-maipu.webp', 480],
  [`${WORK}/logos/logos con los que trabajamos/bell collge.jpeg`, 'logos/bell-college.webp', 480],
  [`${WORK}/logos/logos con los que trabajamos/bschool.jpeg`, 'logos/bschool.webp', 480],
  [`${WORK}/logos/logos con los que trabajamos/duoc uc.jpeg`, 'logos/duoc-uc.webp', 480],
  [`${WORK}/logos/logos con los que trabajamos/superlucnh.jpeg`, 'logos/superlunch.webp', 480],
  // Team photos
  [`${WORK}/Fotos diego ingeniero en informatica/foto diego .jpeg`, 'team/diego.webp', 900],
  [`${WORK}/fotos valentina publicista/foto_final.png`, 'team/valentina.webp', 900],
  [`${WORK}/fotos valentina publicista/foto_2.png`, 'team/valentina-2.webp', 900],
  // BrandUp logo
  [`${BRAND}/LOGO.png`, 'brand/logo-icon.webp', 512],
  [`${BRAND}/Logo Brand Up.jpeg`, 'brand/logo-full.webp', 900],
];

for (const [src, dest, width] of jobs) {
  try {
    await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 84 }).toFile(join(OUT, dest));
    console.log('ok ', dest);
  } catch (e) {
    console.error('FAIL', dest, e.message);
  }
}

// Favicon PNGs from brand icon
const PUB = join(OUT, '..', '..', 'public');
mkdirSync(PUB, { recursive: true });
for (const size of [32, 180, 512]) {
  await sharp(`${BRAND}/LOGO.png`).resize(size, size, { fit: 'contain', background: '#0d0d0d' }).png().toFile(join(PUB, `favicon-${size}.png`));
  console.log('ok  favicon-' + size);
}
console.log('done');
