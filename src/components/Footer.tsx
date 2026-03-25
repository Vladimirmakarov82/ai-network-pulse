
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xs">P</span>
            </div>
            <div>
              <span className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Pulse</span>
              <span className="text-xs text-muted-foreground ml-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {ru ? 'Инфраструктура для бизнес-сообществ' : 'Infrastructure for business communities'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://t.me/pulsecommunityopenrus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Telegram
            </a>
            <a
              href="mailto:hello@pulse.community"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              hello@pulse.community
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © {year} Pulse Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
