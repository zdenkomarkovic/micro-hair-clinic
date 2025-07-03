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

  return (
    <main>
      <HeroSection data={json.hero} />

      <Section1Povecanje section={section1} />
      <Section2Povecanje section={section2} />
      <Section3Povecanje section={section3} />
      {/* <Section4 section={section4} /> */}
      <FinalCta data={json.finalCta} />
      {/* <Questions data={json.faqs} /> */}
      <Faq faqs={json.faqs} />
    </main>
  );
}
