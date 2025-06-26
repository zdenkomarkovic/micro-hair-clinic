import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { isValidLocale } from "@/lib/locale";
import { Section4 } from "@/components/tretments/Section4";
import Questions from "@/components/tretments/Questions";
import { Section1Korekcija } from "@/components/tretments/korekcija/Section1Korekcija";
import { Section2Korekcija } from "@/components/tretments/korekcija/Section2Korekcija";
import { Section3Korekcija } from "@/components/tretments/korekcija/Section3Korekcija";
import { PageData, SectionCommon } from "@/types/index";

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
      <Section4 section={section4} />
      <FinalCta data={json.finalCta} />
      <Questions data={json.faqs} />
    </main>
  );
}
