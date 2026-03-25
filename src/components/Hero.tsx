
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [slotsLeft] = useState(5);
  const [usersPerWeek] = useState(250);

  const scrollToConnect = () => {
    const el = document.querySelector('#how-to-connect');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Growth badge */}
          <div className="inline-flex items-center gap-2 bg-pulse-green/10 text-pulse-green px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest mb-8 animate-fade-in">
            <div className="w-1.5 h-1.5 bg-pulse-green rounded-full animate-pulse-glow"></div>
            +{usersPerWeek} {language === 'ru' ? 'участников в неделю' : 'participants per week'}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95] animate-fade-in tracking-tighter">
            <span className="gradient-text">
              {language === 'ru'
                ? 'Протокол цифровой идентичности для бизнес-сообществ'
                : 'Digital identity protocol for business communities'}
            </span>
          </h1>

          {/* Key contradiction */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium animate-fade-in tracking-tight max-w-3xl mx-auto">
            {language === 'ru'
              ? 'Твои участники уже нетворкаются за пределами клуба. Просто без твоего бренда рядом.'
              : 'Your members are already networking outside your club. Just without your brand next to them.'}
          </p>

          <p className="text-base text-muted-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed font-inter">
            {language === 'ru'
              ? 'Pulse не заменяет клубы — он делает их участников видимыми за пределами чата. Каждый участник получает Pulse Card, каждый клуб — Pulse Feed.'
              : 'Pulse doesn\'t replace clubs — it makes their members visible beyond the chat. Every member gets a Pulse Card, every club gets a Pulse Feed.'}
          </p>

          {/* Slot urgency */}
          <div className="mb-10 animate-fade-in">
            <div className="inline-flex flex-col items-center gap-2 bg-card border border-border/50 rounded-2xl px-8 py-5 shadow-lg">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl md:text-6xl font-bold text-pulse-orange tracking-tighter">{slotsLeft}</span>
                <span className="text-base text-muted-foreground font-inter">
                  {language === 'ru' ? 'слотов до 30 марта' : 'slots until March 30'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground/70 font-inter">
                {language === 'ru'
                  ? 'Заявок больше, чем слотов. Первым 30 комьюнити — первый год бесплатно.'
                  : 'More applications than slots. First 30 communities — first year free.'}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button
              size="lg"
              className="bg-pulse-green hover:bg-pulse-green/90 text-white font-semibold px-8 py-3 text-lg"
              onClick={scrollToConnect}
            >
              {language === 'ru' ? 'Подключить комьюнити' : 'Connect your community'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
