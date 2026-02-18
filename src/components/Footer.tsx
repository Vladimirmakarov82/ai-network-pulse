
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pulse-green to-pulse-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Pulse</span>
            </div>
            <p className="text-background/60 text-sm mb-4">
              {language === 'ru'
                ? 'Pulse Meeting Intelligence Protocol — нетворкинг, усиленный ИИ'
                : 'Pulse Meeting Intelligence Protocol — AI-powered networking'}
            </p>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-background/20 text-background/60 hover:bg-background/10"
              onClick={() => window.open('https://t.me/pulsecommunityopenrus', '_blank')}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.628 7.66c-.122.567-.447.707-.905.44l-2.5-1.842-1.205 1.16c-.133.133-.246.246-.505.246l.18-2.52 4.625-4.175c.2-.178-.043-.277-.31-.1l-5.72 3.6-2.46-.77c-.535-.167-.546-.535.11-.79L16.47 7.69c.447-.166.836.1.69.787z"/>
              </svg>
              Telegram
            </Button>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{language === 'ru' ? 'Навигация' : 'Navigation'}</h4>
            <ul className="space-y-2">
              {[
                { label: language === 'ru' ? 'Главная' : 'Home', href: '#home' },
                { label: language === 'ru' ? 'Как это работает' : 'How it works', href: '#about' },
                { label: language === 'ru' ? 'CoffeeSync' : 'CoffeeSync', href: '#coffeesync' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{language === 'ru' ? 'Контакты' : 'Contact'}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hello@pulse.community" 
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  hello@pulse.community
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/pulsecommunityopenrus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  {language === 'ru' ? 'Открытый канал' : 'Open channel'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © {currentYear} Pulse Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
