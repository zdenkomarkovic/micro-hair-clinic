import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
  direction: string;
};

export function Section2About({ section, direction }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div
        className={`${direction} container px-2 md:px-4 mx-auto grid md:grid-cols-2 items-center `}
      >
        <div className="mx-auto flex flex-col">
          <h2 className="mb-4">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(0, 7).map((p, i) => (
                <p key={i} className="">
                  {p}
                </p>
              ))}
            </div>
          )}
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(7, 8).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="mx-auto flex flex-col justify-between h-full">
          <h2 className="mb-4">{section.title2}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(8).map((p, i) => (
                <p key={i} className="">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className=" mb-4">
              {section.bullets.slice(0, 5).map((b, i) => (
                <li key={i} className="pl-6 font-bold">
                  {b}
                </li>
              ))}
            </ul>
          )}
          {section.bullets && (
            <ul className=" mb-4">
              {section.bullets.slice(5).map((b, i) => (
                <li key={i} className="">
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
