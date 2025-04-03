
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OfferSection = ({ translations }: { translations: any }) => {
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
    <section ref={ref} className="py-20 px-4 bg-primary/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-secondary/30"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-accent/30"></div>
      </div>

      <motion.div
        variants={staggerContainer}
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
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {translations.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={fadeIn}
            className="card-hover bg-primary/40 backdrop-blur-md rounded-xl border border-white/10 p-6 overflow-hidden relative glass-card"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                {translations.card1.title}
              </h3>
              <p className="text-white/80 mb-4">
                {translations.card1.description}
              </p>
              <div className="mt-4 rounded-lg overflow-hidden image-glow">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Create listings" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="card-hover bg-primary/40 backdrop-blur-md rounded-xl border border-white/10 p-6 overflow-hidden relative glass-card"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                {translations.card2.title}
              </h3>
              <p className="text-white/80 mb-4">
                {translations.card2.description}
              </p>
              <div className="mt-4 rounded-lg overflow-hidden image-glow">
                <img 
                  src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Find opportunities" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="card-hover bg-primary/40 backdrop-blur-md rounded-xl border border-white/10 p-6 overflow-hidden relative glass-card"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 1v22"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                {translations.card3.title}
              </h3>
              <p className="text-white/80 mb-4">
                {translations.card3.description}
              </p>
              <div className="mt-4 rounded-lg overflow-hidden image-glow">
                <img 
                  src="https://images.unsplash.com/photo-1565384257472-896ee0368774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Exchange value" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OfferSection;
