import Image from "@/node_modules/next/image";
import { Messages } from "@/types/messages";
import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";

type Props = {
  data: Messages["artist"];
};

const MeetArtist = ({ data }: Props) => {
  return (
    <div className="container px-2 md:px-12 mx-auto py-6 md:py-12">
      <div className="flex flex-col-reverse md:flex-row-reverse gap-6 md:gap-20">
        <div className="md:w-1/4 ">
          <Image
            src="/images/srdjanartist.JPG"
            width={700}
            height={700}
            alt="srdjan micro hair clinic"
            className="w-full rounded-lg "
          />
        </div>
        <div className="md:w-2/4 flex flex-col justify-between">
          <h2 className="py-3 md:py-0">{data.title}</h2>
          <p>{data.text}</p>

          <p className="flex items-center gap-6 font-bold">
            <span className="text-yellow-500 text-6xl">
              <GiTrophyCup />
            </span>
            {data.award1}
          </p>

          <p className="flex items-center gap-6 font-bold">
            <span className="text-yellow-500 text-6xl">
              <GiTrophyCup />
            </span>
            {data.award2}
          </p>

          <p className="flex items-center gap-6 font-bold">
            {" "}
            <span className="text-green-500 text-6xl">
              <GiWorld />
            </span>
            {data.award3}
          </p>
          <p className="font-mono">{data.text2}</p>
        </div>
      </div>
    </div>
  );
};

export default MeetArtist;
