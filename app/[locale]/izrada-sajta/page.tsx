import React from "react";
import type { Metadata } from "next";
import Vebsite from "@/components/Vebsite";

// export const metadata: Metadata = {
//   title: "Izrada sajta - Manikam Web Solutions",
//   alternates: {
//     canonical: "https://manikamwebsolutions.com/sr/izrada-sajta",
//     languages: {
//       sr: "https://manikamwebsolutions.com/sr/izrada-sajta",
//       en: "https://manikamwebsolutions.com/en/website-development",
//     },
//   },
// };

const page = () => {
  return (
    <div className="pt-20 md:py-20  space-y-10">
      <div className="container px-2 md:px-4 mx-auto space-y-5 md:space-y-20">
        <div className="  md:px-32  py-4 text-base md:text-[22px]  mx-auto space-y-8   ">
          <h2 className="text-center text-3xl md:text-6xl md:pb-20">
            Izrada web sajta
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="md:hidden">
              <p className=" first-letter:pl-6 ">
                Tehnologije u kojima radimo su{" "}
                <span className="font-bold ">React.js Node.js Next.js</span>. Ne
                koristimo WordPress ili druge popularne graditelje sajtova. Sajt
                koji razvijamo za vas biće tehnički superiorniji, brži i bolje
                optimizovan, što je ključni faktor za SEO, što osigurava bolju
                poziciju na pretraživačima i veću vidljivost, čemu svi težimo.
              </p>
            </div>
            <Vebsite />

            <div className=" md:space-y-20">
              <p className=" first-letter:pl-6 hidden md:block ">
                Tehnologije u kojima radimo su{" "}
                <span className="font-bold ">React.js Node.js Next.js</span>. Ne
                koristimo WordPress ili druge popularne graditelje sajtova. Sajt
                koji razvijamo za vas biće tehnički superiorniji, brži i bolje
                optimizovan, što je ključni faktor za SEO, što osigurava bolju
                poziciju na pretraživačima i veću vidljivost, čemu svi težimo.
              </p>
              <p className=" first-letter:pl-6">
                Ovaj paket pruža sve što je potrebno za izvanredan sajt. Ako
                imate specifične zahteve, kreiraćemo jedinstveni paket potpuno
                prilagođen vašim potrebama. Možete dodati napredni SEO , poseban
                dizajn ili bilo šta drugo iz naše palete usluga.
              </p>
            </div>

            {/* <div className={cardClass}>
          <h3 className={h3Class}>Sajt sa CMS - 89,000rsd</h3>
          <p>
            {" "}
            CMS(Content Management System) omogućava korisnicima, da upravljaju
            sajtom preko jednostavnog korisničkog interfejsa (princip
            objavljivanja na drustvenim mrezama).
          </p>

          <p>Korisnik dodaje ili ažurira sadržaj koristeći jednostavne forme</p>
          <p>Korisnici mogu lako dodavati tekstove, slike i video zapise.</p>
          <p>pogodno za blogove i portale</p>
          <p>Pristup sadržaju i upravljanje moguće sa bilo kog uređaja</p>
          <p>sve sa osnovnog paketa</p>
        </div>
        <div className={cardClass}>
          <h3 className={h3Class}>E - Commerce - 189,000rsd</h3>

          <p>Osnovni paket - 189,000rsd</p>
          <p>Do 10 000 proizvoda</p>
          <p>Integrisano placanje karticom</p>
          <p>Upravljanje zalihama</p>
          <p>Pretrage proizvoda po vise kriterijuma</p>
          <p>Automatske email poruke</p>
          <p>Podesavaje za rad sa kurirskim sluzbama</p>
          <p>Sistem za akcije i popuste</p>
          <p>Sigurnosni SSL sertifikat</p>
        </div> */}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
