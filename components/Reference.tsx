"use client";
import { reference } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { motion } from "framer-motion";
import React from "react";

const Reference = ({ refLink, title }: { refLink: string; title: string }) => {
  return (
    <div
      id="reference"
      className="container px-2 md:px-4 mx-auto py-10 border-t"
    >
      <h3 className="text-4xl md:text-6xl text-center pb-10 md:py-10">
        {title}
      </h3>{" "}
      <div className="grid md:grid-cols-3 gap-8">
        {reference.map((item, i) => {
          return (
            <motion.div key={i} className="relative rounded-xl overflow-hidden">
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.image}
                  width={2000}
                  height={2000}
                  alt="manikam web solutions"
                  className="w-full object-cover"
                />
                <p className="absolute bottom-5 left-5 text-xl">{refLink}...</p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Reference;
