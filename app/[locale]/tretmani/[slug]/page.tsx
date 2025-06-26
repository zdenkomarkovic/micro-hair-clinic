import { notFound } from "next/navigation";
import { Faq } from "@/components/tretments/Faq";
import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { Messages } from "@/types/messages";
import { getIntl } from "@/lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";
import { Section1 } from "@/components/tretments/Section1";
import { Section2 } from "@/components/tretments/Section2";
import { Section3 } from "@/components/tretments/Section3";
import { Section4 } from "@/components/tretments/Section4";
import { Section5 } from "@/components/tretments/Section5";
import { SectionAlopecija } from "@/components/tretments/alopecija/SectionAlopecija";
import { Section2Alopecija } from "@/components/tretments/alopecija/Section2Alopecija";

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const awaitedParams = await params;
  const locale = isValidLocale(awaitedParams.locale)
    ? awaitedParams.locale
    : i18n.defaultLocale;

  const intl = await getIntl(locale);
  const messages = intl.messages as unknown as Messages;

  const data = messages.treatments?.find((t) => t.slug === awaitedParams.slug);
  const section1 = data.sections.find((s) => s.id === "1");
  const sectionalopecija = data.sections.find((s) => s.id === "a");
  const section2alopecija = data.sections.find((s) => s.id === "a2");
  const section2 = data.sections.find((s) => s.id === "2");
  const section3 = data.sections.find((s) => s.id === "3");
  const section4 = data.sections.find((s) => s.id === "4");
  const section5 = data.sections.find((s) => s.id === "5");

  if (!data) return notFound();
  return (
    <>
      <HeroSection data={data.hero} />
      {section1 && <Section1 section={section1} />}
      {sectionalopecija && <SectionAlopecija section={sectionalopecija} />}
      {section2 && <Section2 section={section2} />}
      {section2alopecija && <Section2Alopecija section={section2alopecija} />}
      {section3 && <Section3 section={section3} />}
      {section4 && <Section4 section={section4} />}
      {section5 && <Section5 section={section5} />}

      <FinalCta data={data.finalCta} />
      <Faq faqs={data.faqs} />
    </>
  );
}
