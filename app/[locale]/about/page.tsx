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
import { generateAlternateLinks } from "@/lib/seo";
import { Metadata } from "next";

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
    sl: "Micro Hair Clinic Ljubljana | SMP Artist Srđan Kostovski",
    en: "Micro Hair Clinic Ljubljana | SMP Artist Srđan Kostovski",
    de: "Micro Hair Clinic Ljubljana | SMP Artist Srđan Kostovski",
  };

  const descriptions = {
    sl: "Spoznajte Micro Hair Clinic in večkrat nagrajenega SMP artista Srđana Kostovskega z več kot 10 leti izkušenj v mikropigmentaciji lasišča.",
    en: "Meet Micro Hair Clinic and multi-award-winning SMP artist Srđan Kostovski with over 10 years of experience in scalp micropigmentation.",
    de: "Lernen Sie Micro Hair Clinic und den mehrfach ausgezeichneten SMP-Künstler Srđan Kostovski mit über 10 Jahren Erfahrung in Kopfhaut-Mikropigmentierung kennen.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.sl,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/about`),
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.sl,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/about`,
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
