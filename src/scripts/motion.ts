// Motion layer: Lenis + GSAP ScrollTrigger.
// Re-initialized on every Astro view transition. Respects prefers-reduced-motion.
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initWorks3D, destroyWorks3D } from './works3d';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let lenisTickerAdded = false;
let charSafetyIntervalAdded = false;

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ── Lenis smooth scroll via GSAP ticker ────────────────────────────
function initLenis() {
  if (reducedMotion()) return;
  if (lenis) { lenis.destroy(); lenis = null; }
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  // El callback del ticker se registra una sola vez (module scope):
  // como `lenis` se lee en cada tick, no hace falta re-agregarlo en
  // cada navegación — eso solo acumulaba callbacks duplicados y
  // volvía la página cada vez más pesada/errática tras varias
  // transiciones de página.
  if (!lenisTickerAdded) {
    gsap.ticker.add((time) => { lenis?.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    lenisTickerAdded = true;
  }
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
    const words = el.querySelectorAll('.word');
    const scrollTrigger = { trigger: el, start: 'top 90%' };
    // Personalidad por proyecto (/trabajos/[slug]): cada rubro entra con un
    // gesto distinto en vez del mismo wipe de siempre.
    switch (el.dataset.wordAnim) {
      case 'playful':
        gsap.fromTo(words,
          { y: '120%', opacity: 0, rotate: -8, scale: 0.75 },
          { y: '0%', opacity: 1, rotate: 0, scale: 1, duration: 0.9, ease: 'back.out(2.6)', stagger: 0.09, scrollTrigger });
        break;
      case 'bold':
        gsap.fromTo(words,
          { opacity: 0, scaleY: 1.7, skewX: -14 },
          { opacity: 1, scaleY: 1, skewX: 0, duration: 0.5, ease: 'power4.out', stagger: 0.05, scrollTrigger });
        break;
      case 'industrial':
        gsap.fromTo(words,
          { x: '-70%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.65, ease: 'power3.out', stagger: 0.055, scrollTrigger });
        break;
      default: // 'editorial' y cualquier otro caso: el wipe original, sobrio
        gsap.to(words, {
          y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.06, scrollTrigger,
        });
    }
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
  const mobile = window.innerWidth < 768;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    // En móvil el collage es una grilla estática — el parallax la desordenaría
    if (mobile && el.closest('.manifesto__collage')) return;
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
        // Números grandes con separador de miles (1.000.000)
        const loc = document.documentElement.lang === 'en' ? 'en-US' : 'es-CL';
        const n = isFloat ? obj.val.toFixed(1) : (target >= 1000 ? Math.round(obj.val).toLocaleString(loc) : Math.round(obj.val).toString());
        el.textContent = n + suffix;
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
    const text = (el.textContent ?? '').trim().replace(/\s+/g, ' ');
    el.innerHTML = '';
    // Agrupamos por palabra: cada palabra es un bloque que NO se parte a la
    // mitad; solo se permite salto de línea entre palabras.
    const words = text.split(' ');
    words.forEach((word, wi) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'char-word';
      for (const char of word) {
        const cont = document.createElement('span');
        cont.className = 'char-container';
        const inner = document.createElement('span');
        inner.className = 'char';
        inner.textContent = char;
        cont.appendChild(inner);
        wordSpan.appendChild(cont);
      }
      el.appendChild(wordSpan);
      if (wi < words.length - 1) {
        const space = document.createElement('span');
        space.className = 'char-space';
        // Espacio real: crawlers y lectores de pantalla leen el texto correcto
        space.textContent = ' ';
        el.appendChild(space);
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
      end: '+=95%',
      pin: true,
      pinSpacing: true,
      scrub: 1.0,
      invalidateOnRefresh: true,
    },
  });

  // Ghost drifts from bottom (58%) to top (-58%)
  tl.to(ghost, { yPercent: -58, ease: 'none' }, 0);

  // A gets ~65% of the scroll, B gets ~28% — B is brief
  tl.to(textA,   { y: -32, opacity: 0, ease: 'power3.in',  duration: 0.07 }, 0.63);
  tl.fromTo(textB, { y: 28, opacity: 0 }, { y: 0, opacity: 1, ease: 'power3.out', duration: 0.07 }, 0.71);

  // Post-its: same clean cutover
  if (positsA) tl.to(positsA,  { opacity: 0, scale: 0.94, ease: 'power2.in',  duration: 0.06 }, 0.63);
  if (positsB) tl.to(positsB,  { opacity: 1, scale: 1,    ease: 'power2.out', duration: 0.07 }, 0.71);
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

// ── Work grid — entrada exagerada (rotación + escala desde sesgado) ─
function initWorkGrid() {
  const items = document.querySelectorAll<HTMLElement>('[data-work-item]');
  if (!items.length) return;
  gsap.fromTo(items,
    // "rotation" (no "rotate"): evita que GSAP use el modo de propiedades
    // CSS nativas, que entra en conflicto con rotateX/rotateY del tilt 3D
    { y: 90, opacity: 0, scale: 0.88, rotation: -3, transformOrigin: '50% 100%' },
    {
      y: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.1, ease: 'expo.out',
      stagger: { each: 0.14 },
      scrollTrigger: { trigger: items[0].closest('section') ?? items[0], start: 'top 88%' },
    },
  );
  // Los números fantasma gigantes entran con leve retraso, tipo sello
  const ghosts = document.querySelectorAll<HTMLElement>('.wcard-ghost');
  if (ghosts.length) {
    gsap.fromTo(ghosts,
      { opacity: 0, y: 24, scale: 1.15 },
      {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out',
        stagger: { each: 0.14 }, delay: 0.15,
        scrollTrigger: { trigger: ghosts[0].closest('section') ?? ghosts[0], start: 'top 88%' },
      },
    );
  }
}

// ── Work cards — tilt 3D magnético + brillo que sigue el cursor ────
function initWorkTilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (reducedMotion()) return;
  document.querySelectorAll<HTMLElement>('[data-tilt-card]').forEach((card) => {
    // El tilt anima un wrapper interno (data-tilt-target), no la tarjeta
    // misma: así nunca comparte nodo con la animación de entrada por
    // scroll y GSAP no puede pisar un transform con el otro.
    const target = card.querySelector<HTMLElement>('[data-tilt-target]');
    if (!target) return;
    const MAX_TILT = 9; // grados — exagerado pero controlado
    const rotX = gsap.quickTo(target, 'rotateX', { duration: 0.5, ease: 'power3.out' });
    const rotY = gsap.quickTo(target, 'rotateY', { duration: 0.5, ease: 'power3.out' });
    const lift = gsap.quickTo(target, 'z', { duration: 0.5, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;   // 0..1
      const py = (e.clientY - r.top) / r.height;   // 0..1
      rotY(( px - 0.5) * MAX_TILT * 2);
      rotX((-(py - 0.5)) * MAX_TILT * 2);
      lift(24);
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
    };
    const onLeave = () => { rotX(0); rotY(0); lift(0); };

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  });
}

// ── Project media — swap to <video> when data-video-src is set ─────
// Monta/reproduce SOLO el video cercano al viewport y libera (desmonta)
// los que quedan lejos. En móvil, tener los 5 videos decodificando a la
// vez —y dos de ellos son 4K— supera el límite de decodificadores del
// teléfono y algunos salían en negro. El degradado de marca del
// contenedor queda siempre detrás como respaldo mientras un video
// carga o si no puede decodificar.
//
// Se usa un chequeo manual por scroll (posición de FLUJO en el documento,
// vía offsetTop) en vez de getBoundingClientRect: los 5 .project-video
// son `position:sticky; top:0` en el mismo contenedor, así que al final
// de la sección TODOS se apilan en top:0 y su rect no los distingue.
// offsetTop es la posición de layout real, inmune al sticky.
function initProjectVideos() {
  interface Item {
    el: HTMLElement; src: string;
    inner: HTMLElement; placeholder: HTMLElement | null;
    video: HTMLVideoElement | null;
    flowTop: number;
  }
  const docTop = (el: HTMLElement) => {
    let t = 0, n: HTMLElement | null = el;
    while (n) { t += n.offsetTop; n = n.offsetParent as HTMLElement | null; }
    return t;
  };
  const items: Item[] = [];
  document.querySelectorAll<HTMLElement>('.project-video[data-video-src]').forEach((el) => {
    const src = el.dataset.videoSrc;
    const inner = el.querySelector<HTMLElement>('.project-video__inner');
    if (!src || !inner) return;
    items.push({ el, src, inner, placeholder: inner.querySelector('.project-video__placeholder'), video: null, flowTop: 0 });
  });
  if (!items.length) return;

  const measure = () => { for (const it of items) it.flowTop = docTop(it.el); };
  measure();

  const mount = (it: Item) => {
    if (it.video) return;
    const v = document.createElement('video');
    v.src = it.src;
    v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.preload = 'auto';
    v.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;';
    it.inner.appendChild(v);
    it.video = v;
    if (it.placeholder) it.placeholder.style.opacity = '0';
  };
  const unmount = (it: Item) => {
    if (!it.video) return;
    it.video.pause();
    it.video.removeAttribute('src');
    it.video.load();          // libera el decoder/buffer en móvil
    it.video.remove();
    it.video = null;
    if (it.placeholder) it.placeholder.style.opacity = '1';
  };

  const evaluate = () => {
    const vh = window.innerHeight;
    const y = window.scrollY;
    for (const it of items) {
      // Distancia (en pantallas) entre el scroll actual y el punto donde
      // este video pasa a estar fijo a pantalla completa.
      const d = (y - it.flowTop) / vh;
      // Reproduce SOLO el que ocupa el centro de la pantalla (|d|<0.5),
      // así nunca hay 2 videos —ni los dos 4K— decodificando a la vez.
      const visible = d >= -0.5 && d < 0.5;
      // Monta el actual y sus vecinos inmediatos (transición fluida);
      // los 4K quedan montados pero pausados = sin presión de decoder.
      const near = d >= -1.3 && d < 1.3;
      if (near) mount(it); else unmount(it);
      if (it.video) {
        if (visible) it.video.play().catch(() => {});
        else it.video.pause();
      }
    }
  };

  const connected = () => {
    // Si esta página ya fue reemplazada por una view-transition, los
    // elementos están desconectados: nos auto-removemos para no montar
    // videos en DOM huérfano ni acumular listeners entre navegaciones.
    if (items[0].el.isConnected) return true;
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    return false;
  };
  const onScroll = () => { if (connected()) evaluate(); };
  const onResize = () => { if (connected()) { measure(); evaluate(); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  evaluate();                            // estado inicial inmediato
  window.setTimeout(() => { measure(); evaluate(); }, 500); // por si el layout tardó
}

// ── Videos perezosos: monta el <video> solo cuando entra en pantalla ───
// Único helper para TODAS las galerías (la plantilla genérica y las 12
// landings con diseño propio): basta con poner data-lazy-video="/ruta.mp4"
// en el contenedor. Evita decodificar 2+ videos a la vez en móvil —causa de
// que salieran en negro— y libera el decoder al salir de vista.
function initLazyVideos() {
  const items = document.querySelectorAll<HTMLElement>('[data-lazy-video]');
  if (!items.length) return;

  const mount = (el: HTMLElement) => {
    if (el.querySelector('video')) return;
    const src = el.dataset.lazyVideo;
    if (!src) return;
    const v = document.createElement('video');
    v.className = 'lazy-video';
    v.src = src;
    v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.preload = 'auto';
    el.appendChild(v);
    v.play().catch(() => {});
  };
  const unmount = (el: HTMLElement) => {
    const v = el.querySelector('video');
    if (!v) return;
    v.pause();
    v.removeAttribute('src');
    v.load();
    v.remove();
  };

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) mount(el); else unmount(el);
    }
  }, { rootMargin: '250px 0px' });

  items.forEach((el) => io.observe(el));
}

// ── /trabajos: índice lateral de filtro + marcador deslizante ───────
function initWorkFilters() {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.wfilter'));
  const slots = Array.from(document.querySelectorAll<HTMLElement>('[data-project-slot]'));
  if (!buttons.length || !slots.length) return;

  const empty = document.getElementById('works3d-empty');
  const marker = document.querySelector<HTMLElement>('.works-index__marker');
  const isDesktop = () => window.matchMedia('(min-width: 901px)').matches;

  // Desliza el marcador naranja al botón activo (solo índice vertical)
  function moveMarker(btn: HTMLElement, animate = true) {
    if (!marker || !isDesktop()) return;
    const top = btn.offsetTop + btn.offsetHeight * 0.16;
    const h = btn.offsetHeight * 0.68;
    if (animate) {
      gsap.to(marker, { y: top, height: h, duration: 0.5, ease: 'expo.out' });
    } else {
      gsap.set(marker, { y: top, height: h });
    }
  }

  // Posición inicial del marcador (tras cargar la fuente Anton, que
  // cambia las alturas). Reintenta con fonts.ready por si acaso.
  const active = buttons.find((b) => b.getAttribute('aria-pressed') === 'true') ?? buttons[0];
  requestAnimationFrame(() => moveMarker(active, false));
  (document as any).fonts?.ready?.then(() => moveMarker(
    buttons.find((b) => b.getAttribute('aria-pressed') === 'true') ?? buttons[0], false,
  ));
  window.addEventListener('resize', () => {
    const cur = buttons.find((b) => b.getAttribute('aria-pressed') === 'true') ?? buttons[0];
    moveMarker(cur, false);
  }, { passive: true });

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter ?? 'all';
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      moveMarker(btn);

      const toHide: HTMLElement[] = [];
      const toShow: HTMLElement[] = [];
      slots.forEach((slot) => {
        // data-filters vive en el propio slot (.wrow)
        const tags = (slot.dataset.filters ?? '').split(' ');
        const match = filter === 'all' || tags.includes(filter);
        if (match) toShow.push(slot); else toHide.push(slot);
      });

      if (empty) empty.hidden = toShow.length > 0;

      const tl = gsap.timeline();
      if (toHide.length) {
        tl.to(toHide, {
          opacity: 0, y: 14, scale: 0.96, duration: 0.3, stagger: 0.02, ease: 'power2.in',
          onComplete: () => toHide.forEach((s) => { s.style.display = 'none'; }),
        });
      }
      toShow.forEach((s) => { s.style.display = ''; });
      tl.fromTo(toShow,
        { opacity: 0, y: 14, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.04, ease: 'power3.out' },
        toHide.length ? '-=0.08' : 0,
      );
      // Deja que el layout se asiente y refresca los triggers; la capa
      // WebGL relee los rects sola cada frame, así que se adapta al filtro.
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });
  });
}

