import { motion } from "framer-motion";
import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-52 w-52 mt-80 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[31.25rem] w-[31.25rem] mt-80" />
      <div className="absolute border border-[#F7AB0A] rounded-full h-[31.25rem] w-[40.625rem] mt-80 opacity-20 animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;
