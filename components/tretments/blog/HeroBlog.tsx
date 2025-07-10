import Image from "@/node_modules/next/image";
import React from "react";
import { HeroSection } from "@/types/index";

type Props = {
  data: HeroSection;
};

export function HeroBlog({ data }: Props) {
  return (
    <section className="hero relative h-screen md:h-[85dvh]">
      <div className="absolute left-0 right-0 top-0  z-0">
        <Image
          src={data.image}
          width={2000}
          height={1000}
          alt={data.alt}
          className="w-full h-screen md:h-[85dvh] object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]" />
      <div className="container relative flex flex-col justify-between px-2 md:px-4 mx-auto pt-64 md:pt-68 h-full text-center z-10">
        <div>
          <h1 className="text-white z-50">{data.heading}</h1>
          <p className="hidden md:block text-lg mb-2 md:text-2xl z-50 text-white">
            {data.subtitle}
          </p>
        </div>
        <div className="w-fit mx-auto space-y-6 mb-6">
          <p className="md:hidden text-lg mb-2 md:text-2xl z-50 text-white">
            {data.subtitle}
          </p>
          <div className="flex flex-col mx-auto text-white justify-center items-center gap-2 md:gap-4">
            <div>
              {data.bullets?.slice(0, 1).map((text, index) => (
                <p key={index} className="font-bold ">
                  {text}
                </p>
              ))}
            </div>
            <div>
              {data.bullets?.slice(1, 6).map((text, index) => (
                <p key={index} className="md:pb-0.5">
                  {text}
                </p>
              ))}{" "}
            </div>
            <div>
              {data.bullets?.slice(6).map((text, index) => (
                <p key={index} className="font-bold">
                  {text}
                </p>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
