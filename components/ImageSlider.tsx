"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ align: "start" });
  const [emblaThumbRef, emblaThumbApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaMainApi) return;

    emblaMainApi.scrollTo(activeIndex, false);
    const onSelect = () => setActiveIndex(emblaMainApi.selectedScrollSnap());
    emblaMainApi.on("select", onSelect);

    return () => {
      if (emblaMainApi) {
        emblaMainApi.off("select", onSelect);
      }
    };
  }, [emblaMainApi, activeIndex]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaMainApi) {
        emblaMainApi.scrollTo(index);
        setActiveIndex(index);
      }
    },
    [emblaMainApi]
  );
  if (!images || images.length === 0) {
    return null;
  }
  return (
    <div className="relative">
      {/* Glavni slider */}
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex aspect-16/9">
          {images.map((src, index) => (
            <div key={index} className="min-w-full">
              <div className="w-full aspect-video relative overflow-hidden ">
                <Image
                  src={src}
                  width={1500}
                  height={1000}
                  alt={`SMP rezultat pred in po - tretman mikropigmentacije ${index + 1}`}
                  className="w-full aspect-video object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail slider */}
      <div className="relative mt-4">
        {/* Strelica levo */}
        <button
          onClick={() => emblaThumbApi && emblaThumbApi.scrollPrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md z-10"
        >
          ◀
        </button>

        {/* Slider sa vidljivih 5-6 slika */}
        <div className="overflow-hidden w-full" ref={emblaThumbRef}>
          <div className="flex">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`border-2 overflow-hidden transition min-w-32 md:mx-3 ${
                  activeIndex === index ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <Image
                  src={src}
                  width={100}
                  height={100}
                  alt={`SMP galerija thumbnail ${index + 1}`}
                  className="w-40 h-28  object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </div>

        {/* Strelica desno */}
        <button
          onClick={() => emblaThumbApi && emblaThumbApi.scrollNext()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
