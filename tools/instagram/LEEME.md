# Publicaciones automáticas en Instagram

Crea las imágenes de cada publicación con la línea gráfica de BrandUp y las
publica en Instagram con la API oficial, sin entrar a la app.

## Cómo se usa (día a día)

1. **Pedirle el contenido a Claude.** Por ejemplo: *"hazme 3 publicaciones
   para esta semana sobre tiendas online"*. Claude escribe una ficha por
   publicación en `posts/` (textos de las láminas, texto del post, hashtags y
   fecha) y genera las imágenes.
2. **Revisar.** Las imágenes quedan en `out/<nombre>/`. Si algo no te gusta,
   se corrige la ficha y se vuelven a generar.
3. **Aprobar.** En la ficha, cambiar `"aprobado": false` por `true`.
4. **Publicar.** Al momento, o a la hora de `publicarEn` si está activa la
   publicación programada.

Nada se publica sin `"aprobado": true`.

## Comandos

```bash
node tools/instagram/render.cjs posts/2026-11-06-plazos-pagina-web.json
```
Genera las imágenes en `tools/instagram/out/2026-11-06-plazos-pagina-web/`.

```bash
node tools/instagram/publish.cjs posts/2026-11-06-plazos-pagina-web.json --prueba
```
Muestra qué se publicaría, sin publicar nada.

```bash
node tools/instagram/publish.cjs posts/2026-11-06-plazos-pagina-web.json
```
Publica esa ficha (si está aprobada).

```bash
node tools/instagram/publish.cjs --pendientes
```
Publica todas las fichas aprobadas cuya hora (`publicarEn`) ya llegó. Es el
comando que corre la publicación programada.

## La ficha (`posts/*.json`)

| Campo | Qué es |
|---|---|
| `aprobado` | `true` solo después de revisar las imágenes |
| `publicarEn` | Fecha y hora, por ejemplo `2026-11-06T19:00:00-03:00` |
| `laminas` | Lista de láminas (1 = imagen sola; 2 a 10 = carrusel) |
| `texto` | Texto del post |
| `hashtags` | Lista de hashtags |
| `publicado` | Lo completa el sistema: fecha, id y enlace del post |

Cada lámina acepta `kicker` (texto chico naranja), `titulo`, `texto`,
`numero`, `boton`, `imagen` (foto de fondo, ruta local) y `tipo`
(`portada`, `punto` o `cierre`; si no se indica, la primera es portada, la
última es cierre y el resto son puntos). En los textos, `*palabra*` sale en
naranja.

## Configuración única (la hace el dueño de la cuenta)

Requisitos: Instagram de BrandUp como **cuenta profesional** (empresa o creador).

1. Entrar a **developers.facebook.com** → *Mis apps* → **Crear app** →
   caso de uso *"Administrar mensajes y contenido en Instagram"*.
2. En *API de Instagram* → **Configuración de la API con inicio de sesión de
   Instagram** → *Generar tokens de acceso* → agregar la cuenta de BrandUp.
3. Copiar el **token** y el **ID de usuario de Instagram** que aparecen ahí.
4. Pegarlos en el archivo `.env` de la raíz del proyecto (nunca se sube a GitHub):

   ```
   IG_USER_ID=el_id_que_aparece
   IG_ACCESS_TOKEN=el_token
   ```

Para publicar en la cuenta propia no hace falta que Meta revise la app.

**El token dura 60 días.** Se renueva antes de que venza abriendo, con el
token actual al final:
`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=`

## Cómo funciona por dentro

- `render.cjs` arma cada lámina en HTML (Anton + Instrument Sans, crema,
  negro y naranja) y la fotografía con Chrome a 1080×1350 en JPEG.
- `publish.cjs` copia las imágenes a `public/ig/<nombre>/`, las sube a
  GitHub y espera a que Hostinger las publique en `https://brandup.cl/ig/…`
  (Instagram exige descargar cada imagen desde una dirección pública). Luego
  crea el post con la API y anota el enlace en la ficha.
- Límites de Instagram: máximo 10 imágenes por carrusel y 2.200 caracteres
  de texto.
