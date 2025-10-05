"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import Image from "next/image"; // ispravno, ne treba "@/node_modules"

type Props = {
  images: string[];
  py: string;
};

const ImageCarusel = ({ images, py }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={` ${py} container md:pl-56 mx-auto `}>
      <Carousel
        className="md:w-screen px-0 overflow-x-visible"
        opts={{
          loop: true,
          direction: "rtl",
          align: "center",
        }}
      >
        <CarouselContent
          className="flex flex-row-reverse gap-1 ml-1 rtl"
          style={{ transform: "none" }}
        >
          {images.map((image, i) => (
            <CarouselItem
              key={i}
              className="pl-1 basis-[88%] md:basis-[45%] lg:basis-[24%]"
            >
              <div className="px-1 flex flex-col">
                <ImageCard
                  image={image}
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="SMP rezultat galerija - uvećana fotografija"
            width={1000}
            height={1000}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
            quality={80}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarusel;

const ImageCard = ({
  image,
  onClick,
}: {
  image: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="bg-transparent relative overflow-hidden rounded-3xl text-white">
        <Image
          src={image}
          width={500}
          height={500}
          alt="SMP tretman - fotografija iz galerije Micro Hair Clinic"
          className="w-full aspect-[4/5] object-cover"
          loading="lazy"
          quality={80}
        />
      </Card>
    </motion.div>
  );
};
