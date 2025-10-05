const baseUrl = "https://microhairclinic.si";
const supportedLocales = ["sl", "en", "de"];

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
