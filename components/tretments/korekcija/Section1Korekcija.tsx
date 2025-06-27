import { SectionCommon } from "@/types/index";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  section: SectionCommon;
};

export function Section1Korekcija({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div className="container px-2 md:px-4 mx-auto flex flex-col md:flex-row items-center md:gap-20 ">
        <div className="mx-auto flex flex-col">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
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
              {section.bullets.slice(0, 5).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          <h2 className="text-2xl font-bold mb-4">{section.title2}</h2>
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
            <ul className="list-disc list-inside mb-4">
              {section.bullets.slice(5).map((b, i) => (
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
        </div>
        <div>
          {section.image && (
            <div>
              <video controls autoPlay loop muted className="">
                {" "}
                <source src={section.image.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            // <div className="text-center">
            //   <Image
            //     src={section.image.src}
            //     width={500}
            //     height={500}
            //     alt={section.image.alt}
            //     className="rounded w-full shadow mb-4"
            //   />
            // </div>
          )}
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">{section.title3}</h2>
      {Array.isArray(section.text) && (
        <div className="mb-4 space-y-2 text-center">
          {section.text.slice(3).map((p, i) => (
            <p key={i} className="font-bold">
              {p}
            </p>
          ))}
        </div>
      )}
      <a
        href={section.link?.href}
        className="bg-primary px-6 py-3 text-white flex items-center gap-3 w-fit mx-auto"
      >
        {section.link?.label} <FaAngleDoubleRight className="w-6 h-6" />
      </a>
    </section>
  );
}
