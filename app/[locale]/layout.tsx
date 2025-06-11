import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDirection, getIntl } from "@/lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";
import { LocaleProvider } from "../../lib/LocaleContext";
import { Metadata } from "@/node_modules/next/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMP mikropigmentacija lasišča – Micro Hair Clinic",
  description:
    "Odkrijte SMP – neinvaziven tretma za videz gostih, obritih las. Brez operacije, zdravil ali brazgotin. Rezervirajte posvet!",
  icons: {
    icon: "/images/android-chrome-192x192.png",
    apple: "/images/apple-touch-icon.png",
  },

  keywords: [],
  alternates: {
    canonical: "https://",
  },
};

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [{ locale: "sl" }, { locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Ovaj tip je važno da bude Promise
}) {
  const awaitedParams = await params; // awaituj ceo params
  const localeParam = awaitedParams.locale;

  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;
  const intl = await getIntl(locale);
  const message = intl.formatMessage({ id: "footer.message" });
  const rights = intl.formatMessage({ id: "footer.rights" });

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-secondary text-lg md:text-xl`}
      >
        <LocaleProvider locale={locale}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} rights={rights} message={message} />
        </LocaleProvider>
      </body>
    </html>
  );
}