// ── /trabajos: entrada suave al abrir la página ─────────────────────
function initWorkIntro() {
  const layout = document.querySelector('.works3d__layout');
  if (!layout) return;

  // Índice lateral: los servicios caen escalonados. Ease suave (no
  // 'expo'/'back', que se sienten como un salto) y sin delay artificial
  // — arranca junto con la transición de página, no después.
  gsap.from('.works-index .wfilter', {
    opacity: 0, x: -14, duration: 0.6, ease: 'power2.out', stagger: 0.045,
  });

  // Los triggers de scroll se crean recién cuando la fuente Anton ya
  // cargó: si se crean antes, ScrollTrigger mide contra un layout que
  // todavía va a cambiar de tamaño (texto con la fuente de respaldo),
  // y el refresh() posterior de initRevealSafety() recalcula las
  // posiciones a mitad de la animación — eso es el "salto" que se veía.
  const setupRowReveals = () => {
    // gsap.to (no .from): el CSS (html.js .wrow) ya deja la fila oculta
    // desde el primer paint, así que no hay riesgo de un flash
    // "visible → oculto" mientras se esperaba la fuente.
    const rows = gsap.utils.toArray<HTMLElement>('.wrow');
    rows.forEach((row) => {
      gsap.to(row, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: row, start: 'top 90%' },
      });
    });
    ScrollTrigger.refresh();
  };

  if (document.fonts?.ready) {
    document.fonts.ready.then(setupRowReveals).catch(setupRowReveals);
  } else {
    setupRowReveals();
  }
}

