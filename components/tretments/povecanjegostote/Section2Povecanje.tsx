import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";
import { FaCheckDouble } from "react-icons/fa6";

type Props = {
  section: SectionCommon;
};

export function Section2Povecanje({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div className="container px-2 md:px-4 mx-auto flex flex-col md:flex-row items-center md:gap-20 ">
        <div className="mx-auto flex flex-col">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
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
          <h2 className="text-2xl font-bold mb-4">{section.title2}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(1).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          {section.image && (
            <div className="text-center">
              <Image
                src={section.image.src}
                width={500}
                height={500}
                alt={section.image.alt}
                className="rounded w-full shadow mb-4"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
