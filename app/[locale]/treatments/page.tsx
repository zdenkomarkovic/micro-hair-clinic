import { i18n } from "@/i18n-config";
import { getIntl } from "@/lib/intl";
import { isValidLocale } from "@/lib/locale";
import Link from "@/node_modules/next/link";
import { Messages } from "@/types/messages";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;

  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;

  const intl = await getIntl(locale);
  const messages = intl.messages as unknown as Messages;
  const dataTreatments = messages.datatreatments ?? {};

  return (
    <div className="container px-2 md:px-4 mx-auto py-24">
      <div>
        <h1>{dataTreatments.title}</h1>
        <div className="grid grid-cols-3 ">
          {dataTreatments.tretmans.map((tretman) => {
            return (
              <Link key={tretman.slug} href={tretman.slug}>
                {tretman.title}
              </Link>
            );
          })}
        </div>
        {}
      </div>
    </div>
  );
}
