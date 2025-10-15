import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { isValidLocale } from "@/lib/locale";
import Questions from "@/components/tretments/Questions";
import { Section1Korekcija } from "@/components/tretments/korekcija/Section1Korekcija";
import { Section2Korekcija } from "@/components/tretments/korekcija/Section2Korekcija";
import { Section3Korekcija } from "@/components/tretments/korekcija/Section3Korekcija";
import { PageData, SectionCommon } from "@/types/index";
import { Section4Korekcija } from "@/components/tretments/korekcija/Section4Korekcija";
import { Metadata } from "next";
import { generateAlternateLinks } from "@/lib/seo";

export const revalidate = 3600; // Cache for 1 hour

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const locale: Locale = isValidLocale(awaitedParams.locale)
    ? awaitedParams.locale
    : i18n.defaultLocale;

  const titles = {
    sl: "SMP korekcija | Popravek neuspešnega SMP tretmana",
    en: "SMP Correction | Failed SMP Treatment Fix",
    de: "SMP Nachbesserung – Natürlicher Look statt Fehler",
  };

  const descriptions = {
    sl: "Korekcija neuspešnih SMP tretmanov - popravek barve, gostote in nepravilnih pigmentacij. Strokovno odpravljamo napake predhodnih tretmanov.",
    en: "Correction of failed SMP treatments - fixing color, density and irregular pigmentation. Professional correction of previous treatment mistakes.",
    de: "Korrektur fehlgeschlagener SMP-Behandlungen – Behebung von Farbe, Dichte und unregelmäßiger Pigmentierung. Professionelle Nachbesserung.",
  };

  return {
    title: titles[locale] || titles.sl,
    description: descriptions[locale] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/smp-korekcija`),
    openGraph: {
      title: titles[locale] || titles.sl,
      description: descriptions[locale] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/smp-korekcija`,
      siteName: "Micro Hair Clinic",
      locale: locale === "sl" ? "sl_SI" : locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;

  const locale: Locale = isValidLocale(localeParam)
    ? localeParam
    : i18n.defaultLocale;

  const filePath = path.join(process.cwd(), "data/korekcija", `${locale}.json`);

  let json;
  try {
    const file = await readFile(filePath, "utf-8");
    json = JSON.parse(file) as PageData;
  } catch {
    return notFound();
  }
  const section1: SectionCommon = json.sections.find((s) => s.id === "1")!;
  const section2: SectionCommon = json.sections.find((s) => s.id === "2")!;
  const section3: SectionCommon = json.sections.find((s) => s.id === "3")!;
  const section4: SectionCommon = json.sections.find((s) => s.id === "4")!;

  return (
    <main>
      <HeroSection data={json.hero} />

      <Section1Korekcija section={section1} />
      <Section2Korekcija section={section2} />
      <Section3Korekcija section={section3} />
      <Section4Korekcija section={section4} />
      <FinalCta data={json.finalCta} />
      <Questions data={json.faqs} />
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'sl' },
    { locale: 'en' },
    { locale: 'de' }
  ];
}
