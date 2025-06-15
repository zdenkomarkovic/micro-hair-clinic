import Image from "@/node_modules/next/image";
import { Messages } from "@/types/messages";
import React from "react";
import srdjanPhoto from "../public/images/srdjan.JPG";
import { GiTrophyCup } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";

type Props = {
  data: Messages["artist"];
};

const MeetArtist = ({ data }: Props) => {
  return (
    <div className="container px-2 md:px-4 mx-auto py-12 space-y-12">
      <h2>{data.title}</h2>
      <div className="flex flex-row-reverse gap-16">
        <div className="w-1/3">
          <Image
            src={srdjanPhoto}
            width={800}
            height={800}
            alt="srdjan micro hair clinic"
            className="w-full"
          />
        </div>
        <div className=" pl-20 flex flex-col justify-around">
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
