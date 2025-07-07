"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import Image from "@/node_modules/next/image";

type Props = {
  images: string[];
  py: string;
};

const ImageCarusel = ({ images, py }: Props) => {
  return (
    <div className={` ${py} container pl-10 md:pl-56 mx-auto `}>
      <Carousel
        className="w-screen px-0 overflow-x-visible"
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
              className="pl-1 basis-[83%] md:basis-[45%] lg:basis-[24%]"
            >
              <div className="px-1 flex flex-col">
                <ImageCard image={image}></ImageCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarusel;

const ImageCard = ({ image }: { image: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=""
    >
      <Card
        className={` bg-transparent relative overflow-hidden  rounded-3xl text-white`}
      >
        <Image
          src={image}
          width={200}
          height={200}
          alt="micro-hair-clinic"
          className=" w-full aspect-square object-cover"
        />
      </Card>
    </motion.div>
  );
};
