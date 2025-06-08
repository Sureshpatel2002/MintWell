'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useTheme, useMediaQuery } from '@mui/material';
import WhyChooseUsAnimated from './WhyChooseUsAnimated';

const MotionBox = motion.div;

// Custom animated components for each icon
const AnimatedFactory = () => {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/factory.gif"
        alt="Factory"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
};

const AnimatedTruck = () => {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/truck.gif"
        alt="Truck"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
};

const AnimatedSupport = () => {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/support.gif"
        alt="Support"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
};

const AnimatedCheck = () => {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/check.gif"
        alt="Check"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
};

const AnimatedBusiness = () => {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/business-plan.gif"
        alt="Business"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
};

export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [30, 0, 0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);

  // Subtle scroll-based animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;
      
      if (Math.abs(currentScrollY - lastScrollY.current) > scrollThreshold) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down - subtle move up
          controls.start({
            y: -20,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          });
        } else {
          // Scrolling up - return to position
          controls.start({
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          });
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const containerVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Subtle hover animation for images
  const imageHoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, 10, 0],
            y: [0, 5, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, -10, 0],
            y: [0, -5, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Main About Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20"
          style={{ opacity, y, scale }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side - Image Grid */}
          <motion.div
            className="relative h-[300px] sm:h-[400px] md:h-[500px] order-2 md:order-1"
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              scale: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.5
              }
            }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-full">
              <motion.div 
                className="relative h-[250px] sm:h-[350px] md:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg -mt-4 sm:-mt-6 md:-mt-8"
                whileHover={{ scale: 1.03 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.5
                }}
              >
                <div className="w-full h-full">
                  <Image
                    src="/about-us1.png"
                    alt="About MintWell"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </motion.div>
              <motion.div 
                className="relative h-[250px] sm:h-[350px] md:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mt-4 sm:mt-6 md:mt-8"
                whileHover={{ scale: 1.03 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.5
                }}
              >
                <div className="w-full h-full">
                  <Image
                    src="/about-us2.png"
                    alt="About MintWell"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 md:space-y-10 h-full flex items-start -mt-4 sm:-mt-8 md:-mt-16 order-1 md:order-2"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              scale: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.5
              }
            }}
          >
            <div className="w-full">
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 sm:mb-6 md:mb-8 text-center md:text-left"
              >
                About Us
              </motion.h3>
              <motion.p
                className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 text-center md:text-left"
              >
                Mintwell Autotech Private Limited is a Company established with objective to cater the need of international Automobile Spare Parts market. Our leadership has the experience of more than 20 years in the industry. We deliver comprehensive range of Automobile Spare Parts for both Two Wheeler & Four Wheeler Auto brands, namely- Bajaj, TVS, Hero & Honda in 2W and Hyundai-Kai, Toyota, Mahindra & Maruti in 4W. We are also aligned with major OEM vendors namely Verroc Engineering, Uno Minda & Bosch. We are associated with some of the well-functioning distributors of the companies to fulfil order quickly.
              </motion.p>

              {/* Brand Categories */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div>
                  <motion.h4 
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 text-center md:text-left"
                  >
                    TWO WHEELERS
                  </motion.h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-5">
                    {[
                      { name: 'BAJAJ', logo: '/bajaj-logo.png' },
                      { name: 'TVS', logo: '/tvs-logo.png' },
                      { name: 'HERO', logo: '/hero-logo.png' },
                      { name: 'HONDA', logo: '/honda-logo.png' }
                    ].map((brand, index) => (
                      <motion.div
                        key={brand.name}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ 
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: "easeOut",
                          scale: {
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            mass: 0.5
                          }
                        }}
                        className="group bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-3"
                        whileHover={{ 
                          scale: 1.03,
                          y: -2,
                          transition: { 
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                            mass: 0.5
                          }
                        }}
                      >
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            fill
                            className="object-contain transition-transform duration-200 group-hover:scale-105"
                          />
                        </div>
                        <span className="text-sm sm:text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {brand.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            scale: {
              type: "spring",
              stiffness: 100,
              damping: 30,
              mass: 0.5
            }
          }}
        >
          <WhyChooseUsAnimated className="mt-16 sm:mt-20 md:mt-24" />
        </motion.div>

        {/* Contact Section */}
        {/* ... rest of the existing code ... */}
      </div>
    </section>
  );
} 