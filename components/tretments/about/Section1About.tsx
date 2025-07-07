import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";

type Props = {
  section: SectionCommon;
  direction: string;
};

export function Section1About({ section, direction }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div
        className={`${direction} container px-2 md:px-4 mx-auto grid md:grid-cols-3 items-center md:gap-20 `}
      >
        <div className="mx-auto flex flex-col col-span-2">
          <h2 className="mb-4">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.map((p, i) => (
                <p key={i} className="">
                  {" "}
                  {p}
                </p>
              ))}
            </div>
          )}
          <h2 className="mb-4 ">{section.title2}</h2>
          {section.bullets && (
            <ul className=" mb-4">
              {section.bullets.slice(0, 3).map((b, i) => (
                <li key={i} className="pl-10 flex items-center gap-6 font-bold">
                  <span className="text-yellow-500 text-6xl">
                    <GiTrophyCup />
                  </span>
                  {b}
                </li>
              ))}
              {section.bullets.slice(3).map((b, i) => (
                <li key={i} className="flex items-center gap-6 font-bold">
                  <span className="text-green-500  text-6xl">
                    <GiWorld />
                  </span>{" "}
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div className="text-center">
            <Image
              src={"/images/f94727ab-cc48-46a9-938f-07306270acba 5-min.JPG"}
              width={500}
              height={1000}
              alt="micro hair clinic"
              className="rounded-lg w-full shadow object-cover aspect-[6/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const images = [
  "/images/8898c7d5-3ac2-47b9-b768-19551cd4aaa0 4-min.JPG",
  "/images/f94727ab-cc48-46a9-938f-07306270acba 5-min.JPG",
  "/images/IMG_0314-min.jpg",
  "/images/IMG_2514-min.JPG",
  "/images/MOM Day 2-134-min.jpg",
  "/images/MOM Day 2-195-min.jpg",
  "/images/MOM Day 2-203-min.jpg",
  "/images/MOM Day 2-205-min.jpg",
  "/images/MOM Day 2-206-min.jpg",
  "/images/MOM Day 2-227-min.jpg",
  "/images/nagrada-min.jpg",
];
