import { SectionCommon } from "@/types/index";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  section: SectionCommon;
};

export function Section2Alopecija({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <div className="container px-2 md:px-4 mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-20 ">
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
            <ul className="list-disc list-inside mb-4">
              {section.bullets.slice(4, 6).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          <h2 className="text-2xl font-bold mb-4">{section.title2}</h2>
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
            href={"https://wa.me/381645400100"}
            className="bg-primary px-3 md:px-6 py-1 md:py-3 text-white flex items-center text-nowrap gap-1 md:gap-3 w-fit"
          >
            {section.link?.label}{" "}
            <FaAngleDoubleRight className="md:w-6 md:h-6" />
          </a>
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
    </section>
  );
}
