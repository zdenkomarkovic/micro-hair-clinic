import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
  direction: string;
};

export function Section4Zenske({ section, direction }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div className={`${direction} container px-2 md:px-4`}>
        <div className="mx-auto flex flex-col">
          {section.text && (
            <div className="mb-4 space-y-2">
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
