import Link from "@/node_modules/next/link";
import { FinalCtaType } from "@/types/index";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  data: FinalCtaType;
};

export function FinalCta({ data }: Props) {
  return (
    <section className="py-4 md:py-10 px-4 text-center bg-black text-white">
      <div className="container px-2 md:px-4 mx-auto ">
        <h2 className="mb-6 text-center md:text-left">{data.title}</h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start text-center md:text-left">
          <p>{data.text}</p>
          <Link
            href={"/contact"}
            className="bg-primary px-4 md:px-6 py-2 md:py-3 text-nowrap uppercase flex gap-3 items-center mx-auto"
          >
            {data.button} <FaAngleDoubleRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
