import { useEffect, useState } from 'react';
import Logo from './Logo';
import { localePath, type Locale } from '../i18n';

interface NavItem {
  label: string;
  href: string;
}

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
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const lp = (p: string) => localePath(locale, p);
  const isActive = (href: string) => pathname.replace(/\/$/, '') === lp(href).replace(/\/$/, '');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href={lp('/')} aria-label="BrandUp — inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={lp(item.href)}
              className={`text-sm transition-colors hover:text-accent ${
                isActive(item.href) ? 'text-accent' : 'text-paper/80'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={altHref}
            className="text-sm text-gray transition-colors hover:text-accent"
            aria-label={switchLabel}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </a>
          <a
            href={lp('/cotizar')}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            {quoteLabel}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-paper transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-paper transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex h-[calc(100dvh-72px)] flex-col gap-2 overflow-y-auto bg-ink px-6 pt-6 pb-10 lg:hidden" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={lp(item.href)}
              className="border-b border-line py-4 font-display text-3xl font-bold text-paper transition-colors hover:text-accent"
              style={{ transitionDelay: `${i * 30}ms` }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={lp('/cotizar')}
            className="mt-6 rounded-full bg-accent px-6 py-4 text-center font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            {quoteLabel}
          </a>
          <a href={altHref} className="mt-4 text-center text-sm text-gray hover:text-accent">
            {switchLabel}
          </a>
        </nav>
      )}
    </header>
  );
}
