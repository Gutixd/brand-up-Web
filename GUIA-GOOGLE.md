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

## 4. KIT listo para copiar y pegar (Business Profile)

Todo lo de abajo está redactado para pegar directo en el formulario de
business.google.com.

### Datos básicos

| Campo | Valor |
|---|---|
| Nombre | BrandUp Agency |
| Categoría principal | Agencia de marketing |
| Categorías secundarias | Diseñador de sitios web · Agencia de publicidad · Consultor de marketing |
| Tipo | Empresa de servicios en el área (sin dirección pública) |
| Zona de servicio | Santiago · Región Metropolitana |
| Teléfono | +56 9 7982 2862 |
| Sitio web | https://brandup.cl |
| Horario | Lun a Vie 9:00–19:00 |

### Descripción del negocio (pegar tal cual, 720 caracteres)

> Agencia de marketing digital y diseño web en Santiago de Chile. Ayudamos
> a pymes y marcas a crecer con sitios web que convierten, tiendas online,
> branding, contenido para redes sociales y publicidad digital medible.
> Somos un equipo chico y senior: la misma persona que te cotiza es la que
> trabaja tu proyecto. Partimos cada trabajo con un objetivo de negocio
> concreto —más clientes, más ventas, más marca— y una métrica clara para
> medirlo. Más de 1 millón de views generadas para nuestros clientes y
> sitios con velocidad perfecta en Google. Atendemos en toda la Región
> Metropolitana y Chile. Cotización gratis por WhatsApp, respuesta en
> menos de 24 horas.

### Servicios para listar en el perfil

1. Diseño y desarrollo web · 2. Tiendas online / E-commerce ·
3. Branding e identidad visual · 4. Reels y contenido para redes ·
5. Publicidad digital (Meta y Google Ads) · 6. Automatizaciones con IA ·
7. Marketing y growth

### 3 primeras publicaciones (una por semana)

**Post 1 — presentación:**
> Somos BrandUp 🍊 agencia de marketing digital y diseño web en Santiago.
> Sitios que convierten, contenido que se ve y campañas que se miden.
> Cotiza gratis por WhatsApp → link en el perfil.

**Post 2 — caso:**
> Un solo reel bien pensado superó las 260.000 reproducciones para uno de
> nuestros clientes gastronómicos 📈 Así se ve el contenido con estrategia.
> ¿Tu negocio ya está en video? Hablemos.

**Post 3 — servicio:**
> ¿Tu página web carga lenta o no aparece en Google? Hacemos sitios con
> velocidad perfecta y SEO desde la base. Auditoría gratis de tu web →
> escríbenos por WhatsApp.

### Fotos que subir (mínimo 10)

- Logo (cuadrado) y portada (el B↑ naranja sobre fondo oscuro)
- 4-6 capturas de trabajos reales (webs, reels, branding)
- 2-3 del equipo trabajando
- 1-2 de resultados (pantallazo del reel con views, analytics)

### Plantilla para pedir reseñas (cuando decidas hacerlo)

> ¡Hola [nombre]! Qué bueno que [resultado: el reel funcionó / la web ya
> está arriba]. ¿Nos ayudarías con una reseña en Google? Toma 1 minuto y
> nos sirve muchísimo: [link directo del perfil]

⚠️ Las reseñas deben ser de clientes reales — Google detecta y suspende
perfiles con reseñas falsas, y es permanente.

---

## 5. Search Console — ya está todo preparado en el código

Cuando crees la propiedad y Google te dé la etiqueta
`<meta name="google-site-verification" content="XXXX">`:
pega el valor de `content` en `src/data/site.ts` →
`googleSiteVerification: 'XXXX'` (o pásamelo y lo dejo yo).
El sitio ya la renderiza automáticamente en todas las páginas.

---

**Orden sugerido**: Business Profile hoy (verificación tarda días) →
Analytics (2 clics) → Search Console cuando esté el dominio brandup.cl.
