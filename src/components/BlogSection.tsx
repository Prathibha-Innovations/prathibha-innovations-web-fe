
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Blog posts data
const blogs = [
  {
    id: 1,
    title: "The Impact of Minimalist Design on User Experience",
    excerpt: "Explore how minimalist design principles can significantly enhance user engagement and satisfaction...",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    date: "June 15, 2023",
    category: "Design",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Embracing Motion Design in Modern Web Applications",
    excerpt: "Learn how thoughtful animation and motion design can create more intuitive and delightful user interfaces...",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    date: "May 22, 2023",
    category: "Animation",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Psychology of Color in Digital Product Design",
    excerpt: "Understanding the emotional impact of color choices and how they influence user behavior and brand perception...",
    image: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    date: "April 10, 2023",
    category: "Psychology",
    readTime: "6 min read"
  }
];

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const blogCardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    // Animate blog cards on scroll
    gsap.fromTo(
      blogCardsRef.current?.querySelectorAll('.blog-card'),
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: blogCardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate CTA
    gsap.fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
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
    <section id="blog" ref={sectionRef} className="py-24 bg-prathibha-bg-alt relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-prathibha-primary/10 text-prathibha-primary">
            Our Insights
          </div>
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-display font-bold mb-6">
            Latest from the <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our thoughts on design, technology, and innovation. Stay updated with the latest trends and insights.
          </p>
        </div>

        <div ref={blogCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card group">
              <div className="glass-panel overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-prathibha-primary/90 text-black text-xs py-1 px-3 rounded-full">
                      {blog.category}
                    </span>
                    <span className="bg-black/50 text-white text-xs py-1 px-3 rounded-full">
                      {blog.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-white/60 mb-2">
                    {blog.date}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-prathibha-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 flex-grow">
                    {blog.excerpt}
                  </p>
                  <button className="text-sm font-medium text-prathibha-primary flex items-center self-start">
                    Read more 
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="text-center">
          <button className="px-8 py-3 border border-prathibha-primary/50 text-prathibha-primary rounded-full hover:bg-prathibha-primary/10 transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-prathibha-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-prathibha-secondary/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default BlogSection;
