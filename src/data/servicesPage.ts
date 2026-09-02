// Contenido de la página /servicios — bilingüe y centralizado.
//
// La página no es un catálogo de servicios: es el argumento de por qué las
// disciplinas de BrandUp funcionan conectadas. Todo el copy vive aquí para
// que el componente quede limpio y el texto sea editable sin tocar markup.
//
// Regla: nada de esto inventa capacidades. Cada bloque reorganiza y comunica
// mejor lo que ya existe en `services.ts` y `projects.ts`.
export type L = { es: string; en: string };

/* ── Hero ──────────────────────────────────────────────────────────── */
export const HERO = {
  kicker: { es: 'Capacidades', en: 'Capabilities' },
  // Tres líneas: marca / experiencia / crecimiento — los tres territorios
  // donde caen los 7 servicios.
  line1: { es: 'Diseñamos marcas.', en: 'We design brands.' },
  line2: { es: 'Construimos experiencias.', en: 'We build experiences.' },
  line3: { es: 'Aceleramos crecimiento.', en: 'We accelerate growth.' },
  intro: {
    es: 'Estrategia, branding, experiencias digitales, contenido, performance, IA y growth operando como un solo equipo. No entregamos piezas sueltas: construimos el sistema completo que sostiene el crecimiento de una marca.',
    en: 'Strategy, branding, digital experiences, content, performance, AI and growth operating as a single team. We do not deliver isolated pieces: we build the complete system that sustains a brand’s growth.',
  },
  ctaPrimary: { es: 'Iniciar un proyecto', en: 'Start a project' },
  ctaSecondary: { es: 'Explorar capacidades', en: 'Explore capabilities' },
};

/* ── 01 · El crecimiento no ocurre en un solo canal ────────────────── */
export const FRICTION = {
  kicker: { es: 'El problema real', en: 'The real problem' },
  title: {
    es: 'El crecimiento no ocurre en un solo canal.',
    en: 'Growth does not happen in a single channel.',
  },
  lead: {
    es: 'La mayoría de los problemas de crecimiento no son problemas de esfuerzo. Son problemas de continuidad: cada pieza funciona por separado y ninguna se pasa la posta.',
    en: 'Most growth problems are not effort problems. They are continuity problems: each piece works on its own and none passes the baton.',
  },
  points: [
    {
      es: 'Una identidad impecable sostenida por una experiencia digital que la contradice.',
      en: 'An impeccable identity held up by a digital experience that contradicts it.',
    },
    {
      es: 'Un sitio bien construido al que no llega nadie.',
      en: 'A well-built site that nobody reaches.',
    },
    {
      es: 'Tráfico que entra y nunca se transforma en una conversación.',
      en: 'Traffic that arrives and never turns into a conversation.',
    },
    {
      es: 'Oportunidades ganadas que se pierden en un proceso manual que no da abasto.',
      en: 'Won opportunities lost in a manual process that cannot keep up.',
    },
  ],
  close: {
    es: 'Cada una de esas fallas vive en una disciplina distinta. Por eso no trabajamos servicios aislados: conectamos estrategia, creatividad, tecnología y crecimiento en un mismo sistema.',
    en: 'Each of those failures lives in a different discipline. That is why we do not work in isolated services: we connect strategy, creativity, technology and growth into a single system.',
  },
  // Cadena del sistema: cada eslabón responde una pregunta del negocio.
  chain: [
    { key: 'Brand', q: { es: 'Quién eres', en: 'Who you are' } },
    { key: 'Digital', q: { es: 'Dónde ocurre', en: 'Where it happens' } },
    { key: 'Content', q: { es: 'Por qué te recuerdan', en: 'Why they remember you' } },
    { key: 'Acquisition', q: { es: 'Cómo llegan', en: 'How they arrive' } },
    { key: 'Automation', q: { es: 'Qué pasa después', en: 'What happens next' } },
    { key: 'Growth', q: { es: 'Cómo escala', en: 'How it scales' } },
  ],
};

