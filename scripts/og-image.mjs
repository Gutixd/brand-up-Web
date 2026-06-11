// Generates the Open Graph share image (1200×630) from the brand palette + logo.
import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="85%" cy="15%" r="80%">
      <stop offset="0%" stop-color="#f19650" stop-opacity="0.35"/>
      <stop offset="55%" stop-color="#0d0d0d" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0d0d0d"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="300" font-family="Arial, sans-serif" font-size="92" font-weight="800" fill="#ffffff">Brand</text>
  <text x="330" y="300" font-family="Arial, sans-serif" font-size="92" font-weight="800" fill="#f19650">Up</text>
  <text x="80" y="370" font-family="Arial, sans-serif" font-size="34" fill="#a1a1a1">Agencia creativa full service — Santiago de Chile</text>
  <text x="80" y="440" font-family="Arial, sans-serif" font-size="28" fill="#f19650">Web · E-commerce · Branding · Reels · Ads</text>
  <path d="M1020 480 L1080 420 L1140 480 M1080 420 L1080 540" stroke="#f19650" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og-image.png', import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
console.log('og-image.png generated');
