import { SectionCommon } from "@/types/index";
import React from "react";
import ImageSliderKlizni from "../ImageSliderKlizni";
import ImageSliderKlizniMob from "../ImageSliderKlizniMob";

type Props = {
  section: SectionCommon;
};

export function Section4({ section }: Props) {
  return (
    <section id={section.id} className="py-10 ">
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div className="container  px-4 mx-auto md:px-28 ">
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
        <ImageSliderKlizni images={section.gallery ?? []} />
        <ImageSliderKlizniMob images={section.gallery ?? []} />
      </div>
    </section>
  );
}
