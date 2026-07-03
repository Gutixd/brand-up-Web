import { useEffect, useState } from 'react';

export interface TItem {
  text: string;
  name: string;
  role: string;
  initials: string;
}

export default function TestimonialCarousel({ items }: { items: TItem[] }) {
  const [idx, setIdx] = useState(0);

  // Auto-avance; se reinicia tras cada cambio (manual o automático)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [items.length, idx]);

  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const t = items[idx];

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Comilla gigante que se asoma sobre la tarjeta */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-9 left-6 z-10 select-none text-[120px] leading-none text-accent [font-family:var(--font-poster)] md:-top-11 md:left-9 md:text-[150px]"
      >
        “
      </span>

      <div className="relative rounded-3xl border border-line bg-white px-7 pb-7 pt-14 shadow-[0_28px_80px_rgba(35,35,35,0.09)] md:px-12 md:pb-9 md:pt-16">
        <div key={idx} className="animate-[tFade_.55s_ease] md:min-h-[170px]">
          <p className="font-display text-xl font-semibold leading-relaxed text-paper [text-wrap:balance] md:text-[1.6rem]">
            {t.text}
          </p>
          <div className="mt-8 flex items-center gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white shadow-[0_8px_22px_rgba(240,94,35,0.4)]">
              {t.initials}
            </span>
            <span>
              <span className="block text-sm font-bold text-paper">{t.name}</span>
              <span className="block text-xs text-gray">{t.role}</span>
            </span>
          </div>
        </div>

        {/* Footer: dots + flechas */}
        <div className="mt-9 flex items-center justify-between border-t border-line pt-6">
          <div className="flex gap-2" role="tablist" aria-label="Testimonios">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Testimonio ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === idx ? 'w-9 bg-accent' : 'w-2 bg-line hover:bg-gray'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-paper transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10.5 3 5.5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Testimonio siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-paper transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m5.5 3 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`@keyframes tFade { from { opacity: 0; transform: translateY(14px); filter: blur(5px); } to { opacity: 1; transform: none; filter: blur(0); } }`}</style>
    </div>
  );
}
