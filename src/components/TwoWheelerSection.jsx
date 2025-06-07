'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const twoWheelers = [
  {
    id: 1,
    name: 'Honda Activa 6G',
    image: '/hero1.jpg',
    description: 'Smart and efficient scooter with advanced features',
    features: [
      'Honda Smart Power Technology',
      'LED Headlamp',
      'Digital Meter',
      'External Fuel Filler',
      'Combi-Brake System'
    ]
  },
  {
    id: 2,
    name: 'Honda Shine',
    image: '/hero2.jpg',
    description: 'Stylish and fuel-efficient motorcycle',
    features: [
      'BS6 Compliant Engine',
      'LED Headlamp',
      'Digital Meter',
      '5-Speed Transmission',
      'Honda Eco Technology'
    ]
  },
  {
    id: 3,
    name: 'Honda Unicorn',
    image: '/hero3.jpg',
    description: 'Powerful and comfortable commuter bike',
    features: [
      '160cc Engine',
      'LED Headlamp',
      'Digital Meter',
      '6-Speed Transmission',
      'Honda Smart Power Technology'
    ]
  }
];

export default function TwoWheelerSection() {
  const [selectedBike, setSelectedBike] = useState(twoWheelers[0]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Two-Wheeler Range
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Discover our premium collection of two-wheelers designed for performance, comfort, and style.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {twoWheelers.map((bike) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: bike.id * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 
                ${selectedBike.id === bike.id 
                  ? 'ring-2 ring-primary-600 shadow-xl' 
                  : 'hover:shadow-2xl hover:ring-1 hover:ring-primary-400'
                }`}
              onClick={() => setSelectedBike(bike)}
            >
              <div className="relative h-72 w-full group">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  priority={bike.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-2"
                  whileHover={{ color: "#2563eb" }}
                >
                  {bike.name}
                </motion.h3>
                <p className="text-gray-600 mb-4 text-lg">{bike.description}</p>
                <ul className="space-y-3">
                  {bike.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-10 py-4 rounded-full hover:bg-primary-700 
              transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl
              hover:ring-2 hover:ring-primary-400"
          >
            Book a Test Ride
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 