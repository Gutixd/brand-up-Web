import { useEffect, useState } from 'react';

export interface TItem {
  text: string;
  name: string;
  role: string;
  initials: string;
}

export default function TestimonialCarousel({ items }: { items: TItem[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [items.length]);

  const t = items[idx];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <div key={idx} className="min-h-[180px] animate-[fadeIn_.6s_ease]">
        <p className="font-display text-xl font-semibold leading-relaxed text-paper md:text-2xl">
          “{t.text}”
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent">
            {t.initials}
          </span>
          <span className="text-left">
            <span className="block text-sm font-semibold text-paper">{t.name}</span>
            <span className="block text-xs text-gray">{t.role}</span>
          </span>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonios">
        {items.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            aria-label={`Testimonio ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-accent' : 'w-2 bg-line hover:bg-gray'}`}
          />
        ))}
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none;} }`}</style>
    </div>
  );
}