/* ── Capacidades: copy editorial por servicio ──────────────────────── */
export interface ServiceBlock {
  slug: string;
  headline: L;
  lead: L;
  capabilities: { es: string[]; en: string[] };
  /** Microcopy contextual SEO/GEO/AEO — capacidad transversal, no un extra */
  discoverability: L;
  /** Flujo opcional que se dibuja bajo el bloque */
  flow?: string[];
  /** Sub-bloque técnico opcional (fundamentos que no se ven pero sostienen) */
  foundation?: { label: L; items: { es: string[]; en: string[] } };
}

export const SERVICE_BLOCKS: ServiceBlock[] = [
  {
    slug: 'diseno-web',
    headline: {
      es: 'Tu sitio no debería informar. Debería trabajar.',
      en: 'Your site should not inform. It should work.',
    },
    lead: {
      es: 'Diseñamos y construimos experiencias digitales que cargan rápido, se entienden en segundos y están hechas para convertir. Cada decisión —arquitectura, jerarquía, velocidad, código— responde a un objetivo de negocio y no a una preferencia estética.',
      en: 'We design and build digital experiences that load fast, are understood in seconds and are made to convert. Every decision — architecture, hierarchy, speed, code — answers to a business objective, not to an aesthetic preference.',
    },
    capabilities: {
      es: [
        'Desarrollo a medida en código limpio',
        'UX/UI orientado a conversión',
        'Landing pages de campaña',
        'Sitios corporativos y plataformas',
        'Migraciones, DNS y hosting',
        'Integración con herramientas y automatización',
      ],
      en: [
        'Custom development in clean code',
        'Conversion-oriented UX/UI',
        'Campaign landing pages',
        'Corporate sites and platforms',
        'Migrations, DNS and hosting',
        'Tooling integration and automation',
      ],
    },
    foundation: {
      label: {
        es: 'El SEO no se agrega al final. Se construye desde la arquitectura.',
        en: 'SEO is not added at the end. It is built from the architecture.',
      },
      items: {
        es: [
          'Arquitectura de información',
          'Core Web Vitals y performance',
          'Indexabilidad',
          'Datos estructurados (schema)',
          'Metadata y estructura semántica',
          'Enlazado interno',
          'Contenido',
          'SEO local',
        ],
        en: [
          'Information architecture',
          'Core Web Vitals and performance',
          'Indexability',
          'Structured data (schema)',
          'Metadata and semantic structure',
          'Internal linking',
          'Content',
          'Local SEO',
        ],
      },
    },
    discoverability: {
      es: 'SEO técnico y arquitectura preparada para búsqueda generativa.',
      en: 'Technical SEO and architecture prepared for generative search.',
    },
  },
  {
    slug: 'ecommerce',
    headline: {
      es: 'Diseñamos tiendas para vender, no catálogos digitales.',
      en: 'We design stores to sell, not digital catalogs.',
    },
    lead: {
      es: 'Un e-commerce es un sistema de ventas, no una vitrina. Trabajamos el recorrido completo: cómo alguien descubre un producto, qué lo hace decidir, qué elimina la fricción del checkout y qué ocurre después de la primera compra.',
      en: 'E-commerce is a sales system, not a display case. We work the full journey: how someone discovers a product, what makes them decide, what removes checkout friction and what happens after the first purchase.',
    },
    capabilities: {
      es: [
        'UX de compra y arquitectura de catálogo',
        'Checkout optimizado para reducir fricción',
        'Pagos e integraciones',
        'CRM y email marketing',
        'Recuperación de carritos abandonados',
        'Recompra, fidelización y analítica',
      ],
      en: [
        'Purchase UX and catalog architecture',
        'Checkout optimized to reduce friction',
        'Payments and integrations',
        'CRM and email marketing',
        'Abandoned-cart recovery',
        'Repurchase, retention and analytics',
      ],
    },
    discoverability: {
      es: 'Arquitectura, contenido y datos estructurados preparados para discovery.',
      en: 'Architecture, content and structured data prepared for discovery.',
    },
  },
  {
    slug: 'branding',
    headline: {
      es: 'Una marca reconocible no ocurre por accidente.',
      en: 'A recognizable brand does not happen by accident.',
    },
    lead: {
      es: 'Construimos sistemas de identidad, no archivos sueltos. Estrategia, dirección visual, tipografía, color y aplicaciones que mantienen coherencia cuando la marca crece, cambia de canal o suma personas al equipo.',
      en: 'We build identity systems, not loose files. Strategy, visual direction, typography, color and applications that hold together when the brand grows, changes channel or adds people to the team.',
    },
    capabilities: {
      es: [
        'Estrategia y posicionamiento de marca',
        'Identidad visual y sistema gráfico',
        'Dirección visual, tipografía y color',
        'Aplicaciones y piezas de marca',
        'Adaptación a entornos digitales y redes',
        'Criterios de uso para mantener coherencia',
      ],
      en: [
        'Brand strategy and positioning',
        'Visual identity and graphic system',
        'Visual direction, typography and color',
        'Brand applications and assets',
        'Adaptation to digital environments and social',
        'Usage criteria to keep coherence',
      ],
    },
    discoverability: {
      es: 'Identidad verbal y conceptual consistente para construir reconocimiento.',
      en: 'Consistent verbal and conceptual identity to build recognition.',
    },
  },
  {
    slug: 'contenido-reels',
    headline: {
      es: 'Contenido que hace que una marca sea imposible de ignorar.',
      en: 'Content that makes a brand impossible to ignore.',
    },
    lead: {
      es: 'Producimos contenido con criterio editorial: qué decir, a quién, en qué formato y con qué objetivo. Lo que se publica alimenta la atención, la autoridad de la marca y —cuando corresponde— la conversión.',
      en: 'We produce content with editorial judgment: what to say, to whom, in what format and toward what objective. What gets published feeds attention, brand authority and — where relevant — conversion.',
    },
    capabilities: {
      es: [
        'Concepto, guión y dirección creativa',
        'Grabación cuando el proyecto lo requiere',
        'Edición y post-producción',
        'Reels y formatos verticales',
        'Línea visual consistente con la marca',
        'Estrategia y planificación de contenido',
      ],
      en: [
        'Concept, scripting and creative direction',
        'Filming when the project requires it',
        'Editing and post-production',
        'Reels and vertical formats',
        'Visual line consistent with the brand',
        'Content strategy and planning',
      ],
    },
    discoverability: {
      es: 'Contenido diseñado para personas y para motores de respuesta.',
      en: 'Content designed for people and for answer engines.',
    },
  },
  {
    slug: 'publicidad-digital',
    headline: {
      es: 'No compramos tráfico. Compramos oportunidades.',
      en: 'We do not buy traffic. We buy opportunities.',
    },
    lead: {
      es: 'Una campaña no termina en el clic. Trabajamos la cadena completa —creatividad, mensaje, landing, medición y optimización— porque el resultado no depende del anuncio: depende del sistema donde ese anuncio aterriza.',
      en: 'A campaign does not end at the click. We work the whole chain — creative, message, landing, measurement and optimization — because the result does not depend on the ad: it depends on the system the ad lands in.',
    },
    capabilities: {
      es: [
        'Meta Ads y Google Ads',
        'Estructura de campañas y segmentación',
        'Remarketing y audiencias',
        'Funnels y landing pages de campaña',
        'Tracking y medición de conversión',
        'Optimización continua sobre datos',
      ],
      en: [
        'Meta Ads and Google Ads',
        'Campaign structure and targeting',
        'Remarketing and audiences',
        'Funnels and campaign landing pages',
        'Conversion tracking and measurement',
        'Continuous data-driven optimization',
      ],
    },
    flow: ['Creative', 'Landing', 'Tracking', 'Conversion', 'Optimization'],
    discoverability: {
      es: 'Landing, tracking y conversión alineados a la intención de búsqueda.',
      en: 'Landing, tracking and conversion aligned to search intent.',
    },
  },
  {
    slug: 'automatizaciones-ia',
    headline: {
      es: 'Mientras tu equipo duerme, tu negocio puede seguir avanzando.',
      en: 'While your team sleeps, your business can keep moving.',
    },
    lead: {
      es: 'Automatizamos lo repetitivo para liberar lo estratégico. Atención, calificación de leads, seguimiento y recuperación operando sin depender de que alguien esté disponible en ese momento.',
      en: 'We automate the repetitive to free up the strategic. Support, lead qualification, follow-up and recovery running without depending on someone being available at that moment.',
    },
    capabilities: {
      es: [
        'Chatbots con IA en WhatsApp e Instagram',
        'Calificación automática de leads',
        'Integración y automatización de CRM',
        'Flujos de seguimiento y recuperación',
        'Notificaciones y alertas internas',
        'Integración entre herramientas',
      ],
      en: [
        'AI chatbots on WhatsApp and Instagram',
        'Automatic lead qualification',
        'CRM integration and automation',
        'Follow-up and recovery flows',
        'Internal notifications and alerts',
        'Integration across tools',
      ],
    },
    flow: ['Lead', 'IA', 'Calificación', 'CRM', 'Seguimiento', 'Venta'],
    discoverability: {
      es: 'Automatización de captación y atención.',
      en: 'Automation of acquisition and support.',
    },
  },
  {
    slug: 'marketing-growth',
    headline: {
      es: 'Convertimos marketing en un sistema de crecimiento.',
      en: 'We turn marketing into a growth system.',
    },
    lead: {
      es: 'Antes de ejecutar, definimos hacia dónde. Auditoría, prioridades, hipótesis y métricas: un plan donde cada acción tiene una razón detrás y un número que la valida o la descarta.',
      en: 'Before executing, we define where to. Audit, priorities, hypotheses and metrics: a plan where every action has a reason behind it and a number that validates or discards it.',
    },
    capabilities: {
      es: [
        'Estrategia y plan de crecimiento priorizado',
        'Adquisición, conversión y retención',
        'Experimentación y optimización',
        'Analítica y dashboards',
        'Automatización de procesos de marketing',
        'Revisión de métricas y acompañamiento',
      ],
      en: [
        'Strategy and prioritized growth plan',
        'Acquisition, conversion and retention',
        'Experimentation and optimization',
        'Analytics and dashboards',
        'Marketing process automation',
        'Metric reviews and ongoing guidance',
      ],
    },
    flow: ['Traffic', 'Conversion', 'Automation', 'Retention', 'Growth'],
    discoverability: {
      es: 'SEO, GEO y AEO conectados a performance y analítica.',
      en: 'SEO, GEO and AEO connected to performance and analytics.',
    },
  },
];

