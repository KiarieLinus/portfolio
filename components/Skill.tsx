import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative flex cursor-pointer group"
    >
      <Image
        src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
        alt=""
        width={0}
        height={0}
        className="object-cover w-12 h-12 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-16 xl:h-16 filter group-hover:grayscale"
      />

      <div className="absolute z-0 w-12 h-12 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-60 group-hover:bg-white xl:w-16 xl:h-16">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
