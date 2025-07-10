type Props = {
  data: {
    id: string;
    title: string;
    table?: string[][];
  };
};

export default function TableSection({ data }: Props) {
  if (!data.table || data.table.length === 0) return null;
  const [headerRow, ...bodyRows] = data.table;

  return (
    <section
      id={data.id}
      className="py-3 md:py-6 mx-auto container px-2 md:px-32 text-center"
    >
      <h2 className="mb-4 md:mb-10">{data.title}</h2>
      <table className="w-full border border-gray-300 text-sm md:text-xl">
        <thead>
          <tr>
            {headerRow.map((cell, j) => (
              <th
                key={j}
                className="p-1 md:p-2 border bg-gray-100 text-primary "
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, i) => (
            <tr key={i} className="border-t">
              {row.map((cell, j) => (
                <td key={j} className="p-1 md:p-2 border">
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
