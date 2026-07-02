import logoIcon from '../assets/brand/logo-icon.webp';

// El asset puede llegar como ImageMetadata (Astro) o como URL string
const iconSrc = typeof logoIcon === 'string' ? logoIcon : logoIcon.src;

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="BrandUp"
    >
      {/* Marca B↑ — logo original (assets/brand/logo-icon.webp) */}
      <img
        src={iconSrc}
        alt=""
        width={34}
        height={45}
        decoding="async"
        style={{ display: 'block', width: '34px', height: 'auto' }}
      />

      {/* Wordmark */}
      <span
        style={{
          fontFamily: 'var(--font-display, inherit)',
          fontSize: '1.15rem',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: 'var(--color-paper, #232323)',
        }}
      >
        Brand<span style={{ color: '#f05e23' }}>Up</span>
      </span>
    </span>
  );
}
