import { NextResponse } from "next/server";

const locales = ["en", "de", "sl"];

const staticPages = [
  "",
  "about",
  "kontakt",
  "smp-alopecija",
  "smp-korekcija",
  "smp-povecanje-gostote-redki-lasje",
  "smp-vs-presaditev",
  "smp-za-brazgotine",
  "smp-za-plesavost",
  "smp-za-zenske",
];

export async function GET() {
  const pages = locales.flatMap((locale) =>
    staticPages.map((slug) => {
      const path = slug === "" ? "" : `/${slug}`;
      return `<url><loc>https://microhairclinic.si/${locale}${path}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`;
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
