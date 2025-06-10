import "server-only";

import { createIntl } from "@formatjs/intl";
import { Locale } from "@/i18n-config";

export async function getIntl(locale: Locale) {
  let messages;
  try {
    messages = (await import(`../lang/${locale}.json`)).default;
  } catch {
    // fallback na engleski
    messages = (await import(`../lang/en.json`)).default;
    locale = "sl"; // da bude konzistentno
  }
  return createIntl({ locale, messages: messages as Record<string, string> });
}

export function getDirection(locale: Locale) {
  switch (locale) {
    case "sl":
    case "en":
    case "de":
    default:
      return "ltr";
  }
}
