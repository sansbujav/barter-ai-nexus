
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = ({ translations }) => {
  const particlesRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Create particles effect
  useEffect(() => {
    if (!particlesRef.current) return;

    const container = particlesRef.current;
    const particleCount = 100;
    
    // Clear previous particles
    container.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 3 + 1;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.3;
      
      // Apply styles
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity;
      
      // Add animation with random duration
      const animationDuration = Math.random() * 10 + 5;
      particle.style.animation = `pulse ${animationDuration}s infinite alternate`;
      
      container.appendChild(particle);
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Cosmic background with particles */}
      <div className="cosmic-bg"></div>
      <div ref={particlesRef} className="hero-particles"></div>

      {/* Orbiting abstract elements */}
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-secondary/30 animate-orbit"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-accent/30 animate-orbit" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-white/10 animate-orbit" style={{ animationDelay: '-4s' }}></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto text-center z-10"
      >
        <motion.h1 
          variants={fadeIn}
          className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 text-white leading-tight"
        >
          {translations.headline}
        </motion.h1>
        
        <motion.p 
          variants={fadeIn}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
        >
          {translations.subheadline}
        </motion.p>
        
        <motion.div 
          variants={fadeIn}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#" className="btn-primary">
            {translations.cta1}
          </a>
          <a href="#how-it-works" className="btn-secondary">
            {translations.cta2}
          </a>
        </motion.div>

        {/* Abstract floating elements */}
        <div className="mt-20 relative h-40 md:h-60">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-20 h-20 md:w-32 md:h-32 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30 flex items-center justify-center animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M8 13h2"></path>
                <path d="M8 17h2"></path>
                <path d="M14 13h2"></path>
                <path d="M14 17h2"></path>
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-12 h-12 md:w-20 md:h-20 bg-accent/20 backdrop-blur-md rounded-full border border-accent/30 flex items-center justify-center animate-float" style={{ animationDelay: '-2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute right-1/3 top-3/4 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/40 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center animate-float" style={{ animationDelay: '-4s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
