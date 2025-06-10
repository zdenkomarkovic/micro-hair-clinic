import { Messages } from "@/types/messages";
import React from "react";

type Props = {
  data: Messages["datatreatments"];
};

const Treatments = ({ data }: Props) => {
  return (
    <div className="container px-2 md:px-4 mx-auto">
      <h3>{data.title}</h3>
    </div>
  );
};

export default Treatments;
