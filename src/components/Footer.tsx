
import LanguageSwitcher from './LanguageSwitcher';

const Footer = ({ translations }: { translations: any }) => {
  return (
    <footer className="bg-primary py-12 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-orbitron font-bold text-white mb-4">BarterNet</h3>
            <p className="text-white/60 mb-4">Trade skills, services, and more with ease.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-orbitron font-bold mb-4">Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                      {translations.about}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                      {translations.faq}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                      {translations.contact}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                      {translations.terms}
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-orbitron font-bold mb-4">{translations.language}</h4>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-orbitron font-bold mb-4">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
              />
              <button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
          <p>&copy; {new Date().getFullYear()} BarterNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
