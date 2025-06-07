'use client';

import { useState } from 'react';
import { useLoading } from '../components/providers/LoadingProvider';
import PageWrapper from '../components/PageWrapper';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxScroll from '../components/ParallaxScroll';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const { isLoading } = useLoading();

  return (
    <PageWrapper>
      <HeroSection />
      <div className="relative z-10">
        <ParallaxScroll>
          <AboutUsSection />
        </ParallaxScroll>

        <ScrollAnimation>
          <FeaturesSection />
        </ScrollAnimation>

        <ParallaxScroll>
          <ProductsSection />
        </ParallaxScroll>

        <ScrollAnimation>
          <TestimonialsSection />
        </ScrollAnimation>
      </div>
    </PageWrapper>
  );
} 