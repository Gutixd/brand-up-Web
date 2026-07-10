// Blog SEO — artículos en español orientados a búsquedas locales (Chile).
// Data-driven: agregar un post aquí lo publica automáticamente en /blog.

export interface BlogSection {
  h?: string;          // subtítulo (H2)
  p?: string[];        // párrafos
  list?: string[];     // lista con viñetas
}

export interface BlogPost {
  slug: string;
  title: string;       // H1 + <title>
  desc: string;        // meta description
  tag: string;
  date: string;        // ISO
  readMin: number;
  intro: string;
  sections: BlogSection[];
  cta: string;         // texto del CTA final
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cuanto-cuesta-una-pagina-web-en-chile',
    title: '¿Cuánto cuesta una página web en Chile en 2026? Precios reales',
    desc: 'Precios reales de páginas web en Chile 2026: landing pages, sitios corporativos y e-commerce. Qué incluye cada rango y cómo evitar pagar de más.',
    tag: 'Diseño Web',
    date: '2026-06-28',
    readMin: 6,
    intro:
      'Si estás cotizando una página web en Chile te habrás dado cuenta de que los precios van desde $80.000 hasta varios millones. La diferencia no es capricho: depende de qué estás comprando realmente. Aquí va una guía honesta con rangos de mercado 2026.',
    sections: [
      {
        h: 'Los rangos de precio en Chile (2026)',
        list: [
          'Landing page (1 página orientada a vender o captar datos): $150.000 – $400.000 CLP.',
          'Sitio corporativo (4 a 8 páginas: inicio, servicios, nosotros, contacto): $350.000 – $900.000 CLP.',
          'E-commerce (catálogo, carrito, pagos con Webpay/Mercado Pago): $600.000 – $2.500.000 CLP.',
          'Proyectos a medida (plataformas, integraciones, automatizaciones): desde $1.500.000 CLP.',
        ],
      },
      {
        h: '¿Por qué tanta diferencia entre una web de $150.000 y una de $900.000?',
        p: [
          'Una web barata suele ser una plantilla genérica: se ve "bien" pero carga lento, no aparece en Google y no está pensada para convertir visitas en clientes. Es una tarjeta de presentación digital.',
          'Una web profesional incluye estrategia (qué debe lograr cada página), diseño propio alineado a tu marca, desarrollo optimizado para velocidad, SEO técnico desde la base y medición instalada. Es una herramienta de venta que trabaja 24/7.',
        ],
      },
      {
        h: 'Costos ocultos que debes preguntar antes de firmar',
        list: [
          'Dominio .cl: ~$10.000 CLP al año (NIC Chile).',
          'Hosting: $0 – $120.000 CLP al año según la tecnología (los sitios estáticos modernos pueden costar $0).',
          'Mantención mensual: algunas agencias la exigen; pregunta si es opcional.',
          '¿La web queda a tu nombre? Dominio y código deben ser tuyos, no de la agencia.',
        ],
      },
      {
        h: 'Cómo saber si un precio es justo',
        p: [
          'Pide ver casos reales con resultados (no solo pantallazos bonitos), verifica la velocidad de sus propios sitios en PageSpeed Insights y exige una propuesta con alcance y precio cerrado. Si la respuesta es vaga, el precio también lo será.',
        ],
      },
    ],
    cta: '¿Quieres un precio cerrado para tu proyecto? Te lo cotizamos gratis por WhatsApp en menos de 24 horas.',
  },
  {
    slug: 'cuanto-cobra-una-agencia-de-marketing-digital-en-chile',
    title: '¿Cuánto cobra una agencia de marketing digital en Chile? (2026)',
    desc: 'Tarifas reales de agencias de marketing digital en Chile 2026: fee mensual, manejo de redes, publicidad digital y qué deberías recibir por tu inversión.',
    tag: 'Marketing',
    date: '2026-06-21',
    readMin: 7,
    intro:
      'El "fee de agencia" es una caja negra para la mayoría de las pymes chilenas. Este artículo transparenta los rangos de mercado 2026 y —más importante— qué deberías exigir a cambio de cada peso.',
    sections: [
      {
        h: 'Rangos de mercado en Chile (fee mensual, 2026)',
        list: [
          'Manejo de redes sociales (parrilla + diseño + community): $250.000 – $600.000 CLP/mes.',
          'Redes + producción de contenido (reels grabados y editados): $400.000 – $900.000 CLP/mes.',
          'Publicidad digital (Meta/Google Ads, sin incluir presupuesto de pauta): $200.000 – $500.000 CLP/mes.',
          'Plan integral (estrategia + contenido + ads + web): $700.000 – $2.000.000 CLP/mes.',
        ],
      },
      {
        h: 'La pregunta correcta no es "¿cuánto cobra?" sino "¿qué me devuelve?"',
        p: [
          'Un fee de $500.000 que genera $3.000.000 en ventas nuevas es barato. Un fee de $200.000 que solo publica fotos con frases motivacionales es carísimo.',
          'Antes de contratar, define con la agencia UNA métrica de éxito: leads por WhatsApp, ventas del e-commerce, reservas, cotizaciones. Si no te proponen una métrica, están vendiendo humo.',
        ],
      },
      {
        h: 'Señales de alerta al cotizar',
        list: [
          'No te muestran resultados de otros clientes (números, no likes).',
          'Prometen "viralizar" tu marca o resultados garantizados en semanas.',
          'El contrato te amarra 12 meses sin salida.',
          'No sabes quién trabajará tu cuenta ni cuántas horas le dedican.',
        ],
      },
      {
        h: '¿Y el presupuesto de pauta (ads)?',
        p: [
          'Va aparte del fee. Para una pyme en Chile, un punto de partida razonable en Meta Ads es $150.000 – $500.000 CLP mensuales de pauta. Menos que eso, el algoritmo apenas tiene datos para optimizar; más, solo cuando ya hay campañas probadas y rentables.',
        ],
      },
    ],
    cta: 'Cuéntanos tu objetivo y te armamos un plan con precio cerrado y una métrica clara de éxito.',
  },
  {
    slug: 'como-aparecer-en-google-chile-seo-local',
    title: 'Cómo aparecer en Google en Chile: guía de SEO local para pymes',
    desc: 'Guía práctica de SEO local 2026: Google Business Profile, reseñas, keywords locales y contenido para que los clientes de tu comuna te encuentren primero.',
    tag: 'SEO',
    date: '2026-06-14',
    readMin: 8,
    intro:
      'Cuando alguien busca "cafetería en Ñuñoa" o "abogado en Providencia", Google decide en milisegundos qué negocios mostrar. Esta guía explica, sin tecnicismos, cómo entrar en esa lista — y es más alcanzable de lo que crees.',
    sections: [
      {
        h: '1. Google Business Profile: el 50% del SEO local es gratis',
        p: [
          'El perfil de Google (la ficha con mapa, horario y reseñas) es el factor más importante para búsquedas locales. Crearlo toma 20 minutos en business.google.com.',
        ],
        list: [
          'Completa TODO: categoría correcta, horarios, fotos reales, teléfono y sitio web.',
          'Usa la descripción para incluir tu comuna y servicio: "agencia de marketing digital en Santiago centro".',
          'Publica novedades cada 1-2 semanas: Google premia los perfiles activos.',
        ],
      },
      {
        h: '2. Reseñas: tu reputación es un factor de ranking',
        p: [
          'Los negocios con más reseñas (y mejores respuestas) aparecen más arriba. Pide la reseña justo después de una buena experiencia — un mensaje de WhatsApp con el link directo funciona mejor que cualquier cartel.',
          'Responde todas las reseñas, incluso las malas: Google lo mide y los futuros clientes lo leen.',
        ],
      },
      {
        h: '3. Tu web debe decir DÓNDE estás',
        list: [
          'Incluye tu ciudad/comuna en el título de la página de inicio y en los textos.',
          'Página de contacto con dirección, teléfono chileno (+56) y mapa.',
          'Datos estructurados de negocio local (schema.org LocalBusiness) — tu desarrollador sabe qué es.',
          'Velocidad: si tu web tarda más de 3 segundos en el celular, Google te baja.',
        ],
      },
      {
        h: '4. Contenido que responde búsquedas reales',
        p: [
          'Cada artículo que responde una pregunta real ("cuánto cuesta X en Chile", "cómo elegir Y") es una puerta de entrada nueva desde Google. Dos artículos buenos al mes superan a veinte publicaciones de relleno.',
        ],
      },
      {
        h: '¿Cuánto tarda en funcionar?',
        p: [
          'El perfil de Google puede mover la aguja en 2-4 semanas. El SEO de contenido rinde a los 3-6 meses, pero se acumula: lo que escribes hoy te trae clientes por años. Es la inversión de marketing con mejor relación precio/duración que existe.',
        ],
      },
    ],
    cta: '¿Prefieres que lo hagamos por ti? Auditamos tu presencia en Google y te decimos exactamente qué falta.',
  },
  {
    slug: 'instagram-para-negocios-chile-reels',
    title: 'Instagram para negocios en Chile: cómo conseguir clientes con reels',
    desc: 'Estrategia de reels 2026 para negocios chilenos: qué publicar, con qué frecuencia y cómo convertir views en ventas por WhatsApp. Con ejemplos reales.',
    tag: 'Contenido',
    date: '2026-06-07',
    readMin: 6,
    intro:
      'Un solo reel bien pensado puede superar las 200.000 reproducciones y llenar un local — lo hemos visto con nuestros propios clientes. Pero la mayoría de los negocios publica contenido que nadie ve. La diferencia está en el método, no en la suerte.',
    sections: [
      {
        h: 'Por qué reels (y no posts)',
        p: [
          'Instagram muestra los reels a personas que NO te siguen: es el único formato orgánico que te pone frente a clientes nuevos gratis. Un post bonito lo ven tus seguidores; un reel bueno lo ve tu comuna entera.',
        ],
      },
      {
        h: 'Los 3 tipos de reel que funcionan para negocios',
        list: [
          'Producto en acción: el completo saliendo de la plancha, el antes/después del proyecto. Sin guión, con buen audio y luz.',
          'Detrás de escena: cómo se hace, quién lo hace. La gente compra a personas, no a logos.',
          'Valor útil: "3 errores al elegir X", "cómo saber si Y". Te posiciona como experto.',
        ],
      },
      {
        h: 'El gancho: tienes 1,5 segundos',
        p: [
          'El 70% de la retención se decide en el primer segundo y medio. Empieza con movimiento, un resultado ("así quedó este local…") o una pregunta directa ("¿te ha pasado que…?"). Nunca empieces con tu logo.',
        ],
      },
      {
        h: 'Frecuencia realista para una pyme',
        p: [
          '3 reels a la semana bien hechos superan a uno diario mediocre. La constancia le enseña al algoritmo (y a tu público) que tu cuenta está viva. En 60-90 días de constancia se ve el cambio de alcance.',
        ],
      },
      {
        h: 'De views a ventas: el paso que casi todos olvidan',
        list: [
          'CTA claro en cada reel: "escríbenos por WhatsApp", "link en la bio".',
          'Bio con link directo a WhatsApp (no a un menú de links eterno).',
          'Responde los comentarios en la primera hora: el algoritmo lo premia y el cliente lo agradece.',
          'Mide lo que importa: mensajes recibidos por semana, no likes.',
        ],
      },
    ],
    cta: 'Producimos reels que superaron las 267.000 reproducciones para clientes reales. Hablemos de tu contenido.',
  },
  {
    slug: 'como-elegir-agencia-marketing-digital-chile',
    title: 'Cómo elegir una agencia de marketing digital en Chile (sin quemarte)',
    desc: 'Checklist 2026 para elegir agencia de marketing en Chile: qué preguntar antes de firmar, señales de alerta, qué exigir en el contrato y cómo comparar propuestas.',
    tag: 'Marketing',
    date: '2026-07-04',
    readMin: 7,
    intro:
      'Elegir mal una agencia cuesta caro dos veces: pagas meses de un servicio que no funciona y pierdes el tiempo de mercado que tu competencia sí aprovechó. Esta guía es el checklist que nos gustaría que todos los clientes usaran — incluso para evaluarnos a nosotros.',
    sections: [
      {
        h: 'Las 5 preguntas que debes hacer antes de firmar',
        list: [
          '¿Me pueden mostrar un caso con números? (ventas, leads, alcance — no likes ni "presencia de marca").',
          '¿Quién va a trabajar mi cuenta y cuántas horas al mes le dedica?',
          '¿Qué métrica vamos a usar para saber si esto funciona, y cuándo la revisamos?',
          '¿Qué pasa si quiero terminar el contrato? (si hay amarre de 12 meses, pregunta por qué).',
          '¿El dominio, la web y las cuentas publicitarias quedan a MI nombre?',
        ],
      },
      {
        h: 'Señales de alerta (corre)',
        list: [
          'Prometen resultados garantizados o "viralización" en semanas.',
          'Hablan de seguidores y likes en vez de clientes y ventas.',
          'No puedes hablar con nadie que haya trabajado con ellos.',
          'Su propia presencia digital es mala: web lenta, Instagram muerto.',
          'La propuesta es idéntica para tu restaurante que para una ferretería.',
        ],
      },
      {
        h: 'Agencia grande vs. equipo chico: qué conviene a una pyme',
        p: [
          'Las agencias grandes tienen procesos y respaldo, pero una pyme suele quedar en manos del practicante mientras paga tarifa de gerente. Los equipos chicos y senior te dan acceso directo a quien hace el trabajo — la pregunta clave no es el tamaño, sino quién toca tu cuenta.',
          'Nuestra recomendación honesta: elige por casos demostrables en negocios parecidos al tuyo y por la claridad de la propuesta, no por el tamaño de la oficina.',
        ],
      },
      {
        h: 'Cómo comparar dos propuestas',
        p: [
          'Iguala el alcance: ¿cuántas piezas de contenido, cuántas campañas, cuántas horas? Un fee más barato con la mitad del trabajo es más caro. Y exige que ambas incluyan la misma métrica de éxito para poder comparar resultados a los 3 meses.',
        ],
      },
    ],
    cta: 'Hazle estas mismas preguntas a BrandUp — nos gusta responderlas. Escríbenos por WhatsApp.',
  },
  {
    slug: 'como-vender-online-chile-guia-ecommerce',
    title: 'Cómo vender online en Chile en 2026: guía completa de e-commerce',
    desc: 'Todo lo que necesita una tienda online en Chile: Webpay o Mercado Pago, envíos, boleta electrónica, costos reales y los errores que matan las ventas.',
    tag: 'E-commerce',
    date: '2026-07-01',
    readMin: 8,
    intro:
      'Vender online en Chile ya no es opcional: tus clientes comparan precios desde el teléfono aunque compren en tu local. Pero montar una tienda que realmente venda involucra decisiones que nadie te explica junto. Aquí está todo en un solo lugar.',
    sections: [
      {
        h: 'Lo mínimo que necesita una tienda online chilena',
        list: [
          'Pasarela de pago: Webpay Plus (Transbank) o Mercado Pago — ambas aceptan débito y crédito chileno. Comisiones típicas: 1,5% – 3,5% por venta.',
          'Envíos: Chilexpress, Starken o Blue Express integrados, con retiro en tienda como opción (en Chile convierte mucho).',
          'Boleta electrónica: obligatoria ante el SII; se integra con la tienda.',
          'Fotos reales del producto: la razón nº1 de abandono es no saber qué estás comprando.',
        ],
      },
      {
        h: 'Los 4 errores que matan las ventas de un e-commerce',
        list: [
          'Checkout largo: cada campo extra que pides pierde compradores. Nombre, dirección, pago — nada más.',
          'Costos de envío sorpresa al final: muéstralos antes, o ofrece envío gratis sobre cierto monto.',
          'Web lenta en celular: en Chile más del 70% del tráfico de tiendas es móvil.',
          'Cero seguimiento: sin emails de carrito abandonado dejas plata sobre la mesa (recuperan entre un 5% y un 15% de las ventas perdidas).',
        ],
      },
      {
        h: '¿Shopify, WooCommerce o desarrollo a medida?',
        p: [
          'Shopify es rápido de montar pero pagas mensualidad en dólares y comisiones extra. WooCommerce es flexible pero exige mantención constante. El desarrollo a medida cuesta más al inicio y es más barato a largo plazo: sin mensualidades, velocidad superior y exactamente las funciones que tu negocio necesita.',
          'La respuesta correcta depende de tu volumen: para validar una idea, cualquier plataforma sirve; para un negocio que ya vende, la velocidad y el control se pagan solos.',
        ],
      },
      {
        h: 'Cuánto cuesta y cuánto demora',
        p: [
          'Una tienda online profesional en Chile cuesta entre $600.000 y $2.500.000 CLP según catálogo e integraciones, y toma de 3 a 8 semanas. Desconfía de "tiendas en 48 horas": ese apuro se paga después en ventas perdidas.',
        ],
      },
    ],
    cta: 'Construimos e-commerce que aumentaron el ticket promedio +450%. Cotiza tu tienda por WhatsApp.',
  },
  {
    slug: 'google-business-profile-guia-chile',
    title: 'Google Business Profile: la guía 2026 para negocios chilenos',
    desc: 'Cómo crear y optimizar tu perfil de Google gratis para aparecer en Maps y búsquedas locales en Chile: categorías, reseñas, fotos y errores comunes.',
    tag: 'SEO',
    date: '2026-06-25',
    readMin: 6,
    intro:
      'Cuando alguien busca tu rubro + tu comuna, Google muestra tres negocios en un mapa antes que cualquier página web. Estar en esos tres es gratis — solo requiere hacer bien un perfil que la mayoría de los negocios chilenos tiene abandonado o ni siquiera creó.',
    sections: [
      {
        h: 'Crear el perfil bien desde el día uno',
        list: [
          'Entra a business.google.com con la cuenta de Google del negocio (no la personal de alguien que se puede ir).',
          'Nombre exacto del negocio — sin agregar keywords ("Pizzería Roma", no "Pizzería Roma | La Mejor Pizza de Ñuñoa"): Google suspende perfiles por eso.',
          'Categoría principal correcta + 2-3 secundarias.',
          'Si atiendes a domicilio o sin local abierto al público, elige "empresa de servicios en el área" y define tu zona.',
          'Verifica apenas Google lo pida — sin verificación el perfil no aparece.',
        ],
      },
      {
        h: 'Optimización: lo que separa a los 3 primeros del resto',
        list: [
          'Fotos reales y recientes (mínimo 10): local, productos, equipo. Los perfiles con fotos reciben muchos más clics.',
          'Horarios siempre al día — incluidos feriados. Un "cerrado" incorrecto destruye confianza.',
          'Descripción con tu comuna y servicio incluidos de forma natural.',
          'Responde TODAS las reseñas, buenas y malas. Google lo mide y los clientes lo leen.',
          'Publica novedades cada 1-2 semanas: ofertas, productos nuevos, fotos.',
        ],
      },
      {
        h: 'Reseñas: el factor decisivo',
        p: [
          'Entre dos negocios similares, gana el que tiene más y mejores reseñas. Las reseñas deben ser de clientes reales — comprar reseñas falsas puede suspender tu perfil de forma permanente, y los clientes las detectan a kilómetros.',
          'El método que funciona: pedirla justo después de una buena experiencia, por WhatsApp, con el link directo a "escribir reseña". Sin rodeos: "¿Nos ayudas con una reseña en Google? Te toma 1 minuto: [link]".',
        ],
      },
      {
        h: 'Errores que suspenden perfiles en Chile',
        list: [
          'Poner keywords en el nombre del negocio.',
          'Usar una dirección donde no atiendes realmente.',
          'Crear múltiples perfiles para el mismo negocio.',
          'Reseñas falsas o intercambiadas entre negocios.',
        ],
      },
    ],
    cta: 'Configuramos y optimizamos tu perfil de Google como parte de nuestro servicio de SEO local. Hablemos.',
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

