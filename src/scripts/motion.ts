// Motion layer: Lenis + GSAP ScrollTrigger.
// Re-initialized on every Astro view transition. Respects prefers-reduced-motion.
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ── Lenis smooth scroll via GSAP ticker ────────────────────────────
function initLenis() {
  if (reducedMotion()) return;
  if (lenis) { lenis.destroy(); lenis = null; }
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  gsap.ticker.add((time) => { lenis?.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll', ScrollTrigger.update);
}

// ── Word-split reveal ──────────────────────────────────────────────
function initWordReveals() {
  document.querySelectorAll<HTMLElement>('[data-reveal-word]').forEach((el) => {
    if (el.dataset.split !== 'done') {
      const words = el.textContent?.trim().split(/\s+/) ?? [];
      el.innerHTML = words
        .map((w) => `<span class="overflow-hidden inline-block align-bottom"><span class="word">${w}</span></span>`)
        .join(' ');
      el.dataset.split = 'done';
    }
    gsap.to(el.querySelectorAll('.word'), {
      y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.06,
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });
}

// ── Generic fade + slide reveals ───────────────────────────────────
function initFadeReveals() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      delay: parseFloat(el.dataset.delay ?? '0'),
      scrollTrigger: { trigger: el, start: 'top 92%' },
    });
  });
}

// ── Parallax ───────────────────────────────────────────────────────
function initParallax() {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: parseFloat(el.dataset.parallax ?? '-10'), ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

// ── Reusable stacked-card scroll-pin ──────────────────────────────
function initCardStack(contextSel: string, cardSel: string) {
  const wrappers = gsap.utils.toArray<HTMLElement>(`${contextSel} .card-wrapper`);
  if (!wrappers.length) return;
  const cards = gsap.utils.toArray<HTMLElement>(`${contextSel} ${cardSel}`);

  wrappers.forEach((wrapper, i) => {
    const card = cards[i];
    if (!card) return;
    if (i < wrappers.length - 1) {
      gsap.to(card, {
        scale: 0.88, rotationX: -7, opacity: 0.3,
        transformOrigin: 'top center', ease: 'none',
        scrollTrigger: {
          trigger: wrapper, start: 'top top', end: 'bottom top',
          scrub: true, pin: wrapper, pinSpacing: false, invalidateOnRefresh: true,
        },
      });
    } else {
      ScrollTrigger.create({
        trigger: wrapper, start: 'top top',
        pin: wrapper, pinSpacing: false, invalidateOnRefresh: true,
      });
    }
  });
}

// ── Stat counters ──────────────────────────────────────────────────
function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    const target = parseFloat(el.dataset.counter ?? '0');
    const isFloat = el.dataset.counter?.includes('.');
    const suffix = el.dataset.suffix ?? '';
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target, duration: 1.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate() {
        el.textContent = (isFloat ? obj.val.toFixed(1) : Math.round(obj.val).toString()) + suffix;
      },
    });
  });
}

// ── Marquee speed on scroll ────────────────────────────────────────
function initMarqueeScroll() {
  document.querySelectorAll<HTMLElement>('.marquee-track').forEach((track) => {
    let offsetX = 0;
    ScrollTrigger.create({
      trigger: track.closest('section') ?? track,
      start: 'top bottom', end: 'bottom top',
      onUpdate(self) {
        const v = self.getVelocity() / 800;
        offsetX -= v * 8;
        gsap.to(track, { x: offsetX, duration: 0.4, ease: 'power1.out', overwrite: 'auto' });
      },
    });
  });
}

// ── Char-split reveal ──────────────────────────────────────────────
function initCharReveals() {
  document.querySelectorAll<HTMLElement>('[data-split-chars]').forEach((el) => {
    if (el.dataset.charDone === 'true') return;
    el.dataset.charDone = 'true';
    const text = el.textContent ?? '';
    el.innerHTML = '';
    text.split('').forEach((char) => {
      if (char === ' ') {
        el.innerHTML += '<span style="display:inline-block;width:0.28em"></span>';
      } else {
        el.innerHTML += `<span class="char-container"><span class="char">${char}</span></span>`;
      }
    });
    gsap.to(el.querySelectorAll('.char'), {
      y: '0%', duration: 1, stagger: 0.022, ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 84%' },
    });
  });
}

