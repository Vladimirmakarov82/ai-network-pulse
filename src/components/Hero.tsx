
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [count, setCount] = useState(200);

  useEffect(() => {
    // Animate counter from 0 to 200+
    let start = 0;
    const end = 200;
    const duration = 2000;
    const stepTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  const joinTelegram = () => {
    window.open('https://t.me/pulsecommunityopenrus', '_blank');
  };

  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pulse-green/10 text-pulse-green px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-pulse-green rounded-full animate-pulse-glow"></div>
            {language === 'ru' ? 'Протокол работает' : 'Protocol is live'}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="gradient-text">
              {language === 'ru'
                ? 'Нетворкинг эффективнее в 100 раз'
                : 'Networking 100× more effective'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium animate-fade-in">
            {language === 'ru'
              ? 'Pulse Meeting Intelligence Protocol'
              : 'Pulse Meeting Intelligence Protocol'}
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            {language === 'ru'
              ? 'Нейронка Pulsia анализирует оффлайн-встречи и находит идеальные совпадения между участниками — клиентов, партнёров, инвесторов. Без интерфейса, без профилей — только живые данные.'
              : 'Pulsia AI analyzes offline meetings and finds perfect matches between participants — clients, partners, investors. No interface, no profiles — only live data.'}
          </p>

          {/* Counter */}
          <div className="mb-10 animate-fade-in">
            <div className="inline-flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-bold gradient-text">{count}+</span>
              <span className="text-lg text-muted-foreground">
                {language === 'ru'
                  ? 'предпринимателей с оборотом $2–30M'
                  : 'entrepreneurs with $2–30M revenue'}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button 
              size="lg"
              variant="outline"
              className="border-muted-foreground/20 hover:bg-muted font-semibold px-8 py-3 text-lg"
              onClick={joinTelegram}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.628 7.66c-.122.567-.447.707-.905.44l-2.5-1.842-1.205 1.16c-.133.133-.246.246-.505.246l.18-2.52 4.625-4.175c.2-.178-.043-.277-.31-.1l-5.72 3.6-2.46-.77c-.535-.167-.546-.535.11-.79L16.47 7.69c.447-.166.836.1.69.787z"/>
              </svg>
              {language === 'ru' ? 'Telegram канал' : 'Join Telegram'}
            </Button>
          </div>

          {/* Key concepts */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🧠', label: language === 'ru' ? 'ИИ Pulsia' : 'Pulsia AI', sub: language === 'ru' ? 'помнит всё' : 'remembers all' },
              { icon: '☕', label: 'CoffeeSync', sub: language === 'ru' ? 'каждый четверг 11:00' : 'every Thursday 11 AM' },
              { icon: '🌍', label: language === 'ru' ? 'Глобальная сеть' : 'Global Network', sub: language === 'ru' ? 'один формат, все города' : 'one format, all cities' },
              { icon: '🎯', label: language === 'ru' ? '1 знакомство/нед' : '1 match/week', sub: language === 'ru' ? 'целевое от Pulsia' : 'targeted by Pulsia' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-card border border-border/50 hover:shadow-md transition-shadow">
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="text-sm font-semibold">{item.label}</span>
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
