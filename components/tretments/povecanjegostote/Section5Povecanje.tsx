import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
};

export function Section5Povecanje({ section }: Props) {
  return (
    <section id={section.id} className="py-6 md:py-10">
      <div className="container px-2 md:px-6 mx-auto grid md:grid-cols-8 items-center md:gap-20 ">
        <div className="mx-auto flex flex-col md:col-span-5">
          <h2 className=" mb-4 md:mb-10">{section.title}</h2>
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="md:col-span-3">
          {section.image && (
            <div className="text-center">
              <Image
                src={section.image.src}
                width={500}
                height={500}
                alt={section.image.alt}
                className="rounded-lg w-full shadow"
                loading="lazy"
                quality={80}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
