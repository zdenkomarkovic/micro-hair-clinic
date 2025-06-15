import { notFound } from "next/navigation";

import { BulletSection } from "@/components/tretments/BulletSection";
import { Faq } from "@/components/tretments/Faq";
import { FinalCta } from "@/components/tretments/FinalCta";
import { Gallery } from "@/components/tretments/Gallery";
import { HeroSection } from "@/components/tretments/HeroSection";
import { Reviews } from "@/components/tretments/Reviews";
import { Messages } from "@/types/messages";
import { getIntl } from "@/lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";

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

  if (!data) return notFound();
  return (
    <>
      <HeroSection data={data.hero} />
      {data.sections.map((section) => (
        <BulletSection key={section.id} section={section} />
      ))}
      <Gallery images={data.gallery} />
      <Faq faqs={data.faqs} />
      <Reviews reviews={data.reviews} />
      <FinalCta data={data.finalCta} />
    </>
  );
}
