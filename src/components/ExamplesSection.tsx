
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ExampleType = 'service' | 'project' | 'product';

interface Example {
  id: number;
  type: ExampleType;
  title: string;
  userQuery: string;
  systemResponse: string;
  icon: JSX.Element;
}

const ExamplesSection = ({ translations }: { translations: any }) => {
  const [activeExample, setActiveExample] = useState<number>(1);
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

  const examples: Example[] = [
    {
      id: 1,
      type: 'service',
      title: translations.example1.title,
      userQuery: translations.example1.userQuery,
      systemResponse: translations.example1.systemResponse,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      id: 2,
      type: 'project',
      title: translations.example2.title,
      userQuery: translations.example2.userQuery,
      systemResponse: translations.example2.systemResponse,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 18h1"></path>
          <path d="M12 18h1"></path>
          <path d="M7 18h1"></path>
        </svg>
      )
    },
    {
      id: 3,
      type: 'product',
      title: translations.example3.title,
      userQuery: translations.example3.userQuery,
      systemResponse: translations.example3.systemResponse,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.27 9 5.15"></path>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
          <path d="m3.3 7 8.7 5 8.7-5"></path>
          <path d="M12 22V12"></path>
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} id="examples" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-secondary/30"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-accent/30"></div>
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
            {translations.title}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {translations.description}
          </p>
        </motion.div>

        {/* Examples tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {examples.map((example) => (
            <motion.button
              key={example.id}
              variants={fadeIn}
              className={`px-6 py-3 rounded-full border ${
                activeExample === example.id 
                  ? 'bg-secondary text-white border-secondary' 
                  : 'bg-primary/50 text-white/70 border-white/10 hover:bg-primary/70'
              } transition-all duration-300 flex items-center gap-2`}
              onClick={() => setActiveExample(example.id)}
            >
              <span className={activeExample === example.id ? 'text-white' : 'text-white/70'}>
                {example.icon}
              </span>
              {example.title}
            </motion.button>
          ))}
        </div>

        {/* Example showcase */}
        <motion.div 
          variants={fadeIn}
          className="bg-primary/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
        >
          {examples.map((example) => (
            <div 
              key={example.id} 
              className={`transition-opacity duration-300 ${activeExample === example.id ? 'block' : 'hidden'}`}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                {/* User query side */}
                <div className="bg-primary/80 rounded-lg p-6 border border-white/5">
                  <div className="flex gap-3 items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-white">
                      {translations.userQueryLabel}
                    </h3>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-white/5">
                    <p className="text-white/90 whitespace-pre-line">{example.userQuery}</p>
                  </div>
                </div>

                {/* System response side */}
                <div className="bg-primary/80 rounded-lg p-6 border border-white/5">
                  <div className="flex gap-3 items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-white">
                      {translations.systemResponseLabel}
                    </h3>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-white/5">
                    <p className="text-white/90 whitespace-pre-line">{example.systemResponse}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExamplesSection;
