// Título y descripción para buscadores de cada página de servicio.
//
// El título visible (H1) sigue siendo el nombre corto del servicio; esto es
// lo que leen Google y los asistentes de IA. Nombra el servicio como lo
// busca la gente ("páginas web", "publicidad") y la zona (Santiago).
//
// Los precios son SOLO los rangos que BrandUp ya publica en /faq y
// /llms.txt. No agregar cifras que no estén publicadas ahí.
import type { L } from './services';

export const SERVICE_SEO: Record<string, { title: L; desc: L; serviceType: L }> = {
  'diseno-web': {
    title: {
      es: 'Diseño de Páginas Web en Santiago de Chile | BrandUp',
      en: 'Web Design in Santiago, Chile | BrandUp',
    },
    desc: {
      es: 'Diseño y desarrollo de páginas web en Santiago: landing pages desde $150.000 y sitios corporativos desde $350.000. Diseño a medida y precio cerrado.',
      en: 'Web design and development in Santiago, Chile: landing pages from CLP $150,000 and corporate sites from $350,000. Custom design, fixed price.',
    },
    serviceType: { es: 'Diseño y desarrollo de páginas web', en: 'Web design and development' },
  },
  ecommerce: {
    title: {
      es: 'Tiendas Online y E-commerce en Santiago de Chile | BrandUp',
      en: 'Online Stores & E-commerce in Santiago, Chile | BrandUp',
    },
    desc: {
      es: 'Creamos tu tienda online en Santiago con catálogo, carrito y pago en línea. Desde $600.000, con precio cerrado y todo a tu nombre.',
      en: 'We build your online store in Santiago with catalogue, cart and online payment. From CLP $600,000, fixed price, everything in your name.',
    },
    serviceType: { es: 'Desarrollo de tiendas online', en: 'E-commerce development' },
  },
  branding: {
    title: {
      es: 'Branding y Diseño de Logo en Santiago de Chile | BrandUp',
      en: 'Branding & Logo Design in Santiago, Chile | BrandUp',
    },
    desc: {
      es: 'Identidad de marca para negocios de Santiago: logo, colores, tipografías y piezas listas para usar en redes, web e impresos.',
      en: 'Brand identity for businesses in Santiago: logo, colours, typography and assets ready for social media, web and print.',
    },
    serviceType: { es: 'Branding e identidad de marca', en: 'Branding and brand identity' },
  },
  'contenido-reels': {
    title: {
      es: 'Reels y Contenido para Redes Sociales en Santiago | BrandUp',
      en: 'Reels & Social Media Content in Santiago, Chile | BrandUp',
    },
    desc: {
      es: 'Grabamos y editamos reels y contenido para Instagram y TikTok para negocios de Santiago. Gestión mensual de redes desde $250.000.',
      en: 'We shoot and edit reels and content for Instagram and TikTok for businesses in Santiago. Monthly social media management from CLP $250,000.',
    },
    serviceType: { es: 'Contenido y reels para redes sociales', en: 'Social media content and reels' },
  },
  'publicidad-digital': {
    title: {
      es: 'Publicidad Digital en Santiago: Meta Ads y Google Ads | BrandUp',
      en: 'Digital Advertising in Santiago: Meta Ads & Google Ads | BrandUp',
    },
    desc: {
      es: 'Campañas de publicidad en Instagram, Facebook y Google para negocios de Santiago. Gestión mensual desde $250.000, sin incluir la inversión en anuncios.',
      en: 'Ad campaigns on Instagram, Facebook and Google for businesses in Santiago. Monthly management from CLP $250,000, ad spend not included.',
    },
    serviceType: { es: 'Publicidad digital en Meta Ads y Google Ads', en: 'Digital advertising on Meta Ads and Google Ads' },
  },
  'automatizaciones-ia': {
    title: {
      es: 'Automatizaciones con IA para Empresas en Santiago | BrandUp',
      en: 'AI Automation for Businesses in Santiago, Chile | BrandUp',
    },
    desc: {
      es: 'Automatizamos respuestas, formularios y tareas repetitivas con IA para pymes de Santiago y todo Chile, conectando WhatsApp, correo y tu sitio web.',
      en: 'We automate replies, forms and repetitive tasks with AI for small businesses in Santiago and across Chile, connecting WhatsApp, email and your website.',
    },
    serviceType: { es: 'Automatización de procesos con inteligencia artificial', en: 'AI process automation' },
  },
  'marketing-growth': {
    title: {
      es: 'Marketing Digital en Santiago de Chile para Pymes | BrandUp',
      en: 'Digital Marketing in Santiago, Chile for Small Businesses | BrandUp',
    },
    desc: {
      es: 'Estrategia de marketing digital para pymes de Santiago: web, contenido, publicidad y medición trabajando juntos, con un solo equipo.',
      en: 'Digital marketing strategy for small businesses in Santiago: web, content, ads and measurement working together, with a single team.',
    },
    serviceType: { es: 'Marketing digital y estrategia de crecimiento', en: 'Digital marketing and growth strategy' },
  },
};
