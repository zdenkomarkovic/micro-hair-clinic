import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { isValidLocale } from "@/lib/locale";
import { PageData, SectionCommon } from "@/types/index";
import { Section1About } from "@/components/tretments/about/Section1About";
import { Section2About } from "@/components/tretments/about/Section2About";
import ImageCarusel from "@/components/Imagecarusel";
import { HeroSectionAbout } from "@/components/tretments/about/HeroSectionAbout";

const images: string[] = [
  "/images/8898c7d5-3ac2-47b9-b768-19551cd4aaa0 4-min.JPG",
  "/images/f94727ab-cc48-46a9-938f-07306270acba 5-min.JPG",
  "/images/IMG_2514-min.JPG",
  "/images/MOM Day 2-134-min.jpg",
  "/images/MOM Day 2-195-min.jpg",
  "/images/MOM Day 2-203-min.jpg",
  "/images/MOM Day 2-205-min.jpg",
  "/images/MOM Day 2-206-min.jpg",
  "/images/MOM Day 2-227-min.jpg",
  "/images/nagrada-min.jpg",
];

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

  const filePath = path.join(process.cwd(), "data/about", `${locale}.json`);

  let json;
  try {
    const file = await readFile(filePath, "utf-8");
    json = JSON.parse(file) as PageData;
  } catch {
    return notFound();
  }
  const section1: SectionCommon = json.sections.find((s) => s.id === "1")!;
  const section3: SectionCommon = json.sections.find((s) => s.id === "3")!;

  return (
    <main>
      <HeroSectionAbout data={json.hero} />
      <Section1About section={section1} direction={"md:flex-row"} />
      <Section2About section={section3} direction={""} />
      <FinalCta data={json.finalCta} />
      <ImageCarusel images={images} py={"py-10"} />
    </main>
  );
}
