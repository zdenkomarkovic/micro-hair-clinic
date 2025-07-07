/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://microhairclinic.si",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/_error"],
  i18n: {
    locales: ["en", "de", "sl"], // tvoji jezici
    defaultLocale: "sl",
  },
  experimental: {
    appDir: true,
  },
};
