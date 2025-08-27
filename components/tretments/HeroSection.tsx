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
    <section className="hero relative h-screen md:h-[85dvh]">
      <div className="absolute left-0 right-0 top-0  z-0">
        <Image
          src={data.image}
          width={2000}
          height={1000}
          alt={data.alt}
          className="hidden md:block w-full md:h-[85dvh] object-cover"
        />
        <Image
          src={data.image2}
          width={2000}
          height={1000}
          alt={data.alt}
          className="md:hidden w-full h-screen object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]" />
      <div className="container relative flex flex-col justify-between px-2 md:px-4 mx-auto pt-64 md:pt-96 md:pb-32 h-full text-center z-10">
        <div>
          <h1 className="text-primary z-50">{data.heading}</h1>
          <p className="hidden md:block text-lg mb-2 md:text-2xl z-50 text-primary-foreground">
            {data.subtitle}
          </p>
        </div>
        <div className="w-fit mx-auto space-y-6 mb-6">
          <p className="md:hidden text-lg mb-2 md:text-2xl z-50 text-primary-foreground">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-1 md:gap-4">
            {data.ctas?.map((cta, index) => (
              <a
                key={cta.href}
                href={cta.href}
                className={`bg-secondary hover:brightness-90 transition duration-300 mx-auto text-white px-2 md:px-4 py-1 md:py-2 rounded-lg flex gap-3 items-center
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
