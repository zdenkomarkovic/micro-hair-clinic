"use client";
import Image from "@/node_modules/next/image";
import React from "react";

export type HeroData = {
  heading: string;
  subtitle: string;
  image: string;
  image2: string;
  alt: string;
  bullets?: string[];
};

type Props = {
  data: HeroData;
};

export function HeroSectionContact({ data }: Props) {
  const heroVideo = "/images/2108d76c67a04093aa2650d36e96b2db.MOV";
  return (
    <section className="hero relative h-screen md:h-[85dvh]">
      <video
        autoPlay
        loop
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Image
          src={data.image}
          width={2000}
          height={1000}
          alt={data.alt}
          className=" w-full md:h-[85dvh] object-cover"
        /> */}

      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]" />
      <div className="container relative flex flex-col justify-between px-2 md:px-4 mx-auto pt-64 md:pt-96 md:pb-32 h-full text-center z-10">
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
          <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-1 md:gap-4"></div>
        </div>
        <div className="flex flex-col md:flex-row mb-10 md:mb-0 md:gap-6 mx-auto text-white">
          {data.bullets?.map((bullet, i) => {
            return <p key={i}>{bullet}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
