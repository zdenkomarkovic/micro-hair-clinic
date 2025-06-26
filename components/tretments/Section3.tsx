import { SectionCommon } from "@/types/index";
import React from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

type Props = {
  section: SectionCommon;
};

export function Section3({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div className="container px-2 md:px-4 mx-auto">
        <div className="mx-auto">
          {section.bullets && (
            <ul className="flex gap-6 text-center mx-auto justify-center">
              {section.bullets.slice(0, 3).map((b, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <FaCheckDouble className="text-green-500 " />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mx-auto pt-6">
          {section.bullets && (
            <ul className="flex gap-6 text-center mx-auto justify-center">
              {section.bullets.slice(3).map((b, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <ImCross className="text-red-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
