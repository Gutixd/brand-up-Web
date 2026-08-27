import type { ImageMetadata } from 'astro';

import cMarketing from '../assets/blog/marketing.webp';
import cDisenoWeb from '../assets/blog/diseno-web.webp';
import cSocial from '../assets/blog/social-media.webp';
import cSeo from '../assets/blog/seo.webp';
import cSeoLocal from '../assets/blog/seo-local.webp';
import cEcommerce from '../assets/blog/ecommerce.webp';
import cBranding from '../assets/blog/branding.webp';
import cContenido from '../assets/blog/contenido.webp';
import cAutomatizacion from '../assets/blog/automatizacion.webp';

// Cada artículo hereda la portada de su categoría (el campo `tag`).
// Son 9 imágenes para 19 artículos a propósito: reutilizarlas por categoría
// mantiene el blog cohesivo y hace que la portada signifique algo, en vez de
// que cada post lleve una imagen suelta sin relación con el resto.
const BY_TAG: Record<string, ImageMetadata> = {
  'Marketing': cMarketing,
  'Diseño Web': cDisenoWeb,
  'Social Media': cSocial,
  // Pendiente: portada propia. Por ahora reutiliza la de redes sociales,
  // que es donde corren las campañas de las que hablan estos artículos.
  'Publicidad': cSocial,
  'SEO': cSeo,
  'SEO Local': cSeoLocal,
  'E-commerce': cEcommerce,
  'Branding': cBranding,
  'Contenido': cContenido,
  'Automatización': cAutomatizacion,
};

export const coverFor = (tag: string): ImageMetadata => BY_TAG[tag] ?? cMarketing;
