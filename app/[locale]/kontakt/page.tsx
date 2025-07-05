import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { isValidLocale } from "@/lib/locale";
import { PageData, SectionCommon } from "@/types/index";
import { HeroSectionContact } from "@/components/tretments/contact/HeroSectionContact";
import { Section1 } from "@/components/tretments/contact/Section1";
import { Section2 } from "@/components/tretments/contact/Section2";
import { Section3 } from "@/components/tretments/contact/Section3";

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

  const filePath = path.join(process.cwd(), "data/contact", `${locale}.json`);

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

  return (
    <main>
      <HeroSectionContact data={json.hero} />
      <Section1 section={section1} />
      <div className="mb-10 md:mb-20">
        {" "}
        <h2 className=" md:mb-10">{section2.title}</h2>
        <div className="container px-2 md:px-4 mx-auto grid md:grid-cols-2 items-center gap-2 md:gap-20 ">
          <Section2 section={section2} /> <Section3 section={section3} />
        </div>{" "}
      </div>
    </main>
  );
}
