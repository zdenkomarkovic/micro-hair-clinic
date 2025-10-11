"use client";

import Link from "@/node_modules/next/link";
import React from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  text?: string;
  button?: string;
};

const Hero = ({ title, subtitle, text, button }: HeroProps) => {
  const heroVideo = "/images/video-za-pocetak_T3Id9yjW.mp4";

  return (
    <div className="hero relative h-[100dvh] w-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />{" "}
      <video
        autoPlay
        loop
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browserr does not support the video tag.
      </video>
      {/* Overlay (opcionalno) */}
      <div className="z-10 container mx-auto px-2 md:px-4 relative h-full flex flex-col justify-between py-2 md:py-10">
        <div className="flex-grow flex items-center">
          <div className="">
            <h1 className="text-white ">{title}</h1>
          </div>
        </div>
        <div className="">
          <h2 className="pt-40 pb-10 text-lg text-white md:text-3xl">
            {subtitle}
          </h2>

          <div className="flex flex-col md:flex-row gap-2 md:gap-10 md:px-32 items-center ">
            <Link
              href={"/kontakt"}
              className="bg-secondary hover:brightness-90 transition duration-300 mx-auto text-white px-2 md:px-4 md:text-nowrap py-1 md:py-2 rounded-lg "
            >
              {button}
            </Link>
            <p className="text-white text-xs  md:text-lg mb-2">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
