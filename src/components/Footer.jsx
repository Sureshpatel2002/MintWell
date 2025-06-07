'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTheme, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Two Wheeler', path: '/two-wheeler' },
  { name: 'Contact Us', path: '/contact' }
];

const socialLinks = [
  { icon: <FacebookIcon />, url: 'https://facebook.com' },
  { icon: <TwitterIcon />, url: 'https://twitter.com' },
  { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
  { icon: <InstagramIcon />, url: 'https://instagram.com' }
];

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-900"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="MintWell Autotech"
                width={200}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in automotive parts distribution, serving the industry with quality and reliability since 2010.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Icon icon={`mdi:${social}`} className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { title: 'Home', path: '/' },
                { title: 'About Us', path: '/about' },
                { title: 'Two Wheeler', path: '/two-wheeler' },
                { title: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Link href={link.path} className="text-sm">
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon icon="mdi:map-marker" className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">
                    1558, STREET NO. 29, BLOCK 39E,<br />
                    NAIWALA, KAROL BAGH,<br />
                    NEW DELHI-110005
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full">
                      Dubai, UAE (Coming Soon)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:phone" className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-400 text-sm">+91 89056 38483</p>
                  <p className="text-xs text-primary-400">(WhatsApp)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:email" className="w-5 h-5 text-primary-400" />
                <p className="text-gray-400 text-sm">Info@mintwellautotech.com</p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-primary-500 text-white rounded-md text-sm font-medium hover:bg-primary-600 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MintWell Autotech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
} 