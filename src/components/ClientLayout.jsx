'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import LoadingSpinner from './LoadingSpinner';
import { motion } from 'framer-motion';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reset loading state when pathname changes
    setIsLoading(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar isLoading={isLoading} setIsLoading={setIsLoading} />
      <div className="h-[176px]"></div> {/* Spacer for fixed header */}
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
              <LoadingSpinner />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      {!isLoading && <Footer />}
    </div>
  );
} 