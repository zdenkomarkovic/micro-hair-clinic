import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
  direction: string;
};

export function Section5Oziljci({ section, direction }: Props) {
  return (
    <section id={section.id} className="">
      <div
        className={`${direction} container py-4 md:py-10 border-t px-2 md:px-6 mx-auto flex flex-col md:flex-row items-center md:gap-20 `}
      >
        <div className="mx-auto flex flex-col text-center">
          <h2 className=" mb-4 md:mb-12">{section.title}</h2>
          {section.bullets && (
            <ul className="list-disc list-inside mb-4 text-left ml-2 md:ml-20">
              {section.bullets.slice(0, 4).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(0, 1).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
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
                className="rounded-lg shadow mb-4"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
