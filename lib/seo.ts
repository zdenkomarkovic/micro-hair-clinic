const baseUrl = "https://example.com"; // Zameni svojim domenom
const supportedLocales = ["sr", "en"];

export function generateAlternateLinks(pathname: string) {
  const languages: Record<string, string> = {};

  supportedLocales.forEach((locale) => {
    languages[locale] = `${baseUrl}/${locale}${pathname}`;
  });

  languages["x-default"] = `${baseUrl}${pathname}`;

  return {
    canonical: `${baseUrl}${pathname}`,
    languages,
  };
}
