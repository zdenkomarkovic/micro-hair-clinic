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
import logo from "../public/images/mhc 22.PNG";

function isValidLocale(locale: string): locale is Locale {
  return (i18n.locales as readonly string[]).includes(locale);
}
function getSafeLocale(locale: string): Locale {
  if (isValidLocale(locale)) {
    return locale;
  }
  return i18n.defaultLocale as Locale;
}

export default function Header({ locale }: { locale: string }) {
  const { locales, defaultLocale } = i18n;
  const currentLocale = getSafeLocale(locale);
  const navList = getNavList(currentLocale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleMenuAndDropdown = () => {
  //   setIsMenuOpen(!isMenuOpen);
  //   setDropdownOpen(false);
  // };

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
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-[10px]">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src={logo}
                alt="micro-hair-clinic"
                width={300}
                height={200}
                className=" "
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navList.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.route}
                  className="text-foreground hover:text-primary transition-colors uppercase"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div dir="ltr" className="flex flex-col">
            {[...locales].sort().map((locale) => (
              <Link
                key={locale}
                href={locale === defaultLocale ? "/" : `/${locale}`}
              >
                {locale}
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
              return (
                <Link
                  key={i}
                  href={item.route}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="block py-2 hover:text-primary transition-colors uppercase"
                >
                  {item.title}
                </Link>
              );
            })}

            <div className="mt-4"></div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
