
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorksSection = ({ translations }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const lineAnimation = {
    hidden: { width: '0%' },
    visible: { 
      width: '100%',
      transition: { 
        duration: 1, 
        ease: "easeInOut" 
      } 
    }
  };

  const steps = [
    {
      id: 1,
      title: translations.step1.title,
      description: translations.step1.description,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      id: 2,
      title: translations.step2.title,
      description: translations.step2.description,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      id: 3,
      title: translations.step3.title,
      description: translations.step3.description,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="3" width="4" height="18"></rect>
          <rect x="10" y="8" width="4" height="13"></rect>
          <rect x="2" y="13" width="4" height="8"></rect>
        </svg>
      )
    },
    {
      id: 4,
      title: translations.step4.title,
      description: translations.step4.description,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-20 px-4 bg-primary/30 backdrop-blur-md relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border border-white"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-white"></div>
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl"
      >
        <motion.div 
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
            {translations.title}
          </h2>
        </motion.div>

        {/* Timeline for desktop */}
        <div className="hidden md:block">
          <div className="relative mb-12">
            <motion.div 
              variants={lineAnimation}
              className="timeline-line"
            ></motion.div>
            
            <div className="flex justify-between">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  variants={fadeIn}
                  className="relative"
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div 
                    className={`timeline-dot cursor-pointer ${activeStep === step.id ? 'bg-secondary' : 'bg-white/20'}`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-40">
                    <h3 className="text-lg font-orbitron font-bold text-white text-center">
                      {step.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            variants={fadeIn}
            className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-white">
                {steps.find(step => step.id === activeStep)?.title}
              </h3>
              <p className="text-white/80">
                {steps.find(step => step.id === activeStep)?.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline for mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
            >
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 rounded-full ${activeStep === step.id ? 'bg-secondary' : 'bg-white/20'} flex items-center justify-center mr-4`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-orbitron font-bold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-white/80 pl-14">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;
