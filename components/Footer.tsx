"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Locale, i18n } from "@/i18n-config";
import { getTreatmentSubmenu } from "@/locales/navUtils";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

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
      className="footer bg-gray-50 py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-muted-foreground">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            {navList.map((item, i) => {
              return (
                <ul
                  key={i}
                  className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2"
                >
                  <li>
                    <Link
                      href={item.link}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="https://wa.me/381645400100">
                <p className="text-muted-foreground  flex gap-2 items-center hover:text-primary">
                  <FaPhone className="" /> +38164 5400 100
                </p>
              </a>
            </div>
            <div> </div>
            <div>
              <a href="mailto:info@microhairclinic.rs">
                <p className="flex gap-3 items-center  hover:text-primary text-muted-foreground text-wrap">
                  <TfiEmail /> info@microhairclinic.rs
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/microhairclinic.rs/"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/microhairclinic/"
                target={"_blank"}
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">
              Micro Hair Clinic
            </h3>

            <p className=" font-bold text-red-700 ">{message}</p>
          </div>
        </div>
        <div className="mt-5 pt-5 md:mt-8 md:pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; 2025 Micro Hair Clinic. {rights}</p>
        </div>
      </div>
    </motion.footer>
  );
}
