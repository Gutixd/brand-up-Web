// Global motion layer: Lenis smooth scroll + GSAP scroll reveals.
// Re-initialized on every Astro view transition. Respects prefers-reduced-motion.
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initLenis() {
  if (reducedMotion() || lenis) return;
  lenis = new Lenis({ lerp: 0.12 });
  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  lenis.on('scroll', ScrollTrigger.update);
}

function initReveals() {
  if (reducedMotion()) {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Staggered word reveal for big headlines
  document.querySelectorAll<HTMLElement>('[data-reveal-word]').forEach((el) => {
    if (el.dataset.split !== 'done') {
      const words = el.textContent?.trim().split(/\s+/) ?? [];
      el.innerHTML = words
        .map((w) => `<span class="overflow-hidden inline-block align-bottom"><span class="word">${w}</span></span>`)
        .join(' ');
      el.dataset.split = 'done';
    }
    gsap.to(el.querySelectorAll('.word'), {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.07,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  // Generic fade + translate reveals
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      delay: parseFloat(el.dataset.delay ?? '0'),
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  // Subtle parallax — only on elements explicitly marked (kept to 1–2 per page)
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: parseFloat(el.dataset.parallax ?? '-10'),
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

function setup() {
  initLenis();
  initReveals();
}

document.addEventListener('astro:page-load', () => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  setup();
});
