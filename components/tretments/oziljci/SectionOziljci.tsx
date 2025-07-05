import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
  direction: string;
};

export function SectionOziljci({ section, direction }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div
        className={`${direction} container px-2 md:px-4 mx-auto flex flex-col  items-center  md:gap-20 `}
      >
        <div className="mx-auto flex flex-col md:space-y-6 text-center">
          <h2 className="mb-4">{section.title}</h2>
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
            <ul className="list-disc list-inside mb-4">
              {section.bullets.slice(0, 4).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          {section.image && (
            <div className="text-center">
              <Image
                src={section.image.src}
                width={500}
                height={500}
                alt={section.image.alt}
                className="rounded-lg w-full shadow mb-4"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
