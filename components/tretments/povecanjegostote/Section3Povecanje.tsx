import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { SectionCommon } from "@/types/index";

type Props = {
  section: SectionCommon;
};

export function Section3Povecanje({ section }: Props) {
  return (
    <section id={section.id} className="py-3 md:py-10 px-4 bg-background">
      <div className="container px-2 md:px-4 mx-auto grid md:grid-cols-2  md:gap-20 ">
        <div className="mx-auto flex flex-col">
          <h2 className=" mb-4">{section.title}</h2>
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
              {section.bullets.slice(0, 4).map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaCheckDouble className="text-green-500 " />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(1, 6).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="mx-auto flex flex-col">
          <h2 className="mb-4 md:mb-10">{section.title2}</h2>
          {section.bullets && (
            <ul className=" mb-4 md:mb-10">
              {section.bullets.slice(4).map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaCheckDouble className="text-green-500 " />
                  {b}
                </li>
              ))}
            </ul>
          )}

          <a
            href={"https://wa.me/38651479000"}
            className="bg-secondary hover:brightness-90 mb-5 px-3 md:px-6 py-1 md:py-3 text-white rounded-lg flex items-center text-center md:text-nowrap gap-1 md:gap-3 w-fit"
          >
            {section.link?.label}{" "}
            <FaAngleDoubleRight className="md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
