import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaCheckDouble } from "react-icons/fa6";
import { SectionCommon } from "@/types/index";

type Props = {
  section: SectionCommon;
};

export function Section3Korekcija({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div className="container px-2 md:px-4 mx-auto grid grid-cols-2 md:gap-20 ">
        <div className="mx-auto flex flex-col">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          {section.text && (
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
                  <ImCross className="text-red-500" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {section.text && (
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
          <h2 className="text-2xl font-bold mb-4">{section.title2}</h2>
          {section.text && (
            <div className="mb-4 space-y-2">
              {section.text.slice(6, 7).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className=" mb-4">
              {section.bullets.slice(4).map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaCheckDouble className="text-green-500 " />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {section.text && (
            <div className="mb-4 space-y-2">
              {section.text.slice(7).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          <a
            href={"https://wa.me/381645400100"}
            className="bg-primary px-6 py-3 mt-20 text-white flex items-center gap-3 w-fit mx-auto"
          >
            {section.link.label} <FaAngleDoubleRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
