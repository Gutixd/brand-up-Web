// Proyectos que tienen su propia landing con diseño único.
//
// Cada uno vive en su propia ruta (src/pages/trabajos/<slug>.astro y su
// equivalente en /en/) en vez de pasar por [slug].astro. El motivo es de
// rendimiento: si una sola ruta dinámica importara las 12 landings, Astro
// juntaría el CSS de todas en un único bundle y CADA página de proyecto
// descargaría el estilo de las otras 11 (~127 KB). Con rutas separadas,
// cada página compila solo lo suyo.
//
// [slug].astro usa esta lista para excluirlos y quedarse solo con los
// proyectos que aún usan la plantilla genérica.
export const BESPOKE_WORK_SLUGS = [
  'altitude',
  'el-chacha-pollo',
  'jd-cargo-logistics',
  'musclecarchile',
  'aseocool',
  'aracnida-store',
  'templo-votivo-maipu',
  'bell-college',
  'superlunch',
  'microterapias',
  'duoc-uc',
  'bschool',
] as const;

export const isBespokeWork = (slug: string) =>
  (BESPOKE_WORK_SLUGS as readonly string[]).includes(slug);
