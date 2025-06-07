'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAward, FaUsers, FaGlobe, FaTools, FaHandshake, FaChartLine } from 'react-icons/fa';

const features = [
  {
    title: 'ISO 9001-2015 Certified',
    description: 'Our commitment to quality is certified by international standards.',
    icon: '/icons/iso-certified.png'
  },
  {
    title: 'Star Export House',
    description: 'Government-approved export house with global reach.',
    icon: '/icons/star-export.png'
  },
  {
    title: 'Global Presence',
    description: 'Serving customers in 28 countries worldwide.',
    icon: '/icons/global.png'
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality control measures throughout production.',
    icon: '/icons/quality.png'
  }
];

const featuresLeft = [
  {
    title: 'Quality Assurance',
    desc: 'ISO 9001-2015 certified manufacturing with rigorous quality control',
    icon: FaAward
  },
  {
    title: 'Expert Team',
    desc: 'Skilled professionals with decades of industry experience',
    icon: FaUsers
  },
  {
    title: 'Global Reach',
    desc: 'Serving customers in over 50 countries worldwide',
    icon: FaGlobe
  }
];

const featuresRight = [
  {
    title: 'Advanced Technology',
    desc: 'State-of-the-art manufacturing facilities and equipment',
    icon: FaTools
  },
  {
    title: 'Customer Focus',
    desc: 'Dedicated to exceeding customer expectations',
    icon: FaHandshake
  },
  {
    title: 'Continuous Growth',
    desc: 'Expanding product range and market presence',
    icon: FaChartLine
  }
];

export default function FeaturesSection() {
  return (
    <>
      {/* Certifications Section */}
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 50
            }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Certifications & Achievements
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              MintWell Autotech Exports Pvt Ltd is a prominent manufacturer, ISO 9001-2015 certified and a government-approved Star Export House.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.25 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Makes Us Unique
          </motion.h2>
          <motion.p
            className="text-center max-w-4xl mx-auto text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            MintWell Autotech has been catering wide range of products in auto components industry covering giant range of spare parts for all kind of Indian and international motorcycles, scooters & three wheelers.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Features */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 20
              }}
            >
              {featuresLeft.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.2,
                    type: "spring",
                    stiffness: 50
                  }}
                  whileHover={{
                    scale: 1.05,
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <feature.icon />
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">{feature.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center Image with Rotating Border */}
            <motion.div
              className="flex flex-col items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 50
              }}
            >
              {/* Rotating Border Element */}
              <motion.div
                className="absolute inset-0 border-4 border-blue-500 rounded-xl"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Rotating Dots */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" />
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" />
              </motion.div>

              <motion.div
                className="border-2 border-blue-500 rounded-xl p-4 bg-white shadow-md relative z-10"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/about-company.jpg"
                  alt="What Makes Us Unique"
                  width={300}
                  height={220}
                  className="object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* Right Features */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 20
              }}
            >
              {featuresRight.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.2,
                    type: "spring",
                    stiffness: 50
                  }}
                  whileHover={{
                    scale: 1.05,
                    x: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl"
                    whileHover={{
                      scale: 1.2,
                      rotate: -360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <feature.icon />
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">{feature.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 