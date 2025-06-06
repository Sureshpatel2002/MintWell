'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const offices = [
  {
    title: 'Dubai Office',
    address: 'SHOP NO 10, SBK BUILDING, AL MUSALLA ROAD, 118 NAIF, DEIRA, DUBAI (UAE)',
    email: 'capitaloverseasdubai@gmail.com',
    website: 'www.capitaloverseasdubai.com',
    phone: ['+971 42980770', '+971 42980757', '+971 522786140', '+971 553422063']
  },
  {
    title: 'India Office',
    address: 'Plot-473, Udyog Vihar, Phase-lll, Sec.-20, Gurgaon, Haryana 122016',
    email: 'info@mintwellautotech.com',
    phone: ['01243628649', '+919953184823']
  }
];

const quickLinks = [
  { title: 'About Us', href: '/about-us' },
  { title: 'Our Gallery', href: '/gallery' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Contact us', href: '/contact-us' },
  { title: 'Terms & Conditions', href: '/terms' }
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={office.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-4">{office.title}</h3>
                  <p className="text-gray-300 mb-4">{office.address}</p>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <span className="font-medium">Email:</span> {office.email}
                    </p>
                    {office.website && (
                      <p className="text-gray-300">
                        <span className="font-medium">Website:</span> {office.website}
                      </p>
                    )}
                    <div>
                      <span className="font-medium">Phone:</span>
                      <ul className="mt-1 space-y-1">
                        {office.phone.map((number, i) => (
                          <li key={i} className="text-gray-300">{number}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
} 