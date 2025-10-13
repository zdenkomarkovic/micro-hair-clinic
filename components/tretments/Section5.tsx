import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";

type Props = {
  section: SectionCommon;
};

export function Section5({ section }: Props) {
  return (
    <section id={section.id} className="md:py-10">
      <div className="container px-2 md:px-32 mx-auto py-12">
        <div className="flex flex-col-reverse md:flex-row-reverse gap-6 md:gap-20">
          <div className="md:w-1/3 ">
            <Image
              src="/optimized/srdjanartist.webp"
              width={700}
              height={700}
              alt="srdjan micro hair clinic"
              className="w-full rounded-lg "
              loading="lazy"
              quality={80}
            />
          </div>
          <div className="md:w-2/3 flex flex-col justify-between">
            <h2 className="mb-6">{section.title}</h2>
            <p>{section.text}</p>

            <p className="flex items-center gap-6 font-bold">
              <span className="text-yellow-500 text-6xl">
                <GiTrophyCup />
              </span>
              {section.award1}
            </p>

            <p className="flex items-center gap-6 font-bold">
              <span className="text-yellow-500 text-6xl">
                <GiTrophyCup />
              </span>
              {section.award2}
            </p>

            <p className="flex items-center gap-6 font-bold">
              {" "}
              <span className="text-green-500 text-6xl">
                <GiWorld />
              </span>
              {section.award3}
            </p>
            <p className="font-mono">{section.text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
