import InstagramWidget from "@/components/InstagramWidget";
import React from "react";
import { generateAlternateLinks } from "@/lib/seo";
import { Metadata } from "next";
import { isValidLocale } from "@/lib/locale";
import { i18n, Locale } from "@/i18n-config";

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
    sl: "Galerija | Micro Hair Clinic | SMP rezultati pred in po",
    en: "Gallery | Micro Hair Clinic | SMP Before and After Results",
    de: "Galerie | Micro Hair Clinic | SMP Vorher-Nachher-Ergebnisse",
  };

  const descriptions = {
    sl: "Oglejte si našo galerijo SMP rezultatov - pred in po fotografije naših strank. Naravni in trajni rezultati mikropigmentacije lasišča.",
    en: "View our SMP results gallery - before and after photos of our clients. Natural and permanent scalp micropigmentation results.",
    de: "Sehen Sie sich unsere SMP-Ergebnisgalerie an - Vorher-Nachher-Fotos unserer Kunden. Natürliche und dauerhafte Ergebnisse der Kopfhaut-Mikropigmentierung.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.sl,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/galerija`),
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.sl,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.sl,
      url: `https://www.microhairclinic.si/${locale}/galerija`,
      siteName: "Micro Hair Clinic",
      locale: locale === "sl" ? "sl_SI" : locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
  };
}

const page = () => {
  return (
    <div className="py-16 md:py-26">
      <div className="z-0">
        <h1 className="py-10">Micro Hair Clinic LJubljana</h1>
        <InstagramWidget />
      </div>
    </div>
  );
};

export default page;
