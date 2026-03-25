
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PulseFeedDemo: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  return (
    <section id="pulse-card" className="py-20 md:py-28 warm-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-center">
            {/* Left — description */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
                Pulse Feed
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight text-foreground">
                {ru ? 'Живая лента AI-визиток' : 'Live AI business card feed'}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {ru
                  ? 'Каждый участник получает AI-визитку с анализом осей ценности, продуктов и потенциальных совпадений в сети.'
                  : 'Each member gets an AI card with value axes analysis, products, and potential network matches.'}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ☝️{' '}
                {ru
                  ? 'Это рабочий прототип — прокрутите, нажмите на карточку, откройте профиль участника.'
                  : 'This is a working prototype — scroll, click a card, or open a member profile.'}
              </p>
            </div>

            {/* Right — browser window with iframe */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-background">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground text-center truncate">
                    pulse.community/feed/coffeesync
                  </div>
                </div>
              </div>

              {/* Iframe */}
              <iframe
                src="/pulse_feed.html"
                className="w-full border-0"
                style={{ height: '550px' }}
                title="Pulse Feed Demo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseFeedDemo;