/* ── Discoverability system ────────────────────────────────────────── */
export const DISCOVERABILITY = {
  kicker: { es: 'Discoverability', en: 'Discoverability' },
  title: { es: 'Ser visible es solo el comienzo.', en: 'Being visible is only the beginning.' },
  lead: {
    es: 'Hoy una marca no compite únicamente por una posición en Google. Compite por ser comprendida —y citada— por buscadores, mapas, asistentes y sistemas de respuesta generativa. Trabajamos la estructura, el contenido y las señales que hacen posible esa comprensión.',
    en: 'Today a brand does not only compete for a position on Google. It competes to be understood — and cited — by search engines, maps, assistants and generative answer systems. We work on the structure, content and signals that make that understanding possible.',
  },
  // Honestidad explícita: nadie puede garantizar aparecer en un asistente de IA.
  disclaimer: {
    es: 'Nadie puede garantizar aparecer en un asistente de IA, y conviene desconfiar de quien lo prometa. Lo que sí se construye es la estructura, la claridad y la autoridad que permiten que esos sistemas entiendan tu marca y puedan citarla.',
    en: 'Nobody can guarantee appearing inside an AI assistant, and it is worth distrusting anyone who promises it. What can be built is the structure, clarity and authority that let those systems understand your brand and be able to cite it.',
  },
  pillars: [
    {
      code: 'SEO',
      scope: { es: 'Google · Search', en: 'Google · Search' },
      desc: {
        es: 'Posicionamiento en buscadores tradicionales.',
        en: 'Positioning in traditional search engines.',
      },
    },
    {
      code: 'LOCAL',
      scope: { es: 'Maps · Búsquedas locales', en: 'Maps · Local search' },
      desc: {
        es: 'Presencia donde la búsqueda tiene intención geográfica.',
        en: 'Presence where the search carries geographic intent.',
      },
    },
    {
      code: 'AEO',
      scope: { es: 'Answer Engines', en: 'Answer Engines' },
      desc: {
        es: 'Contenido estructurado para responder preguntas reales.',
        en: 'Content structured to answer real questions.',
      },
    },
    {
      code: 'GEO',
      scope: { es: 'Generative Search', en: 'Generative Search' },
      desc: {
        es: 'Señales que permiten a los sistemas generativos comprender la marca.',
        en: 'Signals that let generative systems understand the brand.',
      },
    },
    {
      code: 'CONTENT',
      scope: { es: 'Autoridad · Relevancia', en: 'Authority · Relevance' },
      desc: {
        es: 'Profundidad que sostiene la credibilidad del dominio.',
        en: 'Depth that sustains the domain’s credibility.',
      },
    },
    {
      code: 'TECHNICAL',
      scope: { es: 'Arquitectura · Indexabilidad', en: 'Architecture · Indexability' },
      desc: {
        es: 'Rendimiento, datos estructurados y semántica correcta.',
        en: 'Performance, structured data and correct semantics.',
      },
    },
  ],
  result: { es: 'Digital Discoverability', en: 'Digital Discoverability' },
};

