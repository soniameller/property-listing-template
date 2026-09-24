export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
};

export const htmlLang: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-PT',
};

export const numberLocales: Record<Locale, string> = {
  en: 'en-GB',
  pt: 'pt-PT',
};

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'pt';
}
