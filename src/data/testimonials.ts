// Testimonios y reseñas REALES de clientes.
//
// Este archivo estuvo lleno de testimonios ficticios de relleno; se eliminaron
// porque publicar opiniones inventadas engaña al visitante y va contra las
// directrices de Google. Mientras la lista esté vacía, el sitio no muestra
// ninguna sección de testimonios (ver components/Reviews.astro).
//
// CÓMO AGREGAR UNO
// - Debe ser de un cliente real, con su autorización para publicarlo.
// - `source: 'google'`  → copiar el texto tal cual desde la reseña de Google
//   y pegar en `url` el enlace a esa reseña.
// - `source: 'directo'` → testimonio entregado por WhatsApp o correo; guardar
//   el respaldo y dejar `permission: true` solo si autorizó publicarlo.
// - No editar el texto para que "suene mejor": se publica como lo escribió.
import type { L } from './services';

export interface Testimonial {
  text: L;
  name: string;
  /** Cargo y empresa, por ejemplo "Dueño — El Chacha Pollo". */
  role: L;
  source: 'google' | 'directo';
  /** Enlace a la reseña pública (obligatorio si source es 'google'). */
  url?: string;
  /** Estrellas de la reseña de Google, de 1 a 5. */
  rating?: number;
  /** Fecha en formato AAAA-MM-DD. */
  date?: string;
  /** El cliente autorizó publicar su testimonio. */
  permission: boolean;
}

export const TESTIMONIALS: Testimonial[] = [];

/** Solo los que se pueden publicar. */
export const PUBLISHED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.permission);
