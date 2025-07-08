/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.microhairclinic.si",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  i18n: {
    locales: ["sl", "en", "de"],
    defaultLocale: "sl",
  },
};
