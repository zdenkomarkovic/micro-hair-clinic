type Props = {
  data: {
    id: string;
    title: string;
    table: string[][];
  };
};

export default function TableSection({ data }: Props) {
  const [headerRow, ...bodyRows] = data.table;

  return (
    <section id={data.id} className="py-6">
      <h2 className="text-2xl mb-4">{data.title}</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            {headerRow.map((cell, j) => (
              <th key={j} className="p-2 border bg-gray-100 text-left">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, i) => (
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