// ── Scroll progress bar ────────────────────────────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  gsap.set(bar, { scaleX: 0 });
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      gsap.to(bar, { scaleX: self.progress, duration: 0.15, ease: 'none', overwrite: true });
    },
  });
}


// ── Magnetic elements ──────────────────────────────────────────────
function initMagnetic() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || '0.3');
    const move = (e: MouseEvent) => {
      const b = el.getBoundingClientRect();
      const relX = e.clientX - b.left - b.width / 2;
      const relY = e.clientY - b.top - b.height / 2;
      gsap.to(el, { x: relX * strength, y: relY * strength, duration: 0.45, ease: 'power3.out' });
    };
    const reset = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.45)' });
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', reset);
  });
}

// ── Hero arrow cursor — spring physics + squash & stretch ──────────
let heroCursorCleanup: (() => void) | null = null;

function initHeroCursor() {
  heroCursorCleanup?.();
  heroCursorCleanup = null;

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (reducedMotion()) return;
  const section = document.querySelector<HTMLElement>('.hero-video-section');
  const cursor = document.getElementById('hero-cursor');
  if (!section || !cursor) return;

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  let mx = 0, my = 0;            // objetivo (mouse)
  let x = 0, y = 0;             // posición de la flecha (estela suave)
  let px = 0, py = 0;          // posición previa → velocidad real
  let angle = -45;            // ángulo actual (grados); reposo: arriba-derecha
  let stretch = 1, squash = 1;
  let primed = false;
  let raf = 0;

  const FOLLOW = 0.18;  // inercia del seguimiento (estela). Más bajo = más cola

  const tick = () => {
    // Seguimiento suave hacia el mouse: estela con inercia, sin rebote/wobble
    x = lerp(x, mx, FOLLOW);
    y = lerp(y, my, FOLLOW);

    // Velocidad real = desplazamiento de la flecha (no del mouse directo → más suave)
    const dx = x - px;
    const dy = y - py;
    px = x; py = y;

    const speed = Math.hypot(dx, dy);
    const t = Math.min(speed / 18, 1); // normalizar (18px/frame ≈ máximo)

    // La flecha apunta hacia donde viaja (interpolación por camino corto)
    if (speed > 0.4) {
      const target = Math.atan2(dy, dx) * (180 / Math.PI);
      let d = ((target - angle + 540) % 360) - 180;
      angle += d * 0.25;
    }

    // Squash & stretch: se estira en el eje de movimiento, se aplana perpendicular
    stretch = lerp(stretch, 1 + t * 0.45, 0.18);
    squash  = lerp(squash, 1 - t * 0.24, 0.18);

    cursor.style.transform =
      `translate(${x}px, ${y}px) rotate(${angle}deg) scale(${stretch}, ${squash})`;

    raf = requestAnimationFrame(tick);
  };

  const prime = (e: MouseEvent) => {
    mx = e.clientX; my = e.clientY;
    if (!primed) { x = px = mx; y = py = my; primed = true; }
  };
  const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
  const onEnter = (e: MouseEvent) => {
    prime(e);
    cursor.classList.add('is-on');
    section.classList.add('hide-native');
  };
  const onLeave = () => {
    cursor.classList.remove('is-on');
    section.classList.remove('hide-native');
  };

  section.addEventListener('mouseenter', onEnter);
  section.addEventListener('mousemove', onMove);
  section.addEventListener('mouseleave', onLeave);
  raf = requestAnimationFrame(tick);

  heroCursorCleanup = () => {
    cancelAnimationFrame(raf);
    section.removeEventListener('mouseenter', onEnter);
    section.removeEventListener('mousemove', onMove);
    section.removeEventListener('mouseleave', onLeave);
  };
}

