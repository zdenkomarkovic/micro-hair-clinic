export type Locale = "en" | "de" | "sl";

const navTitles: Record<Locale, Record<string, string>> = {
  sl: {
    home: "Domov",
    tretmani: "Tretmaji",
    about: "O nas",
    blog: "Blog",
    contact: "Kontakt",
  },
  de: {
    home: "Startseite",
    behandlungen: "Behandlungen",
    about: "Über uns",
    blog: "Blog",
    contact: "Kontakt",
  },
  en: {
    home: "Home",
    treatments: "Treatments",
    about: "About Us",
    blog: "Blog",
    contact: "Contact",
  },
};

const routes: Record<Locale, Record<string, string>> = {
  sl: {
    home: "/sl",
    tretmani: "/sl/tretmani",
    about: "/sl/about",
    blog: "/sl/blog",
    contact: "/sl/kontakt",
  },
  de: {
    home: "/de",
    behandlungen: "/de/behandlungen",
    about: "/de/about",
    blog: "/de/blog",
    contact: "/de/kontakt",
  },
  en: {
    home: "/en",
    treatments: "/en/treatments",
    about: "/en/about",
    blog: "/en/blog",
    contact: "/en/kontakt",
  },
};

// Podmeni za tretmane (možeš dodavati ili menjati linkove ovde)
const treatmentSubmenu: Record<Locale, { title: string; link: string }[]> = {
  sl: [
    {
      title: "SMP za plešavost (videz obrite glave)",
      link: "/sl/smp-za-plesavost",
    },
    {
      title: "Redčenje las – zgostitev z ali brez presaditve",
      link: "/sl/smp-povecanje-gostote-redki-lasje",
    },
    {
      title: "SMP za brazgotine – po presaditvi, poškodbah ali operacijah",
      link: "/sl/smp-za-brazgotine",
    },
    {
      title: "Alopecija – areata, totalis, universalis",
      link: "/sl/smp-alopecija",
    },
    {
      title: "SMP za ženske – redki lasje, zmanjšan volumen",
      link: "/sl/smp-za-zenske",
    },
    { title: "Korekcija neuspešnih SMP tretmajev", link: "/sl/smp-korekcija" },
  ],
  de: [
    {
      title: "SMP bei Glatze (rasierter Kopf-Look)",
      link: "/de/smp-za-plesavost",
    },
    {
      title: "Haarausfall – Verdichtung mit oder ohne Haartransplantation",
      link: "/de/smp-povecanje-gostote-redki-lasje",
    },
    {
      title:
        "SMP für Narben – nach Transplantation, Verletzungen oder Operationen",
      link: "/de/smp-za-brazgotine",
    },
    {
      title: "Alopezie – Areata, Totalis, Universalis",
      link: "/de/smp-alopecija",
    },
    {
      title: "SMP für Frauen – dünnes Haar, geringes Volumen",
      link: "/de/smp-za-zenske",
    },
    {
      title: "Korrektur misslungener SMP-Behandlungen",
      link: "/de/smp-korekcija",
    },
  ],
  en: [
    {
      title: "SMP for baldness (shaved head look)",
      link: "/en/smp-za-plesavost",
    },
    {
      title: "Hair thinning – density treatment with or without transplant",
      link: "/en/smp-povecanje-gostote-redki-lasje",
    },
    {
      title: "SMP for scars – after transplant, injury, or surgery",
      link: "/en/smp-za-brazgotine",
    },
    {
      title: "Alopecia – areata, totalis, universalis",
      link: "/en/smp-alopecija",
    },
    {
      title: "SMP for women – thinning hair, reduced volume",
      link: "/en/smp-za-zenske",
    },
    { title: "Correction of failed SMP treatments", link: "/en/smp-korekcija" },
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
export function getTreatmentSubmenu(locale: Locale) {
  return treatmentSubmenu[locale];
}
