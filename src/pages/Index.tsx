
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
import { observeElementsAndAddClass, addNavLinkHoverEffects } from '@/utils/animations';

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
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: 'smooth'
        });
      });
    });

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
      <BlogSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
