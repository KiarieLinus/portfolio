"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

export function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="/linuspicture.jpg"
        alt="about image"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[400px]"
      />

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
          debitis sunt iure sequi vitae quo nesciunt aliquid, architecto optio
          placeat harum itaque sapiente cumque provident ut error facilis sint
          officiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus explicabo nisi enim, tenetur eos possimus consequatur ab et
          saepe odio, corporis, adipisci repellendus libero beatae blanditiis
          hic culpa cumque vitae?
        </p>
      </div>
    </motion.div>
  );
}
