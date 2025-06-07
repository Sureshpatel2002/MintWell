'use client';

import { motion } from 'framer-motion';
import { useLoading } from './providers/LoadingProvider';
import LoadingSpinner from './LoadingSpinner';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function PageWrapper({ children }) {
  const { isLoading } = useLoading();

  if (isLoading) {
    return null;
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            className="relative"
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={sectionVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
} 