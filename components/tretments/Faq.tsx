import React from "react";

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Česta pitanja</h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border-b pb-4">
            <h3 className="font-semibold">{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
