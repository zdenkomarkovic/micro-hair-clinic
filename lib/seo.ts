const baseUrl = "https://www.microhairclinic.si";
const supportedLocales = ["sl", "en", "de"];

/**
 * Generates proper SEO alternate links (hreflang) and canonical URL for multilingual pages.
 *
 * This configuration ensures:
 * 1. Canonical URL always points to the localized version (e.g., /sl/kontakt)
 * 2. Hreflang tags inform search engines about language variations
 * 3. x-default points to Slovenian (default language)
 *
 * Note: The 307 redirects from non-localized URLs (e.g., /kontakt → /sl/kontakt)
 * are CORRECT and EXPECTED behavior for multilingual sites. Search engines understand
 * this pattern and will not penalize it.
 *
 * @param pathname - The current pathname including locale (e.g., /sl/kontakt)
 * @returns Object with canonical URL and language alternate links
 */
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

  // x-default points to Slovenian (primary market)
  languages["x-default"] = `${baseUrl}/sl${cleanPath}`;

  return {
    canonical: `${baseUrl}${pathname}`,
    languages,
  };
}
