import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";
import { FaCheckDouble } from "react-icons/fa6";

type Props = {
  section: SectionCommon;
};

export function Section2Povecanje({ section }: Props) {
  return (
    <section id={section.id} className="md:py-10 px-4 bg-background">
      <div className="container px-2 md:px-4 mx-auto grid md:grid-cols-8 items-center md:gap-20 ">
        <div className="md:order-2 mx-auto flex flex-col md:col-span-5">
          <h2 className="mb-4 md:mb-10">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-2 md:mb-4">
              {section.text.slice(0, 1).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}

          {section.bullets && (
            <ul className=" mb-4">
              {section.bullets.map((b, i) => (
                <li key={i} className="pl-6 flex gap-3">
                  <FaCheckDouble className="text-green-500 " />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:order-1 md:col-span-3">
          {section.image && (
            <div className="text-center">
              <Image
                src={section.image.src}
                width={500}
                height={500}
                alt={section.image.alt}
                className="rounded-lg w-full shadow"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
