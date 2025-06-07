'use client';

import PageWrapper from '../../components/PageWrapper';
import TwoWheelerSection from '../../components/TwoWheelerSection';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
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

export default function TwoWheeler() {
  return (
    <PageWrapper>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <TwoWheelerSection />
      </motion.div>
    </PageWrapper>
  );
} 