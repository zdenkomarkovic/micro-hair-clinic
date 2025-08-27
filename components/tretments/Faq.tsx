import Link from "@/node_modules/next/link";
import { FaqType } from "@/types/index";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  faqs: FaqType;
};
export function Faq({ faqs }: Props) {
  return (
    <section className="py-10">
      <div className="bg-primary">
        <div className="container px-2 md:px-4 mx-auto py-6 flex flex-col md:flex-row items-center gap-5 justify-center ">
          <h2 className="text-2xl font-bold text-primary-foreground">
            {faqs.title}
          </h2>
          <Link
            href={"/#questions"}
            className="bg-secondary text-white px-4 md:px-6 py-2 md:py-3 text-nowrap flex gap-3 items-center mx-auto"
          >
            {faqs.button} <FaAngleDoubleRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
