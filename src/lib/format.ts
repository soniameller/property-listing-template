import type { Locale } from '../i18n/config';
import { numberLocales } from '../i18n/config';
import { t } from '../i18n/ui';
import type { PropertyCondition, PropertyType, FurnishedStatus } from './types';

export function formatPrice(
  price: number,
  currency = 'EUR',
  locale: Locale = 'en',
): string {
  return new Intl.NumberFormat(numberLocales[locale], {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatArea(sqm: number, locale: Locale = 'en'): string {
  return `${new Intl.NumberFormat(numberLocales[locale]).format(sqm)} m²`;
}

export function getPropertyTypeLabel(
  type: PropertyType,
  locale: Locale = 'en',
): string {
  return t(locale, `type.${type}` as `type.${PropertyType}`);
}

export function getConditionLabel(
  condition: PropertyCondition,
  locale: Locale = 'en',
): string {
  return t(locale, `condition.${condition}` as `condition.${PropertyCondition}`);
}

export function getFurnishedLabel(
  status: FurnishedStatus,
  locale: Locale = 'en',
): string {
  return t(locale, `furnished.${status}` as `furnished.${FurnishedStatus}`);
}

export function getWhatsAppLink(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
