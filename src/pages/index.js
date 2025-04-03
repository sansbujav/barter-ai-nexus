
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HeroSection from '../components/HeroSection';
import OfferSection from '../components/OfferSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

// Import translations
import en from '../translations/en.json';
import ka from '../translations/ka.json';
import de from '../translations/de.json';
import it from '../translations/it.json';
import fr from '../translations/fr.json';

const translations = {
  en,
  ka,
  de,
  it,
  fr
};

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale || 'en'];

  // Create cosmic stars background
  useEffect(() => {
    const createCosmicBackground = () => {
      const stars = [];
      const starsCount = 100;
      const container = document.querySelector('body');
      
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
        star.style.opacity = Math.random() * 0.5 + 0.1;
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
      <Head>
        <title>BarterNet — Trade Skills, Services, and More with Ease</title>
        <meta name="description" content="Offer what you have, find what you need—AI connects you instantly." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="BarterNet — AI-Powered Trading Platform" />
        <meta property="og:description" content="Exchange skills, services, and products with AI-powered matching." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barternet.com" />
        <meta property="og:image" content="https://barternet.com/og-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BarterNet — AI-Powered Trading Platform" />
        <meta name="twitter:description" content="Exchange skills, services, and products with AI-powered matching." />
        <meta name="twitter:image" content="https://barternet.com/twitter-image.jpg" />
      </Head>

      <main>
        <HeroSection translations={t.hero} />
        <OfferSection translations={t.offer} />
        <HowItWorksSection translations={t.howItWorks} />
        <FeaturesSection translations={t.features} />
        <CtaSection translations={t.cta} />
        <Footer translations={t.footer} />
      </main>
    </>
  );
}
