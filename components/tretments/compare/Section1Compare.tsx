import React from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { Section } from "@/types/type";

type Props = {
  section: Section;
};

export function Section1Compare({ section }: Props) {
  return (
    <section id={section.id} className="py-6 md:py-10">
      <div className="container px-2 md:px-4 mx-auto grid md:grid-cols-2 gap-4 md:gap-8 ">
        <div className="bg-background mx-auto flex flex-col border rounded-lg p-4 md:p-6 shadow-lg">
          <h2 className="mb-4 md:mb-10">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(0, 2).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className=" mx-auto  mb-4">
              {section.bullets.slice(0, 3).map((b, i) => (
                <li key={i} className="md:pl-10 list-disc list-inside">
                  {b}
                </li>
              ))}
              {section.bullets.slice(3, 7).map((b, i) => (
                <li key={i} className="flex md:items-center gap-3">
                  <FaCheckDouble className="text-green-500 mt-1 " /> {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="bg-background mx-auto flex flex-col justify-between  border rounded-lg p-4 md:p-6 shadow-lg">
          <h2 className="mb-4 md:mb-10">{section.title2}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(2, 4).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className=" mx-auto mb-4">
              {section.bullets.slice(4).map((b, i) => (
                <li key={i} className="flex md:items-center gap-3">
                  <FaCheckDouble className="text-green-500 mt-1 " />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(4).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
