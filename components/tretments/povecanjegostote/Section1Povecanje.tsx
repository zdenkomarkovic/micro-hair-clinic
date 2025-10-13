import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

type Props = {
  section: SectionCommon;
};

export function Section1Povecanje({ section }: Props) {
  return (
    <section id={section.id} className="py-6 md:py-10">
      <div className="container px-2 md:px-6 mx-auto grid md:grid-cols-8 items-center md:gap-10 ">
        <div className="mx-auto flex flex-col md:col-span-5 text-center">
          <h2 className="mb-4 md:mb-8">{section.title}</h2>
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
              {section.bullets.slice(0, 2).map((b, i) => (
                <li
                  key={i}
                  className="flex md:pl-6 text-left items-center gap-2 md:gap-3 text-sm  md:text-xl"
                >
                  {" "}
                  {i === 0 && <FaCheckDouble className="text-green-500 " />}
                  {i === 1 && <ImCross className="text-red-500" />}
                  {b}
                </li>
              ))}
            </ul>
          )}

          {Array.isArray(section.text) && (
            <div className="md:mb- text-left">
              {section.text.slice(1, 2).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className="pl-12 list-disc list-inside mb-4 text-left">
              {section.bullets.slice(2).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(2, 3).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="md:col-span-3">
          {section.image && (
            <div className="text-center w-full">
              <Image
                src={section.image.src}
                width={500}
                height={500}
                alt={section.image.alt}
                className="rounded-lg w-full shadow"
                loading="lazy"
                quality={80}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
