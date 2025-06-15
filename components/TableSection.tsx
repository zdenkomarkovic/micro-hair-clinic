// components/TableSection.tsx
type Props = {
  data: {
    id: string;
    title: string;
    table: string[][];
  };
};

export default function TableSection({ data }: Props) {
  return (
    <section id={data.id} className="py-6">
      <h2 className="text-2xl mb-4">{data.title}</h2>
      <table className="w-full border">
        <tbody>
          {data.table.map((row, i) => (
            <tr key={i} className="border-t">
              {row.map((cell, j) => (
                <td key={j} className="p-2 border">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
