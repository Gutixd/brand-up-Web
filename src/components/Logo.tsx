// Wordmark BrandUp: texto sobrio + flecha ascendente naranja del logo oficial.
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline gap-[3px] font-display text-[1.25rem] font-semibold tracking-[-0.03em] text-paper ${className}`}
      aria-label="BrandUp"
    >
      BrandUp
      <svg viewBox="0 0 14 14" className="h-[0.7em] w-auto self-center" aria-hidden="true">
        <path
          d="M2 12 L12 2 M5 2 H12 V9"
          fill="none"
          stroke="#f05e23"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
