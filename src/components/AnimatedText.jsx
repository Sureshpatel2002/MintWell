'use client';

import { motion } from 'framer-motion';

const AnimatedText = ({ 
  text, 
  className = "", 
  once = true,
  delay = 0,
  duration = 0.3,
  staggerChildren = 0.05
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren,
        delayChildren: delay 
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration
      },
    },
  };

  return (
    <motion.div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <span className="inline-block">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-1.5"
            variants={child}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
};

export default AnimatedText; 