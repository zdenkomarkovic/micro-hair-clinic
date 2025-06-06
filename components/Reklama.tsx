import Image from "@/node_modules/next/image";
import React from "react";

const Reklama = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-[5px] md:px-4 h-screen flex flex-col items-center">
        <div className="z-20 space-y-5 text-xl mt-10 font-bold">
          <h2 className="z-20 font-bold text-red-700 text-3xl">
            Sajt za samo 32.000 RSD!
          </h2>
          <p className="pl-[70px]">Dizajn po vašoj želji</p>
          <p className="pl-[82px]">Mobilna i desktop verzija</p>
          <p className="pl-[93px]">Domen i hosting (1 godina)</p>
          <p className="pl-[104px]">Osnovna SEO optimizacija</p>
          <p className="pl-[115px]">Bez troškova održavanja</p>
        </div>

        <div className="z-20 text-xl text-center">
          {/* <h1 className="relative text-gray-900 mt-[130px] md:mt-0 text-[33px] md:text-6xl xl:text-[80px] z-20">
            Manikam<span className="font-bold text-red-700">Web</span>
            Solutions{" "}
            <span className="text-[21px] md:text-3xl xl:text-[55px] py-2 block xl:py-4">
              mi pomazemo vasem biznisu da raste
            </span>
          </h1> */}
          <p className="mt-[150px] text-center font-bold">Nemate materijal?</p>
          <p className="text-lg">
            Nema problema – pišemo tekstove i dodajemo profi slike!
          </p>
          <p className=" text-center font-bold">Brži i kvalitetniji sajt!</p>
          <p className="text-lg">
            Radimo u naprednoj tehnologiji programiranja (Next.js) – Ne
            koristimo spore page buildere!
          </p>
        </div>
      </div>
      <div className="absolute top-0 z-0 w-full h-screen">
        <Image
          src="/images/laptop.jpg"
          alt="Background image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-100 via-gray-100/60 to-transparent" />
      </div>
    </div>
  );
};

export default Reklama;
{
  /* <div className="container px-2">
      <h1>Sajt za samo 32.000 RSD!</h1>
      <ul>
        <li>Dizajn po vašoj želji</li>
        <li>Mobilna i desktop verzija</li>
        <li>Domen i hosting (1 godina)</li>
        <li>Osnovna SEO optimizacija</li>
        <li>Bez troškova održavanja</li>
        <li>
          Nemate materijal? Nema problema – pišemo tekstove i dodajemo profi
          slike!
        </li>
        <li>
          Pravimo sajt u Next.js – vrhunskoj tehnologiji za brzinu i bolji
          Google rang!
        </li>
      </ul>
    </div> */
}
