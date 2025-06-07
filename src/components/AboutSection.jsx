'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const features = [
  {
    title: 'Exquisite Blend of Excellence and Massive Range',
    description: 'A unique blend, offering our customers a wide range of premium and dependable spare parts manufactured under stringent quality standards that comply with OE norms.',
    icon: '🎯',
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20'
  },
  {
    title: 'Comprehensive Shipping Choices',
    description: 'We offer comprehensive shipment solutions from all significant ports in India and Dubai, in both FCL and LCL formats.',
    icon: '🚢',
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'hover:from-purple-600 hover:to-purple-700',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20'
  },
  {
    title: 'Fast-Track Delivery Solutions',
    description: 'As a token of gratitude to our preferred distributors, the company provides 7-day expedited services in special circumstances.',
    icon: '⚡',
    color: 'from-amber-500 to-amber-600',
    hoverColor: 'hover:from-amber-600 hover:to-amber-700',
    gradient: 'bg-gradient-to-br from-amber-500/20 to-amber-600/20'
  },
  {
    title: 'Premium Packaging Standards',
    description: 'We pack our products matching International packaging standards to ensure that products are safe during transit, meet regulatory requirements, and are easy for customers to use and dispose of responsibly.',
    icon: '📦',
    color: 'from-emerald-500 to-emerald-600',
    hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
    gradient: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20'
  }
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          style={{ opacity, scale, y }}
          className="max-w-3xl mx-auto text-center mb-16 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute -top-20 -left-20 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-20 -right-20 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 relative"
          >
            <span className="relative z-10">What Makes Us Unique</span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300"
          >
            MintWell Autotech has been catering wide range of products in auto components industry covering giant range of spare parts for all kind of Indian and international motorcycles, scooters & three wheelers.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-gray-200 ${feature.gradient}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <motion.div 
                className="relative z-10 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2,
                  transition: { duration: 0.5 }
                }}
              >
                <span className="relative">
                  {feature.icon}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </motion.div>
              <h3 className={`relative z-10 text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 ${feature.hoverColor}`}>
                {feature.title}
              </h3>
              <p className="relative z-10 text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          />
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-6 hover:from-amber-700 hover:to-orange-700 transition-all duration-300 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">Developing the vision, Making it Real</span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.h2>
          <motion.p 
            className="text-2xl text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 relative"
            whileHover={{ 
              scale: 1.05
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">OUR PROFESSION IS OUR PASSION</span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </motion.p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
} 