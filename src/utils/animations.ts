
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Initialize all elements with the animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
};

export const fadeInUp = (element: HTMLElement, delay: number = 0) => {
  gsap.fromTo(
    element,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, delay }
  );
};

export const staggerFadeInUp = (elements: NodeListOf<Element>, staggerTime: number = 0.2) => {
  gsap.fromTo(
    elements,
    { y: 30, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.7, 
      stagger: staggerTime
    }
  );
};

// New animation specifically for navbar links
export const staggerNavLinks = (elements: NodeListOf<Element>, staggerTime: number = 0.1) => {
  gsap.fromTo(
    elements,
    { y: -20, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.5, 
      stagger: staggerTime,
      ease: "power2.out"
    }
  );
};

// Add hover animation for navbar links
export const addNavLinkHoverEffects = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { 
        scale: 1.1, 
        color: '#9b87f5', 
        duration: 0.3, 
        ease: "power2.out" 
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { 
        scale: 1, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    });
  });
};

// Background animation for hero section
export const animateHeroBackground = () => {
  const heroBg = document.querySelector('.hero-bg');
  
  if (heroBg) {
    gsap.fromTo(
      heroBg,
      { 
        backgroundPosition: '0% 0%', 
        opacity: 0.5 
      },
      { 
        backgroundPosition: '100% 100%', 
        opacity: 1,
        duration: 20, 
        repeat: -1, 
        yoyo: true,
        ease: "sine.inOut"
      }
    );
  }
};

// Add smooth scrolling for all hash links
export const initSmoothScrolling = () => {
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
};

export const observeElementsAndAddClass = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));
  
  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
};
