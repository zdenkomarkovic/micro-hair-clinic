"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Locale, i18n } from "@/i18n-config";
import { getTreatmentSubmenu } from "@/locales/navUtils";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { ImLocation2 } from "react-icons/im";
import Image from "@/node_modules/next/image";

function isValidLocale(locale: string): locale is Locale {
  return (i18n.locales as readonly string[]).includes(locale);
}
function getSafeLocale(locale: string): Locale {
  if (isValidLocale(locale)) {
    return locale;
  }
  return i18n.defaultLocale as Locale;
}

export default function Footer({
  locale,
  message,
  rights,
}: {
  locale: string;
  message: string;
  rights: string;
}) {
  const currentLocale = getSafeLocale(locale);
  const navList = getTreatmentSubmenu(currentLocale);

  return (
    <motion.footer
      className="footer bg-primary py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center  md:grid md:grid-cols-3 gap-8 mx-auto items-center">
          <div className="space-y-3 pb-5 md:pb-0 text-center mx-auto">
            <div className="mx-auto w-fit">
              {" "}
              <p className="text-muted-foreground cursor-pointer text-center flex gap-2 items-center transform  hover:scale-105 transition duration-300">
                <ImLocation2 /> Tržaška cesta116 1000 Ljubljana
              </p>
            </div>
            <div className="mx-auto w-fit">
              {" "}
              <a href="https://wa.me/38651479000">
                <p className="text-muted-foreground  flex gap-2 items-center transform  hover:scale-105 transition duration-300">
                  <FaPhone className="" /> +3865 147 9000
                </p>
              </a>
            </div>

            <div className="mx-auto w-fit">
              <a href="mailto:info@microhairclinic.rs">
                <p className="flex gap-3 items-center  transform  hover:scale-105 transition duration-300 text-muted-foreground text-wrap">
                  <TfiEmail /> info@microhairclinic.rs
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center ">
              <a
                href="https://www.facebook.com/microhairclinic.rs/"
                target={"_blank"}
                className="transform  hover:scale-110 transition duration-300"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/microhairclinic/"
                target={"_blank"}
                className="transform text-4xl hover:scale-110 transition duration-300"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="text-center text-primary-foreground">
            <p className="pb-3">{message}</p>
            {navList.map((item, i) => {
              return (
                <Link key={i} href={item.link} className=" text-base ">
                  <p className="py-1 transform  hover:scale-105 hover:text-white transition duration-300 ">
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="md:col-span-1 col-span-2 text-center">
            <p className="text-lg font-semibold mb-2 md:mb-4 text-white">
              Micro Hair Clinic
            </p>

            <Image
              src={"/images/mhclogo.png"}
              alt="micro-hair-clinic"
              width={150}
              height={200}
              className={`w-[150px] md:w-[200px] mx-auto `}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-cool-green mt-10 pt-5">
          <p>&copy; 2025 Micro Hair Clinic. {rights}</p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            izrada sajta:{" "}
            <span className="font-bold text-primary-foreground hover:text-white">
              {" "}
              ManikamWebSolutions
            </span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
