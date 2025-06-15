import React from "react";

export type HeroData = {
  heading: string;
  subtitle: string;
  image: string;
  alt: string;
  ctas: { label: string; href: string }[];
};

type Props = {
  data: HeroData;
};

export function HeroSection({ data }: Props) {
  return (
    <section className="py-10 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">{data.heading}</h1>
      <p className="text-lg mb-6">{data.subtitle}</p>
      <img
        src={data.image}
        alt={data.alt}
        className="mx-auto mb-6 rounded shadow-lg"
      />
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {data.ctas.map((cta) => (
          <a
            key={cta.href}
            href={cta.href}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            {cta.label}
          </a>
        ))}
      </div>
    </section>
  );
}
