import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { isValidLocale } from "@/lib/locale";
import { Section2Alopecija } from "@/components/tretments/alopecija/Section2Alopecija";
import { SectionAlopecija } from "@/components/tretments/alopecija/SectionAlopecija";
import { Section4 } from "@/components/tretments/Section4";
import Questions from "@/components/tretments/Questions";
import { PageData, SectionCommon } from "@/types/index";
import { Metadata } from "next";
import { generateAlternateLinks } from "@/lib/seo";

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
    sl: "SMP za alopecijo | Mikropigmentacija lasišča | Alopecija areata",
    en: "SMP for Alopecia | Scalp Micropigmentation | Alopecija areata",
    de: "SMP bei Alopezie | Mikropigmentierung der Kopfhaut | Alopecija areata",
  };

  const descriptions = {
    sl: "SMP tretman za alopecijo areato - učinkovita rešitev za krožno plešavost in avtoimmunsko izgubo las.",
    en: "SMP treatment for alopecia areata - effective solution for patchy hair loss and autoimmune hair loss.",
    de: "SMP-Behandlung bei Alopecia areata - effektive Lösung für kreisrunden Haarausfall und autoimmunbedingten Haarverlust.",
  };

  return {
    title: titles[locale] || titles.sl,
    description: descriptions[locale] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/smp-alopecija`),
    openGraph: {
      title: titles[locale] || titles.sl,
      description: descriptions[locale] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/smp-alopecija`,
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

  const filePath = path.join(process.cwd(), "data/alopecija", `${locale}.json`);

  let json;
  try {
    const file = await readFile(filePath, "utf-8");
    json = JSON.parse(file) as PageData;
  } catch {
    return notFound();
  }
  const sectionalopecija: SectionCommon = json.sections.find(
    (s) => s.id === "1"
  )!;
  const section2alopecija: SectionCommon = json.sections.find(
    (s) => s.id === "2"
  )!;
  const section4: SectionCommon = json.sections.find((s) => s.id === "4")!;

  return (
    <main>
      <HeroSection data={json.hero} />
      <SectionAlopecija section={sectionalopecija} />

      <Section2Alopecija section={section2alopecija} />
      <Section4 section={section4} />
      <FinalCta data={json.finalCta} />
      <Questions data={json.faqs} />
    </main>
  );
}
