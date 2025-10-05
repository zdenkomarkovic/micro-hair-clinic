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
import { generateAlternateLinks } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;

  const locale: Locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;

  const titles = {
    sl: "Kontakt | Micro Hair Clinic Ljubljana | Rezervirajte posvet",
    en: "Contact | Micro Hair Clinic Ljubljana | Book Consultation",
    de: "Kontakt | Micro Hair Clinic Ljubljana | Beratung buchen"
  };

  const descriptions = {
    sl: "Kontaktirajte Micro Hair Clinic v Ljubljani za brezplačen posvet SMP tretmana. Odgovorimo na vsa vaša vprašanja o mikropigmentaciji lasišča.",
    en: "Contact Micro Hair Clinic in Ljubljana for a free SMP consultation. We answer all your questions about scalp micropigmentation.",
    de: "Kontaktieren Sie Micro Hair Clinic in Ljubljana für eine kostenlose SMP-Beratung. Wir beantworten alle Ihre Fragen zur Kopfhaut-Mikropigmentierung."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.sl,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.sl,
    alternates: generateAlternateLinks(`/${locale}/kontakt`),
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.sl,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.sl,
      url: `https://microhairclinic.si/${locale}/kontakt`,
      siteName: "Micro Hair Clinic",
      locale: locale === 'sl' ? 'sl_SI' : locale === 'de' ? 'de_DE' : 'en_US',
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31326.76876940462!2d14.479759131342139!3d46.05266742457155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d498c3df797%3A0x47b87314e6452271!2zVHLFvmHFoWthIGMuIDExNiwgMTAwMCBManVibGphbmEsINCh0LvQvtCy0LXQvdC40ZjQsA!5e0!3m2!1ssr!2srs!4v1752150133359!5m2!1ssr!2srs"
        width="600"
        height="600"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full mx-auto"
      ></iframe>
    </main>
  );
}
