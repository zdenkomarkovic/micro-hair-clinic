import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { isValidLocale } from "@/lib/locale";
import TableSection from "@/components/TableSection";
import { HeroCompare } from "@/components/tretments/compare/HeroCompare";
import { Section1Compare } from "@/components/tretments/compare/Section1Compare";
import { Section3Compare } from "@/components/tretments/compare/Section3Compare";
import { Section4Compare } from "@/components/tretments/compare/Section4Compare";
import { Section5Compare } from "@/components/tretments/compare/Section5Compare";
import { Section, SmpContent } from "@/types/type";

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

  const filePath = path.join(process.cwd(), "data/compare", `${locale}.json`);

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
  return (
    <main>
      <HeroCompare data={json.hero} />
      <Section1Compare section={section1} />
      <TableSection data={section2} />
      <Section3Compare section={section3} />
      <Section4Compare section={section4} />
      <Section5Compare section={section5} />

      {json.finalCta && (
        <FinalCta data={json.finalCta} className="my-6 md:my-8" />
      )}
    </main>
  );
}
