import Image from "@/node_modules/next/image";
import React from "react";
import { Hero } from "@/types/type";

type Props = {
  data: Hero;
};

export function HeroCompare({ data }: Props) {
  return (
    <section className="hero relative min-h-screen">
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
      <div className="container relative flex flex-col  justify-end px-2 md:px-20 mx-auto h-full text-left z-10 py-6 md:py-12">
        <div className="flex flex-col mx-auto justify-center items-center gap-2 md:gap-4">
          <div>
            {data.bullets?.slice(0, 1).map((text, index) => (
              <p key={index} className="font-bold md:text-2xl ">
                {text}
              </p>
            ))}
          </div>
          <div>
            {data.bullets?.slice(1, 4).map((text, index) => (
              <p key={index} className="md:pb-0.5">
                {text}
              </p>
            ))}{" "}
          </div>
          <div>
            {data.bullets?.slice(4).map((text, index) => (
              <p key={index} className="font-bold">
                {text}
              </p>
            ))}{" "}
          </div>
        </div>
      </div>{" "}
      <div className="container mx-auto">
        <div className=" w-2/3 h-[2px] bg-primary mx-auto"></div>
      </div>
    </section>
  );
}
