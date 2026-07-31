import type { L } from './services';

// ── Producto único de BrandUp ──────────────────────────────────────
// Precio de referencia de mercado (jul 2026): tarjetas/adhesivos NFC
// simples $12.990–$14.000; stands con configuración incluida $39.990.
// Nos posicionamos en medio: formato stand + configuración hecha por
// nosotros, sin llegar al precio de las marcas que solo venden el objeto.
export const PRODUCT = {
  slug: 'placa-nfc-google',
  price: 24990,
  // Editar aquí si cambias el precio: se propaga a toda la página y al
  // JSON-LD de Product que lee Google.
  priceLabel: '$24.990',
  currency: 'CLP',

  name: {
    es: 'Placa NFC para reseñas de Google',
    en: 'NFC stand for Google reviews',
  } as L,

  tagline: {
    es: 'Tus clientes acercan el teléfono y llegan directo a dejarte una reseña. Sin apps, sin explicar nada, sin mensualidad.',
    en: 'Customers tap their phone and land straight on your review page. No apps, no explaining, no monthly fee.',
  } as L,

  steps: [
    {
      n: '01',
      t: { es: 'La dejas en el mesón', en: 'Place it on the counter' },
      d: {
        es: 'Llega lista para usar, configurada con el enlace de tu negocio en Google. No tienes que instalar ni programar nada.',
        en: 'It arrives ready to use, configured with your Google business link. Nothing to install or set up.',
      },
    },
    {
      n: '02',
      t: { es: 'El cliente acerca el teléfono', en: 'The customer taps their phone' },
      d: {
        es: 'El chip NFC abre tu perfil de Google al instante. También lleva código QR, por si el teléfono no tiene NFC activado.',
        en: 'The NFC chip opens your Google profile instantly. It also carries a QR code, in case NFC is off.',
      },
    },
    {
      n: '03',
      t: { es: 'Escribe la reseña ahí mismo', en: 'They leave the review right there' },
      d: {
        es: 'Se salta el paso donde la mayoría abandona: buscar el negocio en Google. Del mesón a la reseña en un toque.',
        en: 'It skips the step where most people give up: searching for the business on Google. From counter to review in one tap.',
      },
    },
  ],

  benefits: [
    {
      t: { es: 'Pago único', en: 'One-time payment' },
      d: {
        es: 'Sin suscripción ni costos mensuales. Compras la placa y es tuya, funciona indefinidamente.',
        en: 'No subscription or monthly costs. You buy it once and it works indefinitely.',
      },
    },
    {
      t: { es: 'La configuramos nosotros', en: 'We set it up for you' },
      d: {
        es: 'Nos das el enlace de tu ficha de Google y te la enviamos lista. Si no tienes ficha, te ayudamos a crearla.',
        en: 'Send us your Google listing link and we ship it ready. No listing yet? We help you create it.',
      },
    },
    {
      t: { es: 'Funciona con cualquier teléfono', en: 'Works with any phone' },
      d: {
        es: 'NFC para Android y iPhone recientes; código QR de respaldo para el resto. Nadie queda fuera.',
        en: 'NFC for Android and recent iPhones; backup QR code for the rest. Nobody is left out.',
      },
    },
    {
      t: { es: 'Mejora tu SEO local', en: 'Improves your local SEO' },
      d: {
        es: 'Las reseñas son uno de los factores que Google considera para mostrar negocios en búsquedas “cerca de mí”.',
        en: 'Reviews are one of the factors Google weighs when showing businesses in “near me” searches.',
      },
    },
  ],

  includes: {
    es: [
      'Placa NFC con base, lista para mesón o barra',
      'Chip NFC programado con el enlace de tu negocio',
      'Código QR impreso de respaldo',
      'Configuración inicial hecha por nosotros',
      'Asesoría para dejar tu ficha de Google bien optimizada',
    ],
    en: [
      'NFC stand with base, ready for counter or bar',
      'NFC chip programmed with your business link',
      'Printed backup QR code',
      'Initial setup done by us',
      'Guidance to get your Google listing properly optimized',
    ],
  } as { es: string[]; en: string[] },

  faq: {
    es: [
      {
        q: '¿Necesito pagar algo todos los meses?',
        a: 'No. Es un pago único. La placa queda programada con tu enlace y funciona indefinidamente, sin suscripciones ni costos ocultos.',
      },
      {
        q: '¿Funciona en iPhone?',
        a: 'Sí. Los iPhone desde el XS (2018) leen NFC de forma nativa con solo acercar el teléfono, sin abrir ninguna app. Para equipos más antiguos o con NFC desactivado, la placa incluye código QR.',
      },
      {
        q: '¿Qué pasa si no tengo ficha de Google todavía?',
        a: 'Te ayudamos a crearla y verificarla antes de enviarte la placa, sin costo adicional. Es parte de lo que hacemos como agencia de marketing.',
      },
      {
        q: '¿Puedo cambiar el enlace después?',
        a: 'Sí. Si cambias de local o quieres apuntarla a otro perfil, nos escribes y te indicamos cómo reprogramarla.',
      },
      {
        q: '¿Hacen envíos a regiones?',
        a: 'Sí, despachamos a todo Chile. En la Región Metropolitana el envío va incluido; a regiones se cotiza según la dirección.',
      },
    ],
    en: [
      {
        q: 'Do I need to pay anything monthly?',
        a: 'No. It is a one-time payment. The stand is programmed with your link and works indefinitely, with no subscriptions or hidden costs.',
      },
      {
        q: 'Does it work on iPhone?',
        a: 'Yes. iPhones from the XS (2018) onwards read NFC natively by simply bringing the phone close, without opening any app. For older devices or phones with NFC off, the stand includes a QR code.',
      },
      {
        q: 'What if I do not have a Google listing yet?',
        a: 'We help you create and verify it before shipping the stand, at no extra cost. It is part of what we do as a marketing agency.',
      },
      {
        q: 'Can I change the link later?',
        a: 'Yes. If you move locations or want to point it to another profile, message us and we will walk you through reprogramming it.',
      },
      {
        q: 'Do you ship outside Santiago?',
        a: 'Yes, we ship across Chile. Shipping is included within the Metropolitan Region; other regions are quoted based on the address.',
      },
    ],
  },
};
