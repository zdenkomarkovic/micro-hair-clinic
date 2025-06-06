import { i18n } from "@/i18n-config";
import type { Locale } from "@/i18n-config";

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}
