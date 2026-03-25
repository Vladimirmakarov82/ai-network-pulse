
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

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
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden hero-gradient">
      {/* Decorative orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/8 blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full bg-yellow-200/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 gradient-border rounded-full px-5 py-2 mb-10 opacity-0 animate-fade-up bg-card/80 backdrop-blur-sm"
            style={{ animationDelay: '0ms' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-muted-foreground tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {ru ? 'Инфраструктура для бизнес-клубов' : 'Infrastructure for business clubs'}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            {ru ? (
              <>
                Делаем участников{' '}
                <span className="gradient-text italic">видимыми</span>
                <br />
                за пределами чата
              </>
            ) : (
              <>
                Making members{' '}
                <span className="gradient-text italic">visible</span>
                <br />
                beyond the chat
              </>
            )}
          </h1>

          {/* Sub */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: '240ms' }}
          >
            {ru
              ? 'Pulse — инфраструктурный слой поверх бизнес-клубов. AI-визитки, лента участников, умные знакомства.'
              : 'Pulse — an infrastructure layer on top of business clubs. AI cards, member feed, smart introductions.'}
          </p>

          {/* CTA row */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-14 opacity-0 animate-fade-up"
            style={{ animationDelay: '360ms' }}
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base rounded-xl glow-accent"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              onClick={() => {
                document.querySelector('#how-to-connect')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {ru ? 'Подключить комьюнити' : 'Connect your community'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <button
              onClick={() => document.querySelector('#pulse-card')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {ru ? 'Смотреть демо ↓' : 'See demo ↓'}
            </button>
          </div>

          {/* Stats row */}
          <div
            className="flex items-center justify-center gap-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '480ms' }}
          >
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold gradient-text" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {count}+
              </span>
              <p className="text-xs text-muted-foreground mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {ru ? 'предпринимателей' : 'entrepreneurs'}
              </p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(var(--foreground))' }}>
                $2–30M
              </span>
              <p className="text-xs text-muted-foreground mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {ru ? 'оборот участников' : 'member revenue'}
              </p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                +250 / {ru ? 'неделя' : 'week'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
