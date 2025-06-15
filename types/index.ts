// types.ts

export interface TreatmentData {
  slug: string;
  title: string;
  hero: {
    heading: string;
    subtitle: string;
    image: string;
    alt: string;
    ctas: { label: string; href: string }[];
  };
  sections: {
    id: string;
    title?: string;
    text?: string[];
    bullets?: string[];
    image?: { src: string; alt: string };
    link?: { label: string; href: string };
  }[];
  gallery?: { src: string; alt: string }[];
  faqs?: { q: string; a: string }[];
  reviews?: { quote: string; name?: string }[];
  finalCta?: {
    text: string;
    ctas: { label: string; href: string }[];
  };
}
