/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://microhairclinic.si",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  i18n: {
    locales: ["sl", "en", "de"], // Dodaj sve jezike koje koristiš
    defaultLocale: "sl",
  },
};
