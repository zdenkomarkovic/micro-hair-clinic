import { Messages } from "@/types/messages";
import React from "react";

type Props = {
  data: Messages["tretmanFlow"];
};

const TretmanFlow = ({ data }: Props) => {
  return (
    <div className="container px-2 md:px-4 mx-auto">
      <h2>{data.title}</h2>
      <div className="space-y-2">
        {data.text.map((line, i) => {
          return (
            <p>
              <span className="font-bold">{line.bold}</span>
              {line.normal}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TretmanFlow;
