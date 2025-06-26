import Link from "@/node_modules/next/link";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
};

export function Section2({ section }: Props) {
  return (
    <section id={section.id} className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div className="container px-2 md:px-4 mx-auto flex md:gap-20 ">
        <div className="mx-auto">
          {section.bullets && (
            <ul className="list-disc list-inside mb-4">
              {section.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {section.text && (
            <div className="mb-4 space-y-2">
              {section.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {section.link && (
            <a href={section.link.href} className="text-blue-600 underline">
              {section.link.label}
            </a>
          )}
          <ul>
            {section.links?.map((link, i) => {
              return (
                <li key={i} className="underline">
                  <Link href={link.link}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
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
          )}
        </div>
      </div>
    </section>
  );
}