// ── Reveal de imágenes — clip + zoom-out (polaroids, etc.) ─────────
function initImgReveals() {
  document.querySelectorAll<HTMLElement>('[data-img-reveal]').forEach((el) => {
    const img = el.querySelector('img');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
    tl.fromTo(el,
      { clipPath: 'inset(18% 12% 18% 12%)', opacity: 0 },
      { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.1, ease: 'power4.out' },
      0,
    );
    if (img) tl.fromTo(img, { scale: 1.35 }, { scale: 1, duration: 1.5, ease: 'power3.out' }, 0);
  });
}

// ── Skew por velocidad de scroll (exagerado, estilo Locomotive) ────
function initVelocitySkew() {
  if (window.innerWidth < 768) return; // en móvil rompe el scroll nativo del carrusel
  const els = document.querySelectorAll<HTMLElement>('[data-skew]');
  if (!els.length) return;
  const proxy = { skew: 0 };
  const clamp = gsap.utils.clamp(-7, 7);
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate(self) {
      const v = clamp(self.getVelocity() / -350);
      if (Math.abs(v) > Math.abs(proxy.skew)) {
        proxy.skew = v;
        gsap.to(proxy, {
          skew: 0, duration: 0.9, ease: 'power3.out', overwrite: true,
          onUpdate: () => els.forEach((el) => { el.style.transform = `skewY(${proxy.skew}deg)`; }),
        });
      }
    },
  });
}

