'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MintWell Autotech Exports Pvt Ltd is a prominent manufacturer, ISO 9001-2015 certified and a government-approved Star Export House.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 