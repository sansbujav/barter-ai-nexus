
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ka', name: 'ქართული' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'fr', name: 'Français' },
  ];

  const getCurrentLanguageName = () => {
    const currentLang = languages.find((lang) => lang.code === locale);
    return currentLang ? currentLang.name : 'English';
  };

  const changeLanguage = (code) => {
    // Save to localStorage for persistence
    localStorage.setItem('preferredLanguage', code);
    
    // Change route to the new locale
    router.push({ pathname, query }, asPath, { locale: code });
    setIsOpen(false);
  };

  // Check for stored language preference on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage && storedLanguage !== locale) {
      router.push({ pathname, query }, asPath, { locale: storedLanguage });
    }
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-white hover:text-accent transition-colors"
      >
        <span>{getCurrentLanguageName()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-primary/90 backdrop-blur-md border border-white/10 rounded-md shadow-xl z-50">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => changeLanguage(language.code)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    locale === language.code ? 'text-accent' : 'text-white'
                  }`}
                >
                  {language.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
