import React from "react";
import { Section } from "@/types/type";

type Props = {
  section: Section;
};

export function Section2Kako({ section }: Props) {
  return (
    <section id={section.id} className="">
      <div className="container px-2 md:px-4 mx-auto grid md:grid-cols-2 gap-4 md:gap-8 ">
        <div className="mx-auto w-full flex flex-col border rounded-lg p-4 md:p-6 shadow-lg">
          <h2 className="mb-4 md:mb-10">{section.title}</h2>
          {section.bullets && (
            <ul className=" mx-auto  mb-4">
              {section.bullets.slice(0, 3).map((b, i) => (
                <li key={i} className="list-disc list-inside">
                  {b}
                </li>
              ))}
            </ul>
          )}{" "}
          {Array.isArray(section.text) && (
            <div className="">
              {section.text.map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="mx-auto w-full flex flex-col justify-between  border rounded-lg p-4 md:p-6 shadow-lg">
          <h2 className="mb-4 md:mb-10">{section.title2}</h2>
          {section.bullets && (
            <ul className=" mx-auto mb-4">
              {section.bullets.slice(4).map((b, i) => (
                <li key={i} className="list-disc list-inside">
                  {b}
                </li>
              ))}
            </ul>
          )}{" "}
        </div>
      </div>
    </section>
  );
}
