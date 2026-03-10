"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const ImageSliderKlizni = ({ images }: { images: string[] }) => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ align: "start" });
  const [emblaThumbRef, emblaThumbApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaMainApi) return;

    const onSelect = () => {
      setActiveIndex(emblaMainApi.selectedScrollSnap());
    };

    emblaMainApi.on("select", onSelect);
    onSelect(); // inicijalni aktivni index

    return () => {
      emblaMainApi.off("select", onSelect);
    };
  }, [emblaMainApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaMainApi) {
        emblaMainApi.scrollTo(index);
      }
    },
    [emblaMainApi]
  );

  function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="hidden md:flex justify-center items-center relative">
      {/* Glavni slider */}
      <div className="flex-1 overflow-hidden" ref={emblaMainRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={src}
                width={1500}
                height={1000}
                alt={`SMP rezultat pred in po - mikropigmentacija lasišča ${index + 1}`}
                className="w-[790px] rounded-lg mx-auto h-auto object-cover"
                loading="lazy"
                sizes="790px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail slider */}
      <div className="w-[40rem] flex flex-col justify-center relative ml-2">
        {/* Strelica levo */}
        <button
          onClick={() => emblaThumbApi && emblaThumbApi.scrollPrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md z-10"
        >
          ◀
        </button>

        {/* Slider sa thumbnail gridovima */}
        <div className="overflow-hidden" ref={emblaThumbRef}>
          <div className="flex">
            {chunkArray(images, 4).map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="min-w-full grid grid-cols-2 gap-4 p-4"
              >
                {group.map((src, index) => {
                  const realIndex = groupIndex * 4 + index;
                  return (
                    <button
                      key={realIndex}
                      onClick={() => scrollTo(realIndex)}
                      className={`border-2 overflow-hidden rounded-lg transition w-72 h-72 ${
                        activeIndex === realIndex
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      <Image
                        src={src}
                        width={100}
                        height={100}
                        alt={`SMP galerija thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                        sizes="280px"
                        unoptimized
                      />
                    </button>
                  );
                })}
              </div>
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

export default ImageSliderKlizni;
