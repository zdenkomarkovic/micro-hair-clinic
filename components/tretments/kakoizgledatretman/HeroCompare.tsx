import Image from "@/node_modules/next/image";
import React from "react";
import { Hero } from "@/types/type";

type Props = {
  data: Hero;
};

export function HeroCompare({ data }: Props) {
  return (
    <section className="hero relative">
      <div className="relative w-full h-[85dvh] z-0">
        <Image
          src={data.image}
          fill
          alt={data.alt}
          className=" w-full h-full object-cover"
          priority
          quality={85}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]" />
        <div className="container relative flex flex-col  justify-end px-2 md:px-20 mx-auto h-full text-left z-10 pb-6 md:pb-12">
          <h1 className="text-white text-left z-50 py-2 md:py-10">
            {data.heading}
          </h1>
          <p className="text-base  mb-2 md:text-xl z-50 text-white">
            {data.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
