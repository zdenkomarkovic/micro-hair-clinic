"use client";
import Link from "@/node_modules/next/link";
import { Messages } from "@/types/messages";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: Messages["datatreatments"];
};

const Treatments = ({ data }: Props) => {
  return (
    <div className="container px-2 md:px-4 py-6 mx-auto space-y-6 border-b">
      <h3>{data.title}</h3>
      <div className="text-center space-y-2">
        {data.tretmans.map((tretman) => {
          return (
            <motion.p
              key={tretman.slug}
              whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={tretman.slug}>{tretman.title} </Link>
            </motion.p>
          );
        })}
      </div>
    </div>
  );
};

export default Treatments;
