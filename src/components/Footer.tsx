
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="footer-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Logo & desc */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-lg font-bold text-white">Pulse</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Pulse Meeting Intelligence Protocol — AI-powered networking
            </p>
            <a
              href="https://t.me/pulsecommunityopenrus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors text-sm text-white/70 font-medium"
            >
              Telegram
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <button onClick={() => navigate('/')} className="text-left text-sm text-white/50 hover:text-white/80 transition-colors">
                {ru ? 'Главная' : 'Home'}
              </button>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="text-left text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                {ru ? 'Как это работает' : 'How it works'}
              </button>
              <button onClick={() => navigate('/coffeesync')} className="text-left text-sm text-white/50 hover:text-white/80 transition-colors">
                CoffeeSync
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@pulse.community"
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                hello@pulse.community
              </a>
              <a
                href="https://t.me/pulsecommunityopenrus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                {ru ? 'Открытый канал' : 'Open channel'}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-xs text-white/30">
            © {year} Pulse Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
