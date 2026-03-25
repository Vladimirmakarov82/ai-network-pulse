
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
  const ru = language === 'ru';

  const navItems = [
    { label: ru ? 'Продукт' : 'Product', href: '#pulse-card', type: 'anchor' as const },
    { label: 'CoffeeSync', href: '/coffeesync', type: 'route' as const },
  ];

  const handleNav = (item: typeof navItems[0]) => {
    if (item.type === 'route') {
      navigate(item.href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToConnect = () => {
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
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-xs">P</span>
          </div>
          <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Pulse
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item)}
              className="text-[13px] text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-[13px] font-semibold px-5 rounded-lg"
            onClick={scrollToConnect}
          >
            {ru ? 'Подключить клуб' : 'Connect club'}
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className="text-left text-muted-foreground hover:text-foreground font-medium py-2 text-sm"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold mt-2"
              onClick={scrollToConnect}
            >
              {ru ? 'Подключить клуб' : 'Connect club'}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
