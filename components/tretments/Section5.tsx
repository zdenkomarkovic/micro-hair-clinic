import Image from "@/node_modules/next/image";
import { SectionCommon } from "@/types/index";
import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";

type Props = {
  section: SectionCommon;
};

export function ASection5({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div className="container px-2 md:px-12 mx-auto py-12">
        <div className="flex flex-row-reverse gap-20">
          <div className="w-1/4 ">
            <Image
              src={"/images/srdjan.jpg"}
              width={700}
              height={700}
              alt="srdjan micro hair clinic"
              className="w-full rounded-lg "
            />
          </div>
          <div className="w-2/4 flex flex-col justify-between">
            <h2>{section.title}</h2>
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
