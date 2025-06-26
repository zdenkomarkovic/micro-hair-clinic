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

// Podmeni za tretmane (možeš dodavati ili menjati linkove ovde)
const treatmentSubmenu: Record<Locale, { title: string; link: string }[]> = {
  sl: [
    { title: "SMP za plesavost", link: "/sl/smp-za-plesavost" },
    { title: "Redčenje las", link: "/sl/smp-korekcija" },
    { title: "SMP za brazgotine", link: "/sl/smp-za-brazgotine" },
    { title: "SMP alopecija", link: "/sl/smp-alopecija" },
    { title: "SMP za ženske", link: "/sl/smp-za-zenske" },
    { title: "SMP korekcija", link: "/sl/smp-korekcija" },
  ],
  de: [
    { title: "SMP bei Glatze", link: "/de/smp-za-plesavost" },
    { title: "Haarausfall", link: "/de/smp-korekcija" },
    { title: "SMP bei Narben", link: "/de/smp-za-brazgotine" },
    { title: "SMP bei Alopezie", link: "/de/smp-alopecija" },
    { title: "SMP für Frauen", link: "/de/smp-za-zenske" },
    { title: "SMP Korrektur", link: "/de/smp-korekcija" },
  ],
  en: [
    { title: "SMP for Baldness", link: "/en/smp-za-plesavost" },
    { title: "Hair Thinning", link: "/en/smp-korekcija" },
    { title: "SMP for Scars", link: "/en/smp-za-brazgotine" },
    { title: "SMP for Alopecia", link: "/en/smp-alopecija" },
    { title: "SMP for Women", link: "/en/smp-za-zenske" },
    { title: "SMP Correction", link: "/en/smp-korekcija" },
  ],
};

type NavItem =
  | {
      title: string;
      link: string;
    }
  | {
      title: string;
      list: { title: string; link: string }[];
    };

export function getNavList(locale: Locale): NavItem[] {
  const titles = navTitles[locale];
  const hrefs = routes[locale];

  const navList: NavItem[] = [];

  for (const [key, title] of Object.entries(titles)) {
    if (key === "tretmani" || key === "behandlungen" || key === "treatments") {
      navList.push({
        title,
        list: treatmentSubmenu[locale],
      });
    } else if (hrefs[key]) {
      navList.push({
        title,
        link: hrefs[key],
      });
    }
  }

  return navList;
}
