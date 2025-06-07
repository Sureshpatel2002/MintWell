'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth transitions for content
  const leftX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-8 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Side by Side Images */}
          <motion.div
            style={{ x: leftX, opacity }}
            className="relative h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            {/* Images Container */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* First Image - Now at top */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg -mt-8 group">
                <Image
                  src="/about-us1.png"
                  alt="About MintWell"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              {/* Second Image - Now at bottom */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg mt-8 group">
                <Image
                  src="/about-us2.png"
                  alt="About MintWell"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            style={{ x: rightX, opacity }}
            className="space-y-8 h-full flex items-start -mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightContentVariants}
          >
            <div className="w-full">
              <motion.h3
                className="text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                About Us
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Mintwell Autotech Private Limited is a Company established with objective to cater the need of international Automobile Spare Parts market. Our leadership has the experience of more than 20 years in the industry. We deliver comprehensive range of Automobile Spare Parts for both Two Wheeler & Four Wheeler Auto brands, namely- Bajaj, TVS, Hero & Honda in 2W and Hyundai-Kai, Toyota, Mahindra & Maruti in 4W. We are also aligned with major OEM vendors namely Verroc Engineering, Uno Minda & Bosch. We are associated with some of the well-functioning distributors of the companies to fulfil order quickly.
              </motion.p>

              {/* Brand Categories */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Two Wheelers */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">TWO WHEELERS</h4>
                  <div className="flex flex-wrap gap-4">
                    {['BAJAJ', 'TVS', 'HERO', 'HONDA'].map((brand, index) => (
                      <motion.div
                        key={brand}
                        className="bg-white p-3 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      >
                        <span className="text-gray-700 font-medium">{brand}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}