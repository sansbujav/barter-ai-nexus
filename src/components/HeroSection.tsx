
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';

const HeroSection = ({ translations }: { translations: any }) => {
  const particlesRef = useRef<HTMLDivElement>(null);
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
      particle.style.opacity = opacity.toString();
      
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
        
        <motion.div 
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-white/80 mb-10">
            {translations.subheadline}
          </p>
        </motion.div>
        
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

        {/* Abstract floating elements with image */}
        <div className="mt-20 relative h-64 md:h-80">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-44 h-44 md:w-56 md:h-56 glass-card flex items-center justify-center animate-float rounded-2xl overflow-hidden image-glow">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="People networking" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute left-[20%] top-[30%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 glass-card flex items-center justify-center animate-float rounded-full overflow-hidden image-glow" style={{ animationDelay: '-2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Developer coding" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute right-[20%] top-[70%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 glass-card flex items-center justify-center animate-float rounded-xl overflow-hidden image-glow" style={{ animationDelay: '-4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Project collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
