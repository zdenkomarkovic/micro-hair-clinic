import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
};

export function Section1({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4 pt-50">
      <h2 className="mb-4">{section.title}</h2>
      <div className="container px-2 md:px-4 mx-auto flex flex-col md:flex-row md:gap-20 items-center ">
        <div className="md:w-3/5">
          {section.image && (
            <div className="text-center">
              {section.imgtitle && (
                <p className="pb-10 font-bold">{section.imgtitle}</p>
              )}
              {
                <Image
                  src={section.image.src}
                  width={500}
                  height={500}
                  alt={section.image.alt}
                  className=" w-full"
                  loading="lazy"
                  quality={80}
                />
              }
            </div>
          )}
        </div>
        <div className="">
          {section.bullets && (
            <ul className="">
              {section.bullets.map((b, i) => (
                <li key={i} className="font-bold">
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
