
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: language === 'ru' ? 'Главная' : 'Home', href: '/', type: 'route' as const },
    { label: language === 'ru' ? 'Продукт' : 'Product', href: '#product', type: 'anchor' as const },
    { label: 'CoffeeSync', href: '/coffeesync', type: 'route' as const },
  ];

  const handleNav = (item: typeof navItems[0]) => {
    if (item.type === 'route') {
      navigate(item.href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(item.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pulse-green to-pulse-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold font-display tracking-tight">Pulse</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors tracking-tight"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Button
              className="bg-pulse-green hover:bg-pulse-green/90 text-white font-semibold px-6"
              onClick={() => {
                const el = document.querySelector('#how-to-connect');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/');
                  setTimeout(() => {
                    document.querySelector('#how-to-connect')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              {language === 'ru' ? 'Подключить' : 'Connect'}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item)}
                  className="text-left text-muted-foreground hover:text-foreground font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-pulse-green hover:bg-pulse-green/90 text-white font-semibold mt-2"
                onClick={() => {
                  const el = document.querySelector('#how-to-connect');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/');
                    setTimeout(() => {
                      document.querySelector('#how-to-connect')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                  setIsMenuOpen(false);
                }}
              >
                {language === 'ru' ? 'Подключить' : 'Connect'}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
