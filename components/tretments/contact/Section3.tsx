import ContactForm from "@/components/ContactForm";
import { SectionCommon } from "@/types/index";
import React from "react";

type Props = {
  section: SectionCommon;
};

export function Section3({ section }: Props) {
  return (
    <section id={section.id} className="">
      <p className="mb-6 font-bold mx-auto text-center text-2xl">
        {section.title}
      </p>

      <ContactForm />
    </section>
  );
}
