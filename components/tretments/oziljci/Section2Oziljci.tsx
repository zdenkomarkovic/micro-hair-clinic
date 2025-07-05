import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
  direction: string;
};

export function Section2Oziljci({ section, direction }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div
        className={`${direction} container px-2 md:px-4 mx-auto grid  md:grid-cols-6 items-center md:gap-20 `}
      >
        <div className="mx-auto flex flex-col md:col-span-4 text-center">
          <h2 className="mb-4">{section.title}</h2>
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
              {section.bullets.slice(0, 1).map((b, i) => (
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
            <ul className="list-disc list-inside mb-4">
              {section.bullets.slice(1, 2).map((b, i) => (
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
            <ul className="list-disc list-inside mb-4">
              {section.bullets.slice(2).map((b, i) => (
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
        <div className="md:col-span-2 aspect-[3/4]  ">
          {section.image && (
            <div className=" aspect-[3/4] rounded-lg overflow-hidden">
              <video controls autoPlay loop muted className=" w-full">
                {" "}
                <source src={section.image.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
