export type Locale = "sr" | "en" | "de" | "sl";

export type Cta = {
  label: string;
  href: string;
};

export type ImageType = {
  src: string;
  alt: string;
};

export type LinkType = {
  label: string;
  link: string;
};

export type SectionCommon = {
  id: string;
  title: string;
  title2?: string;
  title3?: string;
  imgtitle?: string;
  text?: string | string[];
  bullets?: string[];
  gallery?: string[];
  image?: ImageType;
  images?: ImageType[];
  links?: LinkType[];
  award1?: string;
  award2?: string;
  award3?: string;
  text2?: string;
  link?: {
    label: string;
    href?: string;
  };
  label1?: string;
  placeholder1?: string;
  label2?: string;
  placeholder2?: string;
  label3?: string;
  placeholder3?: string;
  label4?: string;
  label5?: string;
  placeholder5?: string;
  submitButton: string;
};

export type HeroSectionType = {
  heading: string;
  subtitle: string;
  image: string;
  image2: string;
  alt: string;
  ctas?: Cta[];
  bullets?: string[];
};

export type FaqListItem = {
  q: string;
  a: string;
};

export type FaqType = {
  title: string;
  list: FaqListItem[]; // obavezno postoji
  button?: string; // opciono, koristiš ga samo za neke stranice
};

export type ReviewItem = {
  quote: string;
};

export type FinalCtaType = {
  title: string;
  text: string;
  button: string;
};

export type PageData = {
  slug: string;
  title: string;
  hero: HeroSectionType;
  sections: SectionCommon[];
  gallery?: string[];
  faqs: FaqType;
  reviews:
    | ReviewItem[]
    | { title: string; text?: string; person: ReviewItem[] };
  finalCta: FinalCtaType;
};

export type HeroSection = {
  heading: string;
  subtitle: string;
  image: string;
  alt: string;
  bullets: string[];
};

export type BlogItem = {
  title: string;
  text: string;
  slug: string;
  img: string;
  button: string;
};

export type BlogSection = {
  title: string;
  blogs: BlogItem[];
};

export type FinalCta = {
  title: string;
  text: string;
  button: string;
};

export type BlogPage = {
  slug: string;
  title: string;
  hero: HeroSection;
  blog: BlogSection;
  finalCta: FinalCta;
};
