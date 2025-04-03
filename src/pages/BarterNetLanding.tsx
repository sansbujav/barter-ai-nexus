
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import OfferSection from '../components/OfferSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import ExamplesSection from '../components/ExamplesSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

// Import English translations by default
import enTranslations from '../translations/en.json';

const BarterNetLanding = () => {
  // Use English translations by default
  const t = enTranslations;

  // Create cosmic stars background
  useEffect(() => {
    const createCosmicBackground = () => {
      const stars: HTMLDivElement[] = [];
      const starsCount = 100;
      const container = document.querySelector('body');
      
      if (!container) return [];
      
      // Remove existing stars if any
      const existingStars = document.querySelectorAll('.cosmic-star-bg');
      existingStars.forEach(star => star.remove());

      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('cosmic-star-bg');
        
        const size = Math.random() * 3 + 1;
        
        star.style.position = 'fixed';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = `${Math.random() * 0.5 + 0.1}`; // Convert to string
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.zIndex = '-1';
        star.style.animation = `pulse ${Math.random() * 4 + 2}s infinite alternate`;
        
        container.appendChild(star);
        stars.push(star);
      }
      
      return stars;
    };
    
    const stars = createCosmicBackground();
    
    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <>
      <div className="cosmic-bg"></div>
      <main>
        <HeroSection translations={t.hero} />
        <OfferSection translations={t.offer} />
        <HowItWorksSection translations={t.howItWorks} />
        <ExamplesSection translations={t.examples} />
        <FeaturesSection translations={t.features} />
        <CtaSection translations={t.cta} />
        <Footer translations={t.footer} />
      </main>
    </>
  );
};

export default BarterNetLanding;
