import Image from "@/node_modules/next/image";
import React from "react";
import { FaViber } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaAngleDoubleRight } from "react-icons/fa";

export type HeroData = {
  heading: string;
  subtitle: string;
  image: string;
  alt: string;
  ctas: { label: string; href: string }[];
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
    <section className="relative md:h-[85dvh]">
      <div className="absolute left-0 right-0 top-0  z-0">
        <Image
          src={data.image}
          width={2000}
          height={1000}
          alt={data.alt}
          className="w-full md:h-[85dvh] object-cover"
        />
      </div>
      <div className="container relative flex flex-col md:justify-between px-2 md:px-4 mx-auto py-96 md:py-52 h-full text-center  z-10">
        <div>
          <h1 className="md:text-white z-50">{data.heading}</h1>
          <p className="text-lg mb-2 md:mb-6 z-50 md:text-white">
            {data.subtitle}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-1 md:gap-4">
          {data.ctas.map((cta, index) => (
            <a
              key={cta.href}
              href={cta.href}
              className="bg-primary mx-auto text-white px-2 md:px-4 py-1 md:py-2 rounded hover:bg-gray-800 transition flex gap-3 items-center "
            >
              {cta.label}
              {icons[index].icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
