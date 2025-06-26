import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
};

export function Section1({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4 pt-50">
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div className="container px-2 md:px-4 mx-auto flex md:gap-20 items-center ">
        <div className="w-3/5">
          {section.image && (
            <div className="text-center">
              {section.image.title && (
                <h5 className="pb-10 font-bold">{section.image.title}</h5>
              )}
              <Image
                src={section.image.src}
                width={500}
                height={500}
                alt={section.image.alt}
                className=" w-full"
              />
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
