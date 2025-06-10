import Reference from "@/components/Reference";
import { GiWeight } from "react-icons/gi";

export const NavList = [
  {
    title: "Naslovna",
    route: "/",
  },
  {
    title: "Usluge",
    route: "/services",
    hasDropdown: true,
    dropdownItems: [
      { title: "Izrada sajtova", route: "/services/#website" },
      { title: "Izrada webshopova", route: "/services/#webshop" },
      { title: "Odrzavanje", route: "/services/#maintaince" },
      { title: "SEO Optimizacija", route: "/services/#seo" },
    ],
  },
  {
    title: "Reference",
    route: "/#reference",
  },
  {
    title: "Kontakt",
    route: "/contact",
  },
];

interface UslugeData {
  title: string;
  text: string;
  img: string;
  span: string;
}

export const uslugeData: UslugeData[] = [
  {
    img: "/images/software.svg",
    title: "WEB DEVELOPMENT",
    text: "Koristimo tehnologije React.js, Node.js i Next.js Sarađujemo sa domaćim i stranim klijentima, a takođe razvijamo i sopstvena digitalna rešenja, poput aplikacije",
    span: " Taxi report",
  },
  {
    img: "/images/5462824_Devices.svg",
    title: "SAJT",
    text: "Ne koristimo alate za izradu sajtova, već ih programiramo u Next.js, jednoj od najbržih tehnologija, što osigurava brzinu i bolji rang na Google. Nudimo osnovne sajtove do 10 stranica i prilagođena rešenja za specifične potrebe klijenata.",
    span: "",
  },
  {
    img: "/images/cms.png",
    title: "SAJT KOJI SAMI AŽURIRATE",
    text: "CMS (Content Management System) omogućava korisnicima da sami ažuriraju stranice, dodaju ili brišu sadržaj i stranice. Idealan je za blogove, portale i sajtove sa čestim izmenama sadržaja.",
    span: "",
  },
  {
    img: "/images/7079603_3509262.svg",
    title: "ONLINE PRODAVNICA",
    text: "Custom online prodavnice pružaju prilagođen prikaz za određenu grupu proizvoda, uz dodatne opcije i funkcionalnosti koje poboljšavaju prodaju. Idealno rešenje za uspešnu online prodaju.",
    span: "",
  },
  {
    img: "/images/seo.svg",
    title: "SEO",
    text: "Želite bolje pozicioniranje u pretrazi? Naš visokokvalitetni SEO poboljšava poziciju vašeg sajta i povećava vidljivost. Optimizujemo sadržaj, ključne reči i tehničke aspekte sajta za bolje rezultate i veći saobraćaj.",
    span: "",
  },
  {
    img: "/images/odrzavanje.png",
    title: "ODRŽAVANJE",
    text: "Svaki sajt vremenom zahteva održavanje. Kako tehnologije brzo napreduju, važno je redovno prilagođavanje kako bi sajt ostao funkcionalan i u toku s najnovijim standardima.",
    span: "",
  },
  {
    img: "/images/destination.png",
    title: "TRANZICIJA SAJTA",
    text: "Bez obzira na razlog, ako želite da promenite hosting provajdera, naš tim će se pobrinuti za siguran i besprekidan transfer vašeg sajta na provajdera po vašem izboru.",
    span: "",
  },
  {
    img: "/images/redesign.png",
    title: "REDIZAJN SAJTA",
    text: "Ako je vaš sajt stariji, verovatno je vreme za redizajn. Redizajn uključuje modernizaciju dizajna uz zadržavanje dela postojećeg sadržaja i dodavanje novog, čineći ga funkcionalnijim i vizuelno privlačnijim.",
    span: "",
  },
  {
    img: "/images/consulting.png",
    title: "KONSALTING",
    text: "Niste sigurni šta vam je potrebno? Zakažite sastanak sa nama, rado ćemo vam predstaviti šta sve možemo da uradimo za vaš biznis i kako da postignete bolje rezultate.",
    span: "",
  },
  {
    img: "/images/cloud.png",
    title: "HOSTING",
    text: "U saradnji sa našim partnerima, nudimo hosting i domene za sajtove koje smo izradili ili redizajnirali, osiguravajući pouzdanu podršku i optimalne performanse za vaš sajt ili web softver.",
    span: "",
  },
  {
    img: "/images/ads.svg",
    title: "GOOGLE OGLAŠAVANJE",
    text: "Uz našu uslugu digitalnog oglašavanja, vaš brend će dobiti potrebnu vidljivost i pažnju, što će vam omogućiti da se izdvojite iz konkurencije i dosegnete ciljaniju publiku.",
    span: "",
  },
];

export interface Reference {
  title: string;
  image: string;
  link: string;
}

export const reference: Reference[] = [
  {
    title: "Kreditni Savetnik",
    image: "/images/SS11.png",
    link: "https://www.kreditnisavetniksrbija.rs/",
  },
  {
    title: "Pure Clean Solutions",
    image: "/images/SS3.png",
    link: "https://www.ciscenje-nis.rs/",
  },
  {
    title: "Enterijeri Kankan",
    image: "/images/SS4.png",
    link: "https://www.separei.rs/",
  },

  {
    title: " Dm Rustic 24",
    image: "/images/SS5.png",
    link: "https://www.dekorativneciglice.rs/",
  },
  {
    title: "Cool Taxi Nis",
    image: "/images/SS2.png",
    link: "https://www.taxinis.rs/",
  },
  {
    title: "STEEL AM CONSTRUCTIONS",
    image: "/images/SS12.png",
    link: "https://www.celicnekonstrukcije.rs/",
  },
  {
    title: "Autoring",
    image: "/images/SS9.png",
    link: "https://www.kombiprevozputnikapozega.rs/",
  },
  {
    title: "Sushi Wasabi",
    image: "/images/SS7.png",
    link: "https://www.sushiwasabi.rs/",
  },
  {
    title: "Lucky Fitness",
    image: "/images/SS8.png",
    link: "https://www.luckyfitness.rs/",
  },
  {
    title: "Šlep služba Purić 032 Čačak",
    image: "/images/SS6.png",
    link: "https://www.slep-cacak.rs/",
  },

  {
    title: "Tolić Inženjering",
    image: "/images/SS13.png",
    link: "https://www.celicne-konstrukcije.rs/",
  },

  {
    title: "M Migić",
    image: "/images/SS10.png",
    link: "https://www.alpinistickiradovi.rs/",
  },
];
export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Elektroinstalacije",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Elektro ormani",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};
