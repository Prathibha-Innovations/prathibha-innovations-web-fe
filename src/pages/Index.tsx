
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import ClientsSection from '@/components/ClientsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { 
  observeElementsAndAddClass, 
  addNavLinkHoverEffects, 
  initSmoothScrolling,
  animateHeroBackground 
} from '@/utils/animations';

// Add packages
import * as THREE from 'three';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize animations
    const cleanup = observeElementsAndAddClass();
    
    // Add navbar link hover effects
    addNavLinkHoverEffects();
    
    // Initialize smooth scrolling with GSAP
    initSmoothScrolling();
    
    // Animate hero background with particles
    animateHeroBackground();
    
    // When page first loads, add entrance animation for body
    gsap.fromTo(
      'body',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.inOut' }
    );

    return () => {
      cleanup();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-prathibha-bg text-white">
      <Navbar />
      <HeroSection />
      <VisionMissionSection />
      <ClientsSection />
      {/* <BlogSection /> */}
      {/* <ContactSection /> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
