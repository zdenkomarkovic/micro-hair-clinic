const nextConfig = {
  compress: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: '/sl/contact',
        destination: '/sl/zakazi-konsultaciju',
        permanent: true,
      },
      {
        source: '/sl/smp-alopecia',
        destination: '/sl/smp-alopecija',
        permanent: true,
      },
      {
        source: '/sl/smp-correction',
        destination: '/sl/smp-korekcija',
        permanent: true,
      },
      {
        source: '/sl/smp-density-thinning-hair',
        destination: '/sl/smp-povecanje-gostote-redki-lasje',
        permanent: true,
      },
      {
        source: '/sl/smp-for-scars',
        destination: '/sl/smp-za-brazgotine',
        permanent: true,
      },
      {
        source: '/sl/smp-for-women',
        destination: '/sl/smp-za-zenske',
        permanent: true,
      },
    ];
  },
};
