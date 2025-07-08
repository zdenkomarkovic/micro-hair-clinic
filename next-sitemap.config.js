/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://microhairclinic.si",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "public",
  transform: async (config, path) => {
    // Izbaci "_not-found" rute itd ako ih imaš
    if (path.includes("/_")) return null;

    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
