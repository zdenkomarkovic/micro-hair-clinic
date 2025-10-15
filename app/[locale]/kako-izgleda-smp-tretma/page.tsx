import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { isValidLocale } from "@/lib/locale";
import { Section1Kako } from "@/components/tretments/kakoizgledatretman/Section1Kako";
import { Section2Kako } from "@/components/tretments/kakoizgledatretman/Section2Kako";
import { Section3Kako } from "@/components/tretments/kakoizgledatretman/Section3Kako";
import { Section5Kako } from "@/components/tretments/kakoizgledatretman/Section5Kako";
import { Section, SmpContent } from "@/types/type";
import { generateAlternateLinks } from "@/lib/seo";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroCompare } from "@/components/tretments/kakoizgledatretman/HeroCompare";

const Questions = dynamic(() => import("@/components/tretments/Questions"), {
  ssr: true,
  loading: () => (
    <div className="py-6 mx-auto container animate-pulse h-64 bg-gray-100" />
  ),
});

export const revalidate = 3600; // Cache for 1 hour

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
    sl: "Kako izgleda SMP tretma | Potek mikropigmentacije lasišča",
    en: "How Hair Tattoo Scalp Micropigmentation Works",
    de: "Wie Hair Tattoo Scalp Micropigmentation funktioniert",
  };

  const descriptions = {
    sl: "Spoznajte potek SMP tretmana korak za korakom - od prvega posveta do končnega rezultata mikropigmentacije lasišča.",
    en: "Discover what happens during your procedure session. Learn about the consultation, application process, and what to expect throughout your appointment.",
    de: "Lernen Sie den SMP-Behandlungsablauf Schritt für Schritt kennen - von der ersten Beratung bis zum endgültigen Ergebnis der Kopfhaut-Mikropigmentierung.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.sl,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/kako-izgleda-smp-tretma`),
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.sl,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/kako-izgleda-smp-tretma`,
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

  const filePath = path.join(
    process.cwd(),
    "data/smp-tretma",
    `${locale}.json`
  );

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
      <Section1Kako section={section1} className={"py-10"} />
      <Section2Kako section={section2} />
      <Section1Kako section={section3} className={"py-10"} />
      <Section3Kako section={section4} />
      {json.faqs && <Questions data={json.faqs} />}
      <Section5Kako section={section5} />
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'sl' },
    { locale: 'en' },
    { locale: 'de' }
  ];
}
