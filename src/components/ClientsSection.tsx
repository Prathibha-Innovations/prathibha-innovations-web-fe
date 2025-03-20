
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Placeholder client logos
const clientLogos = [
  { id: 1, name: 'Client 1', logo: 'https://via.placeholder.com/150x60/0D0D0D/A7C1D9?text=Client+1' },
  { id: 2, name: 'Client 2', logo: 'https://via.placeholder.com/150x60/0D0D0D/D7D9D7?text=Client+2' },
  { id: 3, name: 'Client 3', logo: 'https://via.placeholder.com/150x60/0D0D0D/A7C1D9?text=Client+3' },
  { id: 4, name: 'Client 4', logo: 'https://via.placeholder.com/150x60/0D0D0D/D7D9D7?text=Client+4' },
  { id: 5, name: 'Client 5', logo: 'https://via.placeholder.com/150x60/0D0D0D/A7C1D9?text=Client+5' },
  { id: 6, name: 'Client 6', logo: 'https://via.placeholder.com/150x60/0D0D0D/D7D9D7?text=Client+6' },
  { id: 7, name: 'Client 7', logo: 'https://via.placeholder.com/150x60/0D0D0D/A7C1D9?text=Client+7' },
  { id: 8, name: 'Client 8', logo: 'https://via.placeholder.com/150x60/0D0D0D/D7D9D7?text=Client+8' },
];

// Projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    description: "A complete overhaul of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Web Design"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking application with advanced features and biometric authentication.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Mobile App"
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    description: "An intuitive data visualization dashboard for healthcare professionals to monitor patient metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    category: "UI/UX Design"
  },
  {
    id: 4,
    title: "Smart Home Interface",
    description: "A clean, intuitive interface for controlling connected home devices with voice and touch interactions.",
    image: "https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "IoT"
  },
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

        {/* Auto-scrolling client logos */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-prathibha-bg to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-prathibha-bg to-transparent z-10"></div>
          
          <div ref={scrollerRef} className="flex animate-scroll-left whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={`${client.id}-${index}`} className="mx-8 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img src={client.logo} alt={client.name} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Featured Projects
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-12">
            A glimpse of our work that demonstrates our ability to solve complex problems with elegant solutions.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <span className="text-xs font-medium text-prathibha-primary bg-black/30 px-3 py-1 rounded-full w-fit mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-display font-bold text-white group-hover:text-prathibha-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <div className="mt-4 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="text-sm font-medium text-prathibha-primary flex items-center">
                      View Project 
                      <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
