"use client";

import React from "react";
import { motion } from "framer-motion";

const VebSite = () => {
  const cardClass =
    " p-2 md:p-8 rounded-3xl shadow-xl md:shadow-2xl space-y-1 md:space-y-5 bg-gray-50  ";
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cardClass}
    >
      <h3 className=" py-3 font-bold">Osnovni paket: Sajt do 10 stranica</h3>

      <p>- Prilagođen za pregled na mobilnim uređajima i desktop računarima.</p>
      <p> - Moderan dizajn prilagođen vašim željama i potrebama.</p>
      <p> - Kontakt forma sa mapom vaše lokacije.</p>
      <p> - Integracija sa društvenim mrežama</p>
      <p> - SSL sertifikat i zaštita sajta</p>
      <p> - Hosting i domen za prvu godinu uključeni u cenu.</p>
      <p> - Izrada za 3-7 dana</p>

      <p> - Osnovna google optimizacija SEO</p>
    </motion.div>
  );
};

export default VebSite;
