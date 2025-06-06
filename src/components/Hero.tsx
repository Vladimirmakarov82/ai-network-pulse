
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToPricing = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const joinTelegram = () => {
    window.open('https://t.me/pulsecommunityopenrus', '_blank');
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pulse-green/10 text-pulse-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-pulse-green rounded-full animate-pulse-glow"></div>
            {t('hero.launch.date')}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium animate-fade-in">
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button 
              size="lg"
              className="bg-pulse-green hover:bg-pulse-green/90 text-white font-semibold px-8 py-3 text-lg pulse-shadow"
              onClick={scrollToPricing}
            >
              {t('hero.cta.primary')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 font-semibold px-8 py-3 text-lg"
              onClick={joinTelegram}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.628 7.66c-.122.567-.447.707-.905.44l-2.5-1.842-1.205 1.16c-.133.133-.246.246-.505.246l.18-2.52 4.625-4.175c.2-.178-.043-.277-.31-.1l-5.72 3.6-2.46-.77c-.535-.167-.546-.535.11-.79L16.47 7.69c.447-.166.836.1.69.787z"/>
              </svg>
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Visual Elements */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pulse-green/20 rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-pulse-green rounded-full"></div>
              </div>
              <span className="text-sm font-medium">AI Matching</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pulse-blue/20 rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-pulse-blue rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Weekly Meetups</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pulse-pink/20 rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-pulse-pink rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Global Network</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pulse-orange/20 rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-pulse-orange rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Trust Economy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
