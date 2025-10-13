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
    <section id={section.id} className="py-6 md:py-10">
      <div className="container px-2 md:px-6 mx-auto grid md:grid-cols-2 gap-6 md:gap-20 ">
        <div className="mx-auto flex flex-col">
          <h2 className="mb-4 md:mb-10">{section.title}</h2>
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
                <li
                  key={i}
                  className="flex items-start md:items-start gap-3  ml-2 "
                >
                  <ImCross className="text-red-500 mt-1 min-w-[20px]" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {Array.isArray(section.text) && (
            <div className="">
              {section.text.slice(1, 6).map((p, i) => (
                <p key={i} className="font-bold py-1">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="mx-auto flex flex-col justify-between">
          <h2 className="mb-4 md:mb-10">{section.title2}</h2>
          {Array.isArray(section.text) && (
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
                <li key={i} className="flex items-start gap-3 ml-2">
                  <FaCheckDouble className="text-green-500 mt-1 min-w-[20px]" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(7).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          <a
            href={"https://wa.me/38651479000"}
            className="mx-auto bg-secondary hover:brightness-90 px-3 md:px-6 py-1 md:py-3 text-white flex items-center text-center md:text-nowrap gap-1 md:gap-3 w-fit"
          >
            {section.link?.label}{" "}
            <FaAngleDoubleRight className="md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
