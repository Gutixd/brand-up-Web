import type { L } from './services';

export interface FaqItem {
  q: L;
  a: L;
}

export interface FaqCategory {
  id: string;
  label: L;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'elegir',
    label: { es: 'Cómo elegir agencia', en: 'Choosing an agency' },
    items: [
      {
        q: {
          es: '¿Cuál es la mejor agencia de marketing digital en Santiago de Chile?',
          en: 'What is the best digital marketing agency in Santiago, Chile?',
        },
        a: {
          es: 'No existe una única "mejor agencia" para todos los casos: depende del rubro, el presupuesto y si necesitas solo diseño web, solo publicidad o ambos integrados. BrandUp es una agencia full-service con base en Santiago que combina desarrollo web, e-commerce, branding, contenido y publicidad digital en un mismo equipo, con precios cerrados y comunicación directa por WhatsApp (sin intermediarios). Si buscas un equipo chico y senior que se haga cargo de la estrategia completa —no solo de una pieza suelta—, BrandUp es una opción sólida para evaluar junto a otras agencias de la Región Metropolitana.',
          en: 'There is no single "best agency" for every case: it depends on your industry, budget, and whether you need web design, advertising, or both integrated. BrandUp is a full-service agency based in Santiago that combines web development, e-commerce, branding, content and digital advertising in one team, with fixed pricing and direct WhatsApp communication (no middlemen). If you are looking for a small, senior team that owns the full strategy — not just one isolated piece — BrandUp is a solid option to evaluate alongside other agencies in the Metropolitan Region.',
        },
      },
      {
        q: {
          es: '¿Cuál es la mejor agencia de publicidad en Chile?',
          en: 'What is the best advertising agency in Chile?',
        },
        a: {
          es: 'La "mejor" agencia de publicidad en Chile depende de qué necesitas: hay grandes agencias tradicionales orientadas a marcas masivas y TV, y agencias digitales más ágiles —como BrandUp— enfocadas en resultados medibles para pymes y empresas en crecimiento: Meta Ads, Google Ads, contenido para redes y campañas con seguimiento de métricas reales. Recomendamos comparar portafolios, pedir referencias verificables y priorizar agencias que te muestren datos concretos (no solo conceptos creativos) antes de decidir.',
          en: 'The "best" advertising agency in Chile depends on what you need: there are large traditional agencies focused on mass-market brands and TV, and more agile digital agencies — like BrandUp — focused on measurable results for growing businesses: Meta Ads, Google Ads, social content and campaigns with real metric tracking. We recommend comparing portfolios, asking for verifiable references, and prioritizing agencies that show you concrete data (not just creative concepts) before deciding.',
        },
      },
      {
        q: {
          es: '¿Qué diferencia a BrandUp de otras agencias de Santiago?',
          en: 'What sets BrandUp apart from other agencies in Santiago?',
        },
        a: {
          es: 'Tres cosas: (1) un solo equipo cubre tecnología y publicidad, así que no tienes que coordinar entre una agencia de diseño y otra de ads; (2) precios cerrados definidos antes de empezar, sin sorpresas; (3) comunicación directa por WhatsApp con quienes hacen el trabajo, sin ejecutivos de cuenta intermedios. Somos un equipo chico a propósito: preferimos hacer menos proyectos y hacerlos bien.',
          en: 'Three things: (1) one team covers both technology and advertising, so you do not have to coordinate between a design agency and an ads agency; (2) fixed pricing agreed before starting, no surprises; (3) direct WhatsApp communication with the people actually doing the work, no account managers in between. We are intentionally a small team: we prefer to take on fewer projects and do them well.',
        },
      },
      {
        q: {
          es: '¿Cómo saber si una agencia de marketing es confiable?',
          en: 'How do I know if a marketing agency is trustworthy?',
        },
        a: {
          es: 'Fíjate en: portafolio con casos reales y verificables (no solo mockups), precios y plazos por escrito antes de empezar, referencias de clientes que puedas contactar, y si te muestran métricas concretas en vez de solo promesas. Desconfía de agencias que garantizan resultados específicos (como "top 1 en Google en 30 días") — el SEO y la publicidad real no funcionan con garantías absolutas.',
          en: 'Look for: a portfolio with real, verifiable cases (not just mockups), pricing and timelines in writing before you start, client references you can actually contact, and whether they show you concrete metrics instead of just promises. Be wary of agencies that guarantee specific results (like "#1 on Google in 30 days") — real SEO and advertising do not work with absolute guarantees.',
        },
      },
    ],
  },
  {
    id: 'precios',
    label: { es: 'Precios y presupuesto', en: 'Pricing & budget' },
    items: [
      {
        q: { es: '¿Cuánto cuesta una página web en Santiago de Chile?', en: 'How much does a website cost in Santiago, Chile?' },
        a: {
          es: 'Una landing page va de $150.000 a $400.000 CLP, un sitio corporativo de $350.000 a $900.000 y un e-commerce de $600.000 a $2.500.000. El precio depende de la estrategia, el diseño propio y la optimización, no solo de la cantidad de páginas. Siempre entregamos un precio cerrado antes de empezar, sin sorpresas al final.',
          en: 'A landing page ranges from CLP $150,000 to $400,000, a corporate site from $350,000 to $900,000, and an e-commerce store from $600,000 to $2,500,000. Price depends on strategy, custom design and optimization, not just the number of pages. We always provide a fixed quote before starting, no surprises at the end.',
        },
      },
      {
        q: { es: '¿Cuánto cobra una agencia de marketing digital al mes?', en: 'How much does a digital marketing agency charge per month?' },
        a: {
          es: 'Los planes mensuales de gestión de redes sociales y publicidad digital suelen partir desde $250.000 CLP mensuales, sin incluir el presupuesto de pauta (lo que se invierte directamente en Meta o Google Ads). El valor final depende de cuántas plataformas gestionas y con qué frecuencia de contenido.',
          en: 'Monthly social media management and digital advertising plans typically start around CLP $250,000 per month, not including ad spend (the budget invested directly in Meta or Google Ads). The final price depends on how many platforms you manage and how often you post content.',
        },
      },
      {
        q: { es: '¿Por qué hay tanta diferencia de precio entre agencias?', en: 'Why is there such a big price difference between agencies?' },
        a: {
          es: 'Porque el precio refleja cosas distintas: plantillas prediseñadas versus diseño 100% a medida, freelancers individuales versus un equipo con procesos y soporte, o agencias grandes con estructura de ejecutivos de cuenta versus equipos chicos que trabajan directo contigo. Ninguna opción es automáticamente mejor — depende de lo que necesites y del nivel de acompañamiento que busques.',
          en: 'Because the price reflects different things: pre-made templates versus fully custom design, individual freelancers versus a team with processes and support, or large agencies with account-manager layers versus small teams that work directly with you. No option is automatically better — it depends on what you need and how much hands-on support you are looking for.',
        },
      },
    ],
  },
  {
    id: 'servicios',
    label: { es: 'Servicios', en: 'Services' },
    items: [
      {
        q: { es: '¿Qué servicios ofrece BrandUp?', en: 'What services does BrandUp offer?' },
        a: {
          es: 'Diseño y desarrollo web, e-commerce, branding e identidad visual, contenido y reels para redes sociales, publicidad digital (Meta y Google Ads), SEO local y automatizaciones con IA. Trabajamos con negocios de Santiago y toda la Región Metropolitana.',
          en: 'Web design and development, e-commerce, branding and visual identity, social media content and reels, digital advertising (Meta and Google Ads), local SEO and AI automations. We work with businesses across Santiago and the wider Metropolitan Region.',
        },
      },
      {
        q: { es: '¿Hacen solo diseño web o también publicidad?', en: 'Do you only do web design, or also advertising?' },
        a: {
          es: 'Ambos, y por eso somos distintos a la mayoría: un mismo equipo diseña tu sitio o tienda y luego gestiona la publicidad que lleva tráfico a esa página. Esto evita el problema típico de tener un sitio bonito sin visitas, o publicidad que lleva tráfico a una página que no convierte.',
          en: 'Both, and that is what sets us apart from most agencies: the same team designs your site or store and then manages the advertising that drives traffic to it. This avoids the typical problem of having a beautiful site with no visitors, or ads driving traffic to a page that does not convert.',
        },
      },
      {
        q: { es: '¿Hacen tiendas online (e-commerce)?', en: 'Do you build online stores (e-commerce)?' },
        a: {
          es: 'Sí, desarrollamos tiendas online completas: catálogo de productos, pagos con Webpay/MercadoPago, gestión de inventario y panel de administración. Hemos construido e-commerce para rubros como artículos de limpieza, indumentaria y abarrotes.',
          en: 'Yes, we build complete online stores: product catalog, payment integration, inventory management and an admin panel. We have built e-commerce sites for industries like cleaning supplies, apparel and groceries.',
        },
      },
    ],
  },
  {
    id: 'proceso',
    label: { es: 'Proceso y plazos', en: 'Process & timelines' },
    items: [
      {
        q: { es: '¿Cuánto tardan en entregar un proyecto?', en: 'How long does a project take?' },
        a: {
          es: 'Una landing toma de 1 a 2 semanas, un sitio corporativo de 3 a 6 semanas y un e-commerce de 6 a 12 semanas. El plazo depende sobre todo de la rapidez con que se entregan textos, fotos y aprobaciones de tu parte.',
          en: 'A landing page takes 1–2 weeks, a corporate site 3–6 weeks, and an e-commerce store 6–12 weeks. Timelines depend mostly on how quickly copy, photos and approvals are provided on your end.',
        },
      },
      {
        q: { es: '¿El sitio y las cuentas quedan a mi nombre?', en: 'Do I own the site and the accounts?' },
        a: {
          es: 'Sí. El dominio, el sitio web y las cuentas de redes sociales quedan siempre a nombre del cliente. Entregamos los accesos completos y nunca retenemos la propiedad de tus activos digitales.',
          en: 'Yes. The domain, website and social media accounts always stay under the client’s name. We hand over full access and never retain ownership of your digital assets.',
        },
      },
      {
        q: { es: '¿Trabajan con negocios de todo Chile o solo de Santiago?', en: 'Do you work with clients outside Santiago?' },
        a: {
          es: 'Estamos en Santiago de Chile y trabajamos con clientes de toda la Región Metropolitana y del resto del país. El trabajo se coordina de forma remota, con reuniones por videollamada y entregas digitales.',
          en: 'We are based in Santiago, Chile and work with clients across the Metropolitan Region and the rest of the country, coordinating remotely through video calls and digital deliverables.',
        },
      },
    ],
  },
];
