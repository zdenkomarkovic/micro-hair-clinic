"use client";
import { CardHeader, CardContent, Card, CardFooter } from "./ui/card";
import { motion } from "framer-motion";
import { Messages } from "@/types/messages";
import MotionComponent1 from "./MotionComponent1";

type Props = {
  data: Messages["cards2"];
  text: Messages["cards2text"];
};

const Cards2 = ({ data, text }: Props) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-16 border-b-2 space-y-10 md:space-y-20">
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
          {data.map((item, i) => {
            return <OneCard key={i} item={item} />;
          })}
        </div>
        <h3>{text.title}</h3>
        <p>{text.text}</p>

        <p>
          <span className="font-bold">{text.span}</span> {text.text2}
        </p>
        <h4>{text.subtitle}</h4>
        <ul>
          {text.list1.map((line, i) => {
            return <li key={i}>{line} </li>;
          })}
        </ul>
        <ul className="pl-20">
          {text.list2.map((line, i) => {
            return <li key={i}>{line} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cards2;

type Card2Item = Messages["cards2"][number];

const OneCard = ({ item }: { item: Card2Item }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardHeader className="">{item.title}</CardHeader>
        <CardContent className="">
          <p className="">{item.text}</p>
        </CardContent>

        <CardFooter>
          <motion.p
            whileInView={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className="text-right ml-auto bg-gray-100 px-3 py-1 cursor-pointer"
          >
            {item.link}
          </motion.p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
