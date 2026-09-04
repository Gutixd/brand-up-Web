// Portfolio projects — bilingual & data-driven. Add/edit projects here without
// touching the design. `industry` keys map to INDUSTRIES in industries.ts.
import type { ImageMetadata } from 'astro';
import type { L } from './services';

import logoChacha from '../assets/logos/chachapollo.webp';
import logoJdcargo from '../assets/logos/jdcargo.webp';
import logoAracnida from '../assets/logos/aracnida.webp';
import logoTemplo from '../assets/logos/templo-maipu.webp';
import logoBell from '../assets/logos/bell-college.webp';
import logoSuperlunch from '../assets/logos/superlunch.webp';
import logoAseocool from '../assets/logos/aseocool.webp';
import logoMicroterapias from '../assets/logos/microterapias.webp';
import logoDuocuc from '../assets/logos/duoc-uc.webp';
import logoBschool from '../assets/logos/bschool.webp';
import logoChunguang from '../assets/logos/chunguang.webp';
import logoAuristal from '../assets/logos/auristal.webp';
import logoRegalonPet from '../assets/logos/regalon-pet.webp';

import coverChacha from '../assets/projects/chachapollo.webp';
import coverJdcargo from '../assets/projects/jdcargo.webp';
import coverAltitude from '../assets/projects/altitude.webp';
import coverMusclecarchile from '../assets/projects/musclecarchile.webp';
import coverAseocool from '../assets/projects/aseocool.webp';
import coverTemplo from '../assets/projects/templo-maipu.webp';
import coverAracnida from '../assets/projects/aracnida-store.webp';
import coverSuperlunch from '../assets/projects/superlunch.webp';
import coverMicroterapias from '../assets/projects/microterapias.webp';
import coverDuocuc from '../assets/projects/duoc-uc.webp';
import coverBell from '../assets/projects/bell-college.webp';
import coverBschool from '../assets/projects/bschool.webp';
import coverChunguang from '../assets/projects/chunguang.webp';
import coverAuristal from '../assets/projects/auristal.webp';
import coverRegalonPet from '../assets/projects/regalon-pet.webp';
import coverTerapiaDeportiva from '../assets/projects/terapia-deportiva.webp';

export interface Project {
  slug: string;
  client: string;
  cover?: ImageMetadata;
  industry: string; // key of INDUSTRIES
  sector: L;
  year: string;
  services: { es: string[]; en: string[] };
  serviceSlugs: string[]; // keys of SERVICES
  logo?: ImageMetadata;
  gradient: string; // cover gradient (CSS)
  // Identidad visual propia de la landing de este proyecto: accent = color
  // saturado fiel a la marca real (kickers, botones, banda de métricas);
  // dark = tono de fondo para la sección de storytelling. Ambos sobreescriben
  // las variables globales SOLO dentro de esta página (ver WorkDetailPage).
  theme: { accent: string; dark: string };
  // "Personalidad" de la landing — cambia la animación de entrada del
  // título y el tratamiento del hero según el rubro real de la marca.
  flavor: 'playful' | 'editorial' | 'bold' | 'industrial';
  summary: L;
  challenge: L;
  approach: L;
  outcome: L;
  metrics: { val: string; lbl: L }[];
  link?: string;
  featured: boolean;
  /**
   * Proyecto en preparación: no se publica en ninguna parte del sitio
   * (portafolio, industrias, servicios, sitemap ni JSON-LD) hasta que se
   * borre esta línea. Sirve para dejar la ficha lista mientras llegan las
   * imágenes y los textos.
   */
  draft?: boolean;
}

