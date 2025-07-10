import { readFile } from "fs/promises";
import path from "path";
import { FinalCta } from "@/components/tretments/FinalCta";
import { isValidLocale } from "@/lib/locale";
import { BlogPage, Locale } from "@/types/index";
import { i18n } from "@/i18n-config";
import { notFound } from "@/node_modules/next/navigation";
import { HeroBlog } from "@/components/tretments/blog/HeroBlog";
import { Section1Blog } from "@/components/tretments/blog/Section1Blog";

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

  const filePath = path.join(process.cwd(), "data/blog", `${locale}.json`);

  let json;
  try {
    const file = await readFile(filePath, "utf-8");
    json = JSON.parse(file) as BlogPage;
  } catch {
    return notFound();
  }

  return (
    <main>
      <HeroBlog data={json.hero} />
      <Section1Blog data={json.blog} direction={"md:flex-row"} />
      <FinalCta data={json.finalCta} className="my-6" />
    </main>
  );
}
