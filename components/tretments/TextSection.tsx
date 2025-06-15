import { TextSection as TextSectionProps } from "@/types/index";

export default function TextSection({ data }: { data: TextSectionProps }) {
  return (
    <section className="px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {data.content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {data.note && <p className="mt-4 italic">{data.note}</p>}
      {data.image && (
        <img
          src={data.image.src}
          alt={data.image.alt}
          className="mt-6 max-w-md mx-auto"
        />
      )}
    </section>
  );
}
