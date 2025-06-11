import Link from "@/node_modules/next/link";
import { Messages } from "@/types/messages";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

type Props = {
  data: Messages["questions"];
};

const Questions = ({ data }: Props) => {
  return (
    <div className="container px-2 md:px-4 mx-auto">
      <h2>{data.title}</h2>
      <div>
        {data.categories.map((category, i) => {
          return (
            <CardBig key={i} data={category} i={i} />
            // <div>
            //   <h3>{category.title}</h3>
            //   {category.answers.map((answer, i) => {
            //     return <Card key={i} data={answer} i={i} />;
            //   })}
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;

type CardBigProps = {
  data: Messages["questions"]["categories"][number];
  i: number;
};

const CardBig = ({ data, i }: CardBigProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`${i + 1}`}>
        <AccordionTrigger className="">
          <h4>{data.title}</h4>
          <Link href={data.link} className="ml-auto mr-6 md:mr-52">
            {data.cta}
          </Link>
        </AccordionTrigger>

        <AccordionContent>
          {data.answers.map((answer, i) => {
            return <Card key={i} data={answer} i={i} />;
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

type CardProps = {
  data: Messages["questions"]["categories"][number]["answers"][number];
  i: number;
};
const Card = ({ data, i }: CardProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`${i + 1}`}>
        <AccordionTrigger>{data.question}</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-3">
            <p>{data.text}</p>

            <div>
              {data.list.map((line, i) => {
                return <p key={i}>{line}</p>;
              })}
            </div>
          </div>

          <p>{data.text2}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
