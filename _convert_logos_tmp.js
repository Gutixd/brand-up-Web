const sharp = require('sharp');
const DESK = 'C:\\Users\\chini\\OneDrive\\Desktop\\BrandUp-video-referencias\\';
(async () => {
  await sharp(DESK + '02-logo-icono-B-flecha.webp').resize(600).png().toFile(DESK + '02-logo-icono-B-flecha.png');
  await sharp(DESK + '03-logo-completo-wordmark.webp').resize(1200).png().toFile(DESK + '03-logo-completo-wordmark.png');
  console.log('ok');
})();
