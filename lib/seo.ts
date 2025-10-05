const baseUrl = "https://microhairclinic.si";
const supportedLocales = ["sl", "en", "de"];

export function generateAlternateLinks(pathname: string) {
  const languages: Record<string, string> = {};

  supportedLocales.forEach((locale) => {
    // Ako pathname već ima locale (npr. /sl/about), koristi ga kao-jeste
    // Ako pathname nema locale, dodaj ga
    const url = pathname.startsWith(`/${locale}`)
      ? `${baseUrl}${pathname}`
      : `${baseUrl}/${locale}${pathname === `/${locale}` ? '' : pathname}`;
    languages[locale] = url;
  });

  // x-default treba biti slovenački homepage
  languages["x-default"] = `${baseUrl}/sl`;

  return {
    canonical: `${baseUrl}${pathname}`,
    languages,
  };
}
