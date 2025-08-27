import Link from "@/node_modules/next/link";
import { SectionCommon } from "@/types/index";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

type Props = {
  section: SectionCommon;
};

export function Section2({ section }: Props) {
  return (
    <section
      id={section.id}
      className="py-6 md:py-10 px-2 md:px-8 bg-background"
    >
      <h2 className="mb-4 md:mb-12">{section.title}</h2>
      <div className="container px-2 md:px-4 mx-auto grid md:grid-cols-7 md:flex-row gap-4 md:gap-20 ">
        <div className="mx-auto md:col-span-5">
          {section.bullets && (
            <ul className=" mb-4">
              {section.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="pt-[2px] text-primary">
                    <FaCircleChevronRight className="w-6 h-6 text-secondary" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {section.text && (
            <div className="mb-4 space-y-2">
              {(Array.isArray(section.text)
                ? section.text
                : [section.text]
              ).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          <ul>
            {section.links?.map((link, i) => {
              return (
                <li key={i} className="underline decoration-primary">
                  <Link href={link.link}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:col-span-2">
          {section.image && (
            <div>
              <video controls autoPlay loop muted className="rounded-lg">
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
