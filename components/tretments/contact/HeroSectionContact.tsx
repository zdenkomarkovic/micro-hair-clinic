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
    <section className="hero relative min-h-screen">
      <div className="relative  w-full h-[85dvh] z-0">
        {" "}
        <video
          autoPlay
          loop
          playsInline
          muted
          className="absolute w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]" />
        <div className="container relative flex flex-col gap-2 justify-end px-2 md:px-20 mx-auto h-full text-left z-10 pb-6 md:pb-12">
          <h1 className="text-white text-left z-50 py-2 md:py-10">
            {data.heading}
          </h1>
          <p className="text-base  mb-2 md:text-xl z-50 text-white">
            {data.subtitle}
          </p>
        </div>
      </div>

      <div className="container relative flex flex-col  justify-end px-2 md:px-20 mx-auto h-full text-left z-10 py-6 md:py-12">
        <div className="flex flex-col md:flex-row  gap-4 md:gap-6 mx-auto ">
          {data.bullets?.map((bullet, i) => {
            return (
              <p key={i} className="">
                {bullet}
              </p>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" w-2/3 h-[2px] bg-primary mx-auto"></div>
      </div>
    </section>
  );
}
