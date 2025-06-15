import Hero from "@/components/Hero";
// import { generateAlternateLinks } from "@/lib/seo";
import { Messages } from "@/types/messages";
// import { Metadata } from "next";
import { getIntl } from "../../lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";
import Cards2 from "@/components/Cards2";
import CardWithImage from "@/components/CardWithImage";
import Treatments from "@/components/Treatments";
import Questions from "@/components/Questions";
import MeetArtist from "@/components/MeetArtist";
import TretmanFlow from "@/components/TretmanFlow";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }): Promise<Metadata> {
//   const awaitedParams = await params;
//   const localeParam = awaitedParams.locale;

//   const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;

//   const intl = await getIntl(locale);

//   return {
//     title: intl.formatMessage({ id: "page.home.head.title" }),
//     description: intl.formatMessage({ id: "page.home.head.meta.description" }),
//     alternates: generateAlternateLinks(""),
//   };
// }

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
  const datacards2 = messages.cards2 ?? [];
  const textcards2 = messages.cards2text ?? {};
  const datatreatments = messages.datatreatments ?? {};
  const dataQuestions = messages.questions ?? {};
  const dataArtist = messages.artist ?? {};
  const dataTretman = messages.tretmanFlow ?? {};

  return (
    <main>
      <div className="">
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          text={heroText}
          button={heroButton}
        />
        <Cards2 data={datacards2} text={textcards2} />
        <Treatments data={datatreatments} />
        <CardWithImage data={dataWhyUs} />
        <MeetArtist data={dataArtist} />
        <TretmanFlow data={dataTretman} />
        <Questions data={dataQuestions} />
      </div>
    </main>
  );
}
