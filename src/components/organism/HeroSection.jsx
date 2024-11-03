"use client";

import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom"; // Gunakan useNavigate dari react-router-dom
import { AuroraBackground } from "../UI/Aurora-Background";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function AuroraBackgroundDemo() {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleExploreClick = () => {
    navigate("/project"); // Ganti "/your-target-page" dengan rute halaman tujuan
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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Workfolio.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Uncover the Creative Journey That Shaped This Work.
        </div>
        <button
          onClick={handleExploreClick} // Panggil handleExploreClick saat tombol diklik
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
        >
          Explore Now
        </button>
      </motion.div>

      {/* Social Media Icons */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
        <motion.a
          href="https://github.com/agamm-vitooo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-300"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/agam-vito-7b4982205/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          href="mailto:agamvito7@gmail.com" 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-400"
        >
          <FaEnvelope size={24} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/agamm.i/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-600 dark:text-white hover:text-pink-500 dark:hover:text-pink-400"
        >
          <FaInstagram size={24} />
        </motion.a>
      </div>
    </AuroraBackground>
  );
}
