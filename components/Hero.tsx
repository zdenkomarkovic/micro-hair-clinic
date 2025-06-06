"use client";

import Image from "@/node_modules/next/image";
import React from "react";
import heroImg from "../public/images/laptop.jpg";

type HeroProps = {
  title?: string;
};

const Hero = ({ title }: HeroProps) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-[5px] md:px-4 h-screen flex items-center">
        <div className="">
          <h1 className="relative text-gray-900 mt-[250px] md:mt-0 text-[33px] md:text-6xl xl:text-[80px] z-20">
            Manikam<span className="font-bold text-red-700">Web</span>
            Solutions
            <span className="text-[21px] md:text-3xl xl:text-[55px] py-2 block xl:py-4">
              {title}
            </span>
          </h1>
        </div>
      </div>
      <div className="absolute top-0 z-0 w-full h-screen">
        <Image
          src={heroImg}
          alt="Background image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-100 via-gray-100/60 to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
