import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Section } from "@/types/type";

type Props = {
  section: Section;
  className?: string;
};

export function Section1Kako({ section, className = "" }: Props) {
  return (
    <section id={section.id} className={`${className}`}>
      <div className="container px-2 md:px-46 mx-auto">
        <div className="mx-auto w-full flex flex-col">
          <h2 className="mb-4 md:mb-8">{section.title}</h2>

          {section.bullets && (
            <ul className=" mx-auto mb-4">
              {section.bullets.map((b, i) => (
                <li key={i} className="pl-2 md:pl-10 list-disc list-inside">
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col md:flex-row gap-5 items-center mx-auto">
            {section.text && (
              <ul className=" mx-auto">
                {section.text.map((b, i) => (
                  <li key={i} className="font-bold">
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {section.button && (
              <a
                href="viber://chat?number=%2B38651479000"
                className="text-white flex gap-3 items-center bg-secondary hover:brightness-90 py-2 px-4 rounded-lg"
              >
                {section.button} <FaAngleDoubleRight className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
