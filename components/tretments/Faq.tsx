import Link from "@/node_modules/next/link";
import { FaqType } from "@/types/index";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  faqs: FaqType;
};
export function Faq({ faqs }: Props) {
  return (
    <section className="py-10 px-4">
      <div className="bg-black">
        <div className="container px-2 md:px-4 mx-auto py-6 flex gap-5 justify-center bg-black">
          <h2 className="text-2xl font-bold">{faqs.title}</h2>
          <Link
            href={"/#questions"}
            className="text-white flex gap-3 items-center"
          >
            {faqs.button} <FaAngleDoubleRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
