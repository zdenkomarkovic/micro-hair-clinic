import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { isValidLocale } from "@/lib/locale";
import { Section4 } from "@/components/tretments/Section4";
import Questions from "@/components/tretments/Questions";
import { Section1Oziljci } from "@/components/tretments/oziljci/Section1Oziljci";
import { Section2Oziljci } from "@/components/tretments/oziljci/Section2Oziljci";
import { Section3Oziljci } from "@/components/tretments/oziljci/Section3Oziljci";
import { Section5Oziljci } from "@/components/tretments/oziljci/Section5Oziljci";
import { Section6Oziljci } from "@/components/tretments/oziljci/Section6Oziljci";
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

  const filePath = path.join(
    process.cwd(),
    "data/brazgotine",
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
  const section6: SectionCommon = json.sections.find((s) => s.id === "6")!;
  const section7: SectionCommon = json.sections.find((s) => s.id === "7")!;

  return (
    <main>
      <HeroSection data={json.hero} />
      <Section1Oziljci section={section1} direction={"flex-row"} />
      <Section1Oziljci section={section2} direction={"flex-row-reverse"} />
      <Section2Oziljci section={section3} direction={""} />
      <Section3Oziljci section={section4} direction={""} />
      <Section4 section={section5} />
      <Section6Oziljci section={section6} />
      <Section5Oziljci section={section7} direction={""} />
      <FinalCta data={json.finalCta} />
      <Questions data={json.faqs} />
    </main>
  );
}
