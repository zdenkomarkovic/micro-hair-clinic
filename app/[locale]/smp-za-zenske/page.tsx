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