/* ── Cómo se conecta todo ──────────────────────────────────────────── */
export const CONNECTION = {
  kicker: { es: 'El sistema', en: 'The system' },
  title: { es: 'Cómo se conecta todo.', en: 'How everything connects.' },
  lead: {
    es: 'Ninguna de estas disciplinas resuelve sola un problema de crecimiento. El valor aparece cuando cada una entrega algo a la siguiente.',
    en: 'None of these disciplines solves a growth problem alone. The value shows up when each one hands something to the next.',
  },
  steps: [
    { code: 'Branding', d: { es: 'Define quién eres.', en: 'Defines who you are.' } },
    { code: 'Web', d: { es: 'Convierte esa identidad en una experiencia.', en: 'Turns that identity into an experience.' } },
    { code: 'SEO · GEO · AEO', d: { es: 'Hace que te encuentren.', en: 'Makes you findable.' } },
    { code: 'Content', d: { es: 'Construye atención y autoridad.', en: 'Builds attention and authority.' } },
    { code: 'Ads', d: { es: 'Acelera la adquisición.', en: 'Accelerates acquisition.' } },
    { code: 'AI Automation', d: { es: 'Convierte y da seguimiento sin fricción.', en: 'Converts and follows up without friction.' } },
    { code: 'Growth', d: { es: 'Mide, optimiza y escala.', en: 'Measures, optimizes and scales.' } },
  ],
};

