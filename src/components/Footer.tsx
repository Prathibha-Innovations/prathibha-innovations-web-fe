import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import * as THREE from "three";

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
      origin: { y: 0.8 },
    });
  };

  useEffect(() => {
    if (!footerRef.current) return;

    // Animate footer items when scrolled into view
    gsap.fromTo(
      contentRef.current?.querySelectorAll(".footer-item"),
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
          toggleActions: "play none none reverse",
        },
      }
    );

    // Subtle background animation
    gsap.to(footerBgRef.current, {
      backgroundPosition: "100% 100%",
      duration: 20,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
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
        antialias: true,
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

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particleGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative pt-20 overflow-hidden">
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

      <div className="footer-item glass-panel p-8 mb-0 relative overflow-hidden">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <div className="footer-item md:col-span-5">
            <a
              href="#home"
              className="text-4xl font-display font-bold text-gradient-logo inline-block mb-6"
            >
              <img
                src="data:image/png;base64,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"
                alt="Prathibha Innovations Logo"
                className="w-16 h-16 object-contain"
              />{" "}
            </a>
            <p className="text-white/70 mb-8 max-w-md">
              We transform ideas into extraordinary digital experiences through
              innovative design and cutting-edge technology. Our mission is to
              help brands thrive in the digital landscape.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b87f5]/20 hover:to-[#D946EF]/20 border border-white/10"
              >
                <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b87f5]/20 hover:to-[#D946EF]/20 border border-white/10"
              >
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b87f5]/20 hover:to-[#D946EF]/20 border border-white/10"
              >
                <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b87f5]/20 hover:to-[#D946EF]/20 border border-white/10"
              >
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
                <a
                  href="#home"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Clients</span>
                </a>
              </li>
        
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-prathibha-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

         
          <div className="footer-item md:col-span-4">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#9b87f5] to-[#D946EF]"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@prathibhainnovations.com"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@prathibhainnovations.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9182141678 </span>
                </a>
              </li>
              <li>
                <address className="text-white/70 not-italic flex items-start gap-2">
                  <MapPin className="w-5 h-5  text-prathibha-primary" />
                  <span className="text-white/70 leading-relaxed">
                  Plot No 1 , H.No 1-69 , RoadNo 5,<br />
                  RTC Colony, Medchal,
                  Telangana, India - 501401
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-item pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Prathibha Innovations. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-prathibha-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-prathibha-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-prathibha-primary text-sm transition-colors"
            >
              Cookie Policy
            </a>
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
