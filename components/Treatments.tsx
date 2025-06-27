"use client";
import Link from "@/node_modules/next/link";
import { Messages } from "@/types/messages";
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "@/node_modules/next/navigation";
import Image from "@/node_modules/next/image";

type Props = {
  data: Messages["datatreatments"];
};

const Treatments = ({ data }: Props) => {
  const params = useParams();
  const locale = params?.locale ?? "en";
  return (
    <div className="container px-2 md:px-32 py-6 md:py-10  mx-auto space-y-10 border-b">
      <h2>{data.title}</h2>
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {data.tretmans.map((tretman) => {
          return (
            <Link
              key={tretman.slug}
              href={`/${locale}/${tretman.slug}`}
              className="block h-full"
            >
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full border rounded-xl  overflow-hidden bg-gray-50"
              >
                <h3 className="transition-transform duration-300 hover:scale-105 h-1/5  p-6">
                  {tretman.title}
                </h3>{" "}
                <div className=" overflow-hidden">
                  <Image
                    src={tretman.img}
                    width={500}
                    height={300}
                    alt="smp"
                    className="w-full  aspect-[16/9] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Treatments;
