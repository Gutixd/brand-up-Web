import es from './es.json';
import en from './en.json';
import type { L } from '../data/services';

export type Locale = 'es' | 'en';
export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

const dict = { es, en } as const;

export function useT(locale: Locale) {
  return dict[locale];
}

/** Pick the localized value from a bilingual data field. */
export function pick<T>(field: { es: T; en: T }, locale: Locale): T {
  return field[locale];
}

/** Prefix a path with the locale ('/x' → '/en/x' for English). */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'es' ? clean : `/en${clean === '/' ? '' : clean}`;
}

/**
 * Rutas que existen SOLO en español: el blog no está traducido y la 404 no
 * tiene versión /en. Sin esto, `altPath` generaba igual un `/en/blog/...`,
 * y ese enlace terminaba en el `hreflang` y en el botón de idioma: Google
 * rastreaba 21 URLs que no existen y al usuario el botón "EN" lo dejaba en
 * una página rota.
 */
const SOLO_ES = [/^\/blog(\/|$)/, /^\/404(\/|$)/];

/** ¿Esta página tiene versión en el otro idioma? */
export function hasAlternate(pathname: string): boolean {
  const base = pathname.replace(/^\/en/, '') || '/';
  return !SOLO_ES.some((re) => re.test(base));
}

/**
 * Misma página en el otro idioma. Si no existe traducción, manda a la
 * portada del otro idioma en vez de a una URL inventada.
 */
export function altPath(locale: Locale, pathname: string): string {
  if (!hasAlternate(pathname)) return locale === 'es' ? '/en' : '/';
  if (locale === 'es') {
    return `/en${pathname === '/' ? '' : pathname.replace(/\/$/, '')}` || '/en';
  }
  const stripped = pathname.replace(/^\/en/, '') || '/';
  return stripped;
}