const ALL_PROJECTS: Project[] = [
  {
    slug: 'el-chacha-pollo',
    client: 'El Chacha Pollo',
    industry: 'gastronomia',
    sector: { es: 'Gastronomía · Redes Sociales', en: 'Food & Beverage · Social Media' },
    year: '2025',
    services: {
      es: ['Social Media', 'Contenido & Reels', 'Meta Ads'],
      en: ['Social Media', 'Content & Reels', 'Meta Ads'],
    },
    serviceSlugs: ['contenido-reels'],
    logo: logoChacha,
    cover: coverChacha,
    gradient: '#f5cc53',
    theme: { accent: '#e8752c', dark: '#1f1206' },
    flavor: 'playful',
    summary: {
      es: 'Estrategia completa de contenido en Instagram: reels de alto alcance, parrilla constante y una identidad visual que llenó el local.',
      en: 'Complete Instagram content strategy: high-reach reels, a consistent calendar and a visual identity that filled the restaurant.',
    },
    challenge: {
      es: 'Un local con excelente producto pero invisible en redes. Publicaciones esporádicas, sin línea gráfica y sin un plan que convirtiera seguidores en visitas reales al local.',
      en: 'A restaurant with an excellent product but invisible on social media. Sporadic posts, no visual line and no plan to turn followers into real visits.',
    },
    approach: {
      es: 'Construimos una identidad visual apetitosa y reconocible, definimos una parrilla de contenido semanal y produjimos reels pensados para el alcance. Sumamos campañas de Meta Ads geolocalizadas.',
      en: 'We built an appetizing, recognizable visual identity, defined a weekly content calendar and produced reels designed for reach, plus geotargeted Meta Ads campaigns.',
    },
    outcome: {
      es: 'En pocos meses la cuenta pasó de testimonial a motor de tráfico presencial, con reels que superaron las 260 mil reproducciones.',
      en: 'In a few months the account went from token presence to a foot-traffic engine, with reels surpassing 260K views.',
    },
    metrics: [
      { val: '8.395', lbl: { es: 'Seguidores', en: 'Followers' } },
      { val: '267K', lbl: { es: 'Views en un reel', en: 'Views on one reel' } },
      { val: '+300%', lbl: { es: 'Engagement', en: 'Engagement' } },
    ],
    link: 'https://www.instagram.com/elchachapollo/',
    featured: true,
  },
  {
    slug: 'jd-cargo-logistics',
    client: 'JD Cargo Logistics',
    industry: 'b2b',
    sector: { es: 'Logística B2B', en: 'B2B Logistics' },
    year: '2025',
    services: {
      es: ['Diseño Web', 'Estrategia B2B', 'Conversión'],
      en: ['Web Design', 'B2B Strategy', 'Conversion'],
    },
    serviceSlugs: ['diseno-web'],
    logo: logoJdcargo,
    cover: coverJdcargo,
    gradient: '#cbbedc',
    theme: { accent: '#5b4e91', dark: '#0d0a1a' },
    flavor: 'industrial',
    summary: {
      es: 'Sitio corporativo para una empresa de agenciamiento de carga internacional, orientado a generar cotizaciones y transmitir credibilidad B2B.',
      en: 'Corporate website for an international freight forwarding company, built to generate quotes and convey B2B credibility.',
    },
    challenge: {
      es: 'Competir en un sector exigente donde la confianza lo es todo. Necesitaban un sitio que posicionara a la empresa como un socio serio y canalizara solicitudes de cotización.',
      en: 'Competing in a demanding sector where trust is everything. They needed a site that positioned them as a serious partner and channeled quote requests.',
    },
    approach: {
      es: 'Diseñamos una arquitectura clara orientada a la conversión: servicios explicados con precisión, prueba social y formularios de cotización simples. Todo construido para cargar rápido y rankear.',
      en: 'We designed a clear, conversion-oriented architecture: precisely explained services, social proof and simple quote forms. All built to load fast and rank.',
    },
    outcome: {
      es: 'El sitio se transformó en el primer punto de contacto comercial y disparó la llegada de leads B2B calificados.',
      en: 'The site became the first commercial touchpoint and triggered a surge of qualified B2B leads.',
    },
    metrics: [
      { val: '+120%', lbl: { es: 'Leads B2B', en: 'B2B leads' } },
      { val: '100', lbl: { es: 'Performance score', en: 'Performance score' } },
      { val: '<1s', lbl: { es: 'Tiempo de carga', en: 'Load time' } },
    ],
    link: 'https://jdcargologistics.cl',
    featured: true,
  },
  {
    slug: 'altitude',
    client: 'Altitude',
    industry: 'b2b',
    sector: { es: 'Consultoría · Migración Web', en: 'Consulting · Web Migration' },
    year: '2025',
    services: {
      es: ['Migración Web', 'Corrección DNS', 'Soporte Técnico'],
      en: ['Web Migration', 'DNS Fix', 'Technical Support'],
    },
    serviceSlugs: ['diseno-web'],
    cover: coverAltitude,
    gradient: '#c8d8e8',
    theme: { accent: '#4f8fd1', dark: '#0a1826' },
    flavor: 'industrial',
    summary: {
      es: 'Migración completa del sitio y corrección de DNS para restablecer la presencia digital sin interrupciones.',
      en: 'Full site migration and DNS correction to restore digital presence without interruptions.',
    },
    challenge: {
      es: 'El sitio presentaba problemas técnicos de DNS que impedían su correcta resolución y afectaban la visibilidad de la marca.',
      en: 'The site had DNS technical issues preventing correct resolution and affecting brand visibility.',
    },
    approach: {
      es: 'Realizamos la migración completa del hosting, corrección de registros DNS y verificación del funcionamiento en todos los dominios.',
      en: 'We performed a full hosting migration, DNS record correction and functionality verification across all domains.',
    },
    outcome: {
      es: 'Sitio funcionando correctamente con DNS estabilizado y sin pérdida de tráfico.',
      en: 'Site working correctly with stabilized DNS and no traffic loss.',
    },
    metrics: [
      { val: '100%', lbl: { es: 'Uptime restaurado', en: 'Uptime restored' } },
    ],
    featured: false,
  },
  {
    slug: 'musclecarchile',
    client: 'MuscleCarChile',
    industry: 'ecommerce',
    sector: { es: 'Automotriz · Migración Web', en: 'Automotive · Web Migration' },
    year: '2025',
    services: {
      es: ['Migración Web', 'Corrección DNS', 'Soporte Técnico'],
      en: ['Web Migration', 'DNS Fix', 'Technical Support'],
    },
    serviceSlugs: ['diseno-web'],
    cover: coverMusclecarchile,
    gradient: '#1a1a2e',
    theme: { accent: '#d1372f', dark: '#140505' },
    flavor: 'bold',
    summary: {
      es: 'Migración y corrección de DNS para una tienda de accesorios y cultura muscle car en Chile.',
      en: 'Migration and DNS correction for a muscle car accessories and culture store in Chile.',
    },
    challenge: {
      es: 'Problemas de configuración DNS que dejaban el sitio inaccesible o con errores intermitentes para los clientes.',
      en: 'DNS configuration issues leaving the site inaccessible or intermittently erroring for customers.',
    },
    approach: {
      es: 'Diagnóstico completo de la configuración DNS, migración al nuevo servidor y validación del sitio en producción.',
      en: 'Full DNS configuration diagnosis, migration to new server and production site validation.',
    },
    outcome: {
      es: 'Sitio estable, accesible y sin interrupciones para los fanáticos del muscle car en Chile.',
      en: 'Stable, accessible site with no interruptions for muscle car fans in Chile.',
    },
    metrics: [
      { val: '✓', lbl: { es: 'DNS corregido', en: 'DNS fixed' } },
    ],
    featured: false,
  },
  {
    slug: 'aseocool',
    client: 'AseoCool',
    industry: 'b2b',
    sector: { es: 'Servicios · Limpieza', en: 'Services · Cleaning' },
    year: '2025',
    services: {
      es: ['Diseño Web', 'Identidad Visual', 'Estrategia Digital'],
      en: ['Web Design', 'Visual Identity', 'Digital Strategy'],
    },
    serviceSlugs: ['diseno-web'],
    logo: logoAseocool,
    cover: coverAseocool,
    gradient: '#d4ecd4',
    theme: { accent: '#1ea884', dark: '#06201a' },
    flavor: 'industrial',
    summary: {
      es: 'Sitio web completo para empresa de aseo y limpieza profesional, con identidad visual e integración digital.',
      en: 'Complete website for a professional cleaning company, with visual identity and digital integration.',
    },
    challenge: {
      es: 'Empresa de aseo que necesitaba proyectar profesionalismo y captar clientes corporativos a través de su presencia digital.',
      en: 'Cleaning company needing to project professionalism and attract corporate clients through their digital presence.',
    },
    approach: {
      es: 'Diseñamos el sitio completo, la identidad visual y la estrategia para posicionar a AseoCool como opción premium en su rubro.',
      en: 'We designed the full site, visual identity and strategy to position AseoCool as a premium option in their industry.',
    },
    outcome: {
      es: 'Presencia digital profesional que permite a AseoCool competir con empresas de mayor tamaño en el mercado corporativo.',
      en: 'Professional digital presence that lets AseoCool compete with larger companies in the corporate market.',
    },
    metrics: [
      { val: 'Full', lbl: { es: 'Proyecto completo', en: 'Full project' } },
    ],
    link: 'https://aseocool.cl',
    featured: false,
  },
  {
    slug: 'aracnida-store',
    client: 'Aracnida Store',
    industry: 'ecommerce',
    sector: { es: 'E-commerce', en: 'E-commerce' },
    year: '2024',
    services: {
      es: ['E-commerce', 'CRM', 'Email Marketing'],
      en: ['E-commerce', 'CRM', 'Email Marketing'],
    },
    serviceSlugs: ['ecommerce'],
    logo: logoAracnida,
    cover: coverAracnida,
    gradient: '#f49fc5',
    theme: { accent: '#d1273f', dark: '#120608' },
    flavor: 'bold',
    summary: {
      es: 'Tienda online premium con integración de CRM y email marketing para multiplicar el ticket promedio.',
      en: 'Premium online store with CRM and email marketing integration to multiply average order value.',
    },
    challenge: {
      es: 'Convertir una tienda que se veía bien pero no vendía en una máquina de conversión con seguimiento automatizado de cada cliente.',
      en: 'Turning a store that looked good but did not sell into a conversion machine with automated follow-up for every customer.',
    },
    approach: {
      es: 'Rediseñamos el flujo de compra para reducir fricción, integramos un CRM y automatizamos campañas de email que recuperan carritos y fidelizan.',
      en: 'We redesigned the purchase flow to reduce friction, integrated a CRM and automated email campaigns that recover carts and build loyalty.',
    },
    // Cifras reales de los dos primeros meses de operación (jul–ago 2026),
    // sacadas de los pedidos de la tienda. Antes acá había "+450% ticket
    // promedio" y "+95% recompra", que no correspondían a ningún dato medido.
    outcome: {
      es: 'En sus dos primeros meses de operación la tienda vendió $417.880 con un ticket promedio de $37.989. De 12 pedidos iniciados se pagaron 11: 92% de conversión. Y el ritmo se aceleró — de unos $7.700 diarios en julio a unos $36.000 en los primeros días de agosto. Un dato que ya está guiando decisiones: los pedidos con despacho a domicilio promedian $58.228, más del doble que los de retiro en tienda ($26.424).',
      en: 'In its first two months the store sold CLP $417,880 with an average order value of $37,989. Of 12 orders started, 11 were paid: a 92% conversion rate. And the pace accelerated — from about $7,700 a day in July to about $36,000 in the first days of August. One insight already shaping decisions: delivery orders average $58,228, more than double in-store pickup ($26,424).',
    },
    metrics: [
      { val: '$417.880', lbl: { es: 'Vendido en 2 meses', en: 'Sold in 2 months' } },
      { val: '92%', lbl: { es: 'De los pedidos se pagan', en: 'Of orders get paid' } },
      { val: '$37.989', lbl: { es: 'Ticket promedio', en: 'Average order value' } },
    ],
    link: 'https://aracnidastore.com',
    featured: true,
  },
  {
    slug: 'templo-votivo-maipu',
    client: 'Templo Votivo de Maipú',
    industry: 'instituciones',
    sector: { es: 'Institución · Eventos', en: 'Institution · Events' },
    year: '2026',
    services: {
      es: ['Diseño Gráfico', 'Campaña de Difusión', 'Piezas para Redes'],
      en: ['Graphic Design', 'Awareness Campaign', 'Social Assets'],
    },
    serviceSlugs: ['branding'],
    logo: logoTemplo,
    cover: coverTemplo,
    gradient: '#f2fbe0',
    // Azul marino + rojo tomados del logo real del Templo.
    theme: { accent: '#c7323f', dark: '#0a1f36' },
    flavor: 'editorial',
    summary: {
      es: 'Diseño de campaña gráfica para eventos institucionales, con piezas impresas y digitales coherentes con la identidad del Templo.',
      en: 'Graphic campaign design for institutional events, with print and digital assets consistent with the Temple identity.',
    },
    challenge: {
      es: 'Comunicar eventos masivos a públicos diversos manteniendo una imagen institucional respetuosa y reconocible.',
      en: 'Communicating large events to diverse audiences while keeping a respectful, recognizable institutional image.',
    },
    approach: {
      es: 'Desarrollamos un sistema gráfico flexible para afiches, piezas de redes y material del evento, cuidando jerarquía, legibilidad y coherencia.',
      en: 'We developed a flexible graphic system for posters, social assets and event material, with careful hierarchy, readability and consistency.',
    },
    outcome: {
      es: 'Una campaña clara y coherente que elevó la convocatoria y la presencia digital de los eventos.',
      en: 'A clear, coherent campaign that boosted attendance and the events’ digital presence.',
    },
    metrics: [{ val: '100%', lbl: { es: 'Sistema gráfico unificado', en: 'Unified graphic system' } }],
    featured: true,
  },
  {
    slug: 'bell-college',
    client: 'Bell College',
    industry: 'educacion',
    sector: { es: 'Educación', en: 'Education' },
    year: '2026',
    services: {
      es: ['Community Management', 'Social Media'],
      en: ['Community Management', 'Social Media'],
    },
    serviceSlugs: ['publicidad-digital'],
    logo: logoBell,
    cover: coverBell,
    gradient: '#bcd9f0',
    theme: { accent: '#2f6fb3', dark: '#0a1826' },
    flavor: 'editorial',
    summary: {
      es: 'Gestión de comunidad en Instagram: publicación de contenido y respuesta de mensajes de apoderados.',
      en: 'Instagram community management: publishing content and responding to messages from parents.',
    },
    challenge: {
      es: 'Mantener una presencia activa y cercana en Instagram para que apoderados que buscan información puedan resolver sus dudas a tiempo.',
      en: 'Keeping an active, approachable Instagram presence so parents looking for information get their questions answered on time.',
    },
    approach: {
      es: 'Publicamos contenido institucional de forma constante y respondemos cada mensaje directo con un tono cercano y profesional.',
      en: 'We publish institutional content consistently and respond to every direct message with a warm, professional tone.',
    },
    outcome: {
      es: 'Una comunidad activa en redes y apoderados que reciben respuesta rápida durante el proceso de admisión.',
      en: 'An active social community and parents who get quick responses during the admissions process.',
    },
    metrics: [{ val: '+DM', lbl: { es: 'Respuesta de mensajes', en: 'Message response' } }],
    featured: true,
  },
  {
    slug: 'superlunch',
    client: 'Superlunch',
    industry: 'gastronomia',
    sector: { es: 'Gastronomía · Delivery', en: 'Food & Beverage · Delivery' },
    year: '2025',
    services: {
      es: ['Branding', 'Diseño Gráfico'],
      en: ['Branding', 'Graphic Design'],
    },
    serviceSlugs: ['branding'],
    logo: logoSuperlunch,
    cover: coverSuperlunch,
    gradient: '#f8cfd2',
    theme: { accent: '#ef6f6f', dark: '#240d0d' },
    flavor: 'playful',
    summary: {
      es: 'Identidad y piezas gráficas para un servicio de almuerzos, con una imagen apetitosa y directa.',
      en: 'Identity and graphic assets for a lunch service, with an appetizing, direct image.',
    },
    challenge: {
      es: 'Diferenciarse en un mercado de delivery saturado con una marca simple y memorable.',
      en: 'Standing out in a saturated delivery market with a simple, memorable brand.',
    },
    approach: {
      es: 'Definimos una identidad clara y aplicable a menús, redes y material promocional.',
      en: 'We defined a clear identity applicable to menus, social media and promotional material.',
    },
    outcome: {
      es: 'Una marca consistente que facilita la comunicación diaria del negocio.',
      en: 'A consistent brand that streamlines the business’s daily communication.',
    },
    metrics: [{ val: 'Full', lbl: { es: 'Identidad aplicada', en: 'Identity applied' } }],
    featured: false,
  },
  {
    slug: 'microterapias',
    client: 'Microterapias',
    industry: 'salud',
    sector: { es: 'Bienestar · Salud Mental', en: 'Wellness · Mental Health' },
    year: '2026',
    services: {
      es: ['Contenido & Reels', 'Piezas Gráficas'],
      en: ['Content & Reels', 'Graphic Assets'],
    },
    serviceSlugs: ['contenido-reels'],
    logo: logoMicroterapias,
    cover: coverMicroterapias,
    gradient: '#e4dcf5',
    theme: { accent: '#8b6fd1', dark: '#150f26' },
    flavor: 'editorial',
    summary: {
      es: 'Contenido y piezas gráficas para una comunidad de bienestar y salud mental, con un tono cercano y visualmente cuidado.',
      en: 'Content and graphic assets for a wellness and mental health community, with a warm, visually polished tone.',
    },
    challenge: {
      es: 'Hablar de salud mental y microdosis terapéuticas con un lenguaje visual confiable, cercano y libre de estigma.',
      en: 'Talking about mental health and therapeutic microdosing with a trustworthy, warm, stigma-free visual language.',
    },
    approach: {
      es: 'Diseñamos piezas educativas para redes y producimos contenido en video que explica procesos reales de forma simple y humana.',
      en: 'We designed educational social assets and produced video content explaining real processes in a simple, human way.',
    },
    outcome: {
      es: 'Una comunidad digital coherente que acompaña a las personas con información clara y una identidad reconocible.',
      en: 'A coherent digital community that guides people with clear information and a recognizable identity.',
    },
    metrics: [{ val: 'Full', lbl: { es: 'Identidad aplicada', en: 'Identity applied' } }],
    link: 'https://microterapias.cl',
    featured: false,
  },
  {
    slug: 'duoc-uc',
    client: 'Duoc UC',
    industry: 'educacion',
    sector: { es: 'Educación Superior', en: 'Higher Education' },
    year: '2026',
    services: {
      es: ['Contenido & Reels', 'Producción Audiovisual'],
      en: ['Content & Reels', 'Video Production'],
    },
    serviceSlugs: ['contenido-reels'],
    logo: logoDuocuc,
    cover: coverDuocuc,
    gradient: '#0d0d0d',
    // Ámbar/dorado muestreado del logo real de Duoc UC (no rojo).
    theme: { accent: '#e0a020', dark: '#171410' },
    flavor: 'editorial',
    summary: {
      es: 'Producción de reels para la cuenta oficial de Duoc UC, mostrando la vida universitaria y la experiencia estudiantil.',
      en: 'Reel production for Duoc UC\'s official account, showcasing campus life and the student experience.',
    },
    challenge: {
      es: 'Producir contenido a la altura de una institución con más de 69 mil seguidores, manteniendo cercanía y autenticidad.',
      en: 'Producing content worthy of an institution with over 69K followers, while keeping it warm and authentic.',
    },
    approach: {
      es: 'Grabamos y editamos reels sobre tours de campus, cuentas anuales y vida estudiantil, pensados para el feed oficial.',
      en: 'We filmed and edited reels about campus tours, annual events and student life, made for the official feed.',
    },
    outcome: {
      es: 'Contenido que refleja la experiencia real de estudiar en Duoc UC, publicado en su cuenta oficial.',
      en: 'Content that reflects the real experience of studying at Duoc UC, published on their official account.',
    },
    metrics: [{ val: '69,2K', lbl: { es: 'Seguidores de la cuenta', en: 'Account followers' } }],
    link: 'https://www.instagram.com/duocuc_cl/',
    featured: false,
  },
  {
    slug: 'bschool',
    client: 'BSchool',
    industry: 'educacion',
    sector: { es: 'Educación Online', en: 'Online Education' },
    year: '2026',
    services: {
      es: ['Piezas Gráficas', 'Manejo de Instagram'],
      en: ['Graphic Assets', 'Instagram Management'],
    },
    serviceSlugs: ['contenido-reels'],
    logo: logoBschool,
    cover: coverBschool,
    gradient: '#f9b208',
    // Verde institucional muestreado del escudo real de BSchool.
    theme: { accent: '#48843c', dark: '#0f2410' },
    flavor: 'editorial',
    summary: {
      es: 'Piezas gráficas y gestión de Instagram para un colegio online, con foco en admisión y comunicación de su propuesta flexible.',
      en: 'Graphic assets and Instagram management for an online school, focused on admissions and communicating its flexible offer.',
    },
    challenge: {
      es: 'Comunicar la propuesta de un colegio 100% online a familias que buscan flexibilidad sin perder solidez académica.',
      en: 'Communicating an all-online school\'s offer to families seeking flexibility without losing academic rigor.',
    },
    approach: {
      es: 'Diseñamos piezas de admisión y contenido regular para Instagram, con una línea gráfica clara y coherente en cada publicación.',
      en: 'We designed admissions assets and regular Instagram content, with a clear, consistent visual line in every post.',
    },
    outcome: {
      es: 'Una comunicación constante y profesional que acompaña el proceso de admisión de BSchool durante todo el año.',
      en: 'Consistent, professional communication that supports BSchool\'s admissions process year-round.',
    },
    metrics: [{ val: 'Full', lbl: { es: 'Gestión de contenido', en: 'Content management' } }],
    link: 'https://bschool.cl',
    featured: false,
  },

  // ── En preparación ────────────────────────────────────────────────
  // Fichas creadas por adelantado. Datos duros (cliente, rubro, servicios,
  // link) ya cargados; faltan portada, logo y textos. Mientras tengan
  // `draft: true` NO aparecen en el sitio.
  //
  // Para publicar una: completar summary/challenge/approach/outcome,
  // agregar cover + logo y borrar la línea `draft: true`. Si se publica
  // sin textos, el build falla a propósito (ver validación al final).
  //
  // Pendiente en todas: cover, logo, gradient/theme reales (los actuales
  // son provisionales), metrics y confirmar el año.
  {
    slug: 'full-stock',
    client: 'Full Stock',
    industry: 'ecommerce',
    sector: { es: 'E-commerce · Distribuidora de abarrotes', en: 'E-commerce · Grocery distributor' },
    year: '2026',
    services: {
      es: ['Diseño Web', 'E-commerce'],
      en: ['Web Design', 'E-commerce'],
    },
    serviceSlugs: ['ecommerce', 'diseno-web'],
    // Sin logo ni cover: los únicos archivos de marca que existen en el
    // proyecto son restos de otro cliente (quedaron de clonar la base de
    // Aracnida Store) — no corresponden a Full Stock y no se usan.
    gradient: '#2b6cb0',
    theme: { accent: '#2b6cb0', dark: '#0d1b2a' },
    flavor: 'bold',
    summary: {
      es: 'Una tienda online para una distribuidora de abarrotes de Maipú, con 402 productos organizados en 24 categorías y precio por mayor y por menor.',
      en: 'An online store for a Maipú grocery distributor, with 402 products organised into 24 categories and both wholesale and retail pricing.',
    },
    challenge: {
      es: 'Full Stock vende por mayor y por menor a la vez, dos formas de comprar con lógicas distintas. El catálogo tenía que ordenar 402 productos sin que el cliente que compra una caja se pierda entre quien compra un pallet.',
      en: 'Full Stock sells both wholesale and retail at once, two ways of buying with different logic. The catalogue had to organise 402 products without the customer buying one box getting lost among those buying a pallet.',
    },
    approach: {
      es: 'Construimos la tienda completa con las 24 categorías reales del negocio — abarrotes, limpieza, bebidas, congelados, cuidado personal y el resto — y un precio que cambia según la cantidad que se compra.',
      en: 'We built the full store around the business’ 24 real categories — groceries, cleaning, beverages, frozen goods, personal care and the rest — with pricing that adjusts to the quantity purchased.',
    },
    outcome: {
      es: 'La distribuidora tiene su catálogo completo online, con despacho en la Región Metropolitana y retiro en bodega en Maipú. Falta cargar fotografía real de los productos: hoy el sitio funciona con íconos mientras se toman las fotos.',
      en: 'The distributor has its full catalogue online, with delivery across the Santiago region and pickup at its Maipú warehouse. Real product photography is still pending: the site currently runs on icons while photos are taken.',
    },
    metrics: [
      { val: '402', lbl: { es: 'Productos en el catálogo', en: 'Products in the catalogue' } },
      { val: '24', lbl: { es: 'Categorías', en: 'Categories' } },
      { val: 'Mayor y menor', lbl: { es: 'Dos formas de comprar', en: 'Two ways to buy' } },
    ],
    featured: false,
  },
  {
    slug: 'esem000',
    client: 'esem000',
    industry: 'ecommerce',
    sector: { es: 'Moda urbana · Publicidad', en: 'Streetwear · Paid Ads' },
    year: '2026',
    services: {
      es: ['Publicidad Digital'],
      en: ['Digital Ads'],
    },
    serviceSlugs: ['publicidad-digital'],
    gradient: '#111111',
    theme: { accent: '#e0e0e0', dark: '#0a0a0a' },
    flavor: 'bold',
    summary: { es: '', en: '' },
    challenge: { es: '', en: '' },
    approach: { es: '', en: '' },
    outcome: { es: '', en: '' },
    metrics: [],
    link: 'https://esem000.com',
    featured: false,
    draft: true,
  },
  {
    slug: 'minerva',
    client: 'Minerva',
    industry: 'ecommerce',
    sector: { es: 'E-commerce · Papelería personalizada', en: 'E-commerce · Custom stationery' },
    year: '2026',
    services: {
      es: ['Diseño Web', 'E-commerce'],
      en: ['Web Design', 'E-commerce'],
    },
    serviceSlugs: ['ecommerce', 'diseno-web'],
    gradient: '#7c3aed',
    theme: { accent: '#7c3aed', dark: '#160f26' },
    flavor: 'playful',
    summary: { es: '', en: '' },
    challenge: { es: '', en: '' },
    approach: { es: '', en: '' },
    outcome: { es: '', en: '' },
    metrics: [],
    link: 'https://minerva.cl',
    featured: false,
    draft: true,
  },
  {
    slug: 'chun-guang',
    client: 'Comida China Chun Guang',
    industry: 'gastronomia',
    sector: { es: 'Gastronomía · Restaurante', en: 'Food · Restaurant' },
    year: '2026',
    services: {
      es: ['Diseño Web', 'Carta Digital', 'SEO Local'],
      en: ['Web Design', 'Digital Menu', 'Local SEO'],
    },
    serviceSlugs: ['diseno-web'],
    logo: logoChunguang,
    cover: coverChunguang,
    gradient: '#f5cc53',
    theme: { accent: '#c1272d', dark: '#1b0e0b' },
    flavor: 'editorial',
    summary: {
      es: 'La carta completa de un restaurante de barrio convertida en una experiencia digital que se explora en segundos desde el teléfono.',
      en: "A neighbourhood restaurant's full menu turned into a digital experience you can browse in seconds from your phone.",
    },
    challenge: {
      es: 'Chun Guang tenía una carta extensa que solo existía en papel y en fotos que circulaban por WhatsApp. Quien quería pedir terminaba preguntando precios uno por uno, y el restaurante repetía las mismas respuestas todos los días.',
      en: 'Chun Guang had a long menu that only existed on paper and in photos passed around on WhatsApp. Anyone wanting to order ended up asking prices one by one, and the restaurant repeated the same answers every day.',
    },
    approach: {
      es: 'Ordenamos los 155 productos en categorías que se recorren sin perderse y pusimos la fotografía de los platos al frente, porque en gastronomía la foto es la que vende. Además rescatamos la identidad visual que ya tenía el local y la adaptamos para que funcione en digital con la calidad que merecía.',
      en: 'We organised all 155 items into categories you can navigate without getting lost and put the food photography up front, because in hospitality the photo is what sells. We also rescued the restaurant\u2019s existing visual identity and adapted it so it works digitally at the quality it deserved.',
    },
    outcome: {
      es: 'Hoy el restaurante tiene un enlace único que resuelve la conversación completa: el cliente ve la carta con precios, elige, y pasa directo a pedir por WhatsApp o por Uber Eats. La carta quedó construida para que el local pueda cambiar platos y precios sin rehacer el sitio.',
      en: 'The restaurant now has a single link that handles the whole conversation: customers see the menu with prices, choose, and go straight to ordering via WhatsApp or Uber Eats. The menu was built so the restaurant can change dishes and prices without rebuilding the site.',
    },
    metrics: [
      { val: '155', lbl: { es: 'Productos en la carta', en: 'Items on the menu' } },
      { val: '1 enlace', lbl: { es: 'Resuelve carta y pedido', en: 'Menu and ordering in one' } },
      { val: 'Mobile', lbl: { es: 'Pensado primero para el teléfono', en: 'Designed phone-first' } },
    ],
    featured: true,
  },
  {
    slug: 'auristal',
    client: 'Auristal Velas',
    industry: 'ecommerce',
    sector: { es: 'Retail · Producto artesanal', en: 'Retail · Handmade goods' },
    year: '2026',
    services: {
      es: ['Diseño Web', 'Catálogo Digital', 'Identidad Visual'],
      en: ['Web Design', 'Digital Catalogue', 'Visual Identity'],
    },
    serviceSlugs: ['diseno-web', 'branding'],
    logo: logoAuristal,
    cover: coverAuristal,
    gradient: '#f4d9c6',
    theme: { accent: '#c0603c', dark: '#251512' },
    flavor: 'editorial',
    summary: {
      es: 'Un catálogo donde cada vela se configura antes de pedirla: formato, aroma, color y brillo, con el precio actualizándose a medida que se elige.',
      en: 'A catalogue where every candle is configured before ordering: format, scent, colour and finish, with the price updating as you choose.',
    },
    challenge: {
      es: 'Auristal hace velas artesanales que casi nunca se venden tal cual salen del molde: el cliente quiere otro aroma, otro color, otro tamaño. Esa conversación ocurría entera por mensajes, y era imposible que alguien se imaginara el producto final antes de encargarlo.',
      en: 'Auristal makes handmade candles that are almost never sold exactly as they come out of the mould: customers want a different scent, colour or size. That whole conversation happened over messages, and it was impossible for anyone to picture the final product before ordering.',
    },
    approach: {
      es: 'Convertimos esa conversación en una experiencia: el visitante arma su vela y ve el precio moverse con cada decisión. Cuando termina, el pedido sale ordenado por WhatsApp con todo lo que eligió. Sin carrito, sin registro, sin pasarela — el camino más corto entre imaginar el producto y encargarlo.',
      en: 'We turned that conversation into an experience: visitors build their candle and watch the price move with every decision. When they finish, the order goes out through WhatsApp, neatly itemised. No cart, no sign-up, no checkout — the shortest path from picturing the product to ordering it.',
    },
    outcome: {
      es: 'La marca dejó de explicar su oferta por mensajes y pasó a mostrarla. Además dejamos varias propuestas de color trabajadas sobre el mismo catálogo, para que Auristal pueda ver cómo cambia su personalidad antes de fijar su identidad definitiva.',
      en: 'The brand stopped explaining its range over messages and started showing it. We also left several colour directions built on the same catalogue, so Auristal can see how its personality shifts before settling on a final identity.',
    },
    metrics: [
      { val: '14', lbl: { es: 'Productos en catálogo', en: 'Products in the catalogue' } },
      { val: '5', lbl: { es: 'Variables por vela', en: 'Options per candle' } },
      { val: 'WhatsApp', lbl: { es: 'Pedido directo, sin checkout', en: 'Direct ordering, no checkout' } },
    ],
    featured: true,
  },
  {
    slug: 'terapia-deportiva',
    client: 'Terapia Deportiva',
    industry: 'medios',
    sector: { es: 'Medios · Fútbol chileno', en: 'Media · Chilean football' },
    year: '2026',
    services: {
      es: ['Plataforma Editorial', 'Diseño Web', 'Arquitectura de Contenido'],
      en: ['Editorial Platform', 'Web Design', 'Content Architecture'],
    },
    serviceSlugs: ['diseno-web'],
    cover: coverTerapiaDeportiva,
    gradient: '#b9c6d6',
    theme: { accent: '#d81f2a', dark: '#0c0e12' },
    flavor: 'bold',
    summary: {
      es: 'Un medio digital de fútbol chileno con jerarquía de portada, secciones por torneo y una tabla de posiciones que se mantiene al día sola.',
      en: 'A Chilean football news outlet with front-page hierarchy, sections by competition and a standings table that keeps itself up to date.',
    },
    challenge: {
      es: 'El proyecto necesitaba dejar de verse como un blog y empezar a verse como un medio. Eso significa que el lector entienda de un vistazo qué es lo más importante del día, y que publicar todos los días no obligue a rediseñar nada.',
      en: 'The project needed to stop looking like a blog and start looking like a news outlet. That means readers grasp the day\u2019s biggest story at a glance, and publishing daily never requires redesigning anything.',
    },
    approach: {
      es: 'Trabajamos la jerarquía como se trabaja una portada: titulares grandes, una nota que manda y el resto ordenado alrededor. Separamos el contenido por Liga de Primera, Copa Chile, Selección, fichajes e internacional, para que cada lector entre por donde le interesa.',
      en: 'We treated hierarchy the way a front page is built: big headlines, one story that leads and the rest arranged around it. We split content into the domestic league, Copa Chile, the national team, transfers and international football, so each reader enters where they care to.',
    },
    outcome: {
      es: 'El sitio funciona como un medio de verdad: la tabla de posiciones se mantiene actualizada sin que nadie la toque, así que hay contenido vivo incluso entre publicaciones. Y la estructura está pensada para que el archivo crezca sin desordenarse.',
      en: 'The site works like a real outlet: the standings table stays current without anyone touching it, so there is living content even between posts. And the structure is built so the archive can grow without falling into disorder.',
    },
    metrics: [
      { val: 'En vivo', lbl: { es: 'Tabla de posiciones al día', en: 'Standings kept current' } },
      { val: '5 frentes', lbl: { es: 'Torneos y secciones', en: 'Competitions and sections' } },
      { val: 'Editorial', lbl: { es: 'Jerarquía tipo portada', en: 'Front-page hierarchy' } },
    ],
    featured: false,
  },
  {
    slug: 'regalon-pet',
    client: 'Regalón Pet',
    industry: 'ecommerce',
    sector: { es: 'E-commerce · Mascotas', en: 'E-commerce · Pets' },
    year: '2026',
    services: {
      es: ['E-commerce', 'Diseño Web', 'Contenido y SEO'],
      en: ['E-commerce', 'Web Design', 'Content & SEO'],
    },
    serviceSlugs: ['ecommerce', 'diseno-web'],
    logo: logoRegalonPet,
    cover: coverRegalonPet,
    gradient: '#f6d9a8',
    theme: { accent: '#e07b28', dark: '#1a1310' },
    flavor: 'playful',
    summary: {
      es: 'Una tienda online completa para productos de mascotas: del catálogo al pago, con stock, pedidos y gestión en un mismo lugar.',
      en: 'A complete online store for pet products: from catalogue to payment, with stock, orders and management in one place.',
    },
    challenge: {
      es: 'Regalón Pet no necesitaba una vitrina bonita, necesitaba vender. Es decir: que el cliente encuentre el producto, entienda para qué sirve, pague sin fricción, y que del otro lado alguien pueda administrar el stock y los pedidos sin depender de nadie.',
      en: 'Regalón Pet did not need a pretty showcase, it needed to sell. That means: customers find the product, understand what it is for, pay without friction — and on the other side someone can manage stock and orders without depending on anyone.',
    },
    approach: {
      es: 'Construimos la tienda completa, no una maqueta: catálogo con categorías por mascota, filtros por actividad, búsqueda, carrito y pago en línea. La ficha de producto explica el beneficio antes que la especificación, porque quien compra para su perro compra tranquilidad, no características.',
      en: 'We built the full store, not a mockup: a catalogue with categories by pet, filters by activity, search, cart and online payment. Product pages lead with the benefit before the spec, because someone buying for their dog is buying peace of mind, not features.',
    },
    outcome: {
      es: 'La marca quedó con una operación real: cada pedido queda registrado y validado antes de procesarse, y hay un espacio de gestión para revisar pedidos, stock y clientes desde un mismo lugar. Sumamos guías de cuidado que además se pueden escuchar, y una arquitectura preparada para que los productos y el contenido se encuentren en buscadores.',
      en: 'The brand ended up with a real operation: every order is recorded and validated before processing, and there is a management space to review orders, stock and customers in one place. We added care guides you can also listen to, and an architecture prepared so products and content get found in search.',
    },
    metrics: [
      { val: 'Pago online', lbl: { es: 'Compra completa en el sitio', en: 'Full checkout on site' } },
      { val: 'Panel propio', lbl: { es: 'Pedidos, stock y clientes', en: 'Orders, stock and customers' } },
      { val: 'Audio', lbl: { es: 'Guías que se pueden escuchar', en: 'Guides you can listen to' } },
    ],
    featured: true,
  },
];

/**
 * Lo que consume el sitio: todo menos los proyectos en preparación.
 * Al quitarle `draft` a una ficha aparece sola en portafolio, industrias,
 * servicios, sitemap y JSON-LD, sin tocar ningún componente.
 */
export const PROJECTS: Project[] = ALL_PROJECTS.filter((p) => !p.draft);

/** Fichas pendientes de completar — útil para saber qué falta. */
export const DRAFT_PROJECTS: Project[] = ALL_PROJECTS.filter((p) => p.draft);

// Salvaguarda: si se publica un proyecto sin llenar los textos, el build
// falla en vez de subir una ficha vacía al sitio.
for (const p of PROJECTS) {
  const faltan = (['summary', 'challenge', 'approach', 'outcome'] as const).filter(
    (k) => !p[k].es.trim() || !p[k].en.trim()
  );
  if (faltan.length) {
    throw new Error(
      `[projects] "${p.slug}" está publicado pero le faltan textos (${faltan.join(', ')}). ` +
        'Complétalos o vuelve a marcarlo con draft: true.'
    );
  }
}

export const getProject = (slug: string) => ALL_PROJECTS.find((p) => p.slug === slug);
