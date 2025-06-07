'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "At MintWell Autotech Exports Pvt. Ltd., we don't just deliver parts—we deliver trust, reliability, and world-class engineering excellence that powers mobility across borders.",
    author: "Chairman's Message",
    position: "MintWell Autotech Exports Pvt. Ltd."
  },
  {
    quote: "Driven by innovation and a vision for sustainable growth, we constantly invest in research, next-gen technology, and quality systems to stay ahead in the global automotive ecosystem.",
    author: "Our Vision",
    position: "MintWell Autotech Exports Pvt. Ltd."
  },
  {
    quote: "From India to international roads, our parts are building a global reputation for durability, precision, and performance—making MintWell a trusted name across continents.",
    author: "Global Impact",
    position: "MintWell Autotech Exports Pvt. Ltd."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Chairman's Message
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our commitment to excellence and customer satisfaction drives everything we do.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              className="bg-white rounded-xl p-8 relative shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 left-8"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <motion.svg
                  className="w-10 h-10 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </motion.svg>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
                className="group-hover:translate-y-[-5px] transition-transform duration-300"
              >
                <p className="text-gray-600 mb-6 relative z-10 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4 group-hover:border-blue-200 transition-colors duration-300">
                  <motion.h4 
                    className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                  >
                    {testimonial.author}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    {testimonial.position}
                  </motion.p>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 0.05, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="w-full h-full text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 