'use client';

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Micro Hair Clinic",
    "description": locale === 'sl' 
      ? "Profesionalni SMP tretmani - mikropigmentacija lasišča u Ljubljani"
      : locale === 'de'
      ? "Professionelle SMP-Behandlungen - Kopfhaut-Mikropigmentierung in Ljubljana"
      : "Professional SMP treatments - scalp micropigmentation in Ljubljana",
    "url": "https://www.microhairclinic.si",
    "logo": "https://www.microhairclinic.si/images/mhclogo.png",
    "image": "https://www.microhairclinic.si/images/preiposle.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ljubljana",
      "addressLocality": "Ljubljana",
      "addressCountry": "SI"
    },
    "telephone": "+386645400100",
    "email": "info@microhairclinic.si",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-15:00"
    ],
    "services": locale === 'sl' 
      ? [
          "SMP tretmani",
          "Mikropigmentacija lasišča", 
          "Hair tattoo",
          "SMP za plešavost",
          "SMP za brazgotine",
          "SMP za ženske",
          "Korekcija SMP tretmajev"
        ]
      : locale === 'de'
      ? [
          "SMP-Behandlungen",
          "Kopfhaut-Mikropigmentierung",
          "Hair Tattoo", 
          "SMP bei Kahlheit",
          "SMP bei Narben",
          "SMP für Frauen",
          "SMP-Korrektur"
        ]
      : [
          "SMP treatments",
          "Scalp micropigmentation",
          "Hair tattoo",
          "SMP for baldness", 
          "SMP for scars",
          "SMP for women",
          "SMP correction"
        ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card"],
    "currenciesAccepted": "EUR",
    "founder": {
      "@type": "Person",
      "name": "Srđan Kostovski",
      "jobTitle": "SMP Artist",
      "description": locale === 'sl'
        ? "Večkrat nagrajen SMP umetnik z več kot 10 leti izkušenj"
        : locale === 'de' 
        ? "Mehrfach ausgezeichneter SMP-Künstler mit über 10 Jahren Erfahrung"
        : "Multi-award-winning SMP artist with over 10 years of experience"
    },
    "award": [
      "Gold Award 2023 – najboljši SMP umetnik v Evropi in UK",
      "Best SMP Artist 2024 – SMP Connect, Portugalska"
    ],
    "sameAs": [
      "https://www.instagram.com/microhairclinic",
      "https://www.facebook.com/microhairclinic"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
