// ⚠️ PLACEHOLDER TESTIMONIALS — ficticios pero verosímiles.
// Reemplazar por testimonios reales de clientes antes de (o poco después de) lanzar.
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
      es: 'Teníamos una web que nadie visitaba. En tres meses BrandUp lo transformó por completo: ahora recibimos pacientes nuevos desde Google cada semana.',
      en: 'We had a website nobody visited. In three months BrandUp transformed it completely: now we get new patients from Google every week.',
    },
    name: 'Fernanda Medina',
    role: { es: 'Directora — Clínica estética, Las Condes', en: 'Director — Aesthetic clinic, Las Condes' },
    initials: 'FM',
  },
  {
    text: {
      es: 'No buscábamos solo una web más bonita, sino una herramienta de captación B2B. BrandUp lo entendió desde el primer día y los números lo confirmaron.',
      en: 'We were not just after a prettier website, but a B2B acquisition tool. BrandUp got it from day one and the numbers proved it.',
    },
    name: 'Roberto Gómez',
    role: { es: 'Gerente Comercial — Empresa de logística', en: 'Sales Manager — Logistics company' },
    initials: 'RG',
  },
  {
    text: {
      es: 'Necesitaba un e-commerce que convirtiera, no solo que se viera bien. Lo que construyeron fue exactamente eso, y siguió mejorando mes a mes.',
      en: 'I needed an e-commerce that converted, not just looked good. What they built was exactly that, and it kept improving month after month.',
    },
    name: 'Martina Silva',
    role: { es: 'Fundadora — Tienda online de streetwear', en: 'Founder — Streetwear online store' },
    initials: 'MS',
  },
  {
    text: {
      es: 'Los reels que produjeron nos cambiaron el negocio: pasamos de publicar “cuando se podía” a tener una comunidad que llega al local preguntando por lo que vio en Instagram.',
      en: 'The reels they produced changed our business: we went from posting “whenever” to having a community that walks in asking about what they saw on Instagram.',
    },
    name: 'Cristóbal Araya',
    role: { es: 'Dueño — Restaurante en Maipú', en: 'Owner — Restaurant in Maipú' },
    initials: 'CA',
  },
];
