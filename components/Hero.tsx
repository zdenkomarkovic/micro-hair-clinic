"use client";

import React from "react";
import { Button } from "./ui/button";

type HeroProps = {
  title?: string;
  subtitle?: string;
  text?: string;
  button?: string;
};

const Hero = ({ title, subtitle, text, button }: HeroProps) => {
  const heroVideo = "/images/IMG_8157 2.mp4";

  return (
    <div className="relative h-screen w-full flex items-center justify-center py-2 md:py-10">
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

      {/* Overlay (opcionalno) */}

      <div className="container mx-auto px-2 md:px-4 relative h-screen flex flex-col justify-between ">
        <div className="flex-grow flex items-center">
          <div className="pt-20 space-y-20">
            <h1 className="text-white ">{title}</h1>
            <h2 className="text-white md:text-3xl">{subtitle}</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 md:px-32 items-center ">
          <Button className="bg-primary md:text-xl md:px-6 md:py-5">
            {button}
          </Button>
          <p className="text-white text-xs md:text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
