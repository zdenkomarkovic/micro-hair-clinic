import ImageCarusel from "@/components/Imagecarusel";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
};

export function Section4Korekcija({ section }: Props) {
  return (
    <section id={section.id} className="py-6 md:py-10 ">
      <h2 className="mb-4 md:mb-8">{section.title}</h2>
      <div className="container  px-4 mx-auto ">
        <div className="mx-auto">
          {section.bullets && (
            <ul className=" text-center mb-4">
              {section.bullets.map((b, i) => {
                const hasColon = b.includes(":");

                if (hasColon) {
                  const [boldPart, ...rest] = b.split(":");
                  return (
                    <li key={i}>
                      <span>
                        <strong>{boldPart}:</strong> {rest.join(":").trim()}
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={i}>
                    <span>{b}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <ImageCarusel images={section.gallery ?? []} py={""} />
      </div>
    </section>
  );
}
