'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Exquisite Blend of Excellence and Massive Range',
    description: 'A unique blend, offering our customers a wide range of premium and dependable spare parts manufactured under stringent quality standards that comply with OE norms.',
    icon: '🎯'
  },
  {
    title: 'Comprehensive Shipping Choices',
    description: 'We offer comprehensive shipment solutions from all significant ports in India and Dubai, in both FCL and LCL formats.',
    icon: '🚢'
  },
  {
    title: 'Fast-Track Delivery Solutions',
    description: 'As a token of gratitude to our preferred distributors, the company provides 7-day expedited services in special circumstances.',
    icon: '⚡'
  },
  {
    title: 'Premium Packaging Standards',
    description: 'We pack our products matching International packaging standards to ensure that products are safe during transit, meet regulatory requirements, and are easy for customers to use and dispose of responsibly.',
    icon: '📦'
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            What Makes Us Unique
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            MintWell Autotech has been catering wide range of products in auto components industry covering giant range of spare parts for all kind of Indian and international motorcycles, scooters & three wheelers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Developing the vision, Making it Real
          </h2>
          <p className="text-xl text-primary-600 font-semibold">
            OUR PROFESSION IS OUR PASSION
          </p>
        </motion.div>
      </div>
    </section>
  );
} 