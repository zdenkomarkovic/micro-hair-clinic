import { SectionCommon } from "@/types/index";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  section: SectionCommon;
};

export function Section2Alopecija({ section }: Props) {
  return (
    <section id={section.id} className="py-4 md:py-10 bg-background">
      <div className="container px-2 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-3 items-center md:gap-20 ">
        <div className="mx-auto flex flex-col col-span-2">
          <h2 className="mb-4 md:mb-6">{section.title}</h2>
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
            <ul className="list-disc list-inside mb-4 ml-2 md:ml-20">
              {section.bullets.slice(0, 4).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
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
              {section.bullets.slice(4, 6).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          <h2 className="py-4 md:py-6">{section.title2}</h2>
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
              {section.bullets.slice(6).map((b, i) => (
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
          <a
            href={"https://wa.me/38651479000"}
            className="bg-secondary hover:brightness-90 px-3 md:px-6 py-1 md:py-3 text-white flex items-center text-center md:text-nowrap gap-1 md:gap-3 w-fit mx-auto mt-4"
          >
            {section.link?.label}{" "}
            <FaAngleDoubleRight className="md:w-6 md:h-6" />
          </a>
        </div>

        <div className="w-full col-span-1 mt-6 md:mt-0 mx-auto">
          <video
            controls
            autoPlay
            loop
            muted
            className="w-full mx-auto rounded-lg object-cover"
          >
            {" "}
            <source src={"/images/IMG_7801.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
