import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { isValidLocale } from "@/lib/locale";
import { PageData, SectionCommon } from "@/types/index";
import { Section1Povecanje } from "@/components/tretments/povecanjegostote/Section1Povecanje";
import { Section2Povecanje } from "@/components/tretments/povecanjegostote/Section2Povecanje";
import { Section3Povecanje } from "@/components/tretments/povecanjegostote/Section3Povecanje";
import { Faq } from "@/components/tretments/Faq";
import { Section4 } from "@/components/tretments/Section4";
import { Section5Povecanje } from "@/components/tretments/povecanjegostote/Section5Povecanje";
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
    sl: "SMP povečanje gostote | Redki lasje | Mikropigmentacija",
    en: "SMP Density Enhancement | Thinning Hair | Micropigmentation",
    de: "SMP Dichteverbesserung | Dünnes Haar | Mikropigmentierung",
  };

  const descriptions = {
    sl: "SMP tretman za povečanje gostote las - idealna rešitev za redke lase in ustvarjanje vtisa polnejše pričeske brez invazivnih posegov.",
    en: "SMP treatment for hair density enhancement - ideal solution for thinning hair and creating fuller hair appearance without invasive procedures.",
    de: "SMP-Behandlung zur Haardichteverbesserung - ideale Lösung für dünnes Haar und Schaffung eines volleren Haarbildes ohne invasive Eingriffe.",
  };

  return {
    title: titles[locale] || titles.sl,
    description: descriptions[locale] || descriptions.sl,
    alternates: generateAlternateLinks(
      `/${locale}/smp-povecanje-gostote-redki-lasje`
    ),
    openGraph: {
      title: titles[locale] || titles.sl,
      description: descriptions[locale] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/smp-povecanje-gostote-redki-lasje`,
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

  const filePath = path.join(
    process.cwd(),
    "data/povecanje-gostote",
    `${locale}.json`
  );

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

      <Section1Povecanje section={section1} />
      <Section2Povecanje section={section2} />
      <Section5Povecanje section={section5} />
      <Section3Povecanje section={section3} />
      <Section4 section={section4} />
      <FinalCta data={json.finalCta} />
      {/* <Questions data={json.faqs} /> */}
      <Faq faqs={json.faqs} />
    </main>
  );
}
