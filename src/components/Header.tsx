import { useEffect, useState } from 'react';
import Logo from './Logo';
import { audio } from '../scripts/audio';
import { localePath, type Locale } from '../i18n';

interface NavItem { label: string; href: string; }
interface Props {
  locale: Locale;
  nav: NavItem[];
  quoteLabel: string;
  altHref: string;
  switchLabel: string;
  pathname: string;
}

export default function Header({ locale, nav, quoteLabel, altHref, switchLabel, pathname }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Arranca siempre en false para que el HTML del servidor y el del cliente
  // coincidan; la preferencia real se lee después del montaje.
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    setSoundOn(audio.isEnabled());
    return audio.onChange(setSoundOn);
  }, []);

  const toggleSound = () => {
    const on = audio.toggle();
    // Confirmación audible solo al encender: apagar tiene que ser silencio.
    if (on) audio.play('menuOpen');
  };

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (!open) {
        if (y > lastY && y > 120) setHidden(true);
        else if (y < lastY) setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  const lp = (p: string) => localePath(locale, p);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className={`transition-colors duration-300 ${
          scrolled || open ? 'bg-ink/95 backdrop-blur-md border-b border-line' : 'bg-transparent'
        }`}>
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
            <a href={lp('/')} aria-label="BrandUp — inicio" onClick={() => setOpen(false)}>
              <Logo />
            </a>

            <div className="flex items-center gap-1">
            {/* Control de sonido — minimalista, mismo lenguaje que el resto */}
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={soundOn}
              aria-label={
                locale === 'es'
                  ? soundOn ? 'Desactivar sonido' : 'Activar sonido'
                  : soundOn ? 'Turn sound off' : 'Turn sound on'
              }
              title={soundOn ? 'Sound on' : 'Sound off'}
              className="sound-toggle group flex h-10 items-center gap-2 px-2 text-gray transition-colors hover:text-accent"
            >
              <span className="flex h-3 items-end gap-[2px]" aria-hidden="true">
                <span className={`sound-toggle__bar w-[2px] bg-current ${soundOn ? 'is-on' : ''}`} style={{ height: soundOn ? '6px' : '2px' }} />
                <span className={`sound-toggle__bar w-[2px] bg-current ${soundOn ? 'is-on' : ''}`} style={{ height: soundOn ? '12px' : '2px' }} />
                <span className={`sound-toggle__bar w-[2px] bg-current ${soundOn ? 'is-on' : ''}`} style={{ height: soundOn ? '8px' : '2px' }} />
              </span>
              <span className="hidden font-mono text-[10px] tracking-widest sm:inline">
                {soundOn ? 'ON' : 'OFF'}
              </span>
            </button>

            {/* Hamburger — always visible */}
            <button
              className="relative flex h-10 w-10 flex-col items-center justify-center"
              aria-expanded={open}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => {
                audio.play(open ? 'menuClose' : 'menuOpen');
                setOpen(!open);
              }}
            >
              <span
                className="absolute block h-[1.5px] w-6 bg-paper origin-center transition-all duration-300 ease-in-out"
                style={{ transform: open ? 'translateY(0) rotate(45deg)' : 'translateY(-6px) rotate(0deg)' }}
              />
              <span
                className="absolute block h-[1.5px] w-6 bg-paper transition-all duration-200 ease-in-out"
                style={{ opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'scaleX(1)' }}
              />
              <span
                className="absolute block h-[1.5px] w-6 bg-paper origin-center transition-all duration-300 ease-in-out"
                style={{ transform: open ? 'translateY(0) rotate(-45deg)' : 'translateY(6px) rotate(0deg)' }}
              />
            </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen overlay */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink transition-all duration-500 ease-in-out ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative accent */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-1/4 -right-1/4 h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(240,94,35,0.07)_0%,transparent_70%)]" />
        </div>

        {/* Spacer */}
        <div className="h-[72px] shrink-0" />

        {/* Nav links */}
        <nav className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-16" aria-label="Navigation overlay">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={lp(item.href)}
              onClick={() => setOpen(false)}
              className="group flex items-baseline justify-between border-b border-white/[0.07] py-5 md:py-6 text-paper/50 transition-all duration-500 ease-out hover:text-paper hover:pl-2"
              style={{
                transitionDelay: open ? `${80 + i * 55}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <span className="font-display text-[clamp(2rem,6vw,5rem)] font-bold tracking-tight uppercase leading-none">
                {item.label}
              </span>
              <span className="text-xl text-white/10 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          ))}
        </nav>

        {/* Bottom bar */}
        <div
          className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] px-6 py-6 md:px-16"
          style={{
            transitionDelay: open ? `${80 + nav.length * 55 + 40}ms` : '0ms',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
          }}
        >
          <a
            href={lp('/cotizar')}
            onClick={() => setOpen(false)}
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-paper hover:text-ink"
          >
            {quoteLabel}
          </a>
          <a
            href={altHref}
            className="font-mono text-sm tracking-widest text-gray transition-colors hover:text-accent"
            aria-label={switchLabel}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </a>
        </div>
      </div>
    </>
  );
}