/* ── Proceso ───────────────────────────────────────────────────────── */
export const PROCESS = {
  kicker: { es: 'Cómo trabajamos', en: 'How we work' },
  title: { es: 'El lanzamiento no es el final.', en: 'Launch is not the finish line.' },
  steps: [
    {
      n: '01',
      code: 'Discover',
      d: {
        es: 'Entendemos el negocio, el mercado y dónde está realmente la oportunidad.',
        en: 'We understand the business, the market and where the opportunity actually is.',
      },
    },
    {
      n: '02',
      code: 'Strategy',
      d: {
        es: 'Definimos posicionamiento, objetivos y la dirección que ordena todo lo demás.',
        en: 'We define positioning, objectives and the direction that orders everything else.',
      },
    },
    {
      n: '03',
      code: 'Create',
      d: {
        es: 'Diseñamos marca, experiencia y contenido con una intención declarada.',
        en: 'We design brand, experience and content with a declared intent.',
      },
    },
    {
      n: '04',
      code: 'Build',
      d: {
        es: 'Construimos la tecnología y los sistemas digitales que lo sostienen.',
        en: 'We build the technology and digital systems that hold it up.',
      },
    },
    {
      n: '05',
      code: 'Launch',
      d: {
        es: 'Ponemos todo en funcionamiento y verificamos que cada pieza responda.',
        en: 'We put everything live and verify each piece responds.',
      },
    },
    {
      n: '06',
      code: 'Grow',
      d: {
        es: 'Medimos, optimizamos y escalamos lo que demuestra funcionar.',
        en: 'We measure, optimize and scale what proves to work.',
      },
    },
  ],
};

