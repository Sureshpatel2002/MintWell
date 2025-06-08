import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useTheme, useMediaQuery } from '@mui/material';

const features = [
  {
    icon: '/check.gif',
    title: "Diverse Product Line",
    description: "Serving 2W & 4W segments with everything from clutch kits to lighting and electricals",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: '/factory.gif',
    title: "Quality Manufacturing",
    description: "State-of-the-art manufacturing facilities with strict quality control",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: '/business-plan.gif',
    title: "Business-Centric Pricing",
    description: "Designed for bulk buyers and repeat importers",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    icon: '/truck.gif',
    title: "Custom Packing & Labeling",
    description: "Export-grade packaging with optional branded labeling support",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: '/support.gif',
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your needs",
    gradient: "from-red-500 to-rose-400"
  }
];

export default function WhyChooseUsAnimated({ className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5
      }
    }
  };

  return (
    <section ref={ref} className={`py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Why Choose MintWell?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Experience excellence in automotive parts with our comprehensive range of services and commitment to quality
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ 
                scale: isMobile ? 1.02 : 1.05,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Card Content */}
              <div className="relative p-6 sm:p-8">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className={`text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-current group-hover:border-opacity-20 rounded-2xl transition-all duration-500 pointer-events-none" />

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 