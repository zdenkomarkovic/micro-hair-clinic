export type Locale = "en" | "de" | "sl";

const navTitles: Record<Locale, Record<string, string>> = {
  sl: {
    home: "Naslovna",
    tretmani: "Tretmani",
    contact: "Kontakt",
  },
  de: {
    home: "Naslovna",
    behandlungen: "Behandlungen",
    contact: "Kontakt",
  },
  en: {
    home: "Home",
    treatments: "Treatments",
    contact: "Contact",
  },
};

const routes: Record<Locale, Record<string, string>> = {
  sl: {
    home: "/sl",
    tretmani: "/sl/tretmani",
    contact: "/sl/contact",
  },
  de: {
    home: "/de",
    behandlungen: "/de/behandlungen",
    contact: "/de/contact",
  },
  en: {
    home: "/en",
    treatments: "/en/treatments",
    contact: "/en/contact",
  },
};

export function getNavList(locale: Locale) {
  if (!navTitles[locale] || !routes[locale]) {
    throw new Error(`Nepodržan locale: ${locale}`);
  }

  const titles = navTitles[locale];
  const hrefs = routes[locale];

  const navList = Object.keys(titles)
    .filter((key) => hrefs[key]) // izbegne undefined route
    .map((key) => ({
      title: titles[key],
      route: hrefs[key],
    }));

  return navList;
}
