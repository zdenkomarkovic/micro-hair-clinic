export type Locale = "sr" | "en";

const navTitles: Record<Locale, Record<string, string>> = {
  sr: {
    home: "Naslovna",
    izrada: "Izrada sajta",
    references: "Reference",
    contact: "Kontakt",
  },
  en: {
    home: "Home",
    izrada: "Website development",
    references: "References",
    contact: "Contact",
  },
};

const routes: Record<Locale, Record<string, string>> = {
  sr: {
    home: "/sr",
    izrada: "/sr/izrada-sajta",
    references: "/sr/#reference",
    contact: "/sr/contact",
  },
  en: {
    home: "/en",
    izrada: "/en/website-development",
    references: "/en/#reference",
    contact: "/en/contact",
  },
};

export function getNavList(locale: Locale) {
  if (!navTitles[locale] || !routes[locale]) {
    throw new Error(`Nepodržan locale: ${locale}`);
  }

  return [
    { title: navTitles[locale].home, route: routes[locale].home },
    { title: navTitles[locale].izrada, route: routes[locale].izrada },
    { title: navTitles[locale].references, route: routes[locale].references },
    { title: navTitles[locale].contact, route: routes[locale].contact },
  ];
}
