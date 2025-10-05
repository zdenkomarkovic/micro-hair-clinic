const baseUrl = "https://microhairclinic.si";
const supportedLocales = ["sl", "en", "de"];

export function generateAlternateLinks(pathname: string) {
  const languages: Record<string, string> = {};

  // Ukloni postojeći locale iz pathname da dobijemo čist path
  let cleanPath = pathname;
  supportedLocales.forEach((loc) => {
    if (pathname.startsWith(`/${loc}/`)) {
      cleanPath = pathname.substring(loc.length + 1); // npr. /sl/about -> /about
    } else if (pathname === `/${loc}`) {
      cleanPath = ''; // npr. /sl -> ''
    }
  });

  // Dodaj svaki locale sa čistim path-om
  supportedLocales.forEach((locale) => {
    languages[locale] = `${baseUrl}/${locale}${cleanPath}`;
  });

  // x-default je slovenački
  languages["x-default"] = `${baseUrl}/sl${cleanPath}`;

  return {
    canonical: `${baseUrl}${pathname}`,
    languages,
  };
}
