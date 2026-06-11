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

/** Same page in the other language. */
export function altPath(locale: Locale, pathname: string): string {
  if (locale === 'es') {
    return `/en${pathname === '/' ? '' : pathname.replace(/\/$/, '')}` || '/en';
  }
  const stripped = pathname.replace(/^\/en/, '') || '/';
  return stripped;
}
