import { Messages } from "@/types/messages";
import React from "react";

type Props = {
  data: Messages["cardwithimage"];
};

const CardWithImage = ({ data }: Props) => {
  return (
    <div className="container px-2 md:px-12 mx-auto">
      <div className=" text-right py-6 md:py-12">
        <div className="flex flex-col md:flex-row gap-20 items-stretch ">
          <div className="md:w-1/4  aspect-[3/4]  overflow-hidden rounded-lg">
            <video controls autoPlay loop muted className="">
              {" "}
              <source src={"/images/herovideo.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col gap-2 md:gap-0  md:justify-between font-bold text-left">
            <h2 className=" py-6">{data.title}</h2>
            {data.text.map((row, i) => {
              return (
                <p key={i} className="flex items-center gap-4 ">
                  <span className="text-5xl font-medium font-mono ">
                    {"0" + (i + 1)}
                  </span>

                  {row}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-2/4 border-b mx-auto"></div>
      {/* <div className="w-1/4 border-b ml-auto"></div> */}
    </div>
  );
};

export default CardWithImage;
