import { notFound } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { isValidLocale } from "@/lib/locale";
import { HeroCompare } from "@/components/tretments/compare/HeroCompare";
import { Section1Compare } from "@/components/tretments/compare/Section1Compare";
import { Section3Compare } from "@/components/tretments/compare/Section3Compare";
import { Section4Compare } from "@/components/tretments/compare/Section4Compare";
import { Section5Compare } from "@/components/tretments/compare/Section5Compare";
import { Section, SmpContent } from "@/types/type";
import { Metadata } from "next";
import { generateAlternateLinks } from "@/lib/seo";
import dynamic from "next/dynamic";

const TableSection = dynamic(() => import("@/components/TableSection"), {
  ssr: true,
  loading: () => (
    <div className="py-3 md:py-6 mx-auto container animate-pulse h-64 bg-gray-100" />
  ),
});

export const revalidate = 3600; // Cache for 1 hour

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const locale: Locale = isValidLocale(awaitedParams.locale)
    ? awaitedParams.locale
    : i18n.defaultLocale;

  const titles = {
    sl: "SMP vs presaditev las Ljubljana | Mikropigmentacija",
    en: "SMP vs Hair Transplant Ljubljana | Micropigmentation",
    de: "SMP vs Haartransplantation Ljubljana | Mikropigmentierung",
  };

  const descriptions = {
    sl: "Primerjava SMP in presaditve las - prednosti, slabosti, cena in rezultati. Katera metoda je prava za vas?",
    en: "Comparison of SMP and hair transplant - advantages, disadvantages, cost and results. Which method is right for you?",
    de: "Vergleich von SMP und Haartransplantation - Vorteile, Nachteile, Kosten und Ergebnisse. Welche Methode ist die richtige für Sie?",
  };

  return {
    title: titles[locale] || titles.sl,
    description: descriptions[locale] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/smp-vs-presaditev`),
    openGraph: {
      title: titles[locale] || titles.sl,
      description: descriptions[locale] || descriptions.sl,
      url: `https://microhairclinic.si/${locale}/smp-vs-presaditev`,
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

export async function generateStaticParams() {
  return [
    { locale: 'sl' },
    { locale: 'en' },
    { locale: 'de' }
  ];
}
