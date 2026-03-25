
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = 200;
    const duration = 1800;
    const stepTime = duration / end;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Status badge */}
          <div 
            className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              +250 {ru ? 'участников в неделю' : 'participants per week'}
            </span>
          </div>

          {/* Main heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            {ru ? (
              <>
                Нетворкинг{' '}
                <span className="italic text-accent-highlight">эффективнее</span>
                <br />в 100 раз
              </>
            ) : (
              <>
                Networking{' '}
                <span className="italic text-accent-highlight">100×</span>
                <br />more effective
              </>
            )}
          </h1>

          {/* Subheading — the key insight */}
          <p 
            className="text-lg md:text-xl text-foreground/70 mb-4 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: '200ms' }}
          >
            {ru
              ? 'Твои участники уже нетворкаются за пределами клуба. Просто без твоего бренда рядом.'
              : 'Your members are already networking outside your club. Just without your brand next to them.'}
          </p>

          <p 
            className="text-base text-muted-foreground mb-14 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: '300ms' }}
          >
            {ru
              ? 'Pulse — инфраструктурный слой поверх бизнес-клубов. Не заменяет клубы — делает их участников видимыми за пределами чата.'
              : 'Pulse — an infrastructure layer on top of business clubs. Doesn\'t replace clubs — makes their members visible beyond the chat.'}
          </p>

          {/* Counter + CTA row */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <Button
              size="lg"
              className="bg-foreground text-primary-foreground hover:bg-foreground/90 font-medium px-8 py-6 text-base rounded-xl shadow-lg shadow-foreground/10"
              onClick={() => {
                document.querySelector('#how-to-connect')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {ru ? 'Подключить комьюнити' : 'Connect your community'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {count}+
              </span>
              <span className="text-sm text-muted-foreground max-w-[160px] text-left leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {ru ? 'предпринимателей с оборотом $2–30M' : 'entrepreneurs with $2–30M revenue'}
              </span>
            </div>
          </div>

          {/* Scroll hint */}
          <button 
            onClick={() => document.querySelector('#pulse-card')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm opacity-0 animate-fade-up"
            style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: '500ms' }}
          >
            {ru ? 'Как это работает ↓' : 'How it works ↓'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
