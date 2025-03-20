
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

    // Animate form on scroll
    gsap.fromTo(
      formRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate info on scroll
    gsap.fromTo(
      infoRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: infoRef.current,
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
    <section id="contact" ref={sectionRef} className="py-24 bg-prathibha-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-prathibha-primary/10 text-prathibha-primary">
            Get In Touch
          </div>
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form ref={formRef} className="glass-panel p-8 rounded-2xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-prathibha-primary/50 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-prathibha-primary/50 text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-prathibha-primary/50 text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-prathibha-primary/50 text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-lg bg-prathibha-primary text-black font-medium transition-all hover:shadow-[0_0_25px_rgba(167,193,217,0.5)] hover:translate-y-[-2px]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="flex flex-col">
            <div className="glass-panel p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-prathibha-primary/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-prathibha-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email Us</p>
                    <a href="mailto:info@prathibha.com" className="text-white hover:text-prathibha-primary transition-colors">
                      info@prathibha.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-prathibha-primary/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-prathibha-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Call Us</p>
                    <a href="tel:+1234567890" className="text-white hover:text-prathibha-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-prathibha-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-prathibha-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Visit Us</p>
                    <address className="text-white not-italic">
                      123 Innovation Street<br />
                      Tech Hub, CA 94103<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl h-auto md:h-[calc(100%-8rem)]">
              <h3 className="text-xl font-display font-bold mb-6">Working Hours</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-bold mb-4">Connect with us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-prathibha-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-prathibha-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-prathibha-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-prathibha-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-prathibha-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-prathibha-secondary/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default ContactSection;
