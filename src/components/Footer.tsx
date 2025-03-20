
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowUpCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerBgRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);

  // Function to trigger confetti animation
  const handleSubscribeClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 }
    });
  };

  useEffect(() => {
    if (!footerRef.current) return;

    // Animate footer items when scrolled into view
    gsap.fromTo(
      contentRef.current?.querySelectorAll('.footer-item'),
      { y: 30, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Subtle background animation
    gsap.to(footerBgRef.current, {
      backgroundPosition: '100% 100%',
      duration: 20,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Initialize Three.js background effect
    if (threeContainerRef.current) {
      const width = threeContainerRef.current.clientWidth;
      const height = 200;
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;
      
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true 
      });
      renderer.setSize(width, height);
      threeContainerRef.current.appendChild(renderer.domElement);
      
      // Add particles
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 100;
      
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        // Position
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 10;
        positions[i + 2] = (Math.random() - 0.5) * 10;
        
        // Color - purple/blue/pink hues
        colors[i] = 0.5 + Math.random() * 0.5; // R
        colors[i + 1] = 0.3 + Math.random() * 0.3; // G
        colors[i + 2] = 0.8 + Math.random() * 0.2; // B
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });
      
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Clean up
      return () => {
        if (threeContainerRef.current && renderer.domElement) {
          threeContainerRef.current.removeChild(renderer.domElement);
        }
        scene.remove(particles);
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative pt-20 pb-10 overflow-hidden">
      {/* Three.js container for background particles */}
      <div 
        ref={threeContainerRef} 
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Animated gradient background */}
      <div 
        ref={footerBgRef}
        className="absolute inset-0 bg-gradient-to-br from-prathibha-bg via-prathibha-bg/90 to-prathibha-bg/80 bg-[length:200%_200%] -z-10"
        aria-hidden="true"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-prathibha-primary/30 to-transparent"></div>
      <div className="absolute top-10 left-10 w-60 h-60 bg-prathibha-primary/10 rounded-full filter blur-3xl -z-5"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#9b87f5]/10 rounded-full filter blur-3xl -z-5"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 relative" ref={contentRef}>
        {/* Top section with logo and newsletter */}
        <div className="footer-item glass-panel p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-prathibha-primary/5 to-[#9b87f5]/5 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                Stay Connected<span className="text-prathibha-primary">.</span>
              </h2>
              <p className="text-white/70 max-w-md mb-4">
                Subscribe to our newsletter for the latest updates, insights, and exclusive content delivered straight to your inbox.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-prathibha-primary/50 text-white"
                />
                <Button 
                  onClick={handleSubscribeClick}
                  className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:opacity-90 transition-opacity text-white"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <div className="footer-item md:col-span-5">
            <a 
              href="#home" 
              className="text-4xl font-display font-bold text-gradient-logo inline-block mb-6"
            >
              Prathibha<span className="text-prathibha-primary">.</span>
            </a>
            <p className="text-white/70 mb-8 max-w-md">
              We transform ideas into extraordinary digital experiences through innovative design and cutting-edge technology. Our mission is to help brands thrive in the digital landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b87f5]/20 hover:to-[#D946EF]/20 border border-white/10">
                <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b87f5]/20 hover:to-[#D946EF]/20 border border-white/10">
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b87f5]/20 hover:to-[#D946EF]/20 border border-white/10">
                <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b87f5]/20 hover:to-[#D946EF]/20 border border-white/10">
                <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item md:col-span-3">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#9b87f5] to-[#D946EF]"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#clients" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Clients</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-item md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#9b87f5] to-[#D946EF]"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Brand Strategy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Digital Marketing</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="footer-item md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#9b87f5] to-[#D946EF]"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@prathibha.com" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@prathibha.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <address className="text-white/70 not-italic inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>123 Innovation St, Tech Valley, CA 94043</span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-item pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Prathibha Innovations. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-white/60 hover:text-prathibha-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-prathibha-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-prathibha-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        {/* Back to top button */}
        <a 
          href="#home" 
          className="footer-item absolute -top-6 right-6 w-12 h-12 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] rounded-full flex items-center justify-center shadow-lg shadow-[#9b87f5]/20 hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUpCircle className="w-6 h-6 text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
