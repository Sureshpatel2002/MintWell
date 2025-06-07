'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useTheme, useMediaQuery } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactoryIcon from '@mui/icons-material/Factory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const MotionBox = motion.div;

export default function AboutUsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced scroll animations with responsive values
  const leftX = useTransform(scrollYProgress, [0, 0.5], [isMobile ? -30 : isTablet ? -50 : -100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [isMobile ? 30 : isTablet ? 50 : 100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [isMobile ? 30 : isTablet ? 50 : 100, 0]);

  return (
    <section ref={sectionRef} className="py-4 sm:py-8 md:py-14 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements - Responsive sizes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-30"
          animate={{
            x: [0, isMobile ? 50 : isTablet ? 75 : 100, 0],
            y: [0, isMobile ? 25 : isTablet ? 35 : 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-30"
          animate={{
            x: [0, isMobile ? -50 : isTablet ? -75 : -100, 0],
            y: [0, isMobile ? -25 : isTablet ? -35 : -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative">
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center mb-8 sm:mb-12 md:mb-16">
          {/* Left Side - Side by Side Images */}
          <motion.div
            style={{ x: leftX, opacity, scale }}
            className="relative h-[250px] sm:h-[350px] md:h-[500px] order-2 md:order-1"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 h-full">
              <motion.div 
                className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg -mt-2 sm:-mt-4 md:-mt-8 group"
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/about-us1.png"
                  alt="About MintWell"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div 
                className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg mt-2 sm:mt-4 md:mt-8 group"
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/about-us2.png"
                  alt="About MintWell"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            style={{ x: rightX, opacity, scale }}
            className="space-y-4 sm:space-y-6 md:space-y-8 h-full flex items-start -mt-4 sm:-mt-8 md:-mt-16 order-1 md:order-2"
          >
            <div className="w-full">
              <motion.h3
                className="text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3 sm:mb-4 md:mb-8 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                About Us
              </motion.h3>
              <motion.p
                className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-12 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Mintwell Autotech Private Limited is a Company established with objective to cater the need of international Automobile Spare Parts market. Our leadership has the experience of more than 20 years in the industry. We deliver comprehensive range of Automobile Spare Parts for both Two Wheeler & Four Wheeler Auto brands, namely- Bajaj, TVS, Hero & Honda in 2W and Hyundai-Kai, Toyota, Mahindra & Maruti in 4W. We are also aligned with major OEM vendors namely Verroc Engineering, Uno Minda & Bosch. We are associated with some of the well-functioning distributors of the companies to fulfil order quickly.
              </motion.p>

              {/* Brand Categories */}
              <motion.div
                className="space-y-3 sm:space-y-4 md:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 text-center md:text-left">TWO WHEELERS</h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4">
                    {['BAJAJ', 'TVS', 'HERO', 'HONDA'].map((brand, index) => (
                      <motion.div
                        key={brand}
                        className="bg-white p-2 sm:p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ 
                          scale: isMobile ? 1.03 : 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.1)"
                        }}
                        transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      >
                        <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{brand}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3 sm:mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Why Choose MintWell?
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We are committed to providing the best service and products to our customers
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <CheckCircleOutlineIcon className="text-3xl sm:text-4xl text-blue-600" />,
                title: "Diverse Product Line",
                description: "Serving 2W & 4W segments with everything from clutch kits to lighting and electricals"
              },
              {
                icon: <FactoryIcon className="text-3xl sm:text-4xl text-blue-600" />,
                title: "Quality Manufacturing",
                description: "State-of-the-art manufacturing facilities with strict quality control"
              },
              {
                icon: <BusinessCenterIcon className="text-3xl sm:text-4xl text-blue-600" />,
                title: "Business-Centric Pricing",
                description: "Designed for bulk buyers and repeat importers"
              },
              {
                icon: <LocalShippingIcon className="text-3xl sm:text-4xl text-blue-600" />,
                title: "Custom Packing & Labeling",
                description: "Export-grade packaging with optional branded labeling support"
              },
              {
                icon: <SupportAgentIcon className="text-3xl sm:text-4xl text-blue-600" />,
                title: "24/7 Support",
                description: "Round-the-clock customer support for all your needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: isMobile ? 1.02 : 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  backgroundColor: "rgba(59, 130, 246, 0.05)"
                }}
                className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div 
                  className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={false}
                  animate={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}