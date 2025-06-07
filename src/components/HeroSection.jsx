'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
];

export default function HeroSection({ isLoading, setIsLoading }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef(null);

  // Scroll progress for fade effect - Adjusted values
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Create smooth spring animations for scroll effects
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,  // Reduced stiffness
    damping: 30,     // Increased damping
    mass: 1,         // Increased mass
    restDelta: 0.001
  });

  // Transform scroll progress to opacity with adjusted values
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);  // Changed from [0, 0.2] to [0, 0.5]
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.98]);  // Changed from [0, 0.2] to [0, 0.5]
  const y = useTransform(smoothProgress, [0, 0.5], [0, -20]);      // Changed from [0, 0.2] to [0, 0.5]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Add loading effect
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Adjust timing as needed
      return () => clearTimeout(timer);
    }
  }, [isLoading, setIsLoading]);

  const handleDotClick = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
    }),
  };

  return (
    <motion.div 
      ref={sectionRef}
      style={{ 
        opacity,
        scale,
        y,
      }}
      className="relative h-[calc(100vh-80px)] w-full mt-0"
    >
      {/* Carousel Images */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={images[current]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 1,
                duration: 0.8
              },
              opacity: { 
                duration: 0.4
              }
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`Hero Slide ${current + 1}`}
              fill
              className="object-cover transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 mt-0">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              PERFECT COMBINATION OF QUALITY & VARIETY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="text-lg md:text-xl text-white/90 mb-8"
            >
              50 Years of Trusted Quality, Driving Reliability Forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut"
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/catalogues"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 ease-in-out"
              >
                View Catalogues
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-all duration-300 ease-in-out"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ease-in-out focus:outline-none ${
              current === idx
                ? 'bg-white border-white scale-125 shadow-lg'
                : 'bg-white/40 border-white/60'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
} 