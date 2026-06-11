export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display text-[1.2rem] font-semibold tracking-[-0.03em] text-paper ${className}`}
      aria-label="BrandUp"
    >
      BrandUp
      <svg
        viewBox="0 0 20 20"
        width="14"
        height="14"
        fill="none"
        stroke="#f05e23"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="4" y1="16" x2="16" y2="4" />
        <polyline points="9,4 16,4 16,11" />
      </svg>
    </span>
  );
}
