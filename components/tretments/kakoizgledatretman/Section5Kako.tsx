import React from "react";
import { SectionCommon } from "@/types/index";

type Props = {
  section: SectionCommon;
};

export function Section5Kako({ section }: Props) {
  return (
    <section id={section.id} className="pb-10 px-4">
      <div className="container px-2 md:px-4 mx-auto text-center">
        <a
          href="/#questions"
          className="mb-4 md:mb-8 underline text-2xl text-primary flex gap-3 items-center mx-auto w-fit hover:scale-105 transfor duration-200 text-wrap"
        >
          {section.title}
        </a>{" "}
        {section.text && (
          <ul className=" mx-auto">
            {section.text.map((b, i) => (
              <li key={i} className="font-bold">
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
