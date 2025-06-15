import React from "react";

export function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Galerija</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} className="rounded shadow" />
        ))}
      </div>
    </section>
  );
}
