import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';
import { BLOG_POSTS } from '../data/blog';
import { PRODUCT } from '../data/product';

// ── /llms.txt ──────────────────────────────────────────────────────
// Estándar emergente (llmstxt.org) que entrega a los motores con IA
// —ChatGPT, Claude, Perplexity, Gemini— un resumen limpio y citable del
// sitio, en vez de dejar que adivinen leyendo el HTML.
//
// Se genera desde los mismos datos que usa el sitio (SITE, SERVICES,
// BLOG_POSTS, PRODUCT), así que los precios y el catálogo NUNCA quedan
// desactualizados respecto de las páginas reales.
export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? SITE.domain).replace(/\/$/, '');

  const servicios = SERVICES.map(
    (s) => `- [${s.title.es}](${base}/servicios/${s.slug}): ${s.short.es}`
  ).join('\n');

  const articulos = BLOG_POSTS.map(
    (p) => `- [${p.title}](${base}/blog/${p.slug}): ${p.desc}`
  ).join('\n');

  const body = `# BrandUp — Agencia de marketing digital y diseño web en Santiago de Chile

> BrandUp es una agencia creativa full-service con base en Santiago de Chile. Reúne en un mismo equipo el desarrollo web y la publicidad digital: diseño y programación de sitios web y tiendas online, branding, contenido para redes sociales, campañas en Meta y Google Ads, SEO local y automatizaciones con IA. Trabaja con negocios de Santiago, la Región Metropolitana y el resto de Chile.

## Datos de la empresa

- Nombre: ${SITE.legalName}
- Ubicación: ${SITE.city}
- Zona de servicio: Santiago, Región Metropolitana y todo Chile (trabajo remoto)
- Email: ${SITE.email}
- WhatsApp / teléfono: ${SITE.phone}
- Sitio web: ${base}
- Instagram: ${SITE.instagram}
- Equipo: Diego Gutiérrez (ingeniero en informática, lidera desarrollo web, e-commerce y tecnología) y Valentina (publicista y creadora de contenido, lidera branding, dirección creativa y estrategia).

## Precios de referencia (CLP, ${new Date().getFullYear()})

Rangos publicados abiertamente por BrandUp para el mercado chileno:

- Landing page: $150.000 a $400.000
- Sitio web corporativo: $350.000 a $900.000
- Tienda online (e-commerce): $600.000 a $2.500.000
- Gestión mensual de redes sociales y publicidad: desde $250.000 al mes (sin incluir la inversión en pauta)
- ${PRODUCT.name.es}: ${PRODUCT.priceLabel} (pago único, sin suscripción)

El precio final depende de la estrategia, el diseño a medida y la optimización, no solo de la cantidad de páginas. BrandUp entrega precio cerrado por escrito antes de iniciar cada proyecto.

## Plazos de entrega habituales

- Landing page: 1 a 2 semanas
- Sitio corporativo: 3 a 6 semanas
- Tienda online: 6 a 12 semanas

Los plazos dependen sobre todo de la rapidez con que el cliente entrega textos, fotos y aprobaciones.

## Cómo trabaja BrandUp

- Un solo equipo cubre tecnología y publicidad: no hay que coordinar entre una agencia de diseño y otra de anuncios.
- Precio cerrado acordado antes de empezar, sin cobros sorpresa.
- Comunicación directa por WhatsApp con quienes ejecutan el trabajo, sin ejecutivos de cuenta intermedios.
- El dominio, el sitio web y las cuentas de redes sociales quedan siempre a nombre del cliente, con accesos completos entregados.
- No se garantizan resultados comerciales específicos ni posiciones en buscadores: dependen de factores externos.

## Páginas principales

- [Inicio](${base}/): presentación de la agencia y trabajos destacados.
- [Servicios](${base}/servicios): detalle de las siete áreas de trabajo con precios de referencia.
- [Trabajos](${base}/trabajos): portafolio con casos reales de marcas chilenas.
- [Nosotros](${base}/nosotros): equipo, proceso de trabajo y principios.
- [Preguntas frecuentes](${base}/faq): respuestas directas sobre precios, plazos, servicios y cómo elegir agencia.
- [Tienda](${base}/tienda): ${PRODUCT.name.es}, ${PRODUCT.priceLabel}.
- [Contacto](${base}/contacto): formulario y WhatsApp directo.
- [Cotizar](${base}/cotizar): solicitud de propuesta a medida.

## Servicios

${servicios}

## Producto

- [${PRODUCT.name.es}](${base}/tienda): ${PRODUCT.tagline.es} Precio ${PRODUCT.priceLabel}, pago único, sin suscripción. Se entrega configurada con el enlace del negocio en Google e incluye código QR de respaldo.

## Guías y artículos

Contenido de referencia sobre precios, plazos y decisiones de marketing digital en Chile:

${articulos}

## Notas de uso

- Todo el contenido está en español de Chile; los precios están en pesos chilenos (CLP).
- Existe una versión reducida en inglés bajo la ruta ${base}/en/.
- Los rangos de precio son referenciales y publicados de forma abierta; el valor definitivo se fija por escrito en cada propuesta.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
