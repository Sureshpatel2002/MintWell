'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const products = [
  {
    title: 'Engine Parts',
    description: 'High-quality engine components for optimal performance',
    image: '/products/engine-parts.jpg',
  },
  {
    title: 'Clutch Systems',
    description: 'Reliable clutch systems for smooth operation',
    image: '/products/clutch-systems.jpg',
  },
  {
    title: 'Brake Parts',
    description: 'Premium brake components for safety',
    image: '/products/brake-parts.jpg',
  },
  {
    title: 'Gaskets',
    description: 'Durable gaskets for perfect sealing',
    image: '/products/gaskets.jpg',
  },
  {
    title: 'Chain Sets',
    description: 'High-performance chain sets for power transmission',
    image: '/products/chain-sets.jpg',
  },
  {
    title: 'Control Cables',
    description: 'Precision-engineered control cables',
    image: '/products/control-cables.jpg',
  },
  // Add more dummy products to reach at least 15
  {
    title: 'Suspension Parts',
    description: 'Smooth ride with advanced suspension parts',
    image: '/products/suspension.jpg',
  },
  {
    title: 'Electrical Components',
    description: 'Reliable electricals for all vehicles',
    image: '/products/electrical.jpg',
  },
  {
    title: 'Filters',
    description: 'High-efficiency filters for engine protection',
    image: '/products/filters.jpg',
  },
  {
    title: 'Bearings',
    description: 'Long-lasting bearings for smooth operation',
    image: '/products/bearings.jpg',
  },
  {
    title: 'Spark Plugs',
    description: 'Efficient spark plugs for better ignition',
    image: '/products/spark-plugs.jpg',
  },
  {
    title: 'Tyres',
    description: 'Durable tyres for all terrains',
    image: '/products/tyres.jpg',
  },
  {
    title: 'Mirrors',
    description: 'Clear vision with quality mirrors',
    image: '/products/mirrors.jpg',
  },
  {
    title: 'Lights',
    description: 'Bright and efficient lighting solutions',
    image: '/products/lights.jpg',
  },
  {
    title: 'Seats',
    description: 'Comfortable and stylish seats',
    image: '/products/seats.jpg',
  },
  {
    title: 'Handlebars',
    description: 'Strong and ergonomic handlebars',
    image: '/products/handlebars.jpg',
  },
];

const CARDS_TO_SHOW = 3;

export default function ProductsSection() {
  const [startIdx, setStartIdx] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const endIdx = startIdx + CARDS_TO_SHOW;
  const canGoPrev = startIdx > 0;
  const canGoNext = endIdx < products.length;

  const handlePrev = () => {
    if (canGoPrev) {
      setDirection(-1);
      setStartIdx(startIdx - 1);
    }
  };
  const handleNext = () => {
    if (canGoNext) {
      setDirection(1);
      setStartIdx(startIdx + 1);
    }
  };

  // For smooth sliding, calculate translateX
  const cardWidth = 340 + 24; // max-w-[340px] + gap-6 (24px)
  const x = -startIdx * cardWidth;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vehicle Catalogues
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two- and three-wheeler vehicles are classified into various categories based on their purpose, design, and features.
          </p>
        </motion.div>
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`p-3 rounded-full border bg-white shadow-md text-primary-600 hover:bg-primary-50 transition disabled:opacity-40 disabled:cursor-not-allowed`}
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>
          {/* Cards with sliding animation */}
          <div className="overflow-hidden w-full" style={{ maxWidth: 1068 }}>
            <motion.div
              className="flex gap-6"
              animate={{ x }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ minWidth: cardWidth * products.length }}
            >
              {products.map((product, index) => (
                <div
                  key={product.title}
                  className="bg-white rounded-lg overflow-hidden shadow-lg flex-1 min-w-[340px] max-w-[340px] w-[340px] flex flex-col my-4"
                  style={{ width: 340 }}
                >
                  <div className="relative h-44">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      {product.description}
                    </p>
                    <a
                      href="/dummy-pdf.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-auto px-5 py-2 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors duration-200 text-center"
                    >
                      View PDF
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`p-3 rounded-full border bg-white shadow-md text-primary-600 hover:bg-primary-50 transition disabled:opacity-40 disabled:cursor-not-allowed`}
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
} 