import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Faqs } from "@/types/type";
import React from "react";

type Props = {
  data: Faqs;
};

const Questions = ({ data }: Props) => {
  return (
    <div id="questions" className="container px-4 md:px-52 mx-auto py-10">
      <h2>{data.title}</h2>
      <div>
        {data.list.map((category, i) => {
          return <Card key={i} data={category} i={i} />;
        })}
      </div>
    </div>
  );
};

type CardProps = {
  data: { q: string; a: string; text2?: string }; // ako koristiš text2
  i: number;
};

export default Questions;

const Card = ({ data, i }: CardProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`${i + 1}`}>
        <AccordionTrigger>{data.q}</AccordionTrigger>
        <AccordionContent>
          <div className="flex text-lg gap-3">
            <p>{data.a}</p>
          </div>

          <p>{data.text2}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
