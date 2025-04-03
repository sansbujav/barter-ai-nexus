
import { useEffect } from 'react';
import '../index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // Initialize cosmic background
  useEffect(() => {
    // Detect preferred language from browser if not already set
    const storedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'ka', 'de', 'it', 'fr'];
    
    if (!storedLanguage && supportedLanguages.includes(browserLanguage)) {
      localStorage.setItem('preferredLanguage', browserLanguage);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="cosmic-bg"></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
