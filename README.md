# BrandUp Agency — Sitio corporativo

Sitio bilingüe (ES/EN) de BrandUp Agency, construido con **Astro** (salida 100% estática), **Tailwind CSS v4**, **GSAP + ScrollTrigger**, **Lenis** e islas de **React**.

## Comandos

| Comando | Acción |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `http://localhost:4321` |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Previsualiza el build de producción |

## Estructura editable (sin tocar diseño)

- `src/data/site.ts` — contacto, redes, WhatsApp, email.
- `src/data/projects.ts` — proyectos del portafolio (agregar/quitar/reordenar).
- `src/data/services.ts` — servicios.
- `src/data/industries.ts` — rubros (los filtros del portafolio salen de aquí).
- `src/data/testimonials.ts` — ⚠️ **testimonios placeholder**, reemplazar por reales.
- `src/i18n/es.json` / `src/i18n/en.json` — todos los textos de la interfaz.

## TODOs pendientes

1. **Formulario**: crear un form en [Formspree](https://formspree.io) y pegar el endpoint en `src/components/ContactForm.tsx` (constante `FORMSPREE_ENDPOINT`).
2. **Email**: confirmar que `hola@brandup.cl` (en `src/data/site.ts`) es el correo definitivo.
3. **Testimonios**: reemplazar los placeholders de `src/data/testimonials.ts`.

## Deploy

### Vercel
1. Sube el repo a GitHub y conéctalo en [vercel.com](https://vercel.com) — detecta Astro automáticamente.
2. Build command: `astro build` · Output: `dist`. Nada más que configurar.

### Hostinger (hosting estático)
1. `npm run build`
2. Sube **el contenido** de la carpeta `dist/` al `public_html` de Hostinger (por FTP o el administrador de archivos).
3. Listo: el sitio es 100% estático, no requiere Node en el servidor.

## Marca

Paleta según `Colores Brand Up.jpeg` (carpeta de identidad): naranja `#f19650`, negro `#0d0d0d`, blanco `#ffffff`. Tipografías: **Syne** (titulares) y **DM Sans** (cuerpo), servidas localmente vía Fontsource.
