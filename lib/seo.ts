const baseUrl = "https://www.microhairclinic.si";
const supportedLocales = ["sl", "en", "de"];

export function generateAlternateLinks(pathname: string) {
  const languages: Record<string, string> = {};

  // Remove locale from pathname if present (e.g., /sl/about -> /about)
  let cleanPath = pathname;
  for (const loc of supportedLocales) {
    if (pathname.startsWith(`/${loc}/`)) {
      cleanPath = pathname.substring(`/${loc}`.length);
      break;
    } else if (pathname === `/${loc}`) {
      cleanPath = '';
      break;
    }
  }

  // Generate alternate links for each locale
  supportedLocales.forEach((locale) => {
    languages[locale] = `${baseUrl}/${locale}${cleanPath}`;
  });

  // x-default points to Slovenian
  languages["x-default"] = `${baseUrl}/sl${cleanPath}`;

  return {
    canonical: `${baseUrl}${pathname}`,
    languages,
  };
}
