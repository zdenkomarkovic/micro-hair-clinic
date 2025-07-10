import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { isValidLocale } from "@/lib/locale";
import { HeroCompare } from "@/components/tretments/compare/HeroCompare";
import { SectionCommon } from "@/types/index";
import { Section1Kako } from "@/components/tretments/kakoizgledatretman/Section1Kako";
import { Section2Kako } from "@/components/tretments/kakoizgledatretman/Section2Kako";
import { Section3Kako } from "@/components/tretments/kakoizgledatretman/Section3Kako";
import Questions from "@/components/tretments/Questions";
import { Section5Kako } from "@/components/tretments/kakoizgledatretman/Section5Kako";

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
    "data/smp-tretma",
    `${locale}.json`
  );

  let json;
  try {
    const file = await readFile(filePath, "utf-8");
    json = JSON.parse(file);
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
      <HeroCompare data={json.hero} />
      <Section1Kako section={section1} className={"py-10"} />
      <Section2Kako section={section2} />
      <Section1Kako section={section3} className={"py-10"} />
      <Section3Kako section={section4} />
      <Questions data={json.faqs} />
      <Section5Kako section={section5} />
    </main>
  );
}
