
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Zap } from 'lucide-react';

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
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Two-column hero */}
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 opacity-0 animate-fade-up"
                style={{ animationDelay: '0ms' }}
              >
                <Zap className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium text-muted-foreground tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {ru ? 'Инфраструктура для бизнес-клубов' : 'Infrastructure for business clubs'}
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl leading-[1.08] mb-6 opacity-0 animate-fade-up"
                style={{ animationDelay: '100ms' }}
              >
                {ru ? (
                  <>
                    Делаем участников{' '}
                    <span className="italic text-accent-highlight">видимыми</span>
                    <br />
                    за пределами чата
                  </>
                ) : (
                  <>
                    Making members{' '}
                    <span className="italic text-accent-highlight">visible</span>
                    <br />
                    beyond the chat
                  </>
                )}
              </h1>

              {/* Sub */}
              <p
                className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg opacity-0 animate-fade-up"
                style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: '200ms' }}
              >
                {ru
                  ? 'Pulse — инфраструктурный слой поверх бизнес-клубов. AI-визитки, лента участников, умные знакомства.'
                  : 'Pulse — an infrastructure layer on top of business clubs. AI cards, member feed, smart introductions.'}
              </p>

              {/* CTA */}
              <div
                className="flex flex-wrap items-center gap-4 mb-6 opacity-0 animate-fade-up"
                style={{ animationDelay: '300ms' }}
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
                <button
                  onClick={() => document.querySelector('#pulse-card')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {ru ? 'Смотреть демо ↓' : 'See demo ↓'}
                </button>
              </div>
            </div>

            {/* Counter block */}
            <div
              className="flex flex-col items-center justify-center opacity-0 animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              <span
                className="text-6xl md:text-7xl font-bold tracking-tight text-accent-highlight"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {count}+
              </span>
              <span
                className="text-sm text-muted-foreground text-center max-w-[180px] leading-tight mt-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {ru ? 'предпринимателей с оборотом $2–30M' : 'entrepreneurs with $2–30M revenue'}
              </span>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  +250 / {ru ? 'неделя' : 'week'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
