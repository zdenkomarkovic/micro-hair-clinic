import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";

export type BulletSectionData = {
  id: string;
  title: string;
  bullets?: string[];
  text?: string[];
  image?: { src: string; alt: string };
  link?: { label: string; href: string };
};

type Props = {
  section: BulletSectionData;
};

export function BulletSection({ section }: Props) {
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
            <div className="text-center">
              {section.image.title && (
                <h5 className="pb-10 font-bold">{section.image.title}</h5>
              )}
              <Image
                src={section.image.src}
                width={500}
                height={500}
                alt={section.image.alt}
                className="rounded w-full shadow mb-4"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
