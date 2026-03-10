import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
};

export function Section2Korekcija({ section }: Props) {
  return (
    <section id={section.id} className=" py-4 md:py-10bg-background">
      <div className="container px-2 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-3 items-center md:gap-20 ">
        <div className="order-2 md:order-1 ">
          {section.image && (
            <div className="text-center">
              <Image
                src={"/optimized/a7c5e3b0-8064-4fb5-98a8-c96ece3ecc87.webp"}
                width={500}
                height={500}
                alt={section.image.alt}
                className="rounded-lg w-full shadow aspect-[2/3] object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                unoptimized
              />
            </div>
          )}
        </div>{" "}
        <div className="mx-auto flex flex-col col-span-2 order-1 md:order-2">
          <h2 className="mb-4 md:mb-10">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(0, 1).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(1, 2).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className="list-disc list-inside mb-4 ml-2 md:ml-20">
              {section.bullets.slice(0, 2).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(2, 3).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className="list-disc list-inside mb-4 ml-2 md:ml-20">
              {section.bullets.slice(2, 4).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(3).map((p, i) => (
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
