export const i18n = {
  locales: ["sl", "de", "en"],
  defaultLocale: "en",
} as const;

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
