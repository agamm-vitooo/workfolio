"use client";

import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuroraBackground } from "../UI/Aurora-Background";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function AuroraBackgroundDemo() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/project");
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
      >
        <div className="text-2xl sm:text-4xl md:text-7xl font-bold dark:text-white">
          Workfolio.
        </div>
        <div className="font-extralight text-sm sm:text-lg md:text-2xl dark:text-neutral-200 py-2 md:py-4">
          Uncover the Creative Journey That Shaped This Work.
        </div>
        <button
          onClick={handleExploreClick}
          className="bg-black dark:bg-white rounded-full w-full sm:w-auto text-white dark:text-black px-4 py-2 text-sm sm:text-base"
        >
          Explore Now
        </button>
      </motion.div>

      {/* Social Media Icons */}
      <div className="flex flex-row items-center space-x-4 mt-4 md:mt-0 md:absolute md:right-6 md:top-1/2 md:transform md:-translate-y-1/2 md:flex-col md:space-y-4 md:space-x-0">
        <motion.a
          href="https://github.com/agamm-vitooo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-300"
        >
          <FaGithub size={20} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/agam-vito-7b4982205/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
        >
          <FaLinkedin size={20} />
        </motion.a>
        <motion.a
          href="mailto:agamvito7@gmail.com"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-400"
        >
          <FaEnvelope size={20} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/agamm.i/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-600 dark:text-white hover:text-pink-500 dark:hover:text-pink-400"
        >
          <FaInstagram size={20} />
        </motion.a>
      </div>
    </AuroraBackground>
  );
}
