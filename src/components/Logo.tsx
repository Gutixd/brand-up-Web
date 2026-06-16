export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="BrandUp"
    >
      {/* Mark — cuadrado naranja con flecha diagonal */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          borderRadius: '6px',
          background: '#f05e23',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="13" x2="13" y2="3" />
          <polyline points="7,3 13,3 13,9" />
        </svg>
      </span>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: 'var(--font-display, inherit)',
          fontSize: '1.15rem',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: 'var(--color-paper, #f8f8f8)',
        }}
      >
        Brand<span style={{ color: '#f05e23' }}>Up</span>
      </span>
    </span>
  );
}
