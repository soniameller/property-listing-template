import { getRelativeLocaleUrl } from 'astro:i18n';
import {
  defaultLocale,
  isLocale,
  type Locale,
} from './config';
import { t, type TranslationKey } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

export function localizedPath(locale: Locale, path = ''): string {
  const normalised = path.replace(/^\/+|\/+$/g, '');
  return getRelativeLocaleUrl(locale, normalised || undefined);
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (isLocale(segments[0])) {
    segments.shift();
  }
  return localizedPath(targetLocale, segments.join('/'));
}

export function createTranslator(locale: Locale) {
  return (key: TranslationKey, vars?: Record<string, string | number>) =>
    t(locale, key, vars);
}
