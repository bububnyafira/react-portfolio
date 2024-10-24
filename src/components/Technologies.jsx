import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
        >
          Technologies
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <div className="group rounded-2xl border-4 border-neutral-800 p-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
          <RiReactjsLine className="text-7xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
        </div>
        <div className="group rounded-2xl border-4 border-neutral-800 p-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
          <TbBrandNextjs className="text-7xl group-hover:text-neutral-500 transition-colors duration-300" />
        </div>
        <div className="group rounded-2xl border-4 border-neutral-800 p-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
          <SiMongodb className="text-7xl text-green-500 group-hover:text-green-400 transition-colors duration-300" />
        </div>
        <div className="group rounded-2xl border-4 border-neutral-800 p-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
          <FaNodeJs className="text-7xl text-green-500 group-hover:text-green-400 transition-colors duration-300" />
        </div>
        <div className="group rounded-2xl border-4 border-neutral-800 p-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
          <BiLogoPostgresql className="text-7xl text-sky-700 group-hover:text-sky-600 transition-colors duration-300" />
        </div>
        <div className="group rounded-2xl border-4 border-neutral-800 p-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
          <SiExpress className="text-7xl group-hover:text-neutral-500 transition-colors duration-300" />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
