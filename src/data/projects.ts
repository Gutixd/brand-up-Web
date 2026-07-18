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

import coverJdcargo from '../assets/projects/jdcargo.webp';
import coverAltitude from '../assets/projects/altitude.webp';
import coverMusclecarchile from '../assets/projects/musclecarchile.webp';
import coverAseocool from '../assets/projects/aseocool.webp';

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
  summary: L;
  challenge: L;
  approach: L;
  outcome: L;
  metrics: { val: string; lbl: L }[];
  link?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
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
    gradient: '#f5cc53',
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
    link: 'https://altitude.cl',
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
    link: 'https://musclecarchile.cl',
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
    cover: coverAseocool,
    gradient: '#d4ecd4',
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
    gradient: '#f49fc5',
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
    outcome: {
      es: 'Un e-commerce que no solo convierte mejor, sino que aumenta cuánto gasta cada cliente y vuelve a venderles solo.',
      en: 'An e-commerce that not only converts better, but increases what each customer spends and resells to them on its own.',
    },
    metrics: [
      { val: '+450%', lbl: { es: 'Ticket promedio', en: 'Average order value' } },
      { val: '+95%', lbl: { es: 'Recompra', en: 'Repurchase' } },
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
    gradient: '#f2fbe0',
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
      es: ['Contenido & Reels', 'Social Media'],
      en: ['Content & Reels', 'Social Media'],
    },
    serviceSlugs: ['publicidad-digital'],
    logo: logoBell,
    gradient: '#bcd9f0',
    summary: {
      es: 'Producción de contenido audiovisual para redes: la vida del colegio contada en formato reel.',
      en: 'Audiovisual content production for social media: school life told in reel format.',
    },
    challenge: {
      es: 'Mostrar la propuesta educativa y la comunidad del colegio a apoderados que toman decisiones mirando redes sociales.',
      en: 'Showing the school’s educational offer and community to parents who make decisions by browsing social media.',
    },
    approach: {
      es: 'Grabamos y editamos reels institucionales con un tono cercano y profesional, pensados para generar confianza en nuevas familias.',
      en: 'We filmed and edited institutional reels with a warm, professional tone, designed to build trust with new families.',
    },
    outcome: {
      es: 'Contenido que humaniza la marca del colegio y apoya el proceso de admisión.',
      en: 'Content that humanizes the school brand and supports the admissions process.',
    },
    metrics: [{ val: '+Reels', lbl: { es: 'Producción audiovisual', en: 'Audiovisual production' } }],
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
    gradient: '#f8cfd2',
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
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
