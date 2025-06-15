// app/[locale]/smp-vs-transplantacija/page.tsx

import { notFound } from "next/navigation";
import type { Locale } from "@/i18n-config";
import { readFile } from "fs/promises";
import path from "path";

import { FinalCta } from "@/components/tretments/FinalCta";
import { HeroSection } from "@/components/tretments/HeroSection";
import { isValidLocale } from "@/lib/locale";
import TableSection from "@/components/TableSection";
import BulletSection from "@/components/BulletSection";

export default async function ComparePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : "sl";

  const filePath = path.join(process.cwd(), "data/compare", `${locale}.json`);

  let json;
  try {
    const file = await readFile(filePath, "utf-8");
    json = JSON.parse(file);
  } catch (err) {
    return notFound();
  }

  return (
    <main>
      <HeroSection data={json.hero} />

      {json.sections?.map((section: any) => {
        if (section.table) {
          return <TableSection key={section.id} data={section} />;
        } else {
          return <BulletSection key={section.id} data={section} />;
        }
      })}

      {json.finalCta && <FinalCta data={json.finalCta} />}
    </main>
  );
}
