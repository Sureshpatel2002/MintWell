'use client';

import { useEffect } from 'react';
import { useLoading } from '../components/providers/LoadingProvider';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TwoWheelerSection from '../components/TwoWheelerSection';
import ContactSection from '../components/ContactSection';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

export default function Home() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <main className="min-h-screen">
      {/* Home Section */}
      <section id="home" className="min-h-screen">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-50">
      
          <AboutSection />
       
      </section>

      {/* Two Wheeler Section */}
      <section id="two-wheeler" className="min-h-screen">
        <ScrollAnimationWrapper direction="left" delay={0.2}>
          <TwoWheelerSection />
        </ScrollAnimationWrapper>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-50">
        <ScrollAnimationWrapper direction="right" delay={0.2}>
          <ContactSection />
        </ScrollAnimationWrapper>
      </section>
    </main>
  );
} 