
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = 200;
    const duration = 2000;
    const stepTime = duration / end;
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  const scrollToProduct = () => {
    const el = document.querySelector('#pulse-card');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Growth badge */}
          <div className="inline-flex items-center gap-2 bg-pulse-green/10 text-pulse-green px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest mb-8 animate-fade-in">
            <div className="w-1.5 h-1.5 bg-pulse-green rounded-full animate-pulse-glow" />
            {language === 'ru' ? 'Протокол работает' : 'Protocol is live'}
          </div>

          {/* Main Heading — original */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] animate-fade-in tracking-tighter">
            <span className="gradient-text">
              {language === 'ru'
                ? 'Нетворкинг эффективнее в 100 раз'
                : 'Networking 100× more effective'}
            </span>
          </h1>

          {/* Key insight */}
          <p className="text-lg md:text-xl text-foreground/80 mb-4 font-medium animate-fade-in tracking-tight max-w-3xl mx-auto leading-snug">
            {language === 'ru'
              ? 'Твои участники уже нетворкаются за пределами клуба. Просто без твоего бренда рядом.'
              : 'Your members are already networking outside your club. Just without your brand next to them.'}
          </p>

          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed font-inter">
            {language === 'ru'
              ? 'Pulse — инфраструктурный слой поверх бизнес-клубов. Не заменяет клубы — делает их участников видимыми за пределами чата.'
              : 'Pulse — an infrastructure layer on top of business clubs. Doesn\'t replace clubs — makes their members visible beyond the chat.'}
          </p>

          {/* Counter */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-baseline gap-3">
              <span className="text-6xl md:text-7xl font-bold gradient-text tracking-tighter">{count}+</span>
              <span className="text-base text-muted-foreground font-inter">
                {language === 'ru'
                  ? 'предпринимателей с оборотом $2–30M'
                  : 'entrepreneurs with $2–30M revenue'}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            <Button 
              size="lg"
              className="bg-pulse-green hover:bg-pulse-green/90 text-white font-semibold px-8 py-3 text-lg shadow-lg shadow-pulse-green/20"
              onClick={() => {
                const el = document.querySelector('#how-to-connect');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {language === 'ru' ? 'Подключить комьюнити' : 'Connect your community'}
            </Button>

            <button 
              onClick={scrollToProduct} 
              className="text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-1 text-sm"
            >
              {language === 'ru' ? 'Как это работает' : 'How it works'}
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
