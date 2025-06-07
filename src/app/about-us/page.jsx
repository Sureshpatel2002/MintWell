'use client';

import PageWrapper from '../../components/PageWrapper';
import AboutUsSection from '../../components/AboutUsSection';
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

export default function AboutUs() {
  return (
    <PageWrapper>
      <motion.div 
        className="pt-20"
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <AboutUsSection />
      </motion.div>
    </PageWrapper>
  );
} 