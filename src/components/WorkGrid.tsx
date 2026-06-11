import { useState } from 'react';

export interface WorkItem {
  slug: string;
  client: string;
  sector: string;
  year: string;
  industry: string;
  gradient: string;
  logoSrc?: string;
  href: string;
}

interface Props {
  items: WorkItem[];
  filters: { key: string; label: string }[];
  allLabel: string;
}

export default function WorkGrid({ items, filters, allLabel }: Props) {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? items : items.filter((i) => i.industry === active);
  // Only show filters that actually have projects (the rest stay ready in data)
  const usable = filters.filter((f) => items.some((i) => i.industry === f.key));

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtros">
        {[{ key: 'all', label: allLabel }, ...usable].map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === f.key
                ? 'border-accent bg-accent text-ink font-semibold'
                : 'border-line text-gray hover:border-accent hover:text-accent'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {visible.map((p) => (
          <a key={p.slug} href={p.href} className="group block">
            <div
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-line transition-transform duration-500 group-hover:scale-[1.015]"
              style={{ background: p.gradient }}
            >
              {p.logoSrc ? (
                <img
                  src={p.logoSrc}
                  alt={`Logo ${p.client}`}
                  loading="lazy"
                  className="max-h-[45%] max-w-[55%] rounded-lg object-contain transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <span className="font-display text-3xl font-bold text-paper/80">{p.client}</span>
              )}
              <span className="absolute right-4 top-4 rounded-full border border-line bg-ink/60 px-3 py-1 text-xs text-gray backdrop-blur">
                {p.year}
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl font-bold text-paper transition-colors group-hover:text-accent">
                {p.client}
              </h3>
              <span className="text-right text-xs text-gray">{p.sector}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
