import React from "react";
import { SectionCommon } from "@/types/index";

type Props = {
  section: SectionCommon;
};

export function Section4Compare({ section }: Props) {
  return (
    <section id={section.id} className="py-2 px-4">
      <div className="container px-2 md:px-4 mx-auto">
        <div className="mx-auto w-full flex flex-col">
          <h2 className="mb-4 md:mb-8">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mx-auto mb-4 space-y-2 text-center">
              {section.text.map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className=" mx-auto">
              {section.bullets.slice(0, 5).map((b, i) => (
                <li key={i} className="pl-10 list-disc list-inside">
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
