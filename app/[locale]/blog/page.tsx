import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { isValidLocale } from "@/lib/locale";
import { BlogPage, Locale } from "@/types/index";
import { i18n } from "@/i18n-config";
import { notFound } from "@/node_modules/next/navigation";
import { HeroBlog } from "@/components/tretments/blog/HeroBlog";
import { Section1Blog } from "@/components/tretments/blog/Section1Blog";
import { generateAlternateLinks } from "@/lib/seo";
import { Metadata } from "next";

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
    sl: "Blog | Micro Hair Clinic | SMP",
    en: "Hair Loss Articles & Expert Guides | Micro Hair Clinic",
    de: "Blog | Micro Hair Clinic | SMP",
  };

  const descriptions = {
    sl: "Preberite naš blog o SMP tretmanih, nasvetih za nego, trendih v mikropigmentaciji lasišča in novicah iz sveta SMP.",
    en: "Expert articles, guides and tips about hair loss solutions, restoration techniques, and maintaining your confidence. Stay informed with our latest insights.",
    de: "Lesen Sie unseren Blog über SMP-Behandlungen, Pflegetipps, Trends in der Kopfhaut-Mikropigmentierung und Neuigkeiten aus der SMP-Welt.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.sl,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/blog`),
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.sl,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/blog`,
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

  const filePath = path.join(process.cwd(), "data/blog", `${locale}.json`);

  let json;
  try {
    const file = await readFile(filePath, "utf-8");
    json = JSON.parse(file) as BlogPage;
  } catch {
    return notFound();
  }

  return (
    <main>
      <HeroBlog data={json.hero} />
      <Section1Blog data={json.blog} direction={"md:flex-row"} />
      <FinalCta data={json.finalCta} className="my-6" />
    </main>
  );
}