/* ── Inversión ─────────────────────────────────────────────────────── */
export const INVESTMENT = {
  kicker: { es: 'Inversión', en: 'Investment' },
  title: { es: 'Cada proyecto tiene una escala diferente.', en: 'Every project has a different scale.' },
  lead: {
    es: 'No publicamos una lista de precios porque ningún proyecto resuelve el mismo problema que el anterior. La inversión responde a lo que hay que construir y al resultado que se busca.',
    en: 'We do not publish a price list because no project solves the same problem as the previous one. The investment responds to what has to be built and to the result being pursued.',
  },
  factors: [
    { es: 'Objetivos de negocio', en: 'Business objectives' },
    { es: 'Complejidad', en: 'Complexity' },
    { es: 'Alcance', en: 'Scope' },
    { es: 'Tecnología', en: 'Technology' },
    { es: 'Disciplinas involucradas', en: 'Disciplines involved' },
    { es: 'Producción', en: 'Production' },
    { es: 'Estrategia', en: 'Strategy' },
    { es: 'Duración', en: 'Duration' },
  ],
  cta: { es: 'Cuéntanos qué quieres construir', en: 'Tell us what you want to build' },
};

/* ── Casos ─────────────────────────────────────────────────────────── */
export const CASES = {
  kicker: { es: 'Casos', en: 'Cases' },
  title: { es: 'Problemas reales, decisiones concretas.', en: 'Real problems, concrete decisions.' },
  labels: {
    challenge: { es: 'El desafío', en: 'The challenge' },
    strategy: { es: 'La estrategia', en: 'The strategy' },
    impact: { es: 'El impacto', en: 'The impact' },
  },
  viewCase: { es: 'Ver caso', en: 'View case' },
  viewAll: { es: 'Ver todos los proyectos', en: 'View all projects' },
};

/* ── FAQ ───────────────────────────────────────────────────────────────
 * Escrito en formato pregunta → respuesta directa: sirve al lector y
 * también a los motores de respuesta (AEO), que citan mejor un contenido
 * que responde de forma autónoma sin depender del resto de la página.
 * Nota: la respuesta de inversión no publica un precio de entrada — la
 * escala se define por alcance, no por una tarifa mínima.
 */
