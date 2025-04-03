
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const CtaSection = ({ translations }: { translations: any }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeExample, setActiveExample] = useState<'project' | 'skill' | 'product'>('project');

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

  const exampleContent = {
    project: {
      title: "Describe a Project",
      description: "I need to build an e-commerce site for my handmade crafts business. Looking for developers, designers, and SEO experts.",
      result: "BarterNet AI identified you need: Web Developer, UI/UX Designer, and SEO Specialist. Found 5 matches in your area.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    skill: {
      title: "Find by Skill",
      description: "I need someone who can create corporate promotional videos with motion graphics.",
      result: "Found: Maya K. - Video production specialist with 5 years experience in corporate videos and motion graphics.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    product: {
      title: "Find a Product",
      description: "I need professional recording equipment for podcasting that works with my limited space.",
      result: "Found: Compact podcasting bundle - includes Rode PodMic, portable mixer, and acoustic treatment. Available from Alex's Audio Shop.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden bg-[#1A1F2C]">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/10 to-[#121417]/90"></div>
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-white">
            {translations.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {translations.subtitle || "See how BarterNet connects skills, services, and products through AI-powered matching"}
          </p>
        </div>
        
        <div className="bg-[#121417]/70 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden shadow-xl">
          <div className="grid grid-cols-3 border-b border-white/10">
            {(['project', 'skill', 'product'] as const).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveExample(tab)}
                className={`py-4 px-2 font-orbitron text-sm md:text-base transition-all ${
                  activeExample === tab 
                  ? 'bg-secondary text-white' 
                  : 'bg-transparent text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {exampleContent[tab].title}
              </button>
            ))}
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-[#262B38] rounded-lg p-6 mb-6 border border-white/5">
                  <h3 className="text-white/90 mb-2 font-medium">User Request:</h3>
                  <p className="text-white/70">
                    {exampleContent[activeExample].description}
                  </p>
                </div>
                
                <div className="bg-[#262B38]/80 rounded-lg p-6 border border-white/5">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17L6 12L7.41 10.59L11 14.17L16.59 8.58L18 10L11 17Z" fill="white"/>
                      </svg>
                    </div>
                    <h3 className="text-white/90 font-medium">BarterNet AI Result:</h3>
                  </div>
                  <p className="text-white/70">
                    {exampleContent[activeExample].result}
                  </p>
                </div>
                
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block mt-6 bg-gradient-to-r from-secondary to-secondary/80 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-secondary/30"
                >
                  {translations.button}
                </motion.a>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-xl"></div>
                <img 
                  src={exampleContent[activeExample].image}
                  alt="Example scenario" 
                  className="rounded-xl shadow-2xl border border-white/10 w-full h-[300px] object-cover"
                />
                <div className="absolute top-0 right-0 m-4 bg-[#262B38]/90 text-white text-xs py-1 px-3 rounded-full backdrop-blur-sm">
                  AI Matched
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
