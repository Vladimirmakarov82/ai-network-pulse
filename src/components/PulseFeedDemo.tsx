
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PulseFeedDemo: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  return (
    <section id="pulse-card" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Pulse Feed
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              {ru ? 'Живая лента AI-визиток' : 'Live AI business card feed'}
            </h2>
            <p
              className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {ru
                ? 'Каждый участник получает AI-визитку с анализом осей ценности, продуктов и потенциальных совпадений в сети.'
                : 'Each member gets an AI card with value axes analysis, products, and potential network matches.'}
            </p>
          </div>

          {/* Interactive browser window */}
          <div className="rounded-2xl ring-1 ring-border overflow-hidden shadow-2xl shadow-black/20 bg-card">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background/60 rounded-md px-3 py-1 text-xs text-muted-foreground text-center truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  pulse.community/feed/coffeesync
                </div>
              </div>
            </div>

            {/* Iframe */}
            <iframe
              src="/pulse_feed.html"
              className="w-full border-0"
              style={{ height: '680px' }}
              title="Pulse Feed Demo"
            />
          </div>

          {/* Caption */}
          <p
            className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ☝️{' '}
            {ru
              ? 'Это рабочий прототип ленты клуба CoffeeSync. Попробуйте прокрутить, нажать на карточку или открыть профиль участника.'
              : 'This is a working prototype of the CoffeeSync club feed. Try scrolling, clicking a card, or opening a member profile.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PulseFeedDemo;
