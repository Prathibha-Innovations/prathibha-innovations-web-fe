
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Placeholder client logos
const clientLogos = [
  { id: 1, name: 'Platvialum', logo: 'https://platvialum.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbase_logo_white_background.ea185244.png&w=640&q=75' },
  { id: 2, name: 'Eco Nutri', logo: 'data:image/jpeg;base64,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' },
  { id: 3, name: 'Konfetti', logo: 'data:image/png;base64,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' },
  { id: 4, name: 'BrandLance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS989GRiByc43QI2Wn6Ci3r7oarr-aGcZkoFA&s' },
  { id: 5, name: 'Modivcare', logo: 'data:image/png;base64,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' },

  ];

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate projects on scroll
    gsap.fromTo(
      projectsRef.current?.querySelectorAll('.project-card'),
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="clients" ref={sectionRef} className="py-24 bg-prathibha-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-prathibha-primary/10 text-prathibha-primary">
            Our Clients & Projects
          </div>
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-display font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We've had the privilege of working with forward-thinking organizations to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="relative mb-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-prathibha-bg to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-prathibha-bg to-transparent z-10"></div>
          
          <div ref={scrollerRef} className="flex animate-scroll-left whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={`${client.id}-${index}`} className="mx-8 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img src={client.logo} alt={client.name} className="h-24 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
