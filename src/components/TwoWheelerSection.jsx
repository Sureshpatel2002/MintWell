'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useTheme, useMediaQuery } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactoryIcon from '@mui/icons-material/Factory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

export default function TwoWheelerSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const prefersReducedMotion = useReducedMotion();
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const springY = useSpring(y, { 
    stiffness: prefersReducedMotion ? 0 : 100, 
    damping: prefersReducedMotion ? 0 : 30 
  });

  // Add new animation variants for the rotating text
  const rotatingTextVariants = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  // Add state for text rotation
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Premium Two Wheeler Parts",
    "Experience excellence with our curated collection of genuine spare parts for TVS, Bajaj, Hero, and Honda vehicles"
  ];

  // Add useEffect for text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getCardAnimation = (index) => {
    // First two cards come from left, last two from right
    const isLeftSide = index < 2;
    
    return {
      initial: { 
        opacity: 0, 
        x: isLeftSide ? -200 : 200, // Move from left or right
        y: 0,
        scale: 0.8,
        rotate: isLeftSide ? -5 : 5, // Slight rotation based on side
        filter: "blur(8px)"
      },
      animate: { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 15,
          mass: 1,
          delay: index * 0.3, // Increased delay between cards
          duration: 0.8
        }
      },
      whileHover: {
        scale: isMobile ? 1.02 : 1.05,
        rotate: 0,
        transition: { 
          type: "spring", 
          stiffness: prefersReducedMotion ? 0 : 400, 
          damping: prefersReducedMotion ? 0 : 10 
        }
      },
      exit: {
        opacity: 0,
        scale: 0.5,
        x: isLeftSide ? -100 : 100, // Exit to the same side they came from
        transition: {
          duration: 0.3
        }
      }
    };
  };

  // Grid animation with staggered reveal
  const gridAnimation = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased stagger time
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Optimized Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 1], [0.2, 0.1]),
          willChange: 'opacity'
        }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Hero Section with rotating text */}
        <div className="text-center mb-12 sm:mb-16 relative h-32 sm:h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              variants={rotatingTextVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {texts[currentTextIndex]}
              </motion.h2>
              {currentTextIndex === 0 && (
                <motion.p 
                  className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Experience excellence with our curated collection of genuine spare parts for TVS, Bajaj, Hero, and Honda vehicles
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Companies Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={gridAnimation}
          initial="initial"
          animate="animate"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              variants={getCardAnimation(index)}
              className={`relative bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden cursor-pointer 
                transition-all duration-300 group ${selectedCompany.id === company.id 
                  ? 'ring-2 ring-blue-600 shadow-xl' 
                  : 'hover:shadow-2xl hover:ring-1 hover:ring-blue-400'
                }`}
              onClick={() => setSelectedCompany(company)}
              style={{ willChange: 'transform' }}
              layout
            >
              {/* Card Background Gradient */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-10 
                  transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Logo Section with enhanced animation */}
              <motion.div 
                className="relative h-32 sm:h-40 w-full bg-white group-hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                layout
              >
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      className="object-contain p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      priority={company.id === 1}
                      loading={company.id === 1 ? "eager" : "lazy"}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section with enhanced animations */}
              <motion.div 
                className="p-4 sm:p-6 bg-white relative"
                layout
              >
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 
                    transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  layout
                >
                  {company.name}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 mb-3"
                  layout
                >
                  {company.description}
                </motion.p>
                
                {/* Stats Section with enhanced animations */}
                <motion.div 
                  className="grid grid-cols-3 gap-2 mb-3"
                  layout
                >
                  {Object.entries(company.stats).map(([key, value], statIndex) => (
                    <motion.div 
                      key={key} 
                      className="text-center p-2 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + (statIndex * 0.1) }}
                      layout
                    >
                      <div className="text-xs text-gray-500 uppercase">{key}</div>
                      <div className="text-sm font-semibold text-blue-600">{value}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Parts Tags with enhanced animations */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  layout
                >
                  {company.popularParts.map((part, partIndex) => (
                    <motion.span 
                      key={partIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: 0.9 + (partIndex * 0.1),
                        duration: prefersReducedMotion ? 0 : 0.3
                      }}
                      className="text-xs sm:text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded-full
                        group-hover:bg-blue-100 transition-colors duration-300"
                      layout
                    >
                      {part}
                    </motion.span>
                  ))}
                </motion.div>

                {/* View More Button with enhanced animation */}
                <motion.div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: prefersReducedMotion ? 0 : 5 }}
                  layout
                >
                  <ArrowForwardIcon className="text-blue-600" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          style={{ 
            y: springY, 
            opacity, 
            scale,
            willChange: 'transform, opacity'
          }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-50" />
          </div>

          <div className="relative">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
              Why Choose MintWell?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
              We specialize in providing high-quality spare parts for TVS, Bajaj, Hero, and Honda vehicles.
              All parts are inspected for quality and durability, with export-grade packaging available.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: <CheckCircleOutlineIcon className="text-3xl sm:text-4xl text-blue-600" />,
                  title: "Quality Assured",
                  description: "Rigorous quality checks on every part"
                },
                {
                  icon: <FactoryIcon className="text-3xl sm:text-4xl text-blue-600" />,
                  title: "OEM Standards",
                  description: "Meeting original equipment standards"
                },
                {
                  icon: <LocalShippingIcon className="text-3xl sm:text-4xl text-blue-600" />,
                  title: "Export Ready",
                  description: "International shipping available"
                },
                {
                  icon: <SupportAgentIcon className="text-3xl sm:text-4xl text-blue-600" />,
                  title: "24/7 Support",
                  description: "Round the clock customer service"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: prefersReducedMotion ? "tween" : "spring"
                  }}
                  whileHover={{
                    scale: prefersReducedMotion ? 1 : 1.05,
                    transition: {
                      type: "spring",
                      stiffness: prefersReducedMotion ? 0 : 400,
                      damping: prefersReducedMotion ? 0 : 10
                    }
                  }}
                  className="text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300
                    border border-transparent hover:border-blue-100"
                  style={{ willChange: 'transform' }}
                >
                  <motion.div
                    className="mb-3 inline-block"
                    whileHover={{
                      rotate: prefersReducedMotion ? 0 : 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 