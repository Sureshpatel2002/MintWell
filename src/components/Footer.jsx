'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const quickLinks = [
    { title: 'About Us', href: '/about-us' },
    { title: 'Catalogues', href: '/catalogues' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Contact', href: '/contact-us' },
];

const contact = {
    address: '1558, STREET NO. 29, BLOCK 39E, NAIWALA, KAROL BAGH, NEW DELHI-110005',
    email: 'Info@mintwellautotech.com',
    phone: '+91 89056 38483',
    whatsapp: '+91 89056 38483',
    dubai: 'DUBAI, UAE (COMING SOON)'
};

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo & Tagline */}
                    <div className="flex flex-col items-start">
                        <Image
                            src="/logo-white.png"
                            alt="MintWell Autotech"
                            width={260}
                            height={60}
                            className="mb-4 h-20 w-auto object-contain"
                        />
                        <p className="text-gray-400 text-sm max-w-xs">
                            MintWell Autotech is a leading exporter of high-quality motorcycle & three-wheeler spare parts and accessories, serving 28+ countries with a commitment to quality and reliability.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <motion.li 
                                    key={link.title}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Link href={link.href} className="hover:text-blue-400 transition-colors duration-200">
                                        {link.title}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <div className="space-y-4">
                            <motion.div 
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="flex items-start space-x-3"
                            >
                                <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-gray-400 text-sm">Address:</p>
                                    <p className="text-white">{contact.address}</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="flex items-start space-x-3"
                            >
                                <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-gray-400 text-sm">Email:</p>
                                    <a href={`mailto:${contact.email}`} className="text-white hover:text-blue-400 transition-colors duration-200">
                                        {contact.email}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="flex items-start space-x-3"
                            >
                                <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone (WhatsApp):</p>
                                    <a href={`tel:${contact.phone}`} className="text-white hover:text-blue-400 transition-colors duration-200">
                                        {contact.phone}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="flex items-start space-x-3"
                            >
                                <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <div>
                                    <p className="text-gray-400 text-sm">Dubai Office:</p>
                                    <p className="text-white">{contact.dubai}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} MintWell Autotech Exports Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 