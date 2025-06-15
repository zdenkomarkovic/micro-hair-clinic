"use client";
import { CardHeader, CardContent, Card, CardFooter } from "./ui/card";
import { motion } from "framer-motion";
import { Messages } from "@/types/messages";
import ImageCarusel from "./Imagecarusel";
import { FaSearch } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

const ikonice = [FaSearch, FaArrowsLeftRight, GiConfirmed]; // redosled odgovara tekstovima
type Props = {
  data: Messages["cards2"];
  text: Messages["cards2text"];
};

const Cards2 = ({ data, text }: Props) => {
  return (
    <div className=" overflow-hidden">
      <div className="container px-5 mx-auto py-10 md:py-16 border-b-2 space-y-10 md:space-y-20">
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
          {data.map((item, i) => {
            const Icon = ikonice[i % ikonice.length];
            return <OneCard key={i} item={item} icon={Icon} />;
          })}
        </div>
        <div>
          <h3>{text.title}</h3>
          <p>{text.text}</p>

          <p>
            <span className="font-bold">{text.span}</span> {text.text2}
          </p>
          <div className="flex gap-3">
            <p>{text.subtitle}</p>
            <ul>
              {text.list1.map((line, i) => {
                return <li key={i}>{line} </li>;
              })}
            </ul>
          </div>
          <ul className="flex md:px-20 text-2xl justify-around underline text-primary">
            {text.list2.map((line, i) => {
              return <li key={i}>{line} </li>;
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-3xl">{text.subtitle2}</h3>
          <ImageCarusel />
        </div>
      </div>
    </div>
  );
};

export default Cards2;

type Card2Item = Messages["cards2"][number];

const OneCard = ({
  item,
  icon: Icon,
}: {
  item: Card2Item;
  icon: React.ElementType;
}) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.5 }}
      className="transition-shadow duration-300 rounded-lg hover:shadow-lg"
    >
      <Card className="h-full">
        <CardHeader className="flex flex-col items-center ">
          <Icon className="w-8 h-8 text-primary" />
          <h2>{item.title}</h2>
        </CardHeader>
        <CardContent className="">
          <p className="">{item.text}</p>
        </CardContent>

        <CardFooter>
          <motion.button
            whileInView={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.09,
            }}
            whileTap={{ scale: 0.9 }}
            className="text-right flex items-center gap-2 ml-auto text-primary bg-gray-100 px-3 py-1 cursor-pointer rounded-md"
          >
            {item.link} <FaAngleDoubleRight />
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
