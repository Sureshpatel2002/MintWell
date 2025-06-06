'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { FaTrophy, FaShip, FaTruck, FaBoxOpen } from 'react-icons/fa';

const featuresLeft = [
  {
    icon: FaTrophy,
    title: 'Exquisite Blend of Excellence and Massive Range',
    desc: 'A unique blend, offering our customers a wide range of premium and dependable spare parts manufactured under stringent quality standards that comply with OE norms.',
  },
  {
    icon: FaShip,
    title: 'Comprehensive Shipping Choices',
    desc: 'We offer comprehensive shipment solutions from all significant ports in India and Dubai, in both FCL and LCL formats.',
  },
];

const featuresRight = [
  {
    icon: FaTruck,
    title: 'Fast-Track Delivery Solutions',
    desc: 'As a token of gratitude to our preferred distributors, the company provides 7-day expedited services in special circumstances.',
  },
  {
    icon: FaBoxOpen,
    title: 'Premium Packaging Standards',
    desc: 'We pack our products matching International packaging standards to ensure that products are safe during transit, meet regulatory requirements, and are easy for customers to use and dispose of responsibly.',
  },
];

const AboutUsSection = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-gray-600 leading-relaxed">
                Capital Autotech Exports Pvt Ltd, is a prominent manufacturer an ISO 9001-2015 certified and a government-approved. Star Export House, we specialize in exporting high-quality Motorcycle & Three Wheeler Spare parts and Accessories based out of India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over six decades of industry experience and a global presence spanning 28 countries, we are dedicated of providing a comprehensive range of products including Engine parts, Clutch systems, Brake Parts, Gaskets, Chain sets, Control Cables, Tyres & Tubes etc. and tailored to meet the diverse requirements of automotive workshops worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our unwavering commitment to quality, innovation, and customer satisfaction drives us to employ advanced technology and rigorous quality control measures throughout our production processes.
              </p>
              <Button variant="outline" href="/about-us">
                More About Us
              </Button>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/about-company.jpg"
                alt="About Capital Autotech"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">What Makes Us Unique</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
            Capital Autotech has been catering wide range of products in auto components industry covering giant range of spare parts for all kind of Indian and international motorcycles, scooters & three wheelers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Features */}
            <div className="flex flex-col gap-10">
              {featuresLeft.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                    <feature.icon />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-snug">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className="flex flex-col items-center justify-center">
              <div className="border-2 border-blue-500 rounded-xl p-4 bg-white shadow-md">
                <Image
                  src="/about-company.jpg"
                  alt="What Makes Us Unique"
                  width={300}
                  height={220}
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            {/* Right Features */}
            <div className="flex flex-col gap-10">
              {featuresRight.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                    <feature.icon />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-snug">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection; 