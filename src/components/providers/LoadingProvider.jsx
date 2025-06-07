'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingContext = createContext({});

const LoadingSpinner = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
    <div className="relative">
      {/* Outer ring */}
      <motion.div
        className="w-20 h-20 border-4 border-blue-600/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner ring */}
      <motion.div
        className="absolute inset-0 w-20 h-20 border-4 border-t-blue-600 border-transparent rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Center dot */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="w-3 h-3 bg-blue-600 rounded-full" />
      </motion.div>
    </div>
  </div>
);

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsPageTransitioning(true);
    setIsLoading(true);

    // Shorter initial load time
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Page transition timing
    const transitionTimer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 800);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(transitionTimer);
    };
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, isPageTransitioning }}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`min-h-screen flex flex-col ${isPageTransitioning ? 'opacity-50 pointer-events-none' : ''}`}
        >
          {/* Only show header during loading */}
          {children}
        </motion.div>
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext); 