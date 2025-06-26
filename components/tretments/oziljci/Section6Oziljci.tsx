import { SectionCommon } from "@/types/index";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  section: SectionCommon;
};

export function Section6Oziljci({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div className="container px-2 md:px-4 mx-auto flex items-center md:gap-20 ">
        <div className="mx-auto flex flex-col">
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
          {" "}
          <a
            href={"https://wa.me/381645400100"}
            className="bg-primary px-6 py-3 text-white flex items-center gap-3 w-fit"
          >
            {section.link?.label} <FaAngleDoubleRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
