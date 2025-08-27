import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
  direction: string;
};

export function Section4Zenske({ section, direction }: Props) {
  return (
    <section
      id={section.id}
      className="py-4 md:py-10 px-2 md:px-4 bg-background"
    >
      <h2 className="mb-4 md:mb-10">{section.title}</h2>
      <div className={`${direction} container px-2 md:px-4 mx-auto`}>
        <div className="mx-auto flex flex-col">
          {Array.isArray(section.text) && (
            <div className=" space-y-2">
              {section.text.map((p, i) => (
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
