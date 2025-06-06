'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The commitment to delivering superior-quality products and services is at the core of MintWell Autotech Exports (P) Ltd.'s philosophy.",
    author: "Chairman's Message",
    position: "MintWell Autotech Exports Pvt Ltd"
  },
  {
    quote: "Harnessing cutting-edge technology, continuous research and innovation, a focus on excellence, and strong corporate ethics have positioned the company as a key player in the automotive industry.",
    author: "Our Vision",
    position: "MintWell Autotech Exports Pvt Ltd"
  },
  {
    quote: "Unsurprisingly, MintWell Autotech's presence in the export market continues to expand, establishing itself as a trusted and growing brand in international markets.",
    author: "Global Impact",
    position: "MintWell Autotech Exports Pvt Ltd"
  }
];

export default function TestimonialsSection() {
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
            Chairman's Message
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence and customer satisfaction drives everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 relative"
            >
              <div className="absolute -top-4 left-8">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.author}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 