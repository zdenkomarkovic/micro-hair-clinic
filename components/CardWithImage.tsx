import Image from "@/node_modules/next/image";
import { Messages } from "@/types/messages";
import React from "react";

type Props = {
  data: Messages["cardwithimage"];
};

const CardWithImage = ({ data }: Props) => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-right md:py-20 ">
      <h2 className=" py-6">{data.title}</h2>
      <div className="flex flex-col md:flex-row   items-stretch ">
        <div>
          <video controls autoPlay loop muted className="w-2/3">
            {" "}
            <source src={"/images/herovideo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col gap-2 md:gap-0 py-8 md:py-12 md:justify-between text-left">
          {data.text.map((row, i) => {
            return (
              <p key={i} className="flex items-center gap-4 ">
                <span className="text-5xl font-thin font-sans ">
                  {"0" + (i + 1)}
                </span>

                {row}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
