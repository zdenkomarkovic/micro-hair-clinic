// components/BulletSection.tsx
type Props = {
  data: {
    id: string;
    title: string;
    bullets?: string[];
    text?: string[];
    link?: { label: string; href: string };
    image?: { src: string; alt: string };
  };
};

export default function BulletSection({ data }: Props) {
  return (
    <section id={data.id} className="py-6">
      <h2 className="text-2xl mb-2">{data.title}</h2>
      {data.text?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {data.bullets && (
        <ul className="list-disc pl-5">
          {data.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {data.link && (
        <p>
          <a href={data.link.href} className="text-blue-600 underline">
            {data.link.label}
          </a>
        </p>
      )}
      {data.image && (
        <img src={data.image.src} alt={data.image.alt} className="mt-4" />
      )}
    </section>
  );
}
