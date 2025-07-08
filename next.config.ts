const nextConfig = {
  i18n: {
    locales: ["sl", "en", "de"],
    defaultLocale: "sl",
  },
  // Dodaj ovo:
  redirects: async () => [
    {
      source: "/sitemap.xml",
      destination: "/sitemap.xml", // ovo sprečava da ga Next obradi kao page
      permanent: true,
    },
    {
      source: "/robots.txt",
      destination: "/robots.txt",
      permanent: true,
    },
  ],
};
