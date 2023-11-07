"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left justify-evenly md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fbab0a]/80 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 text-center snap-center md:p-44"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
                alt=""
                width={200}
                height={200}
                className="mx-auto"
              />
            </motion.div>

            <div className="max-w-6xl px-0 space-y-10 md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {project}
                </span>{" "}
                Netflix Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                modi accusamus illum velit quia eligendi provident officia fugit
                repellendus. Quaerat quibusdam voluptate possimus earum expedita
                totam aliquam pariatur consectetur eos.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}
