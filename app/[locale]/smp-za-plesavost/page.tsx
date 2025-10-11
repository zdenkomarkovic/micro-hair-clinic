import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { isValidLocale } from "@/lib/locale";
import { Section4 } from "@/components/tretments/Section4";
import { Faq } from "@/components/tretments/Faq";
import { Section1 } from "@/components/tretments/Section1";
import { Section2 } from "@/components/tretments/Section2";
import { Section3 } from "@/components/tretments/Section3";
import { PageData, SectionCommon } from "@/types/index";
import { Section5 } from "@/components/tretments/Section5";
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
    sl: "SMP za plešavost | Mikropigmentacija lasišča | Hair Tattoo",
    en: "SMP for Baldness | Scalp Micropigmentation | Hair Tattoo",
    de: "SMP bei Haarausfall| Mikropigmentierung der Kopfhaut | Hair Tattoo",
  };

  const descriptions = {
    sl: "SMP tretman za plešavost - naravna rešitev za izgubo las. Mikropigmentacija lasišča v Ljubljani za celovito pokritost plešastih površin.",
    en: "SMP treatment for baldness - natural solution for hair loss. Scalp micropigmentation in Ljubljana for full coverage of bald areas.",
    de: "SMP-Behandlung bei Kahlheit - natürliche Lösung gegen Haarausfall. Kopfhaut-Mikropigmentierung in Ljubljana für vollständige Abdeckung kahler Stellen.",
  };

  return {
    title: titles[locale] || titles.sl,
    description: descriptions[locale] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/smp-za-plesavost`),
    openGraph: {
      title: titles[locale] || titles.sl,
      description: descriptions[locale] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/smp-za-plesavost`,
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

  const filePath = path.join(process.cwd(), "data/plesavost", `${locale}.json`);

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
  const section5: SectionCommon = json.sections.find((s) => s.id === "5")!;

  return (
    <main>
      <HeroSection data={json.hero} />
      <Section1 section={section1} />
      <Section2 section={section2} />
      <Section3 section={section3} />
      <Section4 section={section4} />
      <Section5 section={section5} />
      <FinalCta data={json.finalCta} />
      <Faq faqs={json.faqs} />
    </main>
  );
}
