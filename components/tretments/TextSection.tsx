import { Section } from "@/types/index";

export default function TextSection({
  data,
}: {
  data: Extract<Section, { text: string[] }>;
}) {
  return (
    <section className="px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {data.text.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {data.image && (
        <img
          src={data.image.src}
          alt={data.image.alt}
          className="mt-6 max-w-md mx-auto"
        />
      )}
      {data.link && (
        <div className="mt-4">
          <a href={data.link.href} className="text-blue-500 underline">
            {data.link.label}
          </a>
        </div>
      )}
    </section>
  );
}
