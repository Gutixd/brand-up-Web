// Contenido en profundidad de cada página de servicio: descripción, beneficios,
// proceso, herramientas y preguntas frecuentes.
//
// REGLAS DE ESTE ARCHIVO
// - Nada inventado: sin cifras de resultados, sin clientes ni garantías.
// - Precios y plazos: SOLO los que ya publica /faq (data/faq.ts). Si cambian
//   allá, cambiarlos aquí también.
// - Herramientas: solo las que BrandUp usa en proyectos publicados en el
//   portafolio. Si un servicio no tiene herramientas confirmadas, se omite
//   `tools` y la sección no se muestra.
import type { L } from './services';

export interface ServiceContent {
  intro: L[];
  benefits: { t: L; d: L }[];
  process: { t: L; d: L }[];
  tools?: string[];
  toolsNote?: L;
  faq: { q: L; a: L }[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  'diseno-web': {
    intro: [
      {
        es: 'Diseñamos y desarrollamos páginas web para negocios de Santiago y la Región Metropolitana: landing pages, sitios corporativos y sitios de servicios. Cada sitio se diseña a medida, sin plantillas genéricas, y se construye para cargar rápido y verse bien en el celular, que es desde donde llega la mayoría de las visitas.',
        en: 'We design and build websites for businesses in Santiago and the wider Metropolitan Region: landing pages, corporate sites and service sites. Every site is custom designed, with no generic templates, and built to load fast and look right on mobile, where most visits come from.',
      },
      {
        es: 'Estamos en Maipú y trabajamos con empresas y emprendedores de todo Chile. Además de crear sitios nuevos, migramos sitios existentes y resolvemos problemas técnicos de dominio, DNS y hosting cuando una web deja de funcionar.',
        en: 'We are based in Maipú and work with companies and entrepreneurs across Chile. Besides building new sites, we migrate existing ones and fix domain, DNS and hosting problems when a website stops working.',
      },
    ],
    benefits: [
      {
        t: { es: 'Un sitio pensado para generar contactos', en: 'A site built to generate enquiries' },
        d: {
          es: 'Cada página tiene un objetivo claro: que la visita cotice, escriba por WhatsApp o llame. El diseño se ordena en torno a eso.',
          en: 'Each page has one clear goal: getting the visitor to request a quote, message on WhatsApp or call. The design is organised around that.',
        },
      },
      {
        t: { es: 'Preparado para Google desde el inicio', en: 'Ready for Google from day one' },
        d: {
          es: 'Títulos, descripciones, datos estructurados y mapa del sitio se configuran durante el desarrollo, no como un extra posterior.',
          en: 'Titles, descriptions, structured data and the sitemap are set up during development, not as a later add-on.',
        },
      },
      {
        t: { es: 'Precio cerrado antes de empezar', en: 'Fixed price before we start' },
        d: {
          es: 'Recibes una propuesta con alcance, plazo y valor definidos. No hay cobros sorpresa al final del proyecto.',
          en: 'You get a proposal with defined scope, timeline and price. No surprise charges at the end of the project.',
        },
      },
      {
        t: { es: 'Todo queda a tu nombre', en: 'Everything stays in your name' },
        d: {
          es: 'El dominio, el sitio y los accesos son tuyos. Entregamos las credenciales completas al terminar.',
          en: 'The domain, the site and the access credentials are yours. We hand over everything when we finish.',
        },
      },
    ],
    process: [
      {
        t: { es: 'Conversación inicial', en: 'First conversation' },
        d: {
          es: 'Entendemos tu negocio, a quién le vendes y qué debe lograr el sitio. Con eso definimos las páginas y el alcance.',
          en: 'We learn about your business, who you sell to and what the site must achieve. That defines the pages and the scope.',
        },
      },
      {
        t: { es: 'Propuesta y calendario', en: 'Proposal and schedule' },
        d: {
          es: 'Te enviamos una propuesta con precio cerrado y fechas. Si la apruebas, partimos.',
          en: 'We send a proposal with a fixed price and dates. If you approve it, we start.',
        },
      },
      {
        t: { es: 'Diseño y desarrollo', en: 'Design and development' },
        d: {
          es: 'Diseñamos la propuesta visual, la revisas en rondas definidas y la programamos con código propio.',
          en: 'We create the visual proposal, you review it in defined rounds, and we build it with our own code.',
        },
      },
      {
        t: { es: 'Publicación y medición', en: 'Launch and measurement' },
        d: {
          es: 'Publicamos el sitio en tu dominio, lo enviamos a Google y dejamos instalada la medición de visitas.',
          en: 'We publish the site on your domain, submit it to Google and leave visit tracking installed.',
        },
      },
    ],
    tools: ['Astro', 'Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Google Analytics 4', 'Google Search Console', 'Microsoft Clarity'],
    toolsNote: {
      es: 'Elegimos la tecnología según el proyecto. Son las que usamos en los sitios publicados en nuestro portafolio.',
      en: 'We choose the technology to suit the project. These are the ones behind the sites published in our portfolio.',
    },
    faq: [
      {
        q: { es: '¿Cuánto cuesta una página web en Santiago?', en: 'How much does a website cost in Santiago?' },
        a: {
          es: 'Una landing page va de $150.000 a $400.000 CLP y un sitio corporativo de $350.000 a $900.000 CLP. El valor depende del diseño, la cantidad de secciones y las funciones que necesites. Siempre entregamos un precio cerrado antes de empezar.',
          en: 'A landing page ranges from CLP $150,000 to $400,000 and a corporate site from CLP $350,000 to $900,000. The price depends on the design, the number of sections and the features you need. We always give a fixed price before starting.',
        },
      },
      {
        q: { es: '¿Cuánto demora el desarrollo de un sitio web?', en: 'How long does it take to build a website?' },
        a: {
          es: 'Una landing page toma de 1 a 2 semanas y un sitio corporativo de 3 a 6 semanas. El plazo depende sobre todo de la rapidez con que recibimos textos, fotos y aprobaciones.',
          en: 'A landing page takes 1 to 2 weeks and a corporate site 3 to 6 weeks. The timeline depends mostly on how quickly we receive copy, photos and approvals.',
        },
      },
      {
        q: { es: '¿Atienden negocios de Maipú y otras comunas?', en: 'Do you work with businesses in Maipú and other districts?' },
        a: {
          es: 'Sí. Estamos en Maipú y trabajamos con negocios de todo Santiago, la Región Metropolitana y el resto de Chile. El trabajo se coordina por WhatsApp y videollamada.',
          en: 'Yes. We are based in Maipú and work with businesses across Santiago, the Metropolitan Region and the rest of Chile. Work is coordinated over WhatsApp and video calls.',
        },
      },
      {
        q: { es: '¿Pueden arreglar o migrar un sitio que ya existe?', en: 'Can you fix or migrate an existing site?' },
        a: {
          es: 'Sí. Migramos sitios a un nuevo hosting, corregimos configuraciones de DNS y recuperamos sitios caídos. Si conviene más rehacerlo que repararlo, te lo decimos antes de cobrar.',
          en: 'Yes. We migrate sites to new hosting, correct DNS configuration and recover sites that are down. If rebuilding makes more sense than repairing, we tell you before charging.',
        },
      },
    ],
  },

  ecommerce: {
    intro: [
      {
        es: 'Desarrollamos tiendas online para negocios chilenos que quieren vender por internet con su propio sitio: catálogo de productos, carrito, pago en línea y un panel de administración para que manejes productos, pedidos y stock sin depender de nosotros.',
        en: 'We build online stores for Chilean businesses that want to sell online from their own site: product catalogue, cart, online payment and an admin panel so you can manage products, orders and stock without depending on us.',
      },
      {
        es: 'Hemos construido tiendas para rubros distintos, como artículos de limpieza, abarrotes, cartas coleccionables y productos para mascotas. Cada una se diseña según cómo compra su cliente, porque no es lo mismo vender por mayor que vender una pieza única.',
        en: 'We have built stores for different industries, such as cleaning supplies, groceries, collectible cards and pet products. Each one is designed around how its customer buys, because selling wholesale is not the same as selling a one-off piece.',
      },
    ],
    benefits: [
      {
        t: { es: 'Vendes en tu propio dominio', en: 'You sell on your own domain' },
        d: {
          es: 'La tienda es tuya: tu marca, tu dominio y tus clientes, sin depender solo de un marketplace o de las redes sociales.',
          en: 'The store is yours: your brand, your domain and your customers, without relying only on a marketplace or social media.',
        },
      },
      {
        t: { es: 'Administras todo desde un panel', en: 'You manage everything from one panel' },
        d: {
          es: 'Agregas productos, actualizas precios y stock, y revisas pedidos desde un panel hecho para tu negocio.',
          en: 'You add products, update prices and stock, and review orders from a panel made for your business.',
        },
      },
      {
        t: { es: 'Pago en línea integrado', en: 'Integrated online payment' },
        d: {
          es: 'Tus clientes pagan en el sitio con medios de pago usados en Chile. Cuando conviene, sumamos pedido directo por WhatsApp.',
          en: 'Your customers pay on the site with payment methods used in Chile. Where it fits, we add direct ordering over WhatsApp.',
        },
      },
      {
        t: { es: 'Diseño propio, no una plantilla', en: 'Original design, not a template' },
        d: {
          es: 'La tienda se ve como tu marca y se organiza según tu catálogo, no al revés.',
          en: 'The store looks like your brand and is organised around your catalogue, not the other way round.',
        },
      },
    ],
    process: [
      {
        t: { es: 'Catálogo y forma de vender', en: 'Catalogue and way of selling' },
        d: {
          es: 'Revisamos qué vendes, cuántos productos tienes, cómo despachas y cómo quieres cobrar.',
          en: 'We review what you sell, how many products you have, how you ship and how you want to charge.',
        },
      },
      {
        t: { es: 'Propuesta con precio cerrado', en: 'Fixed-price proposal' },
        d: {
          es: 'Definimos funciones, plazo y valor. Sabes desde el inicio qué incluye la tienda.',
          en: 'We define features, timeline and price. You know from the start what the store includes.',
        },
      },
      {
        t: { es: 'Diseño, desarrollo y carga', en: 'Design, development and loading' },
        d: {
          es: 'Diseñamos la tienda, la programamos, conectamos el pago y cargamos el catálogo inicial.',
          en: 'We design the store, build it, connect payment and load the initial catalogue.',
        },
      },
      {
        t: { es: 'Pruebas y entrega', en: 'Testing and handover' },
        d: {
          es: 'Probamos una compra completa, publicamos y te enseñamos a usar el panel.',
          en: 'We test a full purchase, publish, and show you how to use the panel.',
        },
      },
    ],
    tools: ['Next.js', 'Supabase', 'Mercado Pago', 'Webpay', 'Vercel', 'Google Analytics 4'],
    toolsNote: {
      es: 'El medio de pago se elige según tu negocio. Son las tecnologías que usamos en las tiendas publicadas en nuestro portafolio.',
      en: 'The payment method is chosen to suit your business. These are the technologies behind the stores published in our portfolio.',
    },
    faq: [
      {
        q: { es: '¿Cuánto cuesta una tienda online en Chile?', en: 'How much does an online store cost in Chile?' },
        a: {
          es: 'Un e-commerce va de $600.000 a $2.500.000 CLP, según la cantidad de productos, las funciones y las integraciones que necesite. Entregamos un precio cerrado antes de empezar.',
          en: 'An e-commerce store ranges from CLP $600,000 to $2,500,000, depending on the number of products, features and integrations required. We give a fixed price before starting.',
        },
      },
      {
        q: { es: '¿Cuánto demora hacer una tienda online?', en: 'How long does it take to build an online store?' },
        a: {
          es: 'Entre 6 y 12 semanas en un proyecto habitual. Tiendas más simples pueden salir antes; depende del tamaño del catálogo y de qué tan rápido se entregan fotos, textos y aprobaciones.',
          en: 'Between 6 and 12 weeks for a typical project. Simpler stores can be ready sooner; it depends on catalogue size and how quickly photos, copy and approvals are provided.',
        },
      },
      {
        q: { es: '¿Puedo agregar y editar productos yo mismo?', en: 'Can I add and edit products myself?' },
        a: {
          es: 'Sí. Cada tienda incluye un panel de administración para agregar productos, cambiar precios, actualizar stock y revisar pedidos.',
          en: 'Yes. Every store includes an admin panel to add products, change prices, update stock and review orders.',
        },
      },
      {
        q: { es: '¿La tienda y el dominio quedan a mi nombre?', en: 'Do I own the store and the domain?' },
        a: {
          es: 'Sí. El dominio, la tienda y las cuentas quedan a nombre del cliente, con todos los accesos entregados.',
          en: 'Yes. The domain, the store and the accounts stay in the client’s name, with all access handed over.',
        },
      },
    ],
  },

  branding: {
    intro: [
      {
        es: 'Creamos identidades de marca para negocios que parten y para empresas que necesitan ordenar o renovar su imagen: logotipo, colores, tipografías y las piezas que vas a usar todos los días en redes sociales, tu sitio web e impresos.',
        en: 'We create brand identities for new businesses and for companies that need to tidy up or refresh their image: logo, colours, typography and the assets you will use every day on social media, your website and print.',
      },
      {
        es: 'El objetivo es que tu marca se reconozca y se vea igual de profesional en todos los lugares donde aparece. Trabajamos con negocios de Santiago y de todo Chile, coordinando el proceso a distancia.',
        en: 'The goal is for your brand to be recognisable and look equally professional everywhere it appears. We work with businesses in Santiago and across Chile, running the process remotely.',
      },
    ],
    benefits: [
      {
        t: { es: 'Una imagen coherente', en: 'A consistent image' },
        d: {
          es: 'Tu marca usa los mismos colores, tipografías y estilo en redes, web e impresos.',
          en: 'Your brand uses the same colours, typography and style across social media, web and print.',
        },
      },
      {
        t: { es: 'Archivos listos para usar', en: 'Files ready to use' },
        d: {
          es: 'Recibes el logo y sus versiones en los formatos necesarios para pantalla e imprenta.',
          en: 'You receive the logo and its versions in the formats needed for screen and print.',
        },
      },
      {
        t: { es: 'Reglas claras de uso', en: 'Clear usage rules' },
        d: {
          es: 'Queda definido cómo se aplica la marca, para que cualquiera que diseñe para ti mantenga la línea.',
          en: 'How the brand is applied is defined, so anyone designing for you keeps it consistent.',
        },
      },
    ],
    process: [
      {
        t: { es: 'Entender el negocio', en: 'Understanding the business' },
        d: {
          es: 'Conversamos sobre qué vendes, a quién y cómo quieres que te perciban.',
          en: 'We talk about what you sell, to whom, and how you want to be perceived.',
        },
      },
      {
        t: { es: 'Propuesta visual', en: 'Visual proposal' },
        d: {
          es: 'Presentamos la dirección de la marca: logo, colores y tipografías.',
          en: 'We present the brand direction: logo, colours and typography.',
        },
      },
      {
        t: { es: 'Revisión y ajustes', en: 'Review and adjustments' },
        d: {
          es: 'Ajustamos la propuesta en rondas de revisión definidas hasta cerrarla.',
          en: 'We refine the proposal in defined review rounds until it is final.',
        },
      },
      {
        t: { es: 'Entrega y aplicación', en: 'Handover and application' },
        d: {
          es: 'Entregamos los archivos finales y las piezas acordadas para redes, web o impresos.',
          en: 'We deliver the final files and the agreed assets for social media, web or print.',
        },
      },
    ],
    faq: [
      {
        q: { es: '¿Qué incluye un servicio de branding?', en: 'What does a branding service include?' },
        a: {
          es: 'Logotipo y sus versiones, paleta de colores, tipografías y las piezas aplicadas que se acuerden, como plantillas para redes sociales o papelería. El alcance exacto se define en la propuesta.',
          en: 'Logo and its versions, colour palette, typography and the applied assets agreed on, such as social media templates or stationery. The exact scope is defined in the proposal.',
        },
      },
      {
        q: { es: '¿Hacen solo el logo o la identidad completa?', en: 'Do you do just the logo or the full identity?' },
        a: {
          es: 'Las dos opciones. Podemos diseñar solo el logotipo o desarrollar la identidad completa con sus aplicaciones.',
          en: 'Both. We can design the logo alone or develop the full identity with its applications.',
        },
      },
      {
        q: { es: '¿Pueden rediseñar una marca que ya existe?', en: 'Can you redesign an existing brand?' },
        a: {
          es: 'Sí. Revisamos lo que tienes, conservamos lo que funciona y actualizamos el resto para que se vea coherente y actual.',
          en: 'Yes. We review what you have, keep what works and update the rest so it looks consistent and current.',
        },
      },
      {
        q: { es: '¿Cuánto cuesta el branding?', en: 'How much does branding cost?' },
        a: {
          es: 'Se cotiza a medida, porque depende de si necesitas solo el logo o la identidad completa con piezas aplicadas. La cotización es gratis y con precio cerrado.',
          en: 'It is quoted case by case, because it depends on whether you need just the logo or the full identity with applied assets. The quote is free and comes with a fixed price.',
        },
      },
    ],
  },

  'contenido-reels': {
    intro: [
      {
        es: 'Nos hacemos cargo del contenido de tus redes sociales: grabamos y editamos reels, diseñamos publicaciones e historias, y hacemos el community management respondiendo comentarios y mensajes. Trabajamos en Instagram, TikTok y Facebook.',
        en: 'We take care of your social media content: we shoot and edit reels, design posts and stories, and handle community management by replying to comments and messages. We work on Instagram, TikTok and Facebook.',
      },
      {
        es: 'Hemos llevado las redes de locales de comida, marcas de ropa, instituciones educativas y servicios de salud. Con negocios de Santiago y Maipú podemos grabar en el local; con el resto de Chile trabajamos sobre el material que nos envían.',
        en: 'We have run social media for food businesses, clothing brands, educational institutions and health services. With businesses in Santiago and Maipú we can shoot on site; for the rest of Chile we work with the material they send us.',
      },
    ],
    benefits: [
      {
        t: { es: 'Publicas con constancia', en: 'You post consistently' },
        d: {
          es: 'Tu cuenta mantiene un ritmo de publicaciones sin que tengas que pensar cada semana qué subir.',
          en: 'Your account keeps a steady posting rhythm without you having to work out what to upload every week.',
        },
      },
      {
        t: { es: 'Una línea visual reconocible', en: 'A recognisable visual line' },
        d: {
          es: 'Reels, publicaciones e historias comparten el mismo estilo, alineado con tu marca.',
          en: 'Reels, posts and stories share the same style, aligned with your brand.',
        },
      },
      {
        t: { es: 'Tu comunidad recibe respuesta', en: 'Your community gets a reply' },
        d: {
          es: 'Respondemos comentarios y mensajes para que ninguna consulta quede sin atender.',
          en: 'We reply to comments and messages so no enquiry is left unanswered.',
        },
      },
      {
        t: { es: 'Trabajo ordenado y a la vista', en: 'Organised, visible work' },
        d: {
          es: 'Cada avance queda registrado en un documento online que puedes revisar cuando quieras.',
          en: 'Every step is logged in an online document you can review whenever you want.',
        },
      },
    ],
    process: [
      {
        t: { es: 'Diagnóstico de la cuenta', en: 'Account review' },
        d: {
          es: 'Revisamos tus redes, tu rubro y qué quieres lograr con el contenido.',
          en: 'We review your social accounts, your industry and what you want the content to achieve.',
        },
      },
      {
        t: { es: 'Plan de contenido', en: 'Content plan' },
        d: {
          es: 'Definimos qué se publica, con qué frecuencia y en qué formatos.',
          en: 'We define what gets posted, how often and in which formats.',
        },
      },
      {
        t: { es: 'Producción', en: 'Production' },
        d: {
          es: 'Grabamos, editamos los reels y diseñamos publicaciones e historias.',
          en: 'We shoot, edit the reels and design posts and stories.',
        },
      },
      {
        t: { es: 'Publicación y comunidad', en: 'Publishing and community' },
        d: {
          es: 'Publicamos, respondemos a la comunidad y revisamos los resultados contigo.',
          en: 'We publish, reply to the community and review the results with you.',
        },
      },
    ],
    tools: ['Instagram', 'TikTok', 'Facebook'],
    toolsNote: {
      es: 'Las plataformas donde gestionamos contenido para nuestros clientes.',
      en: 'The platforms where we manage content for our clients.',
    },
    faq: [
      {
        q: { es: '¿Cuánto cuesta la gestión de redes sociales?', en: 'How much does social media management cost?' },
        a: {
          es: 'Los planes mensuales parten desde $250.000 CLP. El valor final depende de cuántas redes se gestionan y de la cantidad de contenido al mes.',
          en: 'Monthly plans start from CLP $250,000. The final price depends on how many networks are managed and the amount of content per month.',
        },
      },
      {
        q: { es: '¿Ustedes graban el contenido?', en: 'Do you shoot the content?' },
        a: {
          es: 'Sí. Podemos grabar en tu local o trabajar con material que ya tengas. La modalidad se define al cotizar.',
          en: 'Yes. We can shoot at your premises or work with material you already have. The arrangement is defined when quoting.',
        },
      },
      {
        q: { es: '¿En qué redes sociales trabajan?', en: 'Which social networks do you work on?' },
        a: {
          es: 'Instagram, TikTok y Facebook. Recomendamos partir por la red donde ya están tus clientes.',
          en: 'Instagram, TikTok and Facebook. We recommend starting with the network where your customers already are.',
        },
      },
      {
        q: { es: '¿Las cuentas quedan a mi nombre?', en: 'Do the accounts stay in my name?' },
        a: {
          es: 'Sí. Las cuentas de redes sociales son siempre del cliente; nosotros las gestionamos con los accesos que nos entregas.',
          en: 'Yes. Social media accounts always belong to the client; we manage them with the access you give us.',
        },
      },
    ],
  },

  'publicidad-digital': {
    intro: [
      {
        es: 'Creamos y gestionamos campañas de publicidad digital en Meta Ads (Instagram y Facebook) y Google Ads para negocios de Santiago y de todo Chile. Definimos a quién mostrarle tus anuncios, preparamos las piezas y ajustamos las campañas según los resultados.',
        en: 'We create and manage digital advertising campaigns on Meta Ads (Instagram and Facebook) and Google Ads for businesses in Santiago and across Chile. We define who should see your ads, prepare the creative and adjust the campaigns based on results.',
      },
      {
        es: 'Como el mismo equipo diseña sitios web y hace contenido, la publicidad no trabaja sola: el anuncio, la página a la que llega la persona y la medición se piensan juntos.',
        en: 'Because the same team designs websites and produces content, advertising does not work in isolation: the ad, the page the person lands on and the measurement are planned together.',
      },
    ],
    benefits: [
      {
        t: { es: 'Llegas a quien te interesa', en: 'You reach the right people' },
        d: {
          es: 'Segmentamos por ubicación, por ejemplo comunas de la Región Metropolitana, y por intereses o búsquedas.',
          en: 'We target by location, for example districts in the Metropolitan Region, and by interests or searches.',
        },
      },
      {
        t: { es: 'Sabes en qué se gasta', en: 'You know where the money goes' },
        d: {
          es: 'El presupuesto de anuncios se paga directo a Meta o Google desde tu cuenta, separado de nuestra gestión.',
          en: 'The ad budget is paid directly to Meta or Google from your account, separate from our management fee.',
        },
      },
      {
        t: { es: 'Medición instalada', en: 'Measurement in place' },
        d: {
          es: 'Dejamos configurado el seguimiento para saber qué anuncios generan contactos.',
          en: 'We set up tracking so you know which ads generate enquiries.',
        },
      },
      {
        t: { es: 'Reportes que se entienden', en: 'Reports you can read' },
        d: {
          es: 'Te mostramos resultados y qué vamos a cambiar, sin tecnicismos.',
          en: 'We show you the results and what we will change, without jargon.',
        },
      },
    ],
    process: [
      {
        t: { es: 'Objetivo y presupuesto', en: 'Goal and budget' },
        d: {
          es: 'Definimos qué quieres conseguir y cuánto vas a invertir en anuncios.',
          en: 'We define what you want to achieve and how much you will invest in ads.',
        },
      },
      {
        t: { es: 'Configuración', en: 'Setup' },
        d: {
          es: 'Preparamos las cuentas, el seguimiento, los públicos y las piezas.',
          en: 'We prepare the accounts, tracking, audiences and creative.',
        },
      },
      {
        t: { es: 'Lanzamiento', en: 'Launch' },
        d: {
          es: 'Publicamos las campañas y revisamos su rendimiento.',
          en: 'We launch the campaigns and review their performance.',
        },
      },
      {
        t: { es: 'Optimización y reporte', en: 'Optimisation and reporting' },
        d: {
          es: 'Ajustamos lo que no rinde y te informamos los resultados.',
          en: 'We adjust what is not performing and report the results to you.',
        },
      },
    ],
    tools: ['Meta Ads', 'Google Ads', 'Píxel de Meta', 'Google Analytics 4'],
    faq: [
      {
        q: { es: '¿Cuánto cuesta la publicidad digital?', en: 'How much does digital advertising cost?' },
        a: {
          es: 'La gestión mensual parte desde $250.000 CLP. Ese valor no incluye la inversión en anuncios, que se paga aparte y directamente a Meta o Google.',
          en: 'Monthly management starts from CLP $250,000. That does not include ad spend, which is paid separately and directly to Meta or Google.',
        },
      },
      {
        q: { es: '¿Conviene Meta Ads o Google Ads?', en: 'Should I use Meta Ads or Google Ads?' },
        a: {
          es: 'Depende de cómo te buscan tus clientes. Google Ads sirve cuando la gente ya busca lo que vendes; Meta Ads sirve para darte a conocer y mostrar tu producto. En la conversación inicial te recomendamos por dónde partir.',
          en: 'It depends on how your customers look for you. Google Ads works when people already search for what you sell; Meta Ads works for getting known and showing your product. In the first conversation we recommend where to start.',
        },
      },
      {
        q: { es: '¿Garantizan resultados?', en: 'Do you guarantee results?' },
        a: {
          es: 'No. Ninguna agencia seria puede garantizar ventas o posiciones. Lo que sí hacemos es medir, mostrarte los datos reales y ajustar las campañas según lo que funciona.',
          en: 'No. No serious agency can guarantee sales or rankings. What we do is measure, show you the real data and adjust campaigns based on what works.',
        },
      },
      {
        q: { es: '¿Hacen publicidad para negocios locales de Maipú o Santiago?', en: 'Do you run ads for local businesses in Maipú or Santiago?' },
        a: {
          es: 'Sí. Las campañas se pueden limitar a una comuna o a un radio alrededor de tu local, lo que suele ser lo más eficiente para un negocio de barrio.',
          en: 'Yes. Campaigns can be limited to one district or a radius around your premises, which is usually the most efficient option for a neighbourhood business.',
        },
      },
    ],
  },

  'automatizaciones-ia': {
    intro: [
      {
        es: 'Automatizamos tareas repetitivas de atención y seguimiento para pymes: respuestas a consultas frecuentes, formularios que ordenan los contactos y avisos automáticos, conectando WhatsApp, Instagram, tu sitio web y el correo.',
        en: 'We automate repetitive customer-service and follow-up tasks for small businesses: replies to frequent questions, forms that organise enquiries and automatic notifications, connecting WhatsApp, Instagram, your website and email.',
      },
      {
        es: 'La idea es que tu negocio responda aunque nadie esté conectado, y que tu equipo dedique su tiempo a lo que necesita una persona. Trabajamos con empresas de Santiago y de todo Chile.',
        en: 'The idea is for your business to respond even when nobody is online, and for your team to spend its time on what really needs a person. We work with companies in Santiago and across Chile.',
      },
    ],
    benefits: [
      {
        t: { es: 'Respuesta fuera de horario', en: 'Replies outside office hours' },
        d: {
          es: 'Las consultas frecuentes reciben respuesta aunque sea de noche o fin de semana.',
          en: 'Frequent questions get an answer even at night or on weekends.',
        },
      },
      {
        t: { es: 'Menos trabajo manual', en: 'Less manual work' },
        d: {
          es: 'Dejas de copiar datos y de repetir las mismas respuestas a mano.',
          en: 'You stop copying data and repeating the same answers by hand.',
        },
      },
      {
        t: { es: 'Contactos ordenados', en: 'Organised enquiries' },
        d: {
          es: 'Cada consulta queda registrada, para que ningún cliente se pierda.',
          en: 'Every enquiry is recorded, so no customer gets lost.',
        },
      },
    ],
    process: [
      {
        t: { es: 'Mapa de tareas', en: 'Task map' },
        d: {
          es: 'Identificamos qué tareas se repiten y cuáles vale la pena automatizar.',
          en: 'We identify which tasks repeat and which are worth automating.',
        },
      },
      {
        t: { es: 'Diseño del flujo', en: 'Flow design' },
        d: {
          es: 'Definimos qué responde el sistema y cuándo debe pasar la conversación a una persona.',
          en: 'We define what the system answers and when the conversation must pass to a person.',
        },
      },
      {
        t: { es: 'Implementación', en: 'Implementation' },
        d: {
          es: 'Conectamos los canales y probamos los flujos con casos reales.',
          en: 'We connect the channels and test the flows with real cases.',
        },
      },
      {
        t: { es: 'Ajuste', en: 'Fine-tuning' },
        d: {
          es: 'Revisamos las primeras conversaciones y corregimos lo necesario.',
          en: 'We review the first conversations and correct whatever is needed.',
        },
      },
    ],
    faq: [
      {
        q: { es: '¿Qué se puede automatizar en un negocio pequeño?', en: 'What can be automated in a small business?' },
        a: {
          es: 'Las respuestas a preguntas frecuentes, la toma de datos de un cliente interesado, los avisos de un nuevo pedido o contacto y el seguimiento posterior. Lo que requiere criterio sigue pasando a una persona.',
          en: 'Answers to frequent questions, capturing an interested customer’s details, notifications of a new order or enquiry, and the follow-up afterwards. Anything that needs judgement still goes to a person.',
        },
      },
      {
        q: { es: '¿Funciona con WhatsApp?', en: 'Does it work with WhatsApp?' },
        a: {
          es: 'Sí. WhatsApp es el canal más usado por los negocios chilenos y es donde normalmente empezamos.',
          en: 'Yes. WhatsApp is the channel most used by Chilean businesses and is where we normally start.',
        },
      },
      {
        q: { es: '¿El cliente nota que le responde un sistema?', en: 'Does the customer notice a system is replying?' },
        a: {
          es: 'Recomendamos ser transparentes: el sistema responde lo simple y deriva a una persona cuando hace falta. Así se evita frustrar al cliente.',
          en: 'We recommend being transparent: the system answers the simple things and hands over to a person when needed. That avoids frustrating the customer.',
        },
      },
      {
        q: { es: '¿Cuánto cuesta una automatización?', en: 'How much does an automation cost?' },
        a: {
          es: 'Se cotiza a medida, según cuántos canales se conectan y la complejidad del flujo. La cotización es gratis y con precio cerrado.',
          en: 'It is quoted case by case, depending on how many channels are connected and how complex the flow is. The quote is free and comes with a fixed price.',
        },
      },
    ],
  },

  'marketing-growth': {
    intro: [
      {
        es: 'Para negocios que ya tienen presencia digital pero no saben qué está funcionando. Revisamos tu sitio, tus redes y tu publicidad, ordenamos las prioridades y armamos un plan de marketing digital con acciones concretas.',
        en: 'For businesses that already have a digital presence but do not know what is working. We review your site, your social media and your advertising, set priorities and build a digital marketing plan with concrete actions.',
      },
      {
        es: 'Trabajamos con pymes de Santiago, la Región Metropolitana y el resto de Chile. Un solo equipo ve la web, el contenido, los anuncios y la medición, para que todo apunte al mismo objetivo.',
        en: 'We work with small businesses in Santiago, the Metropolitan Region and the rest of Chile. One team looks after the website, content, ads and measurement, so everything points at the same goal.',
      },
    ],
    benefits: [
      {
        t: { es: 'Sabes qué hacer primero', en: 'You know what to do first' },
        d: {
          es: 'Recibes un plan ordenado por prioridad, no una lista interminable de ideas.',
          en: 'You get a plan ordered by priority, not an endless list of ideas.',
        },
      },
      {
        t: { es: 'Decisiones con datos', en: 'Decisions based on data' },
        d: {
          es: 'Instalamos la medición para ver de dónde llegan tus clientes y qué páginas funcionan.',
          en: 'We install measurement to see where your customers come from and which pages work.',
        },
      },
      {
        t: { es: 'Un solo interlocutor', en: 'A single point of contact' },
        d: {
          es: 'No coordinas entre varios proveedores: hablas con el mismo equipo que ejecuta.',
          en: 'You do not coordinate between several suppliers: you talk to the same team that does the work.',
        },
      },
    ],
    process: [
      {
        t: { es: 'Auditoría', en: 'Audit' },
        d: {
          es: 'Revisamos tu sitio, tus redes, tu publicidad y cómo apareces en Google.',
          en: 'We review your site, your social media, your advertising and how you appear on Google.',
        },
      },
      {
        t: { es: 'Plan priorizado', en: 'Prioritised plan' },
        d: {
          es: 'Te presentamos qué mejorar, en qué orden y por qué.',
          en: 'We present what to improve, in what order and why.',
        },
      },
      {
        t: { es: 'Ejecución', en: 'Execution' },
        d: {
          es: 'Implementamos las acciones acordadas: web, contenido, anuncios o medición.',
          en: 'We implement the agreed actions: website, content, ads or measurement.',
        },
      },
      {
        t: { es: 'Revisión mensual', en: 'Monthly review' },
        d: {
          es: 'Revisamos los datos contigo y ajustamos el plan.',
          en: 'We review the data with you and adjust the plan.',
        },
      },
    ],
    tools: ['Google Analytics 4', 'Google Search Console', 'Microsoft Clarity', 'Meta Ads', 'Google Ads'],
    faq: [
      {
        q: { es: '¿Qué es un plan de marketing digital?', en: 'What is a digital marketing plan?' },
        a: {
          es: 'Es un documento que define qué canales vas a usar, qué acciones se harán primero y cómo se medirán. Evita gastar en acciones sueltas que no se conectan entre sí.',
          en: 'It is a document that defines which channels you will use, which actions come first and how they will be measured. It avoids spending on isolated actions that do not connect.',
        },
      },
      {
        q: { es: '¿Sirve para un negocio chico?', en: 'Is it useful for a small business?' },
        a: {
          es: 'Sí. En un negocio pequeño el presupuesto es limitado, y por eso conviene todavía más saber dónde ponerlo.',
          en: 'Yes. A small business has a limited budget, which makes it even more important to know where to put it.',
        },
      },
      {
        q: { es: '¿Cuánto cuesta?', en: 'How much does it cost?' },
        a: {
          es: 'Se cotiza a medida según el tamaño del negocio y los canales que se revisan. La gestión mensual de redes y publicidad parte desde $250.000 CLP, sin incluir la inversión en anuncios.',
          en: 'It is quoted case by case according to the size of the business and the channels reviewed. Monthly social media and advertising management starts from CLP $250,000, not including ad spend.',
        },
      },
      {
        q: { es: '¿En cuánto tiempo se ven resultados?', en: 'How soon will I see results?' },
        a: {
          es: 'Depende del canal. La publicidad pagada muestra datos en días; el posicionamiento en Google toma semanas o meses. No prometemos plazos que no dependen de nosotros.',
          en: 'It depends on the channel. Paid advertising shows data within days; ranking on Google takes weeks or months. We do not promise timelines that are outside our control.',
        },
      },
    ],
  },
};
