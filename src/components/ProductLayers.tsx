
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LayoutList, Brain, Sparkles, Lock } from 'lucide-react';

const ProductLayers: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  const products = [
    {
      icon: <LayoutList className="w-5 h-5" />,
      name: 'Pulse Feed',
      description: ru
        ? 'Единая лента участников для клуба. Фаундер видит своих людей структурированными профилями — не списком в чате. Участник переключается между десятками комьюнити и находит контакт за секунды.'
        : 'Unified participant feed for your club. Founders see people as structured profiles, not chat messages. Members switch between communities and find contacts in seconds.',
      accent: 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400',
    },
    {
      icon: <Brain className="w-5 h-5" />,
      name: 'PulsIA',
      description: ru
        ? 'Нетворкинг AI-агент внутри клуба. Знакомит участников, учитывая десятки параметров и находя асимметрию в профилях. Бесплатно внутри одного комьюнити.'
        : 'In-club AI networking agent. Connects members by analyzing dozens of parameters, finding profile asymmetries. Free within a single community.',
      extra: ru
        ? 'Спам невозможен: все знакомства только через агента.'
        : 'Spam is impossible: all introductions go through the agent.',
      accent: 'bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400',
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      name: 'PulsIA Plus',
      description: ru
        ? 'Кросс-комьюнити знакомства по подписке участника. Агент находит контакты за пределами клуба — в Атлантах, Реформе, Техно-регате и других подключённых комьюнити.'
        : 'Cross-community introductions via member subscription. The agent finds contacts beyond your club — across all connected communities.',
      badge: ru ? 'Временно недоступна' : 'Coming soon',
      accent: 'bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400',
    },
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className="group">
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${p.accent} flex items-center justify-center mb-5`}>
                  {p.icon}
                </div>

                {/* Title */}
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl" style={{ fontFamily: "'DM Serif Display', serif" }}>{p.name}</h3>
                  {p.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <Lock className="w-2.5 h-2.5" />
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.description}
                </p>

                {p.extra && (
                  <p className="text-xs text-accent font-medium flex items-center gap-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Lock className="w-3 h-3" /> {p.extra}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLayers;
