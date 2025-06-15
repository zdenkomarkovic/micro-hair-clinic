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
      {section.image && (
        <img
          src={section.image.src}
          alt={section.image.alt}
          className="rounded shadow mb-4"
        />
      )}
      {section.link && (
        <a href={section.link.href} className="text-blue-600 underline">
          {section.link.label}
        </a>
      )}
    </section>
  );
}
