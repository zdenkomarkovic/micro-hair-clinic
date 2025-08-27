import Link from "@/node_modules/next/link";
import { FinCta } from "@/types/type";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  data: FinCta;
  className?: string;
};

export function FinalCta({ data, className = "" }: Props) {
  return (
    <section
      className={`py-4 md:py-10 px-4 text-center bg-primary text-white ${className}`}
    >
      <div className="container px-2 md:px-4 mx-auto ">
        <h2 className="mb-6 text-center md:text-left text-primary-foreground">
          {data.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start text-center md:text-left">
          <p>{data.text}</p>
          <Link
            href={"/kontakt"}
            className="bg-secondary text-white hover:brightness-90 px-4 md:px-6 py-2 md:py-3  text-nowrap md:uppercase flex gap-3 items-center mx-auto"
          >
            {data.button} <FaAngleDoubleRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
