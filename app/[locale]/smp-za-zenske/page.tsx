import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { isValidLocale } from "@/lib/locale";
import Questions from "@/components/tretments/Questions";
import { Section1Zenske } from "@/components/tretments/zazenske/Section1Zenske";
import { Section2Zenske } from "@/components/tretments/zazenske/Section2Zenske";
import { Section3Zenske } from "@/components/tretments/zazenske/Section3Zenske";
import { Section4Zenske } from "@/components/tretments/zazenske/Section4Zenske";
import { PageData, SectionCommon } from "@/types/index";
import { Section5Zenske } from "@/components/tretments/zazenske/Section5Zenske";
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
    sl: "SMP za ženske Ljubljana | Mikropigmentacija lasišča",
    en: "SMP for Women Ljubljana | Scalp Micropigmentation",
    de: "SMP für Frauen Ljubljana | Kopfhaut-Mikropigmentierung",
  };

  const descriptions = {
    sl: "SMP tretman za ženske - rešitev za redčenje las, alopecijo in povečanje gostote las pri ženskah. Naravni rezultati brez operacije.",
    en: "SMP treatment for women - solution for hair thinning, alopecia and hair density enhancement. Natural results without surgery.",
    de: "SMP-Behandlung für Frauen - Lösung für Haarausfall, Alopezie und Haardichteverbesserung. Natürliche Ergebnisse ohne Operation.",
  };

  return {
    title: titles[locale] || titles.sl,
    description: descriptions[locale] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/smp-za-zenske`),
    openGraph: {
      title: titles[locale] || titles.sl,
      description: descriptions[locale] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/smp-za-zenske`,
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

  const filePath = path.join(process.cwd(), "data/zazenske", `${locale}.json`);

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
  const section6: SectionCommon = json.sections.find((s) => s.id === "6")!;

  return (
    <main>
      <HeroSection data={json.hero} />
      <Section1Zenske section={section1} direction={"md:flex-row"} />
      <Section2Zenske section={section2} direction={"md:flex-row-reverse"} />
      <Section3Zenske section={section3} direction={""} />
      <Section4Zenske section={section4} direction={""} />
      <Section5Zenske section={section6} direction={""} />
      <FinalCta data={json.finalCta} />
      <Questions data={json.faqs} />
    </main>
  );
}
