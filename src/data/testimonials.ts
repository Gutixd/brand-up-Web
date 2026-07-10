// ⚠️ PLACEHOLDER TESTIMONIALS — ficticios pero naturales y verosímiles.
// Reemplazar por testimonios reales de clientes cuando existan (con permiso).
import type { L } from './services';

export interface Testimonial {
  text: L;
  name: string;
  role: L;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: {
      es: 'Partimos con puros pedidos de conocidos. Hoy la mayoría de la gente llega por Instagram: uno de los reels que grabaron pasó las 260 mil vistas y esa semana se notó al tiro en el local.',
      en: 'We started with orders from friends only. Today most people come through Instagram: one of the reels they filmed passed 260K views and we felt it at the restaurant that same week.',
    },
    name: 'Cristóbal A.',
    role: { es: 'Dueño — Restaurante en Maipú', en: 'Owner — Restaurant in Maipú' },
    initials: 'CA',
  },
  {
    text: {
      es: 'Yo no entiendo nada de páginas web y nunca me hicieron sentir eso. Me explicaron todo en simple, cumplieron las fechas que prometieron y la tienda quedó mejor de lo que yo había pedido.',
      en: "I know nothing about websites and they never made me feel it. They explained everything in plain words, met every deadline and the store turned out better than what I asked for.",
    },
    name: 'Martina S.',
    role: { es: 'Fundadora — Tienda online', en: 'Founder — Online store' },
    initials: 'MS',
  },
  {
    text: {
      es: 'Fuimos claros: necesitábamos que la web generara cotizaciones, no que ganara premios de diseño. Entendieron eso desde la primera reunión y los leads subieron desde el primer mes.',
      en: 'We were clear: we needed the website to generate quotes, not win design awards. They got that from the first meeting and leads went up from month one.',
    },
    name: 'Roberto G.',
    role: { es: 'Gerente Comercial — Empresa de logística', en: 'Sales Manager — Logistics company' },
    initials: 'RG',
  },
  {
    text: {
      es: 'Lo que más valoro es que todo se mide. Es la primera vez que trabajo con una agencia y sé exactamente qué estoy pagando y qué está dando resultado. Y responden el WhatsApp, que no es poco.',
      en: "What I value most is that everything gets measured. It's the first agency where I know exactly what I'm paying for and what's working. And they answer WhatsApp, which is not a small thing.",
    },
    name: 'Fernanda M.',
    role: { es: 'Directora — Clínica estética, Las Condes', en: 'Director — Aesthetic clinic, Las Condes' },
    initials: 'FM',
  },
];
