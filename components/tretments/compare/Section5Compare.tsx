import React from "react";
import { Section } from "@/types/type";

type Props = {
  section: Section;
};

export function Section5Compare({ section }: Props) {
  return (
    <section id={section.id} className="md:py-2 px-4">
      <div className="container px-2 md:px-4 mx-auto">
        <div className="mx-auto flex flex-col">
          <h2 className="mb-4 md:mb-8">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mx-auto mb-4 space-y-2 text-center">
              {section.text.slice(0, 2).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className=" mx-auto  mb-4">
              {section.bullets.map((b, i) => (
                <li key={i} className="pl-10 list-disc list-inside">
                  {b}
                </li>
              ))}
            </ul>
          )}
          {Array.isArray(section.text) && (
            <div className="mx-auto space-y-2 text-center">
              {section.text.slice(2).map((p, i) => (
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
