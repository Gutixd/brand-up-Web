// Blog SEO — artículos en español orientados a búsquedas locales (Chile).
// Data-driven: agregar un post aquí lo publica automáticamente en /blog.

export interface BlogSection {
  h?: string;          // subtítulo (H2)
  p?: string[];        // párrafos
  list?: string[];     // lista con viñetas
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;       // H1 + <title>
  desc: string;        // meta description
  tag: string;
  date: string;        // ISO
  readMin: number;
  intro: string;
  // Respuesta directa en 1–2 frases, antes del cuerpo. Es lo que los
  // buscadores con IA citan (AEO): responde la pregunta del título de
  // inmediato, con cifras concretas y sin rodeos.
  answer?: string;
  sections: BlogSection[];
  // Preguntas frecuentes: se renderizan visibles Y como FAQPage en JSON-LD,
  // que es el formato que Google y los asistentes extraen para responder.
  faq?: BlogFaq[];
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

  // ─────────────────────────────────────────────────────────────────
  // Artículos orientados a preguntas concretas (AEO): cada uno responde
  // en las primeras dos frases y cierra con FAQ estructurado.
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'cuanto-cuesta-un-logo-profesional-en-chile',
    title: '¿Cuánto cuesta un logo profesional en Chile en 2026?',
    desc: 'Precios reales de diseño de logo en Chile 2026: desde $60.000 por un logo suelto hasta $1.200.000 por una identidad completa. Qué incluye cada rango.',
    tag: 'Branding',
    date: '2026-07-14',
    readMin: 5,
    intro:
      'El precio de un logo en Chile varía tanto que confunde: en Instagram encuentras logos a $15.000 y estudios que cobran más de un millón. La diferencia está en si compras un dibujo o un sistema de marca.',
    answer:
      'En Chile 2026, un logo suelto cuesta entre $60.000 y $250.000 CLP; una identidad visual completa (logo + paleta + tipografías + manual + aplicaciones) va de $400.000 a $1.200.000 CLP. Bajo $50.000 casi siempre es una plantilla reutilizada o un logo generado automáticamente.',
    sections: [
      {
        h: 'Los rangos reales en Chile',
        list: [
          'Logo generado por IA o plantilla: $0 – $30.000 CLP. No es exclusivo: otra empresa puede tener el mismo.',
          'Logo suelto por diseñador freelance: $60.000 – $250.000 CLP. Incluye el archivo, poco más.',
          'Identidad visual básica: $250.000 – $500.000 CLP. Logo, colores, tipografías y usos básicos.',
          'Identidad completa con manual de marca: $500.000 – $1.200.000 CLP. Suma aplicaciones, papelería, redes y reglas de uso.',
        ],
      },
      {
        h: '¿Por qué un logo puede costar $60.000 o $600.000?',
        p: [
          'Lo que encarece un proyecto de marca no es dibujar el símbolo: es el trabajo previo. Investigar a tu competencia, definir qué te diferencia, probar cómo se ve el logo en un letrero, en un envase y en una foto de perfil de 40 píxeles.',
          'Un logo barato suele fallar justo ahí: se ve bien en la presentación y se desarma en la vida real. No tiene versión horizontal, no funciona en una sola tinta, o el archivo es un JPG que no puedes ampliar sin que se pixele.',
        ],
      },
      {
        h: 'Qué archivos debes exigir siempre',
        list: [
          'Vectores editables (.ai, .svg o .eps): sin esto no puedes imprimir en grande.',
          'Versiones en positivo, negativo y una sola tinta.',
          'Versión horizontal y versión compacta para redes.',
          'Los colores en HEX, RGB y CMYK (los dos últimos para imprenta).',
          'La cesión de derechos por escrito: la marca debe quedar a tu nombre.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un logo en Chile?',
        a: 'Entre $60.000 y $250.000 CLP por un logo suelto, y entre $400.000 y $1.200.000 CLP por una identidad visual completa con manual de marca. Los precios bajo $50.000 suelen ser plantillas no exclusivas.',
      },
      {
        q: '¿Cuánto se demora el diseño de un logo?',
        a: 'Un logo suelto toma entre 1 y 2 semanas. Una identidad visual completa toma entre 3 y 6 semanas, porque incluye investigación, propuestas, ajustes y la preparación de todas las aplicaciones.',
      },
      {
        q: '¿El logo queda a mi nombre?',
        a: 'Debe quedar a tu nombre. Exige por escrito la cesión de derechos patrimoniales sobre el diseño. Además, para protegerlo legalmente en Chile debes registrarlo como marca comercial en INAPI, que es un trámite aparte.',
      },
      {
        q: '¿Necesito registrar mi logo en INAPI?',
        a: 'No es obligatorio para operar, pero sí muy recomendable. Sin registro en INAPI, otra empresa puede registrar un nombre igual o parecido y obligarte a dejar de usarlo. El costo del registro ronda las 0,5 UTM por clase más la publicación.',
      },
    ],
    cta: 'Diseñamos identidades de marca completas, no logos sueltos. Cuéntanos de tu negocio y te enviamos una propuesta.',
  },
  {
    slug: 'cuanto-cuesta-manejar-redes-sociales-en-chile',
    title: '¿Cuánto cuesta manejar las redes sociales de un negocio en Chile?',
    desc: 'Precios reales de community manager y gestión de redes en Chile 2026: desde $150.000 hasta $900.000 mensuales. Qué incluye cada plan y qué preguntar.',
    tag: 'Social Media',
    date: '2026-07-16',
    readMin: 6,
    intro:
      'Contratar quién lleve tus redes es una de las decisiones donde más varía el precio en Chile. Y donde más fácil es pagar por algo que no mueve la aguja.',
    answer:
      'En Chile 2026, la gestión mensual de redes sociales cuesta entre $150.000 y $900.000 CLP. Un plan básico (8–12 publicaciones al mes, sin video) parte cerca de $200.000; uno con producción de reels y pauta gestionada va de $450.000 a $900.000 mensuales.',
    sections: [
      {
        h: 'Los rangos mensuales en Chile',
        list: [
          'Plan básico: $150.000 – $300.000 CLP. Entre 8 y 12 publicaciones, diseño simple, sin video.',
          'Plan intermedio: $300.000 – $550.000 CLP. Suma reels, historias y respuesta de mensajes.',
          'Plan completo: $550.000 – $900.000 CLP. Producción audiovisual, estrategia, pauta gestionada y reportes.',
          'La inversión en publicidad (Meta Ads) va aparte y la paga directamente el cliente a Meta.',
        ],
      },
      {
        h: 'El error más caro: pagar por cantidad de posts',
        p: [
          'Muchos planes se venden por número de publicaciones. Es la métrica equivocada: veinte publicaciones que nadie ve valen menos que cuatro reels bien pensados que llegan a miles de personas.',
          'En nuestro trabajo con El Chacha Pollo, lo que cambió el negocio no fue publicar más seguido, sino producir reels diseñados para alcance. Un solo reel superó las 260 mil reproducciones y llenó el local un fin de semana.',
        ],
      },
      {
        h: 'Qué preguntar antes de contratar',
        list: [
          '¿Quién graba y edita el video? Si no hay producción, no hay reels, y sin reels casi no hay alcance nuevo.',
          '¿Responden mensajes y comentarios? Muchos planes no lo incluyen y ahí se pierden las ventas.',
          '¿La pauta está incluida o va aparte? Debe quedar claro por escrito.',
          '¿Qué reportan cada mes? Exige alcance, seguidores nuevos y mensajes recibidos, no solo "likes".',
          '¿Las cuentas quedan a tu nombre? Nunca entregues la propiedad de tu perfil.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un community manager en Chile?',
        a: 'Entre $150.000 y $900.000 CLP mensuales según el alcance del servicio. Un freelance con plan básico parte cerca de $200.000; una agencia con producción audiovisual y pauta gestionada cobra entre $450.000 y $900.000.',
      },
      {
        q: '¿Cuánto debo invertir en publicidad además del servicio?',
        a: 'Para un negocio local en Chile, una pauta de $100.000 a $300.000 CLP mensuales en Meta Ads ya genera resultados medibles. Ese monto se paga directo a Meta y es independiente del honorario de la agencia.',
      },
      {
        q: '¿En cuánto tiempo se ven resultados en redes sociales?',
        a: 'El alcance y la interacción se mueven en 4 a 8 semanas. El efecto en ventas suele notarse entre el segundo y el cuarto mes, porque depende de acumular contenido y de que la audiencia reconozca la marca.',
      },
    ],
    cta: 'Llevamos las redes de marcas chilenas con producción de contenido incluida. Te armamos un plan según tu rubro.',
  },
  {
    slug: 'instagram-o-tiktok-para-negocios-en-chile',
    title: 'Instagram o TikTok: ¿cuál conviene para un negocio en Chile?',
    desc: '¿Instagram o TikTok para tu negocio en Chile? Comparación honesta por rubro, edad de audiencia y tipo de venta, con recomendaciones concretas.',
    tag: 'Social Media',
    date: '2026-07-18',
    readMin: 5,
    intro:
      'Es la pregunta que más nos hacen las pymes chilenas. La respuesta corta incomoda: depende de a quién le vendes y de cuánto puedes producir.',
    answer:
      'Para la mayoría de los negocios locales en Chile conviene partir por Instagram, porque concentra el público con mayor poder de compra y permite vender por mensaje directo. TikTok conviene si tu público es menor de 30 años o si puedes producir video con constancia, ya que da mucho más alcance a cuentas nuevas.',
    sections: [
      {
        h: 'Cuándo conviene Instagram',
        list: [
          'Vendes a personas de 25 a 55 años.',
          'Tu venta se cierra por mensaje directo o WhatsApp.',
          'Tu producto entra por los ojos: comida, ropa, belleza, inmobiliario, servicios profesionales.',
          'Necesitas que tu perfil funcione como catálogo y carta de presentación.',
        ],
      },
      {
        h: 'Cuándo conviene TikTok',
        list: [
          'Tu público es menor de 30 años.',
          'Puedes grabar video con frecuencia (al menos 3 veces por semana).',
          'Partes de cero: TikTok todavía reparte alcance a cuentas sin seguidores, Instagram mucho menos.',
          'Tu negocio tiene algo entretenido que mostrar: proceso, detrás de escena, humor.',
        ],
      },
      {
        h: 'La estrategia que usamos en Chile',
        p: [
          'En la práctica no es una elección excluyente. Se produce el video una vez, en vertical, y se publica en ambas plataformas adaptando el gancho de los primeros tres segundos.',
          'Lo que no recomendamos es abrir cinco redes y no alimentar ninguna. Es preferible una cuenta viva que cuatro abandonadas: un perfil con la última publicación de hace seis meses transmite que el negocio cerró.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Qué red social conviene más para vender en Chile?',
        a: 'Instagram sigue siendo la más efectiva para venta directa en Chile, sobre todo por mensajes directos y para públicos de 25 a 55 años. TikTok supera a Instagram en alcance para cuentas nuevas y públicos jóvenes.',
      },
      {
        q: '¿Puedo publicar lo mismo en Instagram y TikTok?',
        a: 'Sí, pero adaptando el inicio. TikTok exige un gancho más directo en los primeros segundos y penaliza los videos con marca de agua de otras plataformas, así que conviene exportar el video limpio y subirlo por separado.',
      },
      {
        q: '¿Cuántas veces por semana hay que publicar?',
        a: 'En Instagram, entre 3 y 5 publicaciones semanales con al menos un reel. En TikTok, entre 3 y 7 videos semanales. La constancia importa más que la frecuencia alta durante un mes y luego nada.',
      },
    ],
    cta: 'Definimos en qué red conviene que estés y producimos el contenido. Cuéntanos tu rubro y te lo decimos sin vueltas.',
  },
  {
    slug: 'agencia-de-marketing-digital-en-maipu',
    title: 'Agencia de marketing digital en Maipú: qué buscar y cuánto cuesta',
    desc: 'Guía para contratar una agencia de marketing digital en Maipú y el poniente de Santiago: precios, servicios y cómo evaluar si conviene.',
    tag: 'SEO Local',
    date: '2026-07-20',
    readMin: 5,
    intro:
      'Maipú es una de las comunas más grandes de Chile y una de las más competitivas para el comercio local. Aparecer primero cuando alguien busca "cerca mío" puede valer más que cualquier campaña masiva.',
    answer:
      'Una agencia de marketing digital en Maipú cobra entre $250.000 y $900.000 CLP mensuales según el servicio. Para un negocio local de la comuna, lo primero que rinde es el perfil de Google Business optimizado y contenido en Instagram geolocalizado, antes que cualquier campaña de alcance nacional.',
    sections: [
      {
        h: 'Por qué el marketing local es distinto en Maipú',
        p: [
          'Un negocio en Maipú no compite con todo Chile: compite con los otros locales del mismo barrio. Eso cambia la estrategia por completo. No necesitas millones de visitas, necesitas aparecer cuando alguien a tres cuadras busca lo que vendes.',
          'Trabajamos con instituciones y negocios de la zona poniente de Santiago, entre ellos el Templo Votivo de Maipú y la comunidad de Duoc UC Hub House Maipú, y el patrón se repite: la búsqueda local convierte mucho mejor que la publicidad amplia.',
        ],
      },
      {
        h: 'Lo primero que hay que ordenar',
        list: [
          'Perfil de Google Business con categoría correcta, horarios reales, fotos actuales y dirección verificada.',
          'Reseñas: pedirlas de forma sistemática después de cada buena atención.',
          'Un sitio web que cargue rápido en celular y tenga el teléfono visible sin hacer scroll.',
          'Instagram con ubicación etiquetada en cada publicación.',
          'Campañas de Meta Ads con radio geográfico acotado a la comuna y alrededores.',
        ],
      },
      {
        h: 'Cómo evaluar si una agencia te sirve',
        list: [
          'Pide casos reales de negocios locales, con métricas.',
          'Desconfía de quien promete "primer lugar en Google" en un plazo fijo: nadie controla el algoritmo.',
          'Confirma que el dominio, el sitio y las cuentas queden a tu nombre.',
          'Exige un reporte mensual entendible, no capturas de pantalla sueltas.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra una agencia de marketing digital en Maipú?',
        a: 'Entre $250.000 y $900.000 CLP mensuales según los servicios incluidos. Un plan de SEO local con gestión de Google Business y redes parte cerca de $300.000 mensuales.',
      },
      {
        q: '¿Conviene una agencia local o una de otra comuna?',
        a: 'Lo que importa no es la dirección de la agencia sino que entienda la búsqueda local. Una agencia de Santiago Centro puede posicionar perfectamente un negocio de Maipú si trabaja bien el perfil de Google Business y la segmentación geográfica.',
      },
      {
        q: '¿Cuánto demora aparecer en las búsquedas locales de Maipú?',
        a: 'Con el perfil de Google Business bien optimizado, los primeros movimientos se ven entre 3 y 8 semanas. Posicionar el sitio web por búsquedas de la comuna toma entre 3 y 6 meses.',
      },
    ],
    cta: 'Trabajamos con negocios de Maipú y toda la Región Metropolitana. Cuéntanos dónde estás y qué vendes.',
  },
  {
    slug: 'cuanto-tarda-hacer-una-pagina-web-en-chile',
    title: '¿Cuánto se demora hacer una página web en Chile?',
    desc: 'Plazos reales para desarrollar una página web en Chile: de 1 semana una landing a 12 semanas un e-commerce. Qué atrasa los proyectos y cómo evitarlo.',
    tag: 'Diseño Web',
    date: '2026-07-21',
    readMin: 5,
    intro:
      'Casi todos los atrasos en proyectos web tienen la misma causa, y no es técnica. Es el contenido.',
    answer:
      'Una landing page toma de 1 a 2 semanas, un sitio corporativo de 3 a 6 semanas y un e-commerce de 6 a 12 semanas. El plazo depende menos del desarrollo que de la rapidez con que el cliente entrega textos, fotos y aprobaciones.',
    sections: [
      {
        h: 'Plazos reales por tipo de proyecto',
        list: [
          'Landing page (1 página): 1 a 2 semanas.',
          'Sitio corporativo (4 a 8 páginas): 3 a 6 semanas.',
          'E-commerce con pagos y despacho: 6 a 12 semanas.',
          'Migración de un sitio existente: 1 a 3 semanas, más hasta 48 horas de propagación de DNS.',
        ],
      },
      {
        h: 'Lo que realmente atrasa un proyecto',
        p: [
          'En nuestra experiencia, el desarrollo casi nunca es el cuello de botella. Lo son los textos que no llegan, las fotos en baja resolución, y las rondas de revisión donde cada vez opina una persona distinta.',
          'La forma de acelerar un proyecto web es simple: define desde el inicio quién aprueba, junta las fotos antes de empezar y escribe los textos aunque sea en borrador. Un proyecto con contenido listo se entrega en la mitad de tiempo.',
        ],
      },
      {
        h: 'Cómo llegar preparado',
        list: [
          'Reúne fotos reales de tu negocio, producto o equipo, en buena resolución.',
          'Escribe qué hace tu empresa en tres frases.',
          'Lista los servicios con una descripción corta de cada uno.',
          'Ten a mano los accesos a tu dominio y hosting actual.',
          'Define una sola persona que aprueba.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto se demora una página web simple?',
        a: 'Una landing page de una sola sección toma entre 1 y 2 semanas si el contenido está listo. Sin textos ni fotos definidas, el mismo proyecto puede estirarse a un mes.',
      },
      {
        q: '¿Cuánto demora migrar un sitio a otro hosting?',
        a: 'La migración técnica toma entre 1 y 3 semanas, y los cambios de DNS pueden tardar hasta 48 horas en propagarse por completo. Bien planificada, la migración no deja el sitio caído.',
      },
      {
        q: '¿Puedo pedir cambios después de publicar el sitio?',
        a: 'Sí. Lo habitual es incluir una ventana de ajustes sin costo (por ejemplo 30 días) para correcciones y detalles. Los cambios de alcance, como agregar secciones nuevas, se cotizan aparte.',
      },
    ],
    cta: 'Te damos un plazo realista y comprometido por escrito antes de empezar. Cuéntanos qué necesitas.',
  },
  {
    slug: 'seo-o-publicidad-pagada-que-conviene-en-chile',
    title: 'SEO o publicidad pagada: ¿qué conviene primero en Chile?',
    desc: 'SEO vs Google Ads y Meta Ads en Chile: cuál da resultados antes, cuál cuesta menos a largo plazo y cómo combinarlos según tu presupuesto.',
    tag: 'Marketing',
    date: '2026-07-22',
    readMin: 6,
    intro:
      'Es una falsa disyuntiva que cuesta cara. Elegir mal el orden puede significar meses sin ventas o miles de pesos quemados en avisos.',
    answer:
      'Si necesitas ventas este mes, parte por publicidad pagada: da resultados en días. Si buscas bajar el costo de adquisición a mediano plazo, invierte en SEO, que tarda de 3 a 6 meses pero sigue trayendo clientes sin pagar por cada clic. Lo ideal es publicidad para vender ahora y SEO en paralelo para depender menos de ella.',
    sections: [
      {
        h: 'Publicidad pagada: rápida pero se apaga',
        p: [
          'Meta Ads y Google Ads encienden el tráfico en cuestión de horas. Puedes validar si tu oferta funciona en una semana, con presupuestos desde $100.000 CLP mensuales.',
          'El problema es que el flujo se corta el día que dejas de pagar. Si todo tu negocio depende de la pauta, cualquier alza de costos o bloqueo de cuenta te deja sin ventas de un día para otro.',
        ],
      },
      {
        h: 'SEO: lento pero acumulativo',
        p: [
          'El posicionamiento orgánico tarda entre 3 y 6 meses en mostrar movimiento real en Chile, y hasta un año en categorías competitivas. A cambio, una página bien posicionada trae clientes durante años sin costo por clic.',
          'Para negocios locales el SEO rinde más rápido que para los nacionales: optimizar el perfil de Google Business y las páginas por comuna puede mover resultados en semanas, no meses.',
        ],
      },
      {
        h: 'Cómo repartir el presupuesto',
        list: [
          'Recién partiendo y necesitas ventas ya: 80% publicidad, 20% ordenar el SEO básico.',
          'Negocio con ventas estables: 50% publicidad, 50% contenido y SEO.',
          'Negocio consolidado: 30% publicidad, 70% contenido, SEO y fidelización.',
          'En todos los casos: primero el sitio rápido y el perfil de Google ordenado. Pagar avisos hacia un sitio lento es tirar plata.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Qué da resultados más rápido, SEO o Google Ads?',
        a: 'Google Ads y Meta Ads dan resultados en días. El SEO tarda entre 3 y 6 meses en Chile, pero su costo por cliente baja con el tiempo mientras el de la publicidad se mantiene o sube.',
      },
      {
        q: '¿Cuánto hay que invertir en Meta Ads en Chile para ver resultados?',
        a: 'Desde $100.000 CLP mensuales ya se obtienen datos útiles para un negocio local. Para campañas de venta sostenida en la Región Metropolitana, lo habitual es partir entre $200.000 y $500.000 mensuales.',
      },
      {
        q: '¿Se puede hacer SEO sin blog?',
        a: 'Sí, optimizando las páginas de servicio, la velocidad del sitio y el perfil de Google Business. Pero el blog es lo que permite responder las preguntas que la gente busca antes de comprar, y hoy es también lo que citan los buscadores con inteligencia artificial.',
      },
    ],
    cta: 'Te decimos honestamente qué conviene primero según tu presupuesto y tu rubro. Sin venderte lo que no necesitas.',
  },
  {
    slug: 'errores-comunes-paginas-web-pymes-chile',
    title: '7 errores que hacen que la web de tu pyme no venda',
    desc: 'Los errores más frecuentes en páginas web de pymes chilenas: lentitud, falta de contacto visible, textos sobre la empresa y no sobre el cliente.',
    tag: 'Diseño Web',
    date: '2026-07-10',
    readMin: 6,
    intro:
      'Revisamos decenas de sitios de pymes chilenas al año. Los problemas se repiten tanto que se podrían enumerar con los ojos cerrados.',
    answer:
      'Los errores más costosos son: el sitio demora más de 3 segundos en cargar, el teléfono no se ve sin hacer scroll, los textos hablan de la empresa en vez del problema del cliente, y no hay ninguna prueba real de trabajos anteriores. Corregir esos cuatro suele mejorar las consultas sin cambiar el diseño.',
    sections: [
      {
        h: 'Los 7 errores más frecuentes',
        list: [
          'Carga lenta: sobre 3 segundos en celular, la mitad de las visitas se va antes de ver nada.',
          'Contacto escondido: el teléfono o WhatsApp debe verse sin hacer scroll.',
          'Textos autorreferentes: "somos una empresa líder con vasta trayectoria" no le resuelve nada a nadie.',
          'Sin prueba: ni fotos reales, ni casos, ni reseñas. Solo promesas.',
          'Fotos de banco de imágenes: gente sonriendo en oficinas que no son la tuya. Se nota y resta confianza.',
          'Formularios largos: cada campo extra reduce los envíos. Pide lo mínimo.',
          'Sin medición: si no tienes analítica instalada, no sabes qué página falla.',
        ],
      },
      {
        h: 'El error más caro de todos',
        p: [
          'Escribir para uno mismo en vez de para el cliente. La página de inicio no debería empezar contando la historia de la empresa, sino nombrando el problema que la persona vino a resolver.',
          'Una prueba simple: tapa el logo de tu sitio y léelo. Si el texto podría servirle a cualquier competidor, no está diciendo nada.',
        ],
      },
      {
        h: 'Cómo revisar tu propio sitio en 10 minutos',
        list: [
          'Ábrelo en tu celular con datos móviles, no con WiFi. Cuenta los segundos.',
          '¿Ves cómo contactar sin hacer scroll?',
          'Lee el primer párrafo: ¿habla de ti o del cliente?',
          'Busca una prueba real: caso, foto, reseña, número.',
          'Prueba el formulario: ¿llega el correo? Muchos no funcionan hace meses.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto debe demorar en cargar una página web?',
        a: 'Bajo 2,5 segundos en celular con datos móviles. Sobre 3 segundos, alrededor de la mitad de los visitantes abandona antes de ver el contenido.',
      },
      {
        q: '¿Sirve tener un formulario de contacto o mejor solo WhatsApp?',
        a: 'En Chile conviene tener ambos, con WhatsApp destacado. La mayoría de las consultas de pymes llegan por WhatsApp, pero el formulario sirve para quienes escriben fuera de horario o desde el computador.',
      },
      {
        q: '¿Vale la pena rehacer un sitio que tiene pocos años?',
        a: 'Si carga lento, no se ve bien en celular o no genera consultas, sí. Muchas veces basta con rehacer la estructura y los textos manteniendo el dominio, lo que además conserva el posicionamiento ganado.',
      },
    ],
    cta: 'Hacemos una revisión honesta de tu sitio actual y te decimos qué corregir primero. Escríbenos.',
  },
  {
    slug: 'como-medir-si-tu-marketing-digital-funciona',
    title: 'Cómo saber si tu marketing digital realmente está funcionando',
    desc: 'Qué métricas mirar y cuáles ignorar para evaluar tu marketing digital en Chile: costo por lead, conversión y retorno, en vez de likes.',
    tag: 'Marketing',
    date: '2026-07-08',
    readMin: 6,
    intro:
      'Los likes son la métrica más tranquilizadora y la más inútil. Estas son las que sí deciden si conviene seguir invirtiendo.',
    answer:
      'Mide tres cosas: cuántos contactos reales llegan al mes, cuánto te cuesta cada uno (inversión dividida por número de contactos) y cuántos terminan comprando. Si no puedes responder esas tres preguntas, no estás midiendo, estás mirando.',
    sections: [
      {
        h: 'Las métricas que importan',
        list: [
          'Contactos por mes: consultas por WhatsApp, formulario y mensajes directos, sumados.',
          'Costo por contacto: lo que invertiste dividido por la cantidad de contactos.',
          'Tasa de cierre: de cada 10 contactos, cuántos compran.',
          'Ticket promedio: cuánto gasta un cliente en promedio.',
          'Retorno: ingresos atribuibles dividido por lo invertido.',
        ],
      },
      {
        h: 'Las métricas que distraen',
        p: [
          'Los seguidores, los likes y las impresiones sirven para entender el alcance, pero no para decidir presupuesto. Una cuenta puede duplicar seguidores y no vender un peso más.',
          'Lo mismo pasa con las visitas al sitio. Diez mil visitas que no dejan un contacto valen menos que trescientas visitas de gente que sí necesita lo que vendes.',
        ],
      },
      {
        h: 'Cómo empezar a medir sin herramientas caras',
        list: [
          'Anota en una planilla los contactos de cada mes y de dónde vinieron.',
          'Usa un enlace de WhatsApp distinto en cada canal para saber cuál trae más.',
          'Instala analítica en el sitio (basta la gratuita) y revisa qué páginas reciben visitas.',
          'Pregunta a cada cliente nuevo cómo te encontró. Es la medición más barata y más honesta.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuál es un buen costo por contacto en Chile?',
        a: 'Depende del rubro y del ticket. Para servicios locales en Chile, entre $2.000 y $12.000 CLP por contacto es un rango habitual. Lo importante no es el número absoluto sino que sea menor que la ganancia que deja cada cliente.',
      },
      {
        q: '¿Cada cuánto debo revisar las métricas?',
        a: 'Una revisión mensual es suficiente para decidir. Mirar los números todos los días lleva a cambiar campañas antes de que junten datos y arruina los resultados.',
      },
      {
        q: '¿Qué reporte debería entregarme una agencia?',
        a: 'Contactos generados, costo por contacto, alcance, y qué se hizo ese mes, en lenguaje entendible. Si el reporte son capturas de pantalla sin conclusiones ni recomendaciones, no sirve para tomar decisiones.',
      },
    ],
    cta: 'Instalamos medición real y reportamos en números claros, no en capturas de pantalla. Conversemos.',
  },
  {
    slug: 'whatsapp-business-para-pymes-en-chile',
    title: 'WhatsApp Business para pymes en Chile: guía práctica',
    desc: 'Cómo usar WhatsApp Business en Chile para vender más: catálogo, respuestas rápidas, enlaces directos y errores que hacen perder clientes.',
    tag: 'Marketing',
    date: '2026-07-05',
    readMin: 5,
    intro:
      'En Chile, la mayoría de las ventas de una pyme terminan cerrándose por WhatsApp. Y sin embargo casi nadie lo tiene configurado bien.',
    answer:
      'Instala WhatsApp Business (es gratis y distinto del WhatsApp normal), configura el mensaje de bienvenida, el horario de atención, el catálogo y las respuestas rápidas. Con eso solo ya respondes más rápido, y la velocidad de respuesta es lo que más influye en si la persona compra o se va con la competencia.',
    sections: [
      {
        h: 'Lo que debes configurar sí o sí',
        list: [
          'Perfil completo: nombre del negocio, rubro, dirección, horario y sitio web.',
          'Mensaje de bienvenida automático para quien escribe por primera vez.',
          'Mensaje de ausencia con el horario real de atención.',
          'Respuestas rápidas para las preguntas de siempre: precios, despacho, formas de pago.',
          'Catálogo con fotos y precios, para no repetir la misma información cada vez.',
          'Etiquetas para separar "consulta", "cotizado" y "cliente".',
        ],
      },
      {
        h: 'El enlace directo que casi nadie usa',
        p: [
          'Puedes crear un enlace que abre una conversación contigo con un mensaje ya escrito. El formato es wa.me/56912345678 seguido de un texto predefinido.',
          'Sirve para poner en el sitio web, en la biografía de Instagram y en los avisos. Baja la fricción: la persona no tiene que agendar tu número ni pensar qué escribir.',
        ],
      },
      {
        h: 'Los errores que hacen perder ventas',
        list: [
          'Responder al día siguiente: en Chile, la mayoría compra a quien responde primero.',
          'Usar el WhatsApp personal y mezclar clientes con la familia.',
          'No tener precios a mano y hacer esperar por una cotización simple.',
          'Escribir párrafos largos: en el celular se leen mal, conviene mensajes cortos.',
          'No pedir la reseña al final de una venta bien atendida.',
        ],
      },
    ],
    faq: [
      {
        q: '¿WhatsApp Business es gratis en Chile?',
        a: 'Sí, la aplicación WhatsApp Business es gratuita. Lo que tiene costo es la API de WhatsApp Business, pensada para empresas grandes con alto volumen de mensajes y automatizaciones avanzadas.',
      },
      {
        q: '¿Puedo usar el mismo número en WhatsApp normal y Business?',
        a: 'No al mismo tiempo en el mismo teléfono. Conviene tener un número dedicado al negocio, lo que además permite que otra persona lo atienda sin acceder a tus conversaciones personales.',
      },
      {
        q: '¿Cómo hago un enlace directo a mi WhatsApp?',
        a: 'Usa el formato wa.me/ seguido de tu número con código de país sin el signo más, por ejemplo wa.me/56912345678. Puedes agregarle un mensaje predefinido para que la persona solo tenga que apretar enviar.',
      },
    ],
    cta: 'Configuramos tu WhatsApp Business y lo conectamos a tu sitio y tus campañas. Escríbenos, valga la redundancia, por WhatsApp.',
  },
  {
    slug: 'automatizacion-e-ia-para-pymes-chilenas',
    title: 'Automatización e IA para pymes chilenas: por dónde partir',
    desc: 'Qué se puede automatizar hoy en una pyme chilena con IA: respuestas, cotizaciones, agendamiento y reportes. Con costos y casos reales.',
    tag: 'Automatización',
    date: '2026-07-02',
    readMin: 6,
    intro:
      'La conversación sobre inteligencia artificial en las pymes suele quedarse en lo abstracto. Esto es lo concreto: qué se puede automatizar hoy, cuánto cuesta y qué no conviene automatizar.',
    answer:
      'Lo que más rinde automatizar en una pyme chilena es la respuesta a preguntas repetidas, el agendamiento de horas, el envío de cotizaciones estándar y los reportes mensuales. Son tareas de alto volumen y baja decisión. Lo que no conviene automatizar es la atención cuando el cliente ya tiene un problema.',
    sections: [
      {
        h: 'Qué conviene automatizar primero',
        list: [
          'Respuestas frecuentes: horarios, precios base, formas de pago, dirección.',
          'Agendamiento: un enlace donde el cliente elige hora sin coordinación por mensaje.',
          'Cotizaciones estándar: si el 70% de tus cotizaciones son variaciones de lo mismo, se puede plantillar.',
          'Recordatorios: confirmación de hora, aviso de despacho, seguimiento posventa.',
          'Reportes: consolidar ventas y consultas del mes sin armar la planilla a mano.',
        ],
      },
      {
        h: 'Qué NO conviene automatizar',
        p: [
          'El reclamo de un cliente molesto. Un bot respondiendo a alguien que ya está enojado empeora la situación y se viraliza.',
          'La venta consultiva de ticket alto. Si tu cliente invierte varios millones, quiere hablar con una persona.',
          'Tampoco conviene automatizar sin avisar: si al otro lado hay un sistema, dilo. La gente lo detecta y la confianza se pierde más rápido de lo que se recupera.',
        ],
      },
      {
        h: 'Costos reales en Chile',
        list: [
          'Automatizaciones simples con herramientas no-code: $150.000 – $500.000 CLP de implementación.',
          'Chatbot con base de conocimiento propia: $400.000 – $1.500.000 CLP.',
          'Integraciones a medida con tu sistema de gestión: desde $1.000.000 CLP.',
          'Suma costos mensuales de las plataformas: normalmente entre $10.000 y $60.000 CLP al mes.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Qué puede automatizar una pyme chilena con IA hoy?',
        a: 'Respuestas a preguntas frecuentes, agendamiento de horas, cotizaciones estándar, recordatorios y reportes mensuales. Son tareas repetitivas donde la automatización ahorra horas sin afectar la calidad de atención.',
      },
      {
        q: '¿Cuánto cuesta automatizar procesos en una pyme?',
        a: 'Entre $150.000 y $500.000 CLP para automatizaciones simples, y desde $1.000.000 CLP para integraciones a medida con sistemas existentes. A eso se suma el costo mensual de las plataformas, habitualmente entre $10.000 y $60.000.',
      },
      {
        q: '¿Un chatbot puede reemplazar a la persona que atiende?',
        a: 'No conviene. Funciona bien como primer filtro para preguntas repetidas y para atender fuera de horario, pero debe poder derivar a una persona en cuanto la consulta se sale del guion o el cliente lo pide.',
      },
    ],
    cta: 'Implementamos automatizaciones que ahorran horas reales, no juguetes. Cuéntanos qué tarea te consume más tiempo.',
  },
  {
    slug: 'cuando-conviene-rediseñar-la-marca-de-tu-negocio',
    title: '¿Cuándo conviene rediseñar la marca de tu negocio?',
    desc: 'Señales de que tu marca necesita un rediseño, cuándo NO conviene cambiarla y cómo hacerlo sin perder a los clientes que ya te reconocen.',
    tag: 'Branding',
    date: '2026-06-30',
    readMin: 5,
    intro:
      'Rediseñar una marca porque uno se aburrió de verla es la peor razón posible. Estas son las razones que sí lo justifican.',
    answer:
      'Conviene rediseñar cuando tu marca ya no representa lo que vendes, cuando técnicamente no funciona (no se lee en celular, no tienes vectores) o cuando te confunden con la competencia. No conviene rediseñar solo por cansancio interno: tus clientes recién empiezan a reconocerte cuando tú ya estás aburrido.',
    sections: [
      {
        h: 'Señales de que sí conviene',
        list: [
          'Cambió tu negocio: partiste vendiendo una cosa y hoy vendes otra.',
          'La marca no funciona en digital: no se lee en un ícono de app o en una foto de perfil.',
          'No tienes archivos editables y cada impresión sale distinta.',
          'Te confunden con un competidor.',
          'Subiste de categoría: tus precios y tu servicio crecieron, tu imagen no.',
        ],
      },
      {
        h: 'Cuándo NO conviene',
        p: [
          'Cuando la única razón es que al dueño le aburre. Un cliente ve tu logo unas pocas veces al mes; tú lo ves cien veces al día. Ese desgaste es tuyo, no del mercado.',
          'Tampoco conviene rediseñar en medio de una campaña grande, ni si el problema real es otro. Si no vendes porque tu producto llega tarde, un logo nuevo no lo arregla.',
        ],
      },
      {
        h: 'Cómo cambiar sin perder reconocimiento',
        list: [
          'Evolución antes que revolución: conserva el color o la forma que la gente ya asocia contigo.',
          'Anuncia el cambio: muestra el antes y el después, no aparezcas distinto de un día para otro.',
          'Cambia todo al mismo tiempo: redes, sitio, letrero, boletas. Una marca a medio cambiar se ve desordenada.',
          'Guarda la versión anterior: sirve para aniversarios y para contar la historia.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cada cuánto se debe renovar una marca?',
        a: 'No hay un plazo fijo. Las marcas sólidas hacen ajustes menores cada 5 a 10 años y rediseños profundos solo cuando cambia el negocio. Cambiar con más frecuencia impide que la gente te reconozca.',
      },
      {
        q: '¿Un rediseño de marca afecta mi posicionamiento en Google?',
        a: 'El logo en sí no afecta el SEO. Lo que sí afecta es cambiar el dominio o la estructura del sitio. Si mantienes el dominio y rediriges bien las páginas, el posicionamiento se conserva.',
      },
      {
        q: '¿Cuánto cuesta un rediseño de marca en Chile?',
        a: 'Entre $400.000 y $1.200.000 CLP para una identidad completa con manual de marca. Si además hay que rehacer letreros, envases y sitio web, el proyecto completo puede superar los $2.000.000.',
      },
    ],
    cta: 'Evaluamos si tu marca necesita un rediseño o solo un orden. Te lo decimos aunque la respuesta sea que no lo necesitas.',
  },
  {
    slug: 'cuanto-cuesta-una-tienda-online-en-chile',
    title: '¿Cuánto cuesta una tienda online en Chile en 2026?',
    desc: 'Precios reales de e-commerce en Chile 2026: desarrollo, pasarelas de pago, comisiones de Webpay y Mercado Pago, y costos mensuales reales.',
    tag: 'E-commerce',
    date: '2026-06-26',
    readMin: 7,
    intro:
      'El desarrollo es solo una parte del costo de una tienda online. Lo que sorprende a la mayoría son los costos que llegan después.',
    answer:
      'Una tienda online en Chile cuesta entre $600.000 y $2.500.000 CLP de desarrollo. A eso hay que sumar costos permanentes: comisiones de la pasarela de pago (entre 2,95% y 3,5% por venta), hosting, dominio y, si corresponde, la plataforma. Presupuestar solo el desarrollo es el error más común.',
    sections: [
      {
        h: 'Costo de desarrollo',
        list: [
          'Tienda en plataforma existente (Shopify, Jumpseller): $400.000 – $900.000 CLP de implementación.',
          'Tienda a medida: $900.000 – $2.500.000 CLP.',
          'Catálogo sin carrito, con pedido por WhatsApp: $300.000 – $600.000 CLP.',
        ],
      },
      {
        h: 'Los costos que se olvidan',
        list: [
          'Comisión por venta: Webpay ronda el 2,95% + IVA; Mercado Pago varía entre 2,9% y 4,5% según el plazo de pago.',
          'Plataforma mensual: Shopify y similares cobran entre US$29 y US$79 mensuales.',
          'Dominio .cl: alrededor de $10.000 CLP al año.',
          'Fotografía de productos: entre $3.000 y $15.000 CLP por producto si la encargas.',
          'Carga del catálogo: si tienes cientos de productos, es trabajo real y se cobra.',
        ],
      },
      {
        h: 'Qué define si tu tienda vende',
        p: [
          'No es el diseño. Es la fricción del proceso de compra: cuántos pasos hay entre que alguien decide comprar y termina pagando.',
          'En el rediseño que hicimos para Aracnida Store, el foco no fue estético sino reducir pasos e integrar un CRM que recupera carritos abandonados y vuelve a venderle a quien ya compró. El ticket promedio subió sobre 450%.',
        ],
      },
      {
        h: 'Antes de encargar tu tienda, define esto',
        list: [
          '¿Cuántos productos y cuántas variantes (talla, color) tendrás?',
          '¿Cómo vas a despachar y quién paga el envío?',
          '¿Emites boleta electrónica? ¿Necesitas integración con tu sistema contable?',
          '¿Quién carga y actualiza el stock?',
          '¿Qué medios de pago necesitas? Webpay es casi obligatorio en Chile.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta hacer una tienda online en Chile?',
        a: 'Entre $600.000 y $2.500.000 CLP de desarrollo según complejidad. Sumando pasarela de pago, plataforma, dominio y fotografía, el costo del primer año suele ser entre un 30% y un 50% mayor al presupuesto de desarrollo.',
      },
      {
        q: '¿Cuánto cobra Webpay por cada venta?',
        a: 'La comisión de Webpay ronda el 2,95% más IVA por transacción, con variaciones según el contrato y el volumen. Mercado Pago cobra entre 2,9% y 4,5% dependiendo de en cuántos días quieras recibir el dinero.',
      },
      {
        q: '¿Conviene Shopify o una tienda a medida?',
        a: 'Shopify conviene si necesitas partir rápido y tu catálogo es estándar: pagas mensualidad pero te despreocupas del mantenimiento. Una tienda a medida conviene cuando necesitas integraciones propias o cuando el costo mensual acumulado supera al desarrollo.',
      },
      {
        q: '¿Necesito boleta electrónica para vender online en Chile?',
        a: 'Sí. Toda venta debe emitir documento tributario. Existen integraciones que emiten la boleta automáticamente al confirmarse el pago, y conviene dejarlo resuelto desde el inicio y no después.',
      },
    ],
    cta: 'Desarrollamos e-commerce pensados para convertir, no solo para verse bien. Cuéntanos qué vendes.',
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

