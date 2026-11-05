# Sonidos de interfaz

Hoy **no hay archivos de audio**: todos los sonidos del sitio se sintetizan en
tiempo real con Web Audio API desde `src/scripts/audio.ts`. Eso significa 0 KB
de assets, 0 requests, nada que precargar y ningún problema de licencias.

Si en algún momento quieres reemplazar un sonido sintetizado por un sample real
(grabado o comprado), **no hace falta tocar ningún componente**. Basta con dejar
el archivo en esta carpeta y registrarlo:

```ts
import { audio } from '../scripts/audio';

// Sustituye el sonido sintetizado por el sample, con la misma clave.
audio.register('click', '/sounds/click.mp3');
audio.register('signature', '/sounds/signature.mp3');

// Los servicios usan el prefijo `svc:` + el slug de services.ts
audio.register('svc:branding', '/sounds/branding.mp3');
```

Claves disponibles:

| Clave                     | Dónde suena                                  |
| ------------------------- | -------------------------------------------- |
| `hoverSoft`               | Hover sobre CTAs                             |
| `hoverProject`            | Hover sobre tarjetas de proyecto             |
| `click`                   | Click / tap en elementos accionables         |
| `transition`              | Cambio de página                             |
| `menuOpen` / `menuClose`  | Menú y activación del sonido                 |
| `counterTick`             | Ticks durante la animación de los contadores |
| `counterDone`             | Cierre del contador                          |
| `signature`               | CTA final (sonido de firma de BrandUp)       |
| `scrollCue`               | Primer scroll de la sesión                   |
| `svc:<slug>`              | Timbre propio de cada servicio               |

Recomendaciones si agregas archivos:

- Formato `.mp3` o `.m4a`, mono, 44.1 kHz.
- Muy cortos: 40–250 ms (la firma puede llegar a ~600 ms).
- Normalizados bajo — el AudioManager ya aplica su propia ganancia.
- Sin silencio al inicio: retrasa la respuesta y se siente desconectado del gesto.
