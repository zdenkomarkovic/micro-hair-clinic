import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { isValidLocale } from "@/lib/locale";
import { HeroCompare } from "@/components/tretments/compare/HeroCompare";
import { Section1Kako } from "@/components/tretments/kakoizgledatretman/Section1Kako";
import { Section1Nega } from "@/components/tretments/nega/Section1Nega";
import { Section2Nega } from "@/components/tretments/nega/Section2Nega";
import { Section3Nega } from "@/components/tretments/nega/Section3Nega";
import { Section4Nega } from "@/components/tretments/nega/Section4Nega";
import Questions from "@/components/tretments/Questions";
import { Section, SmpContent } from "@/types/type";
import { generateAlternateLinks } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;

  const locale: Locale = isValidLocale(localeParam)
    ? localeParam
    : i18n.defaultLocale;

  const titles = {
    sl: "Nega po SMP tretmanu | Navodila za nego mikropigmentacije",
    en: "Aftercare Guide | Care Instructions",
    de: "Tagesleitfaden zur Pflege nach der SMP Behandlung",
  };

  const descriptions = {
    sl: "Navodila za nego po SMP tretmanu - kako skrbeti za mikropigmentacijo lasišča za optimalne in dolgotrajne rezultate.",
    en: "Complete aftercare guide for post-treatment care. Learn how to protect and maintain your results during the healing process for optimal outcomes.",
    de: "Nachsorgeanweisungen nach SMP-Behandlung - wie Sie Ihre Kopfhaut-Mikropigmentierung für optimale und langanhaltende Ergebnisse pflegen.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.sl,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/nega-po-smp-tretmaju`),
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.sl,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/nega-po-smp-tretmaju`,
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

  const filePath = path.join(process.cwd(), "data/nega", `${locale}.json`);

  let json;
  try {
    const file = await readFile(filePath, "utf-8");
    json = JSON.parse(file) as SmpContent;
  } catch {
    return notFound();
  }
  const section1: Section = json.sections.find((s) => s.id === "1")!;
  const section2: Section = json.sections.find((s) => s.id === "2")!;
  const section3: Section = json.sections.find((s) => s.id === "3")!;
  const section4: Section = json.sections.find((s) => s.id === "4")!;
  const section5: Section = json.sections.find((s) => s.id === "5")!;
  const section6: Section = json.sections.find((s) => s.id === "6")!;
  return (
    <main>
      <HeroCompare data={json.hero} />
      <Section1Nega section={section1} />
      <Section2Nega section={section2} />
      <Section3Nega section={section3} />
      <Section4Nega section={section4} />
      <Section1Kako section={section5} className="" />
      <Section1Kako section={section6} className="pt-10" />
      {json.faqs && <Questions data={json.faqs} />}
      {json.finalCta && (
        <FinalCta data={json.finalCta} className="my-6 md:my-8" />
      )}
    </main>
  );
}
