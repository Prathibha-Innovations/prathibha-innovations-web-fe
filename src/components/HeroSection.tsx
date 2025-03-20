
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // GSAP Animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(headingRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(subheadingRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=0.6"
    )
    .fromTo(ctaRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Three.js setup
  useEffect(() => {
    if (!threeContainerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      threeContainerRef.current.clientWidth / threeContainerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(
      threeContainerRef.current.clientWidth, 
      threeContainerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    threeContainerRef.current.appendChild(renderer.domElement);
    canvasRef.current = renderer.domElement;
    rendererRef.current = renderer;

    // Create objects
    // Cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xA7C1D9,
      metalness: 0.5,
      roughness: 0.2,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -2;
    cube.position.y = 0.5;
    scene.add(cube);
    cubeRef.current = cube;

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xD7D9D7,
      metalness: 0.7,
      roughness: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 2;
    sphere.position.y = -0.5;
    scene.add(sphere);

    // Torus
    const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 50);
    const torusMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xA7C1D9,
      metalness: 0.5,
      roughness: 0.2,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.y = 0;
    torus.position.x = 0;
    torus.rotation.x = Math.PI / 2;
    scene.add(torus);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xA7C1D9, 1, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xD7D9D7, 1, 100);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.005;
        cubeRef.current.rotation.y += 0.005;
      }

      torus.rotation.z += 0.01;
      sphere.rotation.y += 0.01;

      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!threeContainerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = threeContainerRef.current.clientWidth / threeContainerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(threeContainerRef.current.clientWidth, threeContainerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (threeContainerRef.current && canvasRef.current) {
        threeContainerRef.current.removeChild(canvasRef.current);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  // Canvas confetti effect
  const handleConfetti = () => {
    const end = Date.now() + 700;

    const colors = ['#A7C1D9', '#D7D9D7', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0.05, y: 0.7 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 0.95, y: 0.7 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={containerRef}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-prathibha-bg via-prathibha-bg to-prathibha-bg-alt"></div>
      
      {/* Three.js container */}
      <div 
        ref={threeContainerRef} 
        className="absolute inset-0 pointer-events-none"
      ></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Transforming Ideas into <span className="text-gradient">Digital Reality</span>
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Prathibha Innovations crafts premium digital experiences that merge aesthetics with functionality. We believe in simplicity, clarity, and attention to detail.
          </p>
          
          <button 
            ref={ctaRef}
            className="px-8 py-4 rounded-full bg-prathibha-primary text-black font-medium text-lg transition-all hover:shadow-[0_0_25px_rgba(167,193,217,0.5)] hover:translate-y-[-2px]"
            onMouseEnter={handleConfetti}
          >
            Discover Our Work
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
        <p className="text-sm mb-2 font-light">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
