// ═══════════════════════════════════════════════════════════════════
// Conexión del AudioManager con la interfaz.
//
// Todo funciona por DELEGACIÓN en `document`: un solo juego de listeners
// para toda la vida de la pestaña. Astro reemplaza el <body> en cada
// transición de página, pero estos listeners viven en `document`, así que
// sobreviven sin re-registrarse — ni fugas de memoria ni listeners
// duplicados acumulándose navegación tras navegación.
//
// Regla de curaduría: NO todo elemento suena. Solo suenan los que
// significan algo — servicios, proyectos, CTAs principales y navegación.
// Un enlace cualquiera del pie de página no suena a propósito.
// ═══════════════════════════════════════════════════════════════════
import { audio } from './audio';

/** Elementos que disparan el timbre propio de cada servicio. */
const SERVICE_SEL = '.svc-u, .svc-index__row, [data-svc-sound]';
/** Tarjetas de proyecto — whoosh direccional. */
const PROJECT_SEL = '.project-video, [data-work-item], .wcard, .sv-case, .sd-case';
/** CTAs de peso: los únicos enlaces "normales" que suenan al pasar. */
const CTA_SEL =
  '.cta-final__btn, .cta-final__link, [data-magnetic], .sv-btn, .sd-cta, ' +
  '.sd-final__btn, .svc-page-cta__btn, .sound-toggle';
/** El CTA final es el único que se gana el sonido de firma. */
const SIGNATURE_SEL = '.cta-final__btn';

/** Deriva el slug del servicio desde el href (/servicios/branding → branding). */
function serviceSlugFrom(el: Element): string | null {
  const href = el.getAttribute('href') || '';
  const m = href.match(/\/servicios\/([a-z0-9-]+)/i);
  if (m) return m[1];
  return el.getAttribute('data-svc-sound');
}

/** Paneo según el lado por el que entró el cursor: la estela sigue al gesto. */
function panFromEntry(el: Element, clientX: number): number {
  const b = el.getBoundingClientRect();
  if (!b.width) return 0;
  const rel = (clientX - b.left) / b.width; // 0 = izquierda, 1 = derecha
  return (rel - 0.5) * 0.7;
}

export function initSound() {
  if (typeof window === 'undefined') return;

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  // Evita re-disparar al moverse entre los hijos del mismo elemento.
  let lastHovered: Element | null = null;

  // ── Hover (solo desktop: en mobile no existe el gesto) ────────────
  if (fine) {
    document.addEventListener(
      'pointerover',
      (e) => {
        if (!audio.isEnabled()) return;
        const target = e.target as Element | null;
        if (!target || typeof target.closest !== 'function') return;

        const svc = target.closest(SERVICE_SEL);
        const project = svc ? null : target.closest(PROJECT_SEL);
        const cta = svc || project ? null : target.closest(CTA_SEL);
        const hit = svc || project || cta;
        if (!hit || hit === lastHovered) return;
        lastHovered = hit;

        if (svc) {
          const slug = serviceSlugFrom(svc);
          if (slug) audio.playService(slug);
          else audio.play('hoverSoft');
          return;
        }

        if (project) {
          audio.play('hoverProject', { pan: panFromEntry(project, e.clientX) });
          return;
        }

        if (cta) {
          // El CTA final suena distinto: es el gesto más importante del sitio.
          if (cta.matches(SIGNATURE_SEL)) audio.play('signature');
          else audio.play('hoverSoft');
        }
      },
      { passive: true },
    );

    document.addEventListener(
      'pointerout',
      (e) => {
        const related = (e as PointerEvent).relatedTarget as Element | null;
        // Solo se limpia si el cursor salió de verdad del elemento activo.
        if (lastHovered && (!related || !lastHovered.contains(related))) lastHovered = null;
      },
      { passive: true },
    );
  }

  // ── Click / tap ───────────────────────────────────────────────────
  // Sí suena en mobile: acá el click es la interacción principal.
  document.addEventListener(
    'pointerdown',
    (e) => {
      if (!audio.isEnabled()) return;
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== 'function') return;

      // El propio botón de sonido no se comenta a sí mismo al apagarse:
      // su feedback lo maneja el toggle (suena solo al encender).
      if (target.closest('.sound-toggle')) return;

      const actionable = target.closest(
        `${SERVICE_SEL}, ${PROJECT_SEL}, ${CTA_SEL}, a[href], button`,
      );
      if (!actionable) return;
      audio.play('click');
    },
    { passive: true },
  );

  // ── Transición entre páginas (Astro view transitions) ─────────────
  document.addEventListener('astro:before-preparation', () => {
    if (audio.isEnabled()) audio.play('transition');
  });

  // ── Primer scroll de la sesión — una sola vez, nunca más ──────────
  if (!audio.prefersReduced()) {
    const onFirstScroll = () => {
      if (audio.isEnabled()) audio.play('scrollCue');
      window.removeEventListener('scroll', onFirstScroll);
    };
    window.addEventListener('scroll', onFirstScroll, { passive: true, once: true });
  }
}

initSound();
