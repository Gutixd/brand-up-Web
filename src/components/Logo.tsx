export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="BrandUp"
    >
      {/* Mark — reproduce el B↑ del logo oficial sobre fondo naranja */}
      <svg
        viewBox="0 0 36 36"
        width="34"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Fondo redondeado naranja */}
        <rect width="36" height="36" rx="7" fill="#f05e23" />
        {/* B bold en blanco */}
        <text
          x="6"
          y="27"
          fontFamily="Georgia, serif"
          fontSize="24"
          fontWeight="700"
          fill="white"
        >B</text>
        {/* Flecha diagonal arriba-derecha */}
        <line x1="21" y1="20" x2="29" y2="10" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
        <polyline points="24,10 29,10 29,15" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>

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
