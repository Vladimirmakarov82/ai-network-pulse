
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PulseFeedDemo: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  return (
    <section id="pulse-card" className="py-20 md:py-32 warm-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Two-column: text left, demo right */}
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-14 items-center">
            {/* Left — description */}
            <div>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase gradient-text mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Pulse Feed
              </p>
              <h2 className="text-3xl md:text-4xl mb-5 leading-tight">
                {ru ? 'Живая лента AI-визиток' : 'Live AI business card feed'}
              </h2>
              <p
                className="text-muted-foreground text-base leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {ru
                  ? 'Каждый участник получает AI-визитку с анализом осей ценности, продуктов и потенциальных совпадений в сети.'
                  : 'Each member gets an AI card with value axes analysis, products, and potential network matches.'}
              </p>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                ☝️{' '}
                {ru
                  ? 'Это рабочий прототип — прокрутите, нажмите на карточку, откройте профиль участника.'
                  : 'This is a working prototype — scroll, click a card, or open a member profile.'}
              </p>
            </div>

            {/* Right — browser window with iframe */}
            <div className="rounded-2xl overflow-hidden shadow-2xl card-glow gradient-border bg-card">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(0 70% 65%)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(45 80% 60%)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(140 60% 50%)' }} />
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
                style={{ height: '600px' }}
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
