import React from "react";

export function FinalCta({
  data,
}: {
  data: { text: string; ctas: { label: string; href: string }[] };
}) {
  return (
    <section className="py-10 px-4 text-center bg-black text-white">
      <p className="mb-6 text-lg">{data.text}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {data.ctas.map((cta) => (
          <a
            key={cta.href}
            href={cta.href}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            {cta.label}
          </a>
        ))}
      </div>
    </section>
  );
}
