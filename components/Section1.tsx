"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import { MotionValue } from "@/node_modules/framer-motion/dist/index";
import Image from "@/node_modules/next/image";
import rubik from "../public/rubik.jpg";
import ideja from "../public/images/ideja.jpg";

type CardData = {
  title: string;
  mim: string;
  img: string;
};
type SectionData = {
  title: string;
  span: string;
  title2: string;
  title3: string;
  span2: string;
  subtitle: string;
  span3: string;
  subtitle2: string;
  span4: string;
  subtitle3: string;
  span5: string;
};

const Section1 = ({
  cards,
  section,
}: {
  cards: CardData[];
  section: SectionData;
}) => {
  const targetRef = useRef(null);
  const { size } = useWindowSize();

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const titleHeight = 1750;

  // Animacije za naslov
  const titleAnimation = {
    scale: useTransform(scrollY, [0, titleHeight], [1, 0.8]),
    opacity: useTransform(scrollY, [0, titleHeight], [1, 0]),
  };

  return (
    <div
      ref={targetRef}
      className=" mx-auto container px-2 md:px-4 text-center"
    >
      <motion.div
        style={{
          scale: titleAnimation.scale,
          opacity: titleAnimation.opacity,
        }}
        className="h-[600px] sticky top-10 md:flex justify-between gap-10 items-center"
      >
        <div className="py-10 px-0">
          <h2 className="text-4xl md:text-6xl  pb-10 px-0 ">
            {section.title}
            <span className="text-red-700">{section.span}</span>{" "}
            {section.title2}{" "}
          </h2>
          <a
            href="tel:+381641967267"
            className="text-red-700 text-3xl md:text-5xl text-center md:text-left hover:scale-110"
          >
            {section.title3}
            <span className="text-black text-3xl md:text-4xl block md:inline">
              {" "}
              {section.span2}
            </span>
          </a>
        </div>
        <Image
          src={ideja}
          alt="idea"
          width={350}
          height={3}
          className="rounded-full border-white border-[5px] md:border-[8px] w-[370px] h-[370px] md:w-[560px] mx-auto md:mx-0 object-cover "
        />
      </motion.div>

      <div>
        {cards.map((text, i) => (
          <AnimatedCard
            key={i}
            index={i}
            text={text}
            animationHeight={animationHeight}
            screenHeight={size.height}
            scrollY={scrollY}
          />
        ))}

        {/* Dodatni sadržaj */}
        <div className="h-[1000px] ">
          <div className="space-y-5 sticky top-0">
            <p className="text-3xl xl:text-5xl pt-[150px]">
              {section.subtitle}
              <span className="font-bold text-red-700">{section.span3}</span>,
              {section.subtitle2}
            </p>
            <div>
              <Image
                src={rubik}
                alt="usluge"
                width={300}
                height={200}
                className="mx-auto rounded-full w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <a
              href="tel:+381641967267"
              className="text-2xl md:text-4xl hover:scale-110"
            >
              <span className=" text-red-700 font-bold">{section.span4}</span>{" "}
              {section.subtitle3}
              <span className="text-red-700 font-bold">{section.span5}</span>
              <p className="text-2xl md:text-3xl hover:scale-110">
                {" "}
                {section.span2}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

const animationHeight = 1500;
const AnimatedCard = ({
  index,
  text,
  animationHeight,
  screenHeight,
  scrollY,
}: {
  index: number;
  text: { title: string; mim: string; img: string };
  animationHeight: number;
  screenHeight: number;
  scrollY: MotionValue<number>;
}) => {
  const start = animationHeight + index * screenHeight;
  const end = animationHeight + (index + 1) * screenHeight;

  const scale = useTransform(scrollY, [start, end], [1, 0.8]);
  const opacity = useTransform(scrollY, [start, end], [1, 0]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      className="h-dvh py-20 sticky top-0"
    >
      <Card text={text} index={index} />
    </motion.div>
  );
};

const Card = ({
  text,
  index,
}: {
  text: { title: string; mim: string; img: string };
  index: number;
}) => {
  return (
    <div className="p-1 md:p-2 bg-white rounded-3xl md:w-[90%] mx-auto">
      <div
        className={`flex flex-col gap-6 pt-7  ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }  justify-between items-center rounded-3xl bg-gray-100   h-[600px] mx-auto p-2 md:p-7`}
      >
        <div className="md:w-[45%] space-y-5 md:space-y-10">
          <h3 className=" text-2xl md:text-3xl xl:text-4xl">{text.title}</h3>
          <p className="text-xl">{text.mim}</p>
        </div>
        <div className="relative w-full md:w-[50%] h-full">
          <Image
            src={text.img}
            alt=""
            fill
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
