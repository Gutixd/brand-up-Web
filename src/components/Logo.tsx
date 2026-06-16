export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="BrandUp"
    >
      {/* Mark — B↑ recreado como SVG fiel al logo oficial */}
      <svg
        viewBox="0 0 56 62"
        width="34"
        height="38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Letra B — forma completa con recortes interiores */}
        <path
          fillRule="evenodd"
          fill="currentColor"
          d="
            M 4 4
            L 4 58
            L 32 58
            C 46 58 54 52 54 42
            C 54 35 50 30 43 28
            C 49 25 52 20 52 13
            C 52 7 46 4 33 4
            Z
            M 17 10
            L 30 10
            C 37 10 40 13 40 17
            C 40 21 37 25 30 25
            L 17 25
            Z
            M 17 31
            L 32 31
            C 41 31 44 35 44 40
            C 44 45 41 49 32 49
            L 17 49
            Z
          "
        />

        {/* Flecha naranja — sube por la derecha de la B */}
        <path
          d="M 42 54 C 50 54 54 49 54 42 C 54 35 50 31 44 31 C 44 31 46 35 46 42 C 46 49 44 54 42 54 Z"
          fill="#f05e23"
        />
        {/* Tallo de la flecha naranja subiendo */}
        <path
          d="M 46 42 L 46 16"
          stroke="#f05e23"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Cabeza de la flecha */}
        <path
          d="M 36 24 L 46 14 L 56 24"
          stroke="#f05e23"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
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
