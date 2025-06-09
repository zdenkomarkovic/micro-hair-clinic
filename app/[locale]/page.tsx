import Hero from "@/components/Hero";
import Reference from "@/components/Reference";
import Section1 from "@/components/Section1";
import Usluge from "@/components/Usluge";
import { generateAlternateLinks } from "@/lib/seo";
import { Messages } from "@/types/messages";
import { Metadata } from "next";
import { getIntl } from "../../lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";

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

const defaultSection = {
  title: "",
  span: "",
  title2: "",
  title3: "",
  span2: "",
  subtitle: "",
  span3: "",
  subtitle2: "",
  span4: "",
  subtitle3: "",
  span5: "",
};

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
  const cards = messages.cards ?? [];
  const usluge = messages.usluge ?? [];
  const section = messages.section ?? defaultSection;
  const uslugeTitle = intl.formatMessage({ id: "usluge.title" });
  const refLink = intl.formatMessage({ id: "reference.link" });
  const refTitle = intl.formatMessage({ id: "reference.title" });

  return (
    <main>
      <div className="">
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          text={heroText}
          button={heroButton}
        />
        <Section1 section={section} cards={cards} />
        <Usluge usluge={usluge} title={uslugeTitle} />
        <Reference refLink={refLink} title={refTitle} />
      </div>
    </main>
  );
}
