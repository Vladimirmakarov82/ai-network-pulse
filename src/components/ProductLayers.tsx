
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CreditCard, Brain, Sparkles, Lock } from 'lucide-react';

const ProductLayers: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  const products = [
    {
      icon: <CreditCard className="w-5 h-5" />,
      name: 'Pulse Card',
      description: ru
        ? 'AI-визитка участника: оси ценности, продукты, запросы и предложения. Навсегда закрепляет бренд первого клуба.'
        : 'AI member card: value axes, products, requests and offers. Permanently carries the brand of the first club.',
      gradient: 'from-accent/15 to-accent/5',
      iconBg: 'bg-accent/15 text-accent',
    },
    {
      icon: <Brain className="w-5 h-5" />,
      name: 'PulsIA',
      description: ru
        ? 'AI-агент для знакомств внутри клуба. Находит асимметрию в профилях и предлагает релевантные знакомства.'
        : 'In-club AI networking agent. Finds profile asymmetries and suggests relevant introductions.',
      gradient: 'from-violet-500/10 to-violet-500/5',
      iconBg: 'bg-violet-500/15 text-violet-500',
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      name: 'PulsIA Plus',
      badge: ru ? 'Скоро' : 'Soon',
      description: ru
        ? 'Кросс-комьюнити знакомства. Агент ищет контакты за пределами вашего клуба — среди всех подключённых сообществ.'
        : 'Cross-community introductions. The agent finds contacts beyond your club — across all connected communities.',
      gradient: 'from-rose-500/10 to-rose-500/5',
      iconBg: 'bg-rose-500/15 text-rose-500',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase gradient-text mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {ru ? 'Продукты' : 'Products'}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              {ru ? 'Три слоя платформы' : 'Three platform layers'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${p.gradient} rounded-2xl p-7 md:p-8 card-glow gradient-border`}
              >
                <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center mb-6`}>
                  {p.icon}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium flex items-center gap-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <Lock className="w-2.5 h-2.5" />
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLayers;
