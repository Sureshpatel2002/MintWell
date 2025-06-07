'use client';

import PageWrapper from '../../components/PageWrapper';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';
import ContactMap from '../../components/ContactMap';

const CONTACTS = [
  {
    country: 'India',
    address: '1558, STREET NO. 29, BLOCK 39E, NAIWALA, KAROL BAGH, NEW DELHI-110005',
    phoneNumber: '+91 89056 38483 (WhatsApp)',
    email: 'Info@mintwellautotech.com'
  },
  {
    country: 'Dubai',
    address: 'DUBAI, UAE (COMING SOON)',
    phoneNumber: '',
    email: ''
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ContactUs() {
  return (
    <PageWrapper>
      <motion.div 
        className="relative h-[560px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/contact.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <motion.div 
          className="absolute inset-0 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Where to find us?
              </motion.h1>
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white"
              >
                {CONTACTS.map((contact, index) => (
                  <motion.div 
                    key={contact.country}
                    variants={itemVariants}
                    custom={index}
                  >
                    <h2 className="text-xl font-semibold mb-2">{contact.country}</h2>
                    <p className="text-gray-300">{contact.address}</p>
                    {contact.phoneNumber && (
                      <p className="text-gray-300 mt-1">{contact.phoneNumber}</p>
                    )}
                    {contact.email && (
                      <p className="text-gray-300 mt-1">{contact.email}</p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ContactMap />
          </motion.div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
} 