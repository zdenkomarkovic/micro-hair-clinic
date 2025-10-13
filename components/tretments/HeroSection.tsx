import Image from "@/node_modules/next/image";
import React from "react";
import { FaViber } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaAngleDoubleRight } from "react-icons/fa";

export type HeroData = {
  heading: string;
  subtitle: string;
  image: string;
  image2: string;
  alt: string;
  ctas?: { label: string; href: string }[];
};

type Props = {
  data: HeroData;
};

const icons = [
  {
    icon: <FaAngleDoubleRight className="w-6 h-6" />,
  },
  {
    icon: (
      <FaViber className="bg-purple-600 text-white p-1 rounded-full w-8 h-8" />
    ),
  },
  {
    icon: (
      <IoLogoWhatsapp className="bg-green-500 text-white p-[1px] rounded-full w-7 h-7" />
    ),
  },
];

export function HeroSection({ data }: Props) {
  return (
    <section className="hero relative ">
      <div className="relative w-full h-[100dvh] md:h-[85dvh] z-0">
        <Image
          src={data.image}
          fill
          alt={data.alt}
          className="hidden md:block w-full object-cover"
          priority
          quality={80}
          sizes="(min-width: 768px) 100vw, 0vw"
        />
        <Image
          src={data.image2}
          fill
          alt={data.alt}
          className="md:hidden w-full h-full object-cover"
          priority
          quality={75}
          sizes="(max-width: 767px) 100vw, 0vw"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]" />
        <div className="container relative flex flex-col gap-3 justify-end px-2 md:px-14 mx-auto h-full text-left z-10 pb-6 md:pb-6">
          <div>
            <h1 className="text-white  text-left z-50 py-2 md:py-6">
              {data.heading}
            </h1>
            <p className="text-base md:font-bold mb-2 md:text-xl z-50 text-white">
              {data.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-1 md:gap-4">
            {data.ctas?.map((cta, index) => (
              <a
                key={cta.href}
                href={cta.href}
                className={`bg-secondary text-sm md:text-lg hover:brightness-90 transition duration-300 mx-auto text-white px-3 md:px-4 py-2 md:py-2 rounded-md md:rounded-lg flex gap-3 items-center
      ${index > 0 ? "hidden md:flex" : ""}`}
              >
                {cta.label}
                {icons[index].icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
