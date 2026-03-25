
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-10 border border-border bg-background opacity-0 animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">
              {ru ? 'Протокол запущен' : 'Protocol is live'}
            </span>
          </div>

          {/* Big rainbow heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 opacity-0 animate-fade-up rainbow-text"
            style={{ animationDelay: '120ms' }}
          >
            {ru ? (
              <>
                Нетворкинг 100×
                <br />
                эффективнее
              </>
            ) : (
              <>
                Networking 100×
                <br />
                more effective
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg font-semibold text-foreground mb-3 opacity-0 animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            Pulse Meeting Intelligence Protocol
          </p>
          <p
            className="text-sm md:text-base text-muted-foreground mb-12 leading-relaxed max-w-xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            {ru
              ? 'Нейронка Pulsia анализирует оффлайн-встречи и находит идеальные совпадения между участниками — клиентов, партнёров, инвесторов. Без интерфейсов — только живые данные.'
              : 'Pulsia AI analyzes offline meetings and finds perfect matches between participants — clients, partners, investors. No interface, no profiles — only live data.'}
          </p>

          {/* Stats */}
          <div
            className="flex items-center justify-center gap-3 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <span className="text-5xl md:text-6xl font-black rainbow-text">
              {count}+
            </span>
            <span className="text-sm md:text-base text-muted-foreground text-left leading-tight">
              {ru ? 'предпринимателей' : 'entrepreneurs'}<br />
              {ru ? 'с оборотом $2–30M' : 'with $2–30M revenue'}
            </span>
          </div>

          {/* CTA */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold rounded-xl border-border hover:bg-secondary gap-3"
              onClick={() => window.open('https://t.me/pulsecommunityopenrus', '_blank')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#229ED9]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              {ru ? 'Вступить в Telegram' : 'Join Telegram'}
            </Button>
          </div>

          {/* Feature cards row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 opacity-0 animate-fade-up"
            style={{ animationDelay: '600ms' }}
          >
            {[
              {
                icon: '🧠',
                color: 'bg-violet-100 text-violet-600',
                title: 'Pulsia AI',
                sub: ru ? 'помнит всё' : 'remembers all',
              },
              {
                icon: '☕',
                color: 'bg-orange-100 text-orange-600',
                title: 'CoffeeSync',
                sub: ru ? 'каждый четверг 11:00' : 'every Thursday 11 AM',
              },
              {
                icon: '🌍',
                color: 'bg-green-100 text-green-600',
                title: ru ? 'Глобальная сеть' : 'Global Network',
                sub: ru ? 'один формат, все города' : 'one format, all cities',
              },
              {
                icon: '🎯',
                color: 'bg-pink-100 text-pink-600',
                title: ru ? '1 контакт/неделю' : '1 match/week',
                sub: ru ? 'целевые от Pulsia' : 'targeted by Pulsia',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-lg`}>
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-foreground">{item.title}</span>
                <span className="text-xs text-muted-foreground">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
