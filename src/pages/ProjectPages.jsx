import React from 'react';
import { motion } from 'framer-motion';
import { CoverDemo } from '../components/organism/ProjectTitle';
import ProjectSection from '../components/organism/ProjectSection';

const ProjectPages = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Delay start for child animations
        staggerChildren: 0.2, // Stagger delay for each child element
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.8, 0.5, 1] } },
  };

  return (
    <motion.div
      className="bg-black min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <CoverDemo />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <ProjectSection />
      </motion.div>
    </motion.div>
  );
};

export default ProjectPages;
