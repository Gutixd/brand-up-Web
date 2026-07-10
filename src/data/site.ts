// Global site data — single source of truth for contact, socials & SEO.

export const SITE = {
  name: 'BrandUp',
  legalName: 'BrandUp Agency',
  domain: 'https://brandup.cl',
  city: 'Santiago, Chile',
  // TODO: confirmar email definitivo (encontrado en V11: hola@brandup.cl)
  email: 'hola@brandup.cl',
  phone: '+56 9 7982 2862',
  whatsappNumber: '56979822862',
  instagram: 'https://www.instagram.com/brand.up.cl/',
  tiktok: 'https://www.tiktok.com/@brand.up.cl',
  founded: '2024',
  // Search Console: pegar aquí el content="..." de la etiqueta HTML que
  // entrega Google al verificar la propiedad (vacío = no se renderiza).
  googleSiteVerification: '',
};

export const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
