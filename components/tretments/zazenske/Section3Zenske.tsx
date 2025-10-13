import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
  direction: string;
};

export function Section3Zenske({ section, direction }: Props) {
  return (
    <section id={section.id} className="py-4 md:py-10">
      <h2 className="mb-4 md:mb-10 px-2">{section.title}</h2>
      <div
        className={`${direction} container px-2 md:px-6 mx-auto grid md:grid-cols-2 items-center `}
      >
        <div className="mx-auto flex flex-col">
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
            <ul className="list-disc list-inside mb-4 ml-2 md:ml-10">
              {section.bullets.slice(0, 5).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="mx-auto flex flex-col">
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(1).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className="list-disc list-inside ml-2 md:ml-10">
              {section.bullets.slice(5).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
