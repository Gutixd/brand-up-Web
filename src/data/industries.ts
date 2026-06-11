// Industries / verticals — projects reference these by key.
import type { L } from './services';

export interface Industry {
  key: string;
  name: L;
  desc: L;
}

export const INDUSTRIES: Industry[] = [
  {
    key: 'gastronomia',
    name: { es: 'Gastronomía', en: 'Food & Beverage' },
    desc: {
      es: 'Restaurantes, cafeterías y delivery: contenido que abre el apetito y campañas locales que llenan mesas.',
      en: 'Restaurants, cafés and delivery: content that whets the appetite and local campaigns that fill tables.',
    },
  },
  {
    key: 'ecommerce',
    name: { es: 'E-commerce & Retail', en: 'E-commerce & Retail' },
    desc: {
      es: 'Tiendas online que convierten, con automatización de email, CRM y campañas de adquisición.',
      en: 'Online stores that convert, with email automation, CRM and acquisition campaigns.',
    },
  },
  {
    key: 'b2b',
    name: { es: 'B2B & Servicios', en: 'B2B & Services' },
    desc: {
      es: 'Logística, consultoría y servicios profesionales: webs que transmiten credibilidad y generan leads calificados.',
      en: 'Logistics, consulting and professional services: websites that convey credibility and generate qualified leads.',
    },
  },
  {
    key: 'educacion',
    name: { es: 'Educación', en: 'Education' },
    desc: {
      es: 'Colegios e institutos: contenido institucional y campañas de admisión que generan confianza en las familias.',
      en: 'Schools and institutes: institutional content and admission campaigns that build trust with families.',
    },
  },
  {
    key: 'instituciones',
    name: { es: 'Instituciones & Eventos', en: 'Institutions & Events' },
    desc: {
      es: 'Organizaciones con públicos masivos: sistemas gráficos y difusión digital para convocar.',
      en: 'Organizations with large audiences: graphic systems and digital outreach that drive attendance.',
    },
  },
  {
    key: 'salud',
    name: { es: 'Salud & Estética', en: 'Health & Aesthetics' },
    desc: {
      es: 'Clínicas y centros estéticos: presencia digital que convierte búsquedas en pacientes.',
      en: 'Clinics and aesthetic centers: a digital presence that turns searches into patients.',
    },
  },
];
