
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-8 px-8",
        isScrolled ? "bg-prathibha-bg/90 backdrop-blur-lg py-4 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          ref={logoRef}
          href="#home" 
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="transition-all duration-300 hover:scale-105"
        >
          <img 
            src="data:image/png;base64,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" 
            alt="Logo" 
            className="h-20 w-auto"
          />
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
