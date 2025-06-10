import Hero from "@/components/Hero";
import { generateAlternateLinks } from "@/lib/seo";
import { Messages } from "@/types/messages";
import { Metadata } from "next";
import { getIntl } from "../../lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";
import Cards2 from "@/components/Cards2";
import { cards2Data, cards2DataText } from "@/constants/index";
import CardWithImage from "@/components/CardWithImage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;

  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;

  const intl = await getIntl(locale);

  return {
    title: intl.formatMessage({ id: "page.home.head.title" }),
    description: intl.formatMessage({ id: "page.home.head.meta.description" }),
    alternates: generateAlternateLinks(""),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;

  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;

  const intl = await getIntl(locale);
  const messages = intl.messages as unknown as Messages;

  const heroTitle = intl.formatMessage({ id: "hero.title" });
  const heroSubtitle = intl.formatMessage({ id: "hero.subtitle" });
  const heroText = intl.formatMessage({ id: "hero.text" });
  const heroButton = intl.formatMessage({ id: "hero.button" });
  const dataWhyUs = messages.cardwithimage ?? {};

  return (
    <main>
      <div className="">
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          text={heroText}
          button={heroButton}
        />
        <Cards2 title={"nesto"} data={cards2Data} text={cards2DataText} />
        <CardWithImage data={dataWhyUs} />
      </div>
    </main>
  );
}
