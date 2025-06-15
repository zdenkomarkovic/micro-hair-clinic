import React from "react";

export function Reviews({ reviews }: { reviews: { quote: string }[] }) {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Iskustva klijenata</h2>
      <div className="space-y-4">
        {reviews.map((r, i) => (
          <blockquote
            key={i}
            className="italic border-l-4 pl-4 border-gray-400"
          >
            “{r.quote}”
          </blockquote>
        ))}
      </div>
    </section>
  );
}
