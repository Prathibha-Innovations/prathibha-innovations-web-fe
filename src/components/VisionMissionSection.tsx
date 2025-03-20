
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisionMissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visionHeadingRef = useRef<HTMLHeadingElement>(null);
  const visionTextRef = useRef<HTMLParagraphElement>(null);
  const visionImageRef = useRef<HTMLDivElement>(null);
  const missionHeadingRef = useRef<HTMLHeadingElement>(null);
  const missionTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Vision animation
    gsap.fromTo(
      visionHeadingRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: visionHeadingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      visionTextRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: visionTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      visionImageRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: visionImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Mission animation
    gsap.fromTo(
      missionHeadingRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: missionHeadingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      missionTextRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: missionTextRef.current,
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
    <section id="about" ref={sectionRef} className="py-24 bg-prathibha-bg-alt relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
          {/* Vision Column */}
          <div className="order-2 md:order-1">
            <div className="max-w-lg">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-prathibha-primary/10 text-prathibha-primary">
                Our Vision
              </div>
              <h2 ref={visionHeadingRef} className="text-3xl md:text-4xl font-display font-bold mb-6">
                Creating <span className="text-gradient">Digital Excellence</span> Through Design Thinking
              </h2>
              <p ref={visionTextRef} className="text-white/80 leading-relaxed mb-8">
                We envision a digital landscape where technology enhances human experience through intuitive design and thoughtful functionality. Our vision is to set new standards of digital craftsmanship by focusing on what matters most: the user's journey and experience.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[2px] bg-prathibha-primary"></div>
                <span className="text-white/60 italic text-sm">"Simplicity is the ultimate sophistication"</span>
              </div>
            </div>
          </div>

          {/* Vision Image */}
          <div ref={visionImageRef} className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10"></div>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-cover bg-center transform transition-transform duration-10000 hover:scale-110"></div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-prathibha-primary/20 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-prathibha-secondary/10 rounded-full filter blur-3xl -z-10"></div>
          </div>

          {/* Mission Image */}
          <div className="order-3 relative">
            <div className="relative overflow-hidden rounded-2xl h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10"></div>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-cover bg-center transform transition-transform duration-10000 hover:scale-110"></div>
            </div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-prathibha-primary/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-prathibha-secondary/20 rounded-full filter blur-3xl -z-10"></div>
          </div>

          {/* Mission Column */}
          <div className="order-4">
            <div className="max-w-lg">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-prathibha-secondary/10 text-prathibha-secondary">
                Our Mission
              </div>
              <h2 ref={missionHeadingRef} className="text-3xl md:text-4xl font-display font-bold mb-6">
                Empowering Businesses with <span className="text-gradient">Innovative Solutions</span>
              </h2>
              <p ref={missionTextRef} className="text-white/80 leading-relaxed mb-8">
                Our mission is to transform complex problems into elegant solutions through innovative technology and thoughtful design. We collaborate with clients to build digital products that are not only visually stunning but also functionally superior and user-centric.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[2px] bg-prathibha-secondary"></div>
                <span className="text-white/60 italic text-sm">"Design is not just what it looks like, it's how it works"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
