# Guía: Google Business Profile + Search Console para BrandUp

Estos dos pasos son **gratis** y son lo que más mueve el SEO local. Requieren
tu cuenta de Google (por eso no se pueden automatizar desde el código).
Tiempo total: ~30 minutos.

---

## 1. Google Business Profile (el más importante)

Es la ficha que aparece en Google Maps y en las búsquedas tipo
"agencia de marketing Santiago".

1. Entra a https://business.google.com con la cuenta de Google de la agencia.
2. "Agregar empresa" → nombre: **BrandUp Agency**.
3. Categoría principal: **Agencia de marketing** (secundarias: Diseñador de
   sitios web, Agencia de publicidad).
4. ¿Atiende clientes en su ubicación? → si no tienen oficina abierta al
   público, elige **"Empresa de servicios en el área"** y pon como zona:
   Santiago, Región Metropolitana.
5. Teléfono: +56 9 7982 2862 · Sitio web: https://brandup.cl
6. Verificación: Google pedirá verificar (video, teléfono o postal). Hazlo
   apenas lo pida — sin verificar, el perfil no aparece.
7. Una vez activo:
   - Sube 8-10 fotos reales (equipo, trabajos, logo).
   - Descripción con keywords: "Agencia de marketing digital y diseño web en
     Santiago de Chile. Sitios web, e-commerce, branding, reels y publicidad
     digital para pymes."
   - **Pide reseñas** a los clientes actuales (Chacha Pollo, JD Cargo, etc.)
     con el link directo que te da el perfil. 5 reseñas de 5 estrellas
     cambian el juego.
   - Publica una novedad cada 1-2 semanas (puede ser el mismo contenido de
     Instagram).

## 2. Google Search Console

Te dice con qué búsquedas te encuentra la gente y le avisa a Google de tus
páginas nuevas (como el blog).

1. Entra a https://search.google.com/search-console
2. "Agregar propiedad" → tipo **Prefijo de URL** → `https://brandup.cl`
   (o el dominio de Vercel mientras tanto).
3. Método de verificación recomendado: **Etiqueta HTML**. Google te dará una
   línea como:
   `<meta name="google-site-verification" content="XXXX" />`
   → pásame ese `content="XXXX"` y lo agrego al sitio en 1 minuto.
   (Alternativa si el dominio está en Vercel: verificación por DNS.)
4. Una vez verificado: menú **Sitemaps** → enviar `sitemap-index.xml`.
5. En 2-3 días empezarás a ver datos en "Rendimiento": qué búsquedas te
   muestran, clics e impresiones.

## 3. Bonus (5 min): Vercel Analytics

El código ya está instalado en el sitio. Solo falta activarlo:
Dashboard de Vercel → proyecto **brand-up-web** → pestaña **Analytics** →
**Enable**. Desde ese momento verás visitas, páginas top y países.

---

**Orden sugerido**: Business Profile hoy (verificación tarda días) →
Analytics (2 clics) → Search Console cuando esté el dominio brandup.cl.
