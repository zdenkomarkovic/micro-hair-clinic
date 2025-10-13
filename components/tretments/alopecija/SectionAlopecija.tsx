import { SectionCommon } from "@/types/index";

import React from "react";

type Props = {
  section: SectionCommon;
};

export function SectionAlopecija({ section }: Props) {
  return (
    <section id={section.id} className="py-10  pt-50">
      <div className="container px-2 md:px-6 mx-auto text-center space-y-6 ">
        <h2 className="">{section.title}</h2>
        {Array.isArray(section.text) && (
          <div>
            {section.text?.map((line, i) => {
              return (
                <p key={i} className="py-1 md:text-left md:ml-20">
                  {line}
                </p>
              );
            })}
          </div>
        )}
        {section.bullets && (
          <div className="grid md:grid-cols-3 gap-6 h-full">
            {section.bullets.map((b, i) => (
              <div
                key={i}
                className="flex flex-col justify-between h-full bg-background border rounded-lg overflow-hidden shadow-md"
              >
                <p className="font-bold p-2.5 md:p-4">{b}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
