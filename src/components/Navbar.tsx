
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { fadeInUp, staggerNavLinks } from '@/utils/animations';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#clients' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize animations when component mounts
    if (logoRef.current) {
      fadeInUp(logoRef.current, 0);
    }
    
    // Stagger nav links animation
    if (navLinksRef.current) {
      const linkElements = navLinksRef.current.querySelectorAll('a');
      staggerNavLinks(linkElements, 0.1);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu animations
  useEffect(() => {
    if (mobileMenuRef.current) {
      const links = mobileMenuRef.current.querySelectorAll('a');
      if (mobileMenuOpen) {
        staggerNavLinks(links, 0.1);
      }
    }
    
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle smooth scroll when clicking on nav links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.startsWith('#') ? href : `#${href}`;
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      
      // Smooth scroll with animation
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-8",
        isScrolled ? "bg-prathibha-bg/90 backdrop-blur-lg py-4 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          ref={logoRef}
          href="#home" 
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="text-2xl font-display font-bold text-gradient-logo transition-all duration-300 hover:scale-105"
        >
          Prathibha<span className="text-[#D946EF]">.</span>
        </a>

        {/* Desktop Menu */}
        <div ref={navLinksRef} className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="nav-link text-white/90 hover:text-[#9b87f5] text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#9b87f5] after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-[#9b87f5] hover:text-[#D946EF] transition-colors duration-300 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Fixed positioned with backdrop-filter */}
      <div 
        ref={mobileMenuRef}
        className={cn(
          "fixed inset-0 backdrop-blur-xl bg-transparent z-40 flex flex-col pt-24 px-8 transition-all duration-500 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-prathibha-bg/95 to-[#191429]/95 -z-10"></div>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              handleNavLinkClick(e, link.href);
              setMobileMenuOpen(false);
            }}
            className="text-white/90 hover:text-[#9b87f5] text-2xl font-medium py-4 border-b border-white/10 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
