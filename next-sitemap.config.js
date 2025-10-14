/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.microhairclinic.si",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ['/api/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Povećaj prioritet za homepage i glavne stranice
    const priority =
      path === '/sl' || path === '/en' || path === '/de' ? 1.0 :
      path.includes('/smp-za-plesavost') || path.includes('/smp-za-brazgotine') ? 0.9 :
      0.7;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