// ── Statement — pin + ghost parallax + text swap scrubbed ──────────
function initStatementSwap() {
  const section = document.querySelector<HTMLElement>('.statement-section');
  const ghost   = document.querySelector<HTMLElement>('.statement-ghost');
  const textA   = document.querySelector<HTMLElement>('.statement-text--a');
  const textB   = document.querySelector<HTMLElement>('.statement-text--b');
  if (!section || !textA || !textB) return;

  const positsA = document.querySelector<HTMLElement>('.statement-posits--a');
  const positsB = document.querySelector<HTMLElement>('.statement-posits--b');

  // Initial states
  gsap.set(textA, { opacity: 1, y: 0 });
  gsap.set(textB, { opacity: 0, y: 36 });
  if (positsA) gsap.set(positsA, { opacity: 1, scale: 1 });
  if (positsB) gsap.set(positsB, { opacity: 0, scale: 0.92 });
  if (ghost)   gsap.set(ghost,   { yPercent: 58 });

  // Pinned scrubbed timeline — section pins while ghost scrolls through
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=170%',
      pin: true,
      pinSpacing: true,
      scrub: 1.4,
      invalidateOnRefresh: true,
    },
  });

  // Ghost drifts from bottom (58%) to top (-58%)
  tl.to(ghost, { yPercent: -58, ease: 'none' }, 0);

  // Text A exits fast at 40%, B enters immediately after — zero overlap
  tl.to(textA,   { y: -32, opacity: 0, ease: 'power3.in',  duration: 0.07 }, 0.40);
  tl.fromTo(textB, { y: 28, opacity: 0 }, { y: 0, opacity: 1, ease: 'power3.out', duration: 0.07 }, 0.48);

  // Post-its: same clean cutover
  if (positsA) tl.to(positsA,  { opacity: 0, scale: 0.94, ease: 'power2.in',  duration: 0.06 }, 0.40);
  if (positsB) tl.to(positsB,  { opacity: 1, scale: 1,    ease: 'power2.out', duration: 0.07 }, 0.48);
}

// ── Servicios — acordeón (hover en desktop, tap en touch) ──────────
function initServicesAccordion() {
  const rows = Array.from(document.querySelectorAll<HTMLElement>('[data-svc-row]'));
  if (!rows.length) return;

  const hoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const open = (row: HTMLElement) => {
    rows.forEach((r) => {
      const on = r === row;
      r.classList.toggle('is-open', on);
      r.querySelector('.svc-row__head')?.setAttribute('aria-expanded', String(on));
    });
  };
  const closeAll = () => rows.forEach((r) => {
    r.classList.remove('is-open');
    r.querySelector('.svc-row__head')?.setAttribute('aria-expanded', 'false');
  });

  // Primer servicio abierto por defecto
  open(rows[0]);

  rows.forEach((row) => {
    const head = row.querySelector<HTMLElement>('.svc-row__head');
    if (!head) return;
    if (hoverable) {
      row.addEventListener('mouseenter', () => open(row));
    } else {
      head.addEventListener('click', () => {
        if (row.classList.contains('is-open')) closeAll();
        else open(row);
      });
    }
  });
}

// ── Work grid staggered reveal ─────────────────────────────────────
function initWorkGrid() {
  const items = document.querySelectorAll<HTMLElement>('[data-work-item]');
  if (!items.length) return;
  gsap.fromTo(items,
    { y: 60, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      stagger: { each: 0.12 },
      scrollTrigger: { trigger: items[0].closest('section') ?? items[0], start: 'top 85%' },
    },
  );
}

// ── Project media — swap to <video> when data-video-src is set ─────
function initProjectVideos() {
  document.querySelectorAll<HTMLElement>('.project-video[data-video-src]').forEach((el) => {
    const src = el.dataset.videoSrc;
    if (!src) return;
    const inner = el.querySelector<HTMLElement>('.project-video__inner');
    if (!inner) return;
    const video = document.createElement('video');
    video.src = src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = false;
    inner.innerHTML = '';          // remove placeholder + gradient
    inner.style.background = '#000';
    inner.appendChild(video);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      end: 'bottom 10%',
      onEnter: () => video.play(),
      onLeave: () => video.pause(),
      onEnterBack: () => video.play(),
      onLeaveBack: () => video.pause(),
    });
  });
}

// ── Master setup ───────────────────────────────────────────────────
function setup() {
  if (reducedMotion()) {
    document.querySelectorAll<HTMLElement>('[data-reveal],[data-reveal-word]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  initLenis();
  initWordReveals();
  initFadeReveals();
  initParallax();
  initCardStack('.stacked-section', '.stack-card'); // (otras páginas pueden usarlo)
  initCounters();
  initMarqueeScroll();
  initCharReveals();
  initStatementSwap();
  initServicesAccordion();
  initWorkGrid();
  initProjectVideos();
  initShowreelLightbox();
}

// ── Showreel lightbox — click to open/close with sound ─────────────
function initShowreelLightbox() {
  const trigger   = document.getElementById('showreel-trigger');
  const lightbox  = document.getElementById('showreel-lightbox');
  const modal     = document.getElementById('showreel-modal-video') as HTMLVideoElement | null;
  const closeBtn  = document.getElementById('showreel-close-btn');
  const backdrop  = document.getElementById('showreel-close');
  if (!trigger || !lightbox || !modal) return;

  function openLightbox() {
    lightbox!.classList.add('is-open');
    lightbox!.removeAttribute('aria-hidden');
    modal!.currentTime = 0;
    modal!.muted = false;
    modal!.play().catch(() => { modal!.muted = true; modal!.play(); });
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox!.classList.remove('is-open');
    lightbox!.setAttribute('aria-hidden', 'true');
    modal!.pause();
    modal!.muted = true;
    document.body.style.overflow = '';
  }

  trigger.addEventListener('click', openLightbox);
  closeBtn?.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
  backdrop?.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox!.classList.contains('is-open')) closeLightbox();
  });
}

document.addEventListener('astro:page-load', () => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  setup();
});
