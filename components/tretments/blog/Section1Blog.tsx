import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { BlogSection } from "@/types/index";
import React from "react";

type Props = {
  data: BlogSection;
  direction: string;
};

export function Section1Blog({ data, direction }: Props) {
  return (
    <section className="py-6 md:py-10">
      <div className={`${direction} container px-2 md:px-6 mx-auto `}>
        <div className="mx-auto flex flex-col">
          <h2 className="mb-6 md:mb-10">{data.title}</h2>
          {Array.isArray(data.blogs) && (
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {data.blogs.map((blog, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between border rounded-lg shadow-lg pb-3 md:pb-6 text-center bg-background"
                >
                  <p className="p-3 md:p-6 text-primary font-bold text-xl md:text-2xl">
                    {blog.title}
                  </p>
                  <div>
                    <Image
                      src={blog.img}
                      width={500}
                      height={500}
                      alt={blog.text}
                      className="w-full aspect-[16/8] object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    <p className="p-2 md:p-4">{blog.text}</p>
                    <Link
                      href={blog.slug}
                      className="bg-secondary hover:brightness-90 px-4 py-2 rounded-sm text-white"
                    >
                      {blog.button}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
