'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    title: 'Engine Parts',
    description: 'High-quality engine components for optimal performance',
    image: '/products/electrical.jpg',
    price: '299.99',
    category: 'Engine',
    features: ['High Performance', 'Durable']
  },
  {
    title: 'Clutch Systems',
    description: 'Reliable clutch systems for smooth operation',
    image: '/products/electrical.jpg',
    price: '199.99',
    category: 'Transmission',
    features: ['Smooth Operation']
  },
  {
    title: 'Brake Parts',
    description: 'Premium brake components for safety',
    image: '/products/electrical.jpg',
    price: '149.99',
    category: 'Safety',
    features: ['Enhanced Safety']
  },
  {
    title: 'Engine Parts',
    description: 'High-quality engine components for optimal performance',
    image: '/products/electrical.jpg',
    price: '299.99',
    category: 'Engine',
    features: ['High Performance', 'Durable']
  },
  {
    title: 'Clutch Systems',
    description: 'Reliable clutch systems for smooth operation',
    image: '/products/electrical.jpg',
    price: '199.99',
    category: 'Transmission',
    features: ['Smooth Operation']
  },
  {
    title: 'Brake Parts',
    description: 'Premium brake components for safety',
    image: '/products/electrical.jpg',
    price: '149.99',
    category: 'Safety',
    features: ['Enhanced Safety']
  },
  {
    title: 'Gaskets',
    description: 'Durable gaskets for perfect sealing',
    image: '/products/electrical.jpg',
    price: '49.99',
    category: 'Engine',
    features: ['Perfect Seal']
  },
  {
    title: 'Chain Sets',
    description: 'High-performance chain sets',
    image: '/products/electrical.jpg',
    price: '89.99',
    category: 'Transmission',
    features: ['Smooth Operation']
  },
];

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values based on scroll
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2], [100, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Get the mouse position relative to the container
      const containerRect = container.getBoundingClientRect();
      const mouseY = e.clientY;
      
      // Check if mouse is within the card height area (360px + some padding)
      const isWithinCardArea = mouseY >= containerRect.top && mouseY <= (containerRect.top + 400);

      if (!isWithinCardArea) return; // Don't handle scroll if outside card area

      const maxIndex = products.length - 4;
      const delta = e.deltaY;

      // Get the container's position and dimensions
      const lastCard = container.querySelector(`[data-index="${products.length - 1}"]`);
      const firstCard = container.querySelector('[data-index="0"]');
      
      if (lastCard && firstCard) {
        const lastCardRect = lastCard.getBoundingClientRect();
        const firstCardRect = firstCard.getBoundingClientRect();
        
        // More precise visibility checks
        const isLastCardVisible = lastCardRect.right <= (containerRect.right + 10);
        const isFirstCardVisible = firstCardRect.left >= (containerRect.left - 10);

        // For scroll down
        if (delta > 0) {
          if (!isLastCardVisible) {
            e.preventDefault();
            setActiveIndex(prev => Math.min(prev + 1, maxIndex));
          }
        }
        // For scroll up
        else {
          if (!isFirstCardVisible) {
            e.preventDefault();
            setActiveIndex(prev => Math.max(prev - 1, 0));
          }
        }
      }
    };

    // Add wheel event listener to the window for full width coverage
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity, y, scale }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            Our Products
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
          >
            Discover our comprehensive range of high-quality automotive parts
          </motion.p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative w-full mx-auto overflow-hidden"
        >
          <motion.div
            className="flex gap-4"
            initial={false}
            animate={{ x: -activeIndex * (300 + 16) }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 20,
              mass: 1
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                data-index={index}
                className="relative bg-white w-[calc(25%-12px)] flex-shrink-0 flex flex-col transform transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: Math.abs(index - activeIndex) <= 2 ? 1 : 0.98,
                  x: 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  delay: Math.abs(index - activeIndex) * 0.05
                }}
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <div className="relative h-[360px] overflow-hidden rounded-2xl group shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={{ opacity: isHovered === index ? 1 : 0 }}
                  />
                  <div className="absolute top-4 right-4">
                    <motion.span
                      className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {product.category}
                    </motion.span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
                      <p className="text-gray-200 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-400">${product.price}</span>
                        <motion.button
                          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium shadow-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
