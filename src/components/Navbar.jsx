'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';
import { useLoading } from './providers/LoadingProvider';

const navItems = [
  { title: 'Home', path: '#home' },
  { title: 'About Us', path: '#about' },
  { title: 'Two Wheeler', path: '#two-wheeler' },
  { title: 'Contact Us', path: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'two-wheeler', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle loading state when pathname changes
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, setIsLoading, pathname]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex w-full bg-primary-600 text-white text-sm font-medium py-1 px-4 items-center justify-between h-8 font-sans z-50">
        <div className="container flex items-center justify-between mx-auto px-0">
          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-sm" />
              <span>+91 89056 38483 </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-sm" />
              <span>Info@mintwellautotech.com</span>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white/80 transition-colors">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <FaTwitter className="text-sm" />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <FaInstagram className="text-sm" />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <nav
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 font-sans ${isScrolled
            ? 'bg-white/70 backdrop-blur-md shadow-md border-b border-white/30'
            : 'bg-white/80 border-b border-gray-200 shadow-sm'
          }`}
        style={{
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="container mx-auto flex items-center justify-between h-24 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/logo.png"
              alt="MintWell Autotech"
              width={280}
              height={70}
              className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path.replace('#', ''))}
                className={`relative px-3 py-2 text-lg font-semibold transition-colors duration-200 font-sans ${
                  activeSection === item.path.replace('#', '')
                    ? 'text-primary-700'
                    : 'text-gray-900 hover:text-primary-700'
                }`}
              >
                {item.title}
                {activeSection === item.path.replace('#', '') && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-current transition-all duration-200" />
                )}
              </button>
            ))}
            <button
              disabled
              className="ml-4 px-6 py-2.5 rounded-md bg-primary-400 text-white font-semibold opacity-60 cursor-not-allowed border-2 border-primary-400 hover:bg-primary-500 transition-colors duration-200"
            >
              Purchase
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 font-sans ${isScrolled
                  ? 'text-gray-900 hover:text-primary-700 hover:bg-white/40'
                  : 'text-gray-900 hover:text-primary-700 hover:bg-white/10'
                }`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white/90 backdrop-blur-md shadow-lg z-50 lg:hidden font-sans"
            >
              <div className="h-full flex flex-col">
                <div className="px-6 py-6 border-b border-gray-200">
                  <Image
                    src="/logo.png"
                    alt="MintWell Autotech"
                    width={140}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <nav className="flex-1 px-6 py-6 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => scrollToSection(item.path.replace('#', ''))}
                      className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200 font-sans ${
                        activeSection === item.path.replace('#', '')
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-900 hover:bg-gray-100 hover:text-primary-700'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                  <button
                    disabled
                    className="mt-4 w-full px-4 py-3 rounded-lg bg-primary-400 text-white font-semibold opacity-60 cursor-not-allowed border-2 border-primary-400 hover:bg-primary-500 transition-colors duration-200"
                  >
                    Purchase
                  </button>
                </nav>
                <div className="px-6 py-6 border-t border-gray-200">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Contact Us</p>
                    <p className="text-sm font-medium">01243628649</p>
                    <p className="text-sm font-medium">info@capitalautotech.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 