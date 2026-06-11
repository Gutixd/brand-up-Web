import { useEffect, useState } from 'react';
import Logo from './Logo';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  const lp = (p: string) => localePath(locale, p);
  const isActive = (href: string) => pathname.replace(/\/$/, '') === lp(href).replace(/\/$/, '');

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled || open ? 'bg-ink/95 backdrop-blur-md border-b border-line' : 'bg-transparent'
    }`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href={lp('/')} aria-label="BrandUp — inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={lp(item.href)}
              className={`group relative flex items-center gap-1.5 py-1 text-sm font-medium transition-colors ${
                isActive(item.href) ? 'text-accent' : 'text-paper/70 hover:text-paper'
              }`}
            >
              <span className="text-[10px] font-mono tracking-wider text-gray/50 transition-colors group-hover:text-accent/70">
                0{i + 1}
              </span>
              {item.label}
              {/* animated underline */}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={altHref}
            className="text-xs font-mono tracking-widest text-gray transition-colors hover:text-accent"
            aria-label={switchLabel}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </a>
          <a
            href={lp('/cotizar')}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-paper hover:text-ink"
          >
            {quoteLabel}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-px w-5 bg-paper transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-paper transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-px w-5 bg-paper transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="flex h-[calc(100dvh-72px)] flex-col overflow-y-auto bg-ink px-6 pb-10 lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={lp(item.href)}
              className="group flex items-center justify-between border-b border-line py-5 transition-colors hover:text-accent"
              style={{ animationDelay: `${i * 40}ms` }}
              onClick={() => setOpen(false)}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-gray/40">0{i + 1}</span>
                <span className="font-display text-2xl font-semibold tracking-tight">{item.label}</span>
              </div>
              <span className="text-gray/30 transition-colors group-hover:text-accent">↗</span>
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={lp('/cotizar')}
              className="rounded-2xl bg-accent px-6 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-paper hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {quoteLabel}
            </a>
            <a
              href={altHref}
              className="py-3 text-center text-sm text-gray hover:text-accent"
            >
              {switchLabel} → {locale === 'es' ? 'EN' : 'ES'}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
