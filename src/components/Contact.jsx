import ContactForm from "../constants/ContactForm";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }} 
          className="my-10 text-center text-4xl">
      Get in Touch
      </motion.h2>
      <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }} 
          className="flex justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/a-vhandy-3a39bb216/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition duration-300 ease-in-out hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/bububnyafira" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition duration-300 ease-in-out hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/ba.baan/?next=%2F" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition duration-300 ease-in-out hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default Contact;
