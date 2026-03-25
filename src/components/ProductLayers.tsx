
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LayoutList, Brain, Sparkles, Lock } from 'lucide-react';

const ProductLayers: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  const products = [
    {
      icon: <LayoutList className="w-5 h-5" />,
      name: 'Pulse Feed',
      gradient: 'from-blue-500 to-cyan-400',
      shadow: 'shadow-blue-500/20',
      description: ru
        ? 'Единая лента участников для клуба. Фаундер видит своих людей структурированными профилями — не списком в чате. Участник переключается между десятками комьюнити и находит контакт за секунды.'
        : 'Unified participant feed for your club. Founders see people as structured profiles, not chat messages. Members switch between communities and find contacts in seconds.',
    },
    {
      icon: <Brain className="w-5 h-5" />,
      name: 'PulsIA',
      gradient: 'from-violet-500 to-purple-400',
      shadow: 'shadow-violet-500/20',
      description: ru
        ? 'Нетворкинг AI-агент внутри клуба. Знакомит участников, учитывая десятки параметров и находя асимметрию в профилях. Бесплатно внутри одного комьюнити.'
        : 'In-club AI networking agent. Connects members by analyzing dozens of parameters, finding profile asymmetries. Free within a single community.',
      extra: ru
        ? 'Спам невозможен: все знакомства только через агента.'
        : 'Spam is impossible: all introductions go through the agent.',
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      name: 'PulsIA Plus',
      gradient: 'from-pink-500 to-rose-400',
      shadow: 'shadow-pink-500/20',
      description: ru
        ? 'Кросс-комьюнити знакомства по подписке участника. Агент находит контакты за пределами клуба — в Атлантах, Реформе, Техно-регате и других подключённых комьюнити.'
        : 'Cross-community introductions via member subscription. The agent finds contacts beyond your club — across all connected communities.',
      badge: ru ? 'Временно недоступна' : 'Coming soon',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {p.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="text-[10px] bg-muted text-muted-foreground">
                      <Lock className="w-3 h-3 mr-1" />
                      {p.badge}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 md:p-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} ${p.shadow} shadow-lg flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  {p.extra && (
                    <p className="mt-3 text-xs text-pulse-green font-medium flex items-center gap-1.5">
                      <Lock className="w-3 h-3" /> {p.extra}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLayers;
