import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";

import React from "react";

type Props = {
  section: SectionCommon;
};

export function SectionAlopecija({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4 pt-50">
      <div className="container px-2 md:px-4 mx-auto text-center space-y-6 ">
        <h2 className="">{section.title}</h2>
        {Array.isArray(section.text) && (
          <div>
            {section.text?.map((line, i) => {
              return <p key={i}>{line}</p>;
            })}
          </div>
        )}
        {section.bullets && (
          <div className="grid grid-cols-3 gap-6 h-full">
            {section.bullets.map((b, i) => (
              <div
                key={i}
                className="flex flex-col justify-between h-full bg-primary-foreground border rounded-lg overflow-hidden"
              >
                <p className="font-bold p-6">{b}</p>
                <Image
                  src={section.image[i].src}
                  width={500}
                  height={500}
                  alt={"Tipovi alopecije: areata, totalis, universalis"}
                  className=" w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
