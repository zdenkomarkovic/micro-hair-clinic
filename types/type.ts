export type Locale = "en" | "de" | "sl";

export type Hero = {
  heading: string;
  subtitle?: string;
  image: string;
  alt: string;
  bullets?: string[];
};

export type SectionTable = {
  table: string[][];
};

export type Section = {
  id: string;
  title: string;
  title2?: string;
  bullets?: string[];
  text?: string[];
  table?: string[][];
  link?: {
    label: string;
    href: string;
  };
  button?: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Faqs = {
  title: string;
  list: FaqItem[];
};

export type FinalCta = {
  title: string;
  text: string;
  button: string;
};

export type SmpContent = {
  slug: string;
  title: string;
  hero: Hero;
  sections: Section[];
  faqs?: Faqs;
  finalCta?: FinalCta;
};
