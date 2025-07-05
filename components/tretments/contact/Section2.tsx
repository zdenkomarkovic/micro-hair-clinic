import { SectionCommon } from "@/types/index";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

type Props = {
  section: SectionCommon;
};

export function Section2({ section }: Props) {
  return (
    <section id={section.id} className="">
      <div className="mx-auto flex flex-col text-center ">
        <div className="space-y-3 md:space-y-2 text-lg md:text-xl mx-auto py-6">
          <a
            href="viber://chat?number=%2B381645400100"
            className="py-[7px] flex border-b-[1px] border-gray-800"
          >
            <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
              <FaViber className="text-[27px]  p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
              +38164 5400 100
            </button>
          </a>
          <a
            href="https://wa.me/381645400100"
            className="py-[7px] flex border-b-[1px] border-gray-800"
          >
            <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
              <FaWhatsappSquare className="text-[30px] rounded-2xl text-green-700 " />{" "}
              +38164 5400 100
            </button>
          </a>
          <a
            href="https://www.instagram.com/microhairclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-[7px] flex border-b-[1px] border-gray-800"
          >
            <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
              <FaInstagram className="text-[30px]" /> Instagram DM:
            </button>
          </a>
          <a
            href="mailto:info@microhairclinic.rs"
            className="py-[7px] flex border-b-[1px] border-gray-800"
          >
            <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
              Email: info@microhairclinic.rs
            </button>
          </a>
        </div>
        <div className="text-left w-fit mx-auto">
          {Array.isArray(section.text) && (
            <div className="mb-4 space-y-2">
              {section.text.slice(0, 1).map((p, i) => (
                <p key={i} className="font-bold">
                  {p}
                </p>
              ))}
            </div>
          )}

          {section.bullets && (
            <ul className="list-disc list-inside mb-4">
              {section.bullets.slice(0, 3).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
        {Array.isArray(section.text) && (
          <div className="mb-4 space-y-2">
            {section.text.slice(1, 3).map((p, i) => (
              <p key={i} className="font-bold">
                {p}
              </p>
            ))}
          </div>
        )}
        <div className="text-left w-fit mx-auto">
          {section.bullets && (
            <ul className="list-disc list-inside mb-4">
              {section.bullets.slice(3).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
