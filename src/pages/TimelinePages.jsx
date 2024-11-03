import React from 'react';
import { motion } from 'framer-motion';
import { TimelineDemo } from '../components/organism/Timeline';

const TimelinePages = () => {
  // Define the container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,   // Delay the start of children animations
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  // Define individual item variants for fade, slide, and scale effects
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.5, 1] },
    },
  };

  return (
    <motion.div
      className="min-h-screen p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <TimelineDemo />
      </motion.div>
    </motion.div>
  );
};

export default TimelinePages;