// ── Servicios — preview de imagen que sigue al cursor ──────────────
let svcPreviewCleanup: (() => void) | null = null;

function initSvcPreview() {
  svcPreviewCleanup?.();
  svcPreviewCleanup = null;

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (reducedMotion()) return;
  const rows = document.querySelectorAll<HTMLElement>('[data-svc-img]');
  if (!rows.length) return;

  const float = document.createElement('div');
  float.className = 'svc-float';
  const img = document.createElement('img');
  img.alt = '';
  float.appendChild(img);
  document.body.appendChild(float);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  let mx = 0, my = 0, x = 0, y = 0, px = 0;
  let rot = 0, scale = 0, target = 0;
  let raf = 0;

  const tick = () => {
    x = lerp(x, mx, 0.14);
    y = lerp(y, my, 0.14);
    const dx = x - px; px = x;
    // Rota según la velocidad horizontal — la foto "cuelga" al moverse
    rot = lerp(rot, Math.max(-14, Math.min(14, dx * 0.9)), 0.12);
    scale = lerp(scale, target, 0.16);
    float.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`;
    raf = requestAnimationFrame(tick);
  };

  const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
  window.addEventListener('mousemove', onMove);

  const enters: Array<[HTMLElement, (e: MouseEvent) => void]> = [];
  const leaves: Array<[HTMLElement, () => void]> = [];
  rows.forEach((row) => {
    const onEnter = (e: MouseEvent) => {
      const src = row.dataset.svcImg;
      if (src) img.src = src;
      if (scale < 0.05) { mx = e.clientX; my = e.clientY; x = px = mx; y = my; }
      target = 1;
      float.classList.add('is-on');
    };
    const onLeave = () => { target = 0; float.classList.remove('is-on'); };
    row.addEventListener('mouseenter', onEnter);
    row.addEventListener('mouseleave', onLeave);
    enters.push([row, onEnter]);
    leaves.push([row, onLeave]);
  });

  raf = requestAnimationFrame(tick);
  svcPreviewCleanup = () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('mousemove', onMove);
    enters.forEach(([r, f]) => r.removeEventListener('mouseenter', f));
    leaves.forEach(([r, f]) => r.removeEventListener('mouseleave', f));
    float.remove();
  };
}

// ── Intro cinemática — logo real B↑ + letras spring + sweep naranja ─
// Adaptación GSAP del patrón "RevealText": cada letra entra con spring
// escalonado (scale 0 → 1 elástico) y luego un barrido naranja las recorre.
function initIntro() {
  const intro = document.getElementById('intro');
  if (!intro) return; // solo existe en home

  const unlock = () => {
    document.documentElement.classList.remove('intro-lock');
    lenis?.start();
  };
  const skip = () => { intro.remove(); unlock(); };

  // Saltar si ya se vio (el script inline pone `hidden`), o con reduced-motion
  let seen = false;
  try { seen = sessionStorage.getItem('bu_intro_seen') === '1'; } catch { /* storage bloqueado */ }
  if (seen || intro.hasAttribute('hidden') || reducedMotion()) { skip(); return; }

  const mark = intro.querySelector<HTMLElement>('.intro__mark');
  const letters = intro.querySelectorAll<HTMLElement>('.rv-letter');
  const sweeps = intro.querySelectorAll<HTMLElement>('.rv-letter__sweep');
  const subtitle = intro.querySelector<HTMLElement>('.intro__subtitle');
  const ui = intro.querySelectorAll<HTMLElement>('.intro__ui > *');
  if (!letters.length || !subtitle) { skip(); return; }

  // Bloquear scroll durante la intro
  document.documentElement.classList.add('intro-lock');
  lenis?.stop();
  window.scrollTo(0, 0);

  // Estados iniciales (scale/opacity base ya vienen del CSS)
  gsap.set(subtitle, { y: 24, opacity: 0 });
  gsap.set(ui, { opacity: 0, y: -8 });

  // Watchdog: si la animación no arranca en 8s (pestaña oculta, fuentes,
  // GSAP lento), se libera la página — nunca dejar al visitante atrapado.
  const watchdog = window.setTimeout(() => {
    if (intro.dataset.started !== '1') skip();
  }, 8000);

  let started = false;
  const play = () => {
    if (started) return;
    started = true;
    if (!intro.isConnected) { unlock(); return; } // el failsafe inline ya lo quitó
    intro.dataset.started = '1';
    clearTimeout(watchdog);

    const tl = gsap.timeline({
      onComplete: () => {
        intro.remove();
        unlock();
        try { sessionStorage.setItem('bu_intro_seen', '1'); } catch { /* noop */ }
      },
    });

    // Marca B↑ — rebote elástico
    if (mark) tl.to(mark, { scale: 1, opacity: 1, rotate: 0, duration: 1.0, ease: 'elastic.out(1, 0.5)' }, 0.15);

    // Letras — spring escalonado (RevealText: scale 0 → 1 con rebote)
    tl.to(letters, { scale: 1, opacity: 1, duration: 0.85, stagger: 0.085, ease: 'elastic.out(1.1, 0.55)' }, 0.3);

    // Barrido naranja letra por letra (overlay sweep)
    tl.to(sweeps, { keyframes: { opacity: [0, 1, 1, 0] }, duration: 0.45, stagger: 0.055, ease: 'power1.inOut' }, 1.45);

    // Subtítulo + UI
    tl.to(subtitle, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.75);
    tl.to(ui, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' }, 1.9);

    // Salida — cortina hacia arriba que revela el hero de video
    tl.to(intro, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, 3.0);
  };

  // Espera la fuente display (máx 700ms) para que las letras no cambien
  // de tipografía a mitad de animación en la primera visita.
  const start = () => {
    const fontsReady = 'fonts' in document
      ? Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 700))])
      : Promise.resolve();
    fontsReady.then(play);
  };

  // Solo arrancar con la pestaña visible: con lagSmoothing(0) (Lenis), una
  // pestaña oculta haría que GSAP saltara al final al recuperar el foco.
  if (document.visibilityState === 'visible') {
    start();
  } else {
    const onVisible = () => {
      if (document.visibilityState !== 'visible') return;
      document.removeEventListener('visibilitychange', onVisible);
      start();
    };
    document.addEventListener('visibilitychange', onVisible);
  }
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
  initIntro();
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
  initWorkTilt();
  initProjectVideos();
  initLazyVideos();
  initWorkFilters();
  initWorkIntro();
  initWorks3D();
  initShowreelLightbox();
  initScrollProgress();
  initMagnetic();
  initHeroCursor();
  initImgReveals();
  initVelocitySkew();
  initSvcPreview();
  initRevealSafety();
}

// ── Red de seguridad para los reveals por scroll ────────────────────
// Los `gsap.from(...)` de esta página dejan los elementos en
// opacity:0 hasta que su ScrollTrigger dispara. Si las imágenes, el
// video o la escena WebGL tardan en asentar el layout (o una
// transición de página deja el scroll ya "pasado" el punto de
// disparo), el trigger puede no calcularse bien y el elemento queda
// invisible para siempre — la página se ve "en blanco"/bugueada.
// Esto la blinda en dos frentes: recalcula los triggers cuando todo
// terminó de cargar, y fuerza opacidad 1 en cualquier elemento que
// siga invisible pasado un tiempo prudente, pase lo que pase.
function initRevealSafety() {
  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh, { once: true });
  if (document.fonts) {
    document.fonts.ready.then(refresh).catch(() => {});
  }

  const targets = '.wrow, [data-reveal], [data-reveal-word], [data-work-item], .wcard-ghost';
  const fixStuckReveals = () => {
    document.querySelectorAll<HTMLElement>(targets).forEach((el) => {
      if (parseFloat(getComputedStyle(el).opacity) < 0.05) {
        gsap.to(el, { opacity: 1, y: 0, x: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
      }
    });
  };

  // Las letras del char-split reveal (data-split-chars) son un caso aparte:
  // a diferencia de arriba, un .char NUNCA baja su opacidad — solo se
  // desplaza en Y (translateY 110% -> 0%). Si el scroll rápido con Lenis
  // interrumpe ese tween a mitad de camino (o su ScrollTrigger nunca llega
  // a disparar), la letra queda parcial o totalmente cortada por el
  // overflow:hidden del contenedor sin que la regla de opacidad de arriba
  // lo note — el título se ve con letras "rotas" o desaparecidas.
  // Por eso esto no corre una sola vez: se revisa periódicamente, porque
  // el atasco puede ocurrir en cualquier momento de la sesión de scroll,
  // no solo al cargar la página.
  const fixStuckChars = () => {
    document.querySelectorAll<HTMLElement>('.char').forEach((el) => {
      const m = new DOMMatrix(getComputedStyle(el).transform);
      if (Math.abs(m.m42) > 0.5) {
        gsap.to(el, { y: '0%', duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
      }
    });
  };

  window.setTimeout(() => { fixStuckReveals(); fixStuckChars(); }, 2600);
  // Solo un intervalo para toda la vida de la pestaña: como corre a nivel
  // de módulo (no por página), registrarlo de nuevo en cada transición de
  // Astro solo iría acumulando intervalos duplicados sin necesidad — el
  // mismo problema que ya se resolvió para el ticker de Lenis arriba.
  if (!charSafetyIntervalAdded) {
    window.setInterval(fixStuckChars, 1500);
    charSafetyIntervalAdded = true;
  }
}

// ── Showreel lightbox + cursor magnético ───────────────────────────
function initShowreelLightbox() {
  const trigger  = document.getElementById('showreel-trigger');
  const lightbox = document.getElementById('showreel-lightbox');
  const modal    = document.getElementById('showreel-modal-video') as HTMLVideoElement | null;
  if (!trigger || !lightbox || !modal) return;

  // Crear cursor custom
  const cursor = document.createElement('div');
  cursor.className = 'showreel-cursor';
  cursor.innerHTML = `
    <span class="showreel-cursor__icon showreel-cursor__play">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#0d0d0d"><path d="M8 5v14l11-7z"/></svg>
    </span>
    <span class="showreel-cursor__icon showreel-cursor__close">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#f8f8f8" stroke-width="2.2" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>`;
  document.body.appendChild(cursor);

  // Física del cursor — lerp + blob squash/stretch
  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;
  let prevCurX = 0, prevCurY = 0;
  let scaleTarget = 0, scaleCur = 0;
  let stretchX = 1, stretchY = 1;
  let blobAngle = 0;
  let raf = 0;
  let isInsideZone = false;

  function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

  function tick() {
    curX = lerp(curX, mouseX, 0.13);
    curY = lerp(curY, mouseY, 0.13);
    scaleCur = lerp(scaleCur, scaleTarget, 0.14);

    // Velocidad del círculo (no del mouse directo — más suave)
    const dx = curX - prevCurX;
    const dy = curY - prevCurY;
    prevCurX = curX;
    prevCurY = curY;

    const speed = Math.sqrt(dx * dx + dy * dy);
    const t = Math.min(speed / 16, 1); // normalizar — 16px/frame = max

    // Ángulo de movimiento
    if (speed > 0.4) blobAngle = lerp(blobAngle, Math.atan2(dy, dx) * (180 / Math.PI), 0.2);

    // Squash & stretch: se estira en dirección de movimiento
    stretchX = lerp(stretchX, 1 + t * 0.55, 0.14);
    stretchY = lerp(stretchY, 1 - t * 0.28, 0.14);

    cursor.style.left = `${curX}px`;
    cursor.style.top  = `${curY}px`;
    cursor.style.transform =
      `translate(-50%,-50%) scale(${scaleCur}) rotate(${blobAngle}deg) scaleX(${stretchX}) scaleY(${stretchY})`;

    const stillMoving = isInsideZone || scaleCur > 0.01 || Math.abs(stretchX - 1) > 0.005;
    if (stillMoving) raf = requestAnimationFrame(tick);
  }

  function onMouseMove(e: MouseEvent) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function showCursor() {
    if (isInsideZone) return;
    isInsideZone = true;
    scaleTarget = 1;
    // Snap posición para evitar vuelo desde (0,0)
    if (curX === 0 && curY === 0) { curX = mouseX; curY = mouseY; prevCurX = mouseX; prevCurY = mouseY; }
    cursor.classList.add('is-visible');
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
  }

  function hideCursor() {
    isInsideZone = false;
    scaleTarget = 0;
    // Sigue el RAF para animar la salida
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
  }

  // Zona del video de fondo
  trigger.addEventListener('mouseenter', showCursor);
  trigger.addEventListener('mouseleave', hideCursor);
  trigger.addEventListener('mousemove', onMouseMove);

  // Zona del lightbox (cuando está abierto)
  lightbox.addEventListener('mousemove', onMouseMove);
  lightbox.addEventListener('mouseenter', () => { if (lightbox.classList.contains('is-open')) showCursor(); });
  lightbox.addEventListener('mouseleave', () => { if (lightbox.classList.contains('is-open')) hideCursor(); });

  function openLightbox() {
    lightbox.classList.add('is-open');
    lightbox.removeAttribute('aria-hidden');
    modal.currentTime = 0;
    modal.volume = 0.5;
    modal.muted = false;
    modal.play().catch(() => { modal.muted = true; modal.play(); });
    document.body.style.overflow = 'hidden';
    cursor.classList.add('is-close');
    // El cursor sigue visible sobre el lightbox
    if (!isInsideZone) { isInsideZone = true; raf = requestAnimationFrame(tick); }
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    modal.pause();
    modal.muted = true;
    document.body.style.overflow = '';
    cursor.classList.remove('is-close');
    // Si el mouse ya no está sobre el trigger, ocultar
    const rect = trigger.getBoundingClientRect();
    if (mouseX < rect.left || mouseX > rect.right || mouseY < rect.top || mouseY > rect.bottom) {
      hideCursor();
    }
  }

  trigger.addEventListener('click', openLightbox);
  lightbox.addEventListener('click', (e) => {
    if (lightbox.classList.contains('is-open')) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}

document.addEventListener('astro:page-load', () => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  setup();
});

// Libera la escena WebGL antes de navegar a otra página (view transitions).
document.addEventListener('astro:before-swap', () => {
  destroyWorks3D();
});
