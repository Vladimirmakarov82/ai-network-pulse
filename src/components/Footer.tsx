
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.faq', href: '#faq' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pulse-green to-pulse-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Pulse</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gray-600 text-gray-400 hover:bg-gray-800"
                onClick={() => window.open('https://t.me/pulsecommunityopenrus', '_blank')}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.628 7.66c-.122.567-.447.707-.905.44l-2.5-1.842-1.205 1.16c-.133.133-.246.246-.505.246l.18-2.52 4.625-4.175c.2-.178-.043-.277-.31-.1l-5.72 3.6-2.46-.77c-.535-.167-.546-.535.11-.79L16.47 7.69c.447-.166.836.1.69.787z"/>
                </svg>
                Telegram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.community')}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://t.me/pulsecommunityru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {t('footer.telegram.participants')}
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/pulsecommunityopenrus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {t('footer.telegram.open')}
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/+Dg9qYT-N7mtkMTMy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {t('footer.telegram.organizers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hello@pulse.community" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  hello@pulse.community
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#faq')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pulse Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
