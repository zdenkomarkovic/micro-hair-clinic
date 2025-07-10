import React from "react";
import { ImCross } from "react-icons/im";
import { FaCheckDouble } from "react-icons/fa6";
import { SectionCommon } from "@/types/index";

type Props = {
  section: SectionCommon;
};

export function Section4Nega({ section }: Props) {
  return (
    <section id={section.id} className="py-10 text-center">
      <h2 className="mb-4 md:mb-8">{section.title}</h2>
      <div className="container px-2 md:px-4 mx-auto grid md:grid-cols-2 gap-4 md:gap-8 ">
        <div className="mx-auto w-full flex flex-col border rounded-lg p-4 md:p-6 shadow-lg">
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
            <ul className=" mx-auto  mb-4">
              {section.bullets.slice(0, 2).map((b, i) => (
                <li key={i} className="flex md:items-center gap-3">
                  <FaCheckDouble className="text-green-500 mt-1 " /> {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mx-auto w-full flex flex-col justify-between  border rounded-lg p-4 md:p-6 shadow-lg">
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(1, 2).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className=" mx-auto mb-4">
              {section.bullets.slice(2).map((b, i) => (
                <li key={i} className="flex md:items-center gap-3">
                  <ImCross className="text-red-500 mt-1 " />
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
