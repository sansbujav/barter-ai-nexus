
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CtaSection = ({ translations }: { translations: any }) => {
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

  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient with image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
          alt="Network background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="cosmic-star"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-4xl text-center relative z-10"
      >
        <div className="glass-card p-10 rounded-2xl">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-white">
            {translations.title}
          </h2>
          
          <motion.a 
            href="#"
            animate={pulse}
            className="inline-block btn-primary"
          >
            {translations.button}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
