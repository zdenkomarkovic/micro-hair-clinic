"use client";

import React from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  text?: string;
  button?: string;
};

const Hero = ({ title, subtitle, text, button }: HeroProps) => {
  const heroVideo = "/images/IMG_8157 2.mov";
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (opcionalno) */}

      <div className="container mx-auto px-2 md:px-4 relative h-screen flex items-center">
        <div className=" space-y-20">
          <h1 className="">{title}</h1>
          <h2 className="">{subtitle}</h2>
          <p>{text}</p>
          <button>{button}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
