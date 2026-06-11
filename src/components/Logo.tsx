// BrandUp wordmark: "Brand" + orange up-arrow accent, matching the official logo.
export default function Logo({ className = 'h-7' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 font-display font-extrabold tracking-tight text-paper ${className}`} aria-label="BrandUp">
      <span className="text-[1.35rem] leading-none">Brand</span>
      <svg viewBox="0 0 24 28" className="h-[1.5rem] w-auto -mt-1" aria-hidden="true">
        <path
          d="M12 2 L22 12 M12 2 L2 12 M12 2 L12 22 Q12 26 8 26"
          fill="none"
          stroke="#f19650"
          strokeWidth="4.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[1.35rem] leading-none">p</span>
    </span>
  );
}
