"use client";
import { CardHeader, CardContent, Card, CardFooter } from "./ui/card";
import { motion } from "framer-motion";
import { Messages } from "@/types/messages";
import ImageCarusel from "./Imagecarusel";
import { FaSearch } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "@/node_modules/next/link";

const ikonice = [FaSearch, FaArrowsLeftRight, GiConfirmed]; // redosled odgovara tekstovima
type Props = {
  data: Messages["cards2"];
  text: Messages["cards2text"];
};

const images: string[] = [
  "/images/preiposle.JPG",
  "/images/preiposle2.JPG",
  "/images/preiposle3.JPG",
  "/images/preiposle4.JPG",
  "/images/preiposle1.JPG",
  "/images/preiposle9.JPG",
  "/images/preiposle5.JPG",
  "/images/preiposle6.JPG",
  "/images/preiposle7.jpg",
  "/images/preiposle8.jpg",
];

const Cards2 = ({ data, text }: Props) => {
  return (
    <div className=" overflow-hidden">
      <div className="container md:px-5 mx-auto pt-10 pb-5 md:pt-16 border-b-2 space-y-10 md:space-y-10">
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch px-2 md:px-0">
          {data.map((item, i) => {
            const Icon = ikonice[i % ikonice.length];
            return <OneCard key={i} item={item} icon={Icon} />;
          })}
        </div>
        <div className="space-y-6 px-2 md:px-0">
          <h2>{text.title}</h2>
          <p>{text.text}</p>

          <p>
            <span className="font-bold">{text.span}</span> {text.text2}
          </p>
          <div className="flex gap-4 md:gap-8 items-center justify-start">
            <p className="text-2xl md:text-5xl">{text.subtitle}</p>
            <ul>
              {text.list1.map((line, i) => {
                return <li key={i}>{line} </li>;
              })}
            </ul>
          </div>
          <ul className="flex flex-col text-center md:flex-row md:px-20 md:text-2xl justify-around underline text-primary">
            {text.list2.map((line, i) => {
              return <li key={i}>{line} </li>;
            })}
          </ul>
        </div>
        <div>
          <ImageCarusel images={images} py={""} />
          <h3 className="md:text-3xl pt-6">{text.subtitle2}</h3>
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
      <Card className="h-full bg-background">
        <CardHeader className="flex flex-col items-center ">
          <Icon className="w-6 md:w-8 h-6 md:h-8 text-secondary" />
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
            className="ml-auto"
          >
            <Link
              href={item.link}
              className="flex items-center gap-2 text-white bg-secondary px-3 py-1 cursor-pointer rounded-md"
            >
              {item.button} <FaAngleDoubleRight />
            </Link>
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