export const FAQ = {
  kicker: { es: 'Preguntas frecuentes', en: 'Frequently asked questions' },
  title: { es: 'Antes de conversar', en: 'Before we talk' },
  items: [
    {
      q: { es: '¿Cómo definen el alcance de un proyecto?', en: 'How do you define a project’s scope?' },
      a: {
        es: 'Partimos por el objetivo de negocio, no por el entregable. Una vez claro qué tiene que ocurrir —más clientes calificados, más ventas, mejor percepción de marca— definimos qué disciplinas intervienen, en qué orden y con qué profundidad. Recién ahí existe un alcance y una propuesta cerrada.',
        en: 'We start from the business objective, not the deliverable. Once it is clear what has to happen — more qualified clients, more sales, better brand perception — we define which disciplines are involved, in what order and at what depth. Only then does a scope and a closed proposal exist.',
      },
    },
    {
      q: { es: '¿Se puede contratar un solo servicio?', en: 'Can I hire a single service?' },
      a: {
        es: 'Sí. Muchos proyectos parten por una pieza concreta —un sitio, una identidad, una campaña— y crecen desde ahí. La diferencia es que esa pieza se construye pensando en el sistema completo, para que sumar la siguiente no implique rehacer la anterior.',
        en: 'Yes. Many projects start from one concrete piece — a site, an identity, a campaign — and grow from there. The difference is that the piece is built with the whole system in mind, so adding the next one does not mean redoing the previous one.',
      },
    },
    {
      q: { es: '¿Cuánto demora un proyecto?', en: 'How long does a project take?' },
      a: {
        es: 'Depende del alcance. Una landing de campaña se resuelve en semanas; un sitio corporativo, una tienda o un sistema de identidad completo toman más porque involucran estrategia, producción y validación. Entregamos un calendario con hitos antes de empezar, no después.',
        en: 'It depends on scope. A campaign landing is resolved in weeks; a corporate site, a store or a complete identity system take longer because they involve strategy, production and validation. We deliver a milestone calendar before starting, not after.',
      },
    },
    {
      q: { es: '¿Qué son GEO y AEO, y por qué importan ahora?', en: 'What are GEO and AEO, and why do they matter now?' },
      a: {
        es: 'AEO (Answer Engine Optimization) es preparar el contenido para que responda preguntas de forma directa y citable. GEO (Generative Engine Optimization) es trabajar la estructura, las entidades y las señales de autoridad para que los sistemas de búsqueda generativa comprendan correctamente a la marca. Ninguno garantiza aparecer en un asistente de IA: lo que hacen es construir las condiciones para que sea posible.',
        en: 'AEO (Answer Engine Optimization) means preparing content so it answers questions directly and citably. GEO (Generative Engine Optimization) means working the structure, entities and authority signals so generative search systems understand the brand correctly. Neither guarantees appearing inside an AI assistant: what they do is build the conditions that make it possible.',
      },
    },
    {
      q: { es: '¿Acompañan después del lanzamiento?', en: 'Do you stay involved after launch?' },
      a: {
        es: 'Sí, y es donde suele aparecer el resultado. Después de lanzar medimos, optimizamos y ajustamos según lo que muestran los datos. Trabajamos con revisiones periódicas de métricas y un plan que se corrige con evidencia, no con suposiciones.',
        en: 'Yes, and that is usually where the result shows up. After launch we measure, optimize and adjust based on what the data shows. We work with periodic metric reviews and a plan corrected by evidence, not assumptions.',
      },
    },
    {
      q: { es: '¿Trabajan con clientes fuera de Santiago?', en: 'Do you work with clients outside Santiago?' },
      a: {
        es: 'Sí. Trabajamos de forma remota con marcas de todo Chile y del extranjero. Las reuniones son por videollamada y la coordinación del día a día ocurre por los canales que el cliente ya usa.',
        en: 'Yes. We work remotely with brands across Chile and abroad. Meetings happen over video call and day-to-day coordination runs through the channels the client already uses.',
      },
    },
  ],
};

export const LABELS = {
  capabilities: { es: 'Capacidades', en: 'Capabilities' },
  explore: { es: 'Explorar servicio', en: 'Explore service' },
  discoverability: { es: 'Discoverability', en: 'Discoverability' },
  sectionServices: { es: 'Las siete capacidades', en: 'The seven capabilities' },
  sectionServicesTitle: {
    es: 'Construimos los sistemas que hacen crecer una marca.',
    en: 'We build the systems that make a brand grow.',
  },
};
