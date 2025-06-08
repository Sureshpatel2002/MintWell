'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useTheme, useMediaQuery } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactoryIcon from '@mui/icons-material/Factory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhyChooseUsAnimated from './WhyChooseUsAnimated';

// Memoize companies data to prevent unnecessary re-renders
const companies = [
  {
    id: 1,
    name: 'TVS',
    image: '/tvs-logo.png',
    description: 'Premium quality spare parts for TVS motorcycles and scooters',
    popularParts: ['Engine Parts', 'Electrical Components', 'Body Parts'],
    gradient: 'from-blue-500 to-cyan-500',
    stats: {
      parts: '1000+',
      quality: '98%',
      delivery: '24h'
    }
  },
  {
    id: 2,
    name: 'BAJAJ',
    image: '/bajaj-logo.png',
    description: 'Genuine spare parts for Bajaj motorcycles and three-wheelers',
    popularParts: ['Engine Kits', 'Clutch Parts', 'Brake Components'],
    gradient: 'from-red-500 to-orange-500',
    stats: {
      parts: '1200+',
      quality: '99%',
      delivery: '48h'
    }
  },
  {
    id: 3,
    name: 'HERO',
    image: '/hero-logo.png',
    description: 'Original spare parts for Hero motorcycles and scooters',
    popularParts: ['Engine Components', 'Suspension Parts', 'Electrical Systems'],
    gradient: 'from-green-500 to-emerald-500',
    stats: {
      parts: '1500+',
      quality: '97%',
      delivery: '36h'
    }
  },
  {
    id: 4,
    name: 'HONDA',
    image: '/honda-logo.png',
    description: 'High-quality spare parts for Honda motorcycles and scooters',
    popularParts: ['Engine Parts', 'Transmission Components', 'Body Panels'],
    gradient: 'from-purple-500 to-pink-500',
    stats: {
      parts: '2000+',
      quality: '99%',
      delivery: '24h'
    }
  }
];

// Memoize animation variants
const getCardAnimation = (index, isMobile, prefersReducedMotion) => {
  return {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    whileInView: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
        delay: index * 0.1
      }
    },
    viewport: { once: true, margin: "-20px" },
    whileHover: {
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
};

// Memoize grid animation
const gridAnimation = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  },
  viewport: { once: true, margin: "-50px" }
};

export default function TwoWheelerSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const prefersReducedMotion = useReducedMotion();
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const sectionRef = useRef(null);
  
  // Optimize scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Memoize scroll transforms with smoother spring
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);
  const springY = useSpring(y, { 
    stiffness: prefersReducedMotion ? 0 : 30,
    damping: prefersReducedMotion ? 0 : 15,
    mass: 0.5
  });

  // Memoize text rotation
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = useMemo(() => [
    "Premium Two Wheeler Parts",
    "Experience excellence with our curated collection of genuine spare parts for TVS, Bajaj, Hero, and Honda vehicles"
  ], []);

  // Optimize text rotation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 4000); // Increased interval

    return () => clearInterval(interval);
  }, [texts.length]);

  // Memoize card animations
  const cardAnimations = useMemo(() => 
    companies.map((_, index) => getCardAnimation(index, isMobile, prefersReducedMotion)),
    [isMobile, prefersReducedMotion]
  );

  return (
    <section 
      ref={sectionRef} 
      className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Optimized Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.05]),
          willChange: 'opacity'
        }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-2xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-2xl" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Hero Section with smoother animations */}
        <div className="text-center mb-12 sm:mb-16 relative h-32 sm:h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5,
                duration: 0.5
              }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ willChange: 'transform' }}
              >
                {texts[currentTextIndex]}
              </motion.h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Redesigned Companies Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={gridAnimation}
          initial="initial"
          whileInView="whileInView"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              variants={cardAnimations[index]}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer 
                transition-all duration-300 group ${selectedCompany.id === company.id 
                  ? 'ring-2 ring-blue-600 shadow-xl' 
                  : 'hover:shadow-xl hover:ring-1 hover:ring-blue-400'
                }`}
              onClick={() => setSelectedCompany(company)}
              style={{ 
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
            >
              {/* Card Background Gradient */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-5 
                  transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
              />

              {/* Logo Section */}
              <div className="relative h-24 sm:h-28 bg-gradient-to-b from-gray-50 to-white">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-contain p-4"
                  />
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-4 bg-white">
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {company.description}
                </p>
                
                {/* Parts Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {company.popularParts.slice(0, 2).map((part, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium
                        group-hover:bg-blue-100 transition-colors"
                    >
                      {part}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">
                      {company.stats.parts}+
                    </span>
                    <span className="text-xs text-gray-500">Parts</span>
                  </div>
                  <motion.div
                    className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 2 }}
                  >
                    <ArrowForwardIcon className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
} 