// Global site data — single source of truth for contact, socials & SEO.

export const SITE = {
  name: 'BrandUp',
  legalName: 'BrandUp Agency',
  domain: 'https://brandup.cl',
  city: 'Santiago, Chile',
  email: 'brandup.092@gmail.com',
  phone: '+56 9 7982 2862',
  whatsappNumber: '56979822862',
  instagram: 'https://www.instagram.com/brand.up.cl/',
  tiktok: 'https://www.tiktok.com/@brand.up.cl',
  founded: '2024',
  // Search Console: pegar aquí el content="..." de la etiqueta HTML que
  // entrega Google al verificar la propiedad (vacío = no se renderiza).
  googleSiteVerification: 'LOm1za6n0YKvNQGvIXNDMmH9LAuAQhkIwNTzXDWdr-A',
  // Formulario de contacto: ID de Formspree (formspree.io/forms/<id>/integration).
  // Vacío = el formulario solo abre WhatsApp, sin guardar copia.
  formspreeId: '',
};

export const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;

/**
 * Mensajes precargados de WhatsApp, en un solo lugar para que todos
 * mantengan el mismo tono. Los escribe el visitante, no la agencia:
 * saludo breve, de dónde viene y qué necesita, sin abreviaturas.
 */
export const WA_MSG = {
  es: {
    quote:
      'Hola, buenos días. Escribo desde el sitio web de BrandUp: me interesa cotizar un proyecto. ¿Podríamos coordinar una conversación?',
    info:
      'Hola, buenos días. Escribo desde el sitio web de BrandUp y quisiera recibir más información sobre sus servicios.',
    blog:
      'Hola, buenos días. Llegué a ustedes por un artículo del blog de BrandUp y me interesa cotizar un proyecto.',
    product: (price: string) =>
      `Hola, buenos días. Escribo desde el sitio web de BrandUp: quisiera adquirir la placa NFC para reseñas de Google (${price}). ¿Cómo continúo con la compra?`,
  },
  en: {
    quote:
      "Hello, good morning. I'm writing from the BrandUp website: I'd like to request a quote for a project. Could we set up a call?",
    info:
      "Hello, good morning. I'm writing from the BrandUp website and I'd like more information about your services.",
    blog:
      "Hello, good morning. I found you through an article on the BrandUp blog and I'd like to request a quote for a project.",
    product: (price: string) =>
      `Hello, good morning. I'm writing from the BrandUp website: I'd like to purchase the NFC Google review stand (${price}). How do I proceed?`,
  },
} as const;
