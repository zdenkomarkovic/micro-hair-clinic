"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { i18n } from "../i18n-config";
import { getNavList } from "@/locales/navUtils";
import type { Locale } from "@/i18n-config";

function isValidLocale(locale: string): locale is Locale {
  return (i18n.locales as readonly string[]).includes(locale);
}
function getSafeLocale(locale: string): Locale {
  if (isValidLocale(locale)) {
    return locale;
  }
  return i18n.defaultLocale as Locale;
}

const localeMeta = {
  de: { label: "DE", flag: "/images/de.png" },
  en: { label: "EN", flag: "/images/uk.png" },
  sl: { label: "SL", flag: "/images/sl.png" },
};

export default function Header({ locale }: { locale: string }) {
  const { locales, defaultLocale } = i18n;
  const currentLocale = getSafeLocale(locale);
  const navList = getNavList(currentLocale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent text-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4  ">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src={"/images/mhclogo.png"}
                alt="micro-hair-clinic"
                width={150}
                height={200}
                className="w-[100px] md:w-[150px] "
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navList.map((item, i) => {
              if ("link" in item) {
                return (
                  <Link
                    key={i}
                    href={item.link}
                    className="hover:text-primary transition-colors uppercase"
                  >
                    {item.title}
                  </Link>
                );
              }

              if ("list" in item) {
                return (
                  <div key={i} className="relative group">
                    <span className="hover:text-primary transition-colors uppercase cursor-pointer">
                      {item.title}
                    </span>
                    <div className="absolute hidden group-hover:block bg-white shadow p-2 z-50">
                      {item.list.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.link}
                          className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
          <div dir="ltr" className="flex flex-col items-end">
            {locales.map((code) => (
              <Link
                key={code}
                href={code === defaultLocale ? "/" : `/${code}`}
                className="flex items-center gap-2 hover:opacity-80"
              >
                <span className="text-sm md:text-base">
                  {localeMeta[code].label}
                </span>
                <Image
                  src={localeMeta[code].flag}
                  alt={`${localeMeta[code].label} flag`}
                  width={20}
                  height={10}
                  className="rounded-sm"
                />
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background"
        >
          <div className="container mx-auto px-4 py-4">
            {navList.map((item, i) => {
              if ("link" in item) {
                return (
                  <Link
                    key={i}
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 hover:text-primary uppercase"
                  >
                    {item.title}
                  </Link>
                );
              }

              if ("list" in item) {
                return (
                  <div key={i} className="py-2">
                    <span className="font-semibold">{item.title}</span>
                    <div className="pl-4 mt-1 space-y-1">
                      {item.list.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.link}
                          onClick={() => setIsMenuOpen(false)}
                          className="block hover:text-primary text-sm"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return null;
            })}

            <div className="mt-4"></div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
