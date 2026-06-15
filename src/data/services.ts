// Services — bilingual, data-driven. Edit here to add/reorder services.
export type L = { es: string; en: string };

export interface Service {
  num: string;
  slug: string;
  title: L;
  tag: L;
  short: L;
  headline: L;
  desc: L;
  items: { es: string[]; en: string[] };
}

export const SERVICES: Service[] = [
  {
    num: '01',
    slug: 'diseno-web',
    title: { es: 'Diseño & Desarrollo Web', en: 'Web Design & Development' },
    tag: { es: 'Conversión', en: 'Conversion' },
    short: {
      es: 'Sitios rápidos y orientados a convertir visitas en clientes reales.',
      en: 'Fast websites built to turn visitors into real clients.',
    },
    headline: {
      es: 'Tu sitio web es tu mejor vendedor. Tiene que funcionar como uno.',
      en: 'Your website is your best salesperson. It has to perform like one.',
    },
    desc: {
      es: 'Un buen sitio no es una tarjeta de presentación: es una herramienta activa de captación. Diseñamos sitios nuevos, migramos sitios existentes y resolvemos problemas técnicos como DNS y hosting para que tu presencia digital funcione sin interrupciones.',
      en: 'A good website is not a business card: it is an active acquisition tool. We build new sites, migrate existing ones and resolve technical issues like DNS and hosting so your digital presence works without interruption.',
    },
    items: {
      es: [
        'Desarrollo en código limpio para máxima velocidad de carga',
        'Diseño mobile-first y SEO técnico avanzado desde la base',
        'Migración de sitios, corrección de DNS y cambio de hosting',
        'Landing pages orientadas a la conversión',
        'UX/UI centrado en la experiencia y en los resultados del negocio',
      ],
      en: [
        'Clean-code development for maximum loading speed',
        'Mobile-first design and advanced technical SEO from the ground up',
        'Site migration, DNS correction and hosting changes',
        'Conversion-focused landing pages',
        'UX/UI centered on experience and business results',
      ],
    },
  },
  {
    num: '02',
    slug: 'ecommerce',
    title: { es: 'E-commerce', en: 'E-commerce' },
    tag: { es: 'Ventas', en: 'Sales' },
    short: {
      es: 'Tiendas online que venden solas, con pagos y logística integrados.',
      en: 'Online stores that sell on their own, with payments and logistics built in.',
    },
    headline: {
      es: 'Una tienda que no convierte es solo un catálogo caro.',
      en: 'A store that does not convert is just an expensive catalog.',
    },
    desc: {
      es: 'Construimos e-commerce completos: flujo de compra sin fricción, integración de pagos, CRM y automatizaciones de email que recuperan carritos y fidelizan clientes.',
      en: 'We build complete e-commerce experiences: frictionless checkout, payment integration, CRM and email automations that recover carts and retain customers.',
    },
    items: {
      es: [
        'Tiendas online completamente funcionales',
        'Flujo de compra optimizado para reducir fricción',
        'Integración de CRM y email marketing',
        'Automatización de carritos abandonados y recompra',
      ],
      en: [
        'Fully functional online stores',
        'Checkout flow optimized to reduce friction',
        'CRM and email marketing integration',
        'Abandoned-cart and repurchase automation',
      ],
    },
  },
  {
    num: '03',
    slug: 'branding',
    title: { es: 'Branding e Identidad', en: 'Branding & Identity' },
    tag: { es: 'Posicionamiento', en: 'Positioning' },
    short: {
      es: 'Identidad visual sólida que genera confianza al instante.',
      en: 'A solid visual identity that builds instant trust.',
    },
    headline: {
      es: 'La percepción de tu marca vale más de lo que imaginas.',
      en: 'Your brand perception is worth more than you think.',
    },
    desc: {
      es: 'Una identidad visual sólida genera confianza antes de que el cliente lea una sola línea. Diseñamos marcas que comunican profesionalismo, coherencia y diferenciación real dentro de tu industria.',
      en: 'A solid visual identity builds trust before the client reads a single line. We design brands that communicate professionalism, coherence and real differentiation within your industry.',
    },
    items: {
      es: [
        'Identidad visual completa desde cero o rediseño de marca',
        'Sistema de diseño consistente para todas tus piezas',
        'Adaptación de la marca para entornos digitales y redes',
        'Diseño de piezas para campañas publicitarias',
      ],
      en: [
        'Complete visual identity from scratch or brand redesign',
        'Consistent design system for every brand asset',
        'Brand adaptation for digital environments and social media',
        'Creative assets for advertising campaigns',
      ],
    },
  },
  {
    num: '04',
    slug: 'contenido-reels',
    title: { es: 'Reels & Contenido', en: 'Reels & Content' },
    tag: { es: 'Alcance', en: 'Reach' },
    short: {
      es: 'Contenido que genera seguidores, confianza y ventas.',
      en: 'Content that earns followers, trust and sales.',
    },
    headline: {
      es: 'El contenido correcto convierte seguidores en clientes.',
      en: 'The right content turns followers into customers.',
    },
    desc: {
      es: 'Producimos reels y contenido para redes con guión, dirección creativa y edición profesional, pensados para el alcance y alineados con tu identidad de marca.',
      en: 'We produce reels and social content with scripting, creative direction and professional editing, designed for reach and aligned with your brand identity.',
    },
    items: {
      es: [
        'Reels con guión y edición profesional',
        'Parrilla de contenido y gestión de Instagram',
        'Dirección creativa y línea gráfica consistente',
        'Stories y piezas diseñadas con tu identidad',
      ],
      en: [
        'Reels with scripting and professional editing',
        'Content calendar and Instagram management',
        'Creative direction and a consistent visual line',
        'Stories and assets designed with your identity',
      ],
    },
  },
  {
    num: '05',
    slug: 'publicidad-digital',
    title: { es: 'Publicidad Digital', en: 'Digital Advertising' },
    tag: { es: 'Adquisición', en: 'Acquisition' },
    short: {
      es: 'Meta Ads y Google Ads para aparecer antes que tu competencia.',
      en: 'Meta Ads and Google Ads to show up before your competition.',
    },
    headline: {
      es: 'Que tus clientes te encuentren antes que a tu competencia.',
      en: 'Make your clients find you before they find your competition.',
    },
    desc: {
      es: 'Combinamos publicidad pagada con posicionamiento orgánico para aparecer en el momento exacto en que alguien busca lo que ofreces. Trabajamos con datos, no suposiciones.',
      en: 'We combine paid media with organic positioning so you appear at the exact moment someone searches for what you offer. We work with data, not guesses.',
    },
    items: {
      es: [
        'Gestión profesional de Meta Ads y Google Ads',
        'SEO técnico y de contenido para posicionar en Google',
        'Funnels de conversión de principio a fin',
        'Reportes con métricas reales y acciones concretas',
      ],
      en: [
        'Professional Meta Ads and Google Ads management',
        'Technical and content SEO to rank on Google',
        'End-to-end conversion funnels',
        'Reports with real metrics and concrete actions',
      ],
    },
  },
  {
    num: '06',
    slug: 'automatizaciones-ia',
    title: { es: 'Automatizaciones con IA', en: 'AI Automations' },
    tag: { es: 'Eficiencia', en: 'Efficiency' },
    short: {
      es: 'Chatbots, CRM y flujos automáticos que trabajan por ti las 24 horas.',
      en: 'Chatbots, CRM and automated flows that work for you 24 hours a day.',
    },
    headline: {
      es: 'Tu negocio no puede depender de que alguien esté disponible.',
      en: 'Your business cannot depend on someone being available.',
    },
    desc: {
      es: 'Automatizamos la atención, el seguimiento y la calificación de leads con IA. Chatbots en WhatsApp e Instagram, integraciones de CRM, notificaciones automáticas y flujos que convierten sin intervención humana.',
      en: 'We automate support, follow-up and lead qualification with AI. WhatsApp and Instagram chatbots, CRM integrations, automatic notifications and flows that convert without human intervention.',
    },
    items: {
      es: [
        'Chatbots con IA para WhatsApp e Instagram',
        'Integración y automatización de CRM',
        'Flujos de calificación y seguimiento de leads',
        'Notificaciones y respuestas automáticas 24/7',
      ],
      en: [
        'AI chatbots for WhatsApp and Instagram',
        'CRM integration and automation',
        'Lead qualification and follow-up flows',
        'Automatic notifications and responses 24/7',
      ],
    },
  },
  {
    num: '07',
    slug: 'marketing-growth',
    title: { es: 'Marketing & Growth', en: 'Marketing & Growth' },
    tag: { es: 'Estrategia', en: 'Strategy' },
    short: {
      es: 'Estrategia, automatización y un plan de crecimiento claro.',
      en: 'Strategy, automation and a clear growth plan.',
    },
    headline: {
      es: 'Antes de invertir un peso, sabemos exactamente hacia dónde vamos.',
      en: 'Before spending a cent, we know exactly where we are going.',
    },
    desc: {
      es: 'Auditoría digital, análisis competitivo y un plan de crecimiento priorizado. Sumamos automatización con IA: chatbots, CRM y flujos que atienden y dan seguimiento 24/7.',
      en: 'Digital audit, competitive analysis and a prioritized growth plan. Plus AI automation: chatbots, CRM and flows that respond and follow up 24/7.',
    },
    items: {
      es: [
        'Plan de crecimiento priorizado a 12 meses',
        'Chatbots con IA para atención y calificación de leads',
        'Dashboards con métricas en tiempo real',
        'Acompañamiento y revisión de métricas mes a mes',
      ],
      en: [
        'Prioritized 12-month growth plan',
        'AI chatbots for support and lead qualification',
        'Dashboards with real-time metrics',
        'Month-by-month guidance and metric reviews',
      ],
    },
  },
];
