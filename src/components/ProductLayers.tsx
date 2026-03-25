
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
      color: 'bg-accent/10 text-accent',
    },
    {
      icon: <Brain className="w-5 h-5" />,
      name: 'PulsIA',
      description: ru
        ? 'AI-агент для знакомств внутри клуба. Находит асимметрию в профилях и предлагает релевантные знакомства. Спам невозможен.'
        : 'In-club AI networking agent. Finds profile asymmetries and suggests relevant introductions. Spam impossible.',
      color: 'bg-violet-500/10 text-violet-500 dark:bg-violet-400/10 dark:text-violet-400',
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      name: 'PulsIA Plus',
      badge: ru ? 'Скоро' : 'Soon',
      description: ru
        ? 'Кросс-комьюнити знакомства. Агент ищет контакты за пределами вашего клуба — среди всех подключённых сообществ.'
        : 'Cross-community introductions. The agent finds contacts beyond your club — across all connected communities.',
      color: 'bg-rose-500/10 text-rose-500 dark:bg-rose-400/10 dark:text-rose-400',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {ru ? 'Продукты' : 'Products'}
            </p>
            <h2 className="text-3xl md:text-4xl">
              {ru ? 'Три слоя платформы' : 'Three platform layers'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl ring-1 ring-border p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`w-11 h-11 rounded-xl ${p.color} flex items-center justify-center mb-5`}>
                  {p.icon}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium flex items-center gap-1"
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
