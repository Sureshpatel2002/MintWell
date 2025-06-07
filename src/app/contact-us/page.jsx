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

export default function ContactUs() {
  return (
    <PageWrapper>
      
      <div className="relative h-[560px] w-full">
        <Image
          src="/contact.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Where to find us?
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                {CONTACTS.map((contact) => (
                  <div key={contact.country}>
                    <h2 className="text-xl font-semibold mb-2">{contact.country}</h2>
                    <p className="text-gray-300">{contact.address}</p>
                    {contact.phoneNumber && (
                      <p className="text-gray-300 mt-1">{contact.phoneNumber}</p>
                    )}
                    {contact.email && (
                      <p className="text-gray-300 mt-1">{contact.email}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <ContactForm />
          <ContactMap />
        </div>
      </div>
    </PageWrapper>
  );
} 