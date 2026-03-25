
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, LayoutList, Brain, Sparkles } from 'lucide-react';

const ProductLayers: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="product" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Pulse Card — with iframe */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg">
              <CreditCard className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pulse Card</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-3 max-w-3xl font-inter">
            {language === 'ru'
              ? 'Единый стандарт описания бизнес-участников. Обновляется автоматически, работает на любом нетворкинге.'
              : 'A universal standard for business participant profiles. Auto-updated, works at any networking event.'}
          </p>
          <p className="text-base text-muted-foreground/70 mb-2 font-inter">
            {language === 'ru'
              ? 'Рост: 200–300 новых участников в неделю.'
              : 'Growth: 200–300 new participants per week.'}
          </p>
          <p className="text-sm text-pulse-green font-medium mb-8">
            {language === 'ru'
              ? '☝️ В карточке участника закрепляется название бренда первого клуба/комьюнити, которое присоединило пользователя. На примере — Клуб SOYUZzniki.'
              : '☝️ The participant\'s card permanently carries the brand of the first club that onboarded them. Example — Club SOYUZzniki.'}
          </p>

          {/* Iframe embed */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-card">
            <iframe
              src="https://claude.ai/public/artifacts/a9591c40-35bb-48b7-9b1b-a8650d5ef92a"
              className="w-full h-[500px] md:h-[600px] border-0"
              title="Pulse Card Demo"
              allow="clipboard-read; clipboard-write"
            />
          </div>
        </div>

        {/* Pulse Feed */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
              <LayoutList className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pulse Feed</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl font-inter">
            {language === 'ru'
              ? 'Единая лента бизнес-участников для клуба. Фаундер впервые видит своих людей не списком в чате, а структурированными профилями. Участник переключается между десятками комьюнити и находит нужный контакт за секунды.'
              : 'A unified participant feed for your club. Founders see their people as structured profiles — not chat messages. Members switch between dozens of communities and find the right contact in seconds.'}
          </p>
        </div>

        {/* PulsIA + PulsIA Plus */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center text-white shadow-lg">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">PulsIA</h3>
              </div>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {language === 'ru'
                  ? 'Нетворкинг AI-агент. Знакомит людей друг с другом, учитывая десятки параметров, находя асимметрию в профилях участников. Работает бесплатно внутри одного комьюнити.'
                  : 'AI networking agent. Connects people by analyzing dozens of parameters, finding asymmetries in participant profiles. Free within a single community.'}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                {language === 'ru' ? 'Временно недоступна' : 'Coming soon'}
              </Badge>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">PulsIA Plus</h3>
              </div>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {language === 'ru'
                  ? 'Кросс-комьюнити знакомства по платной подписке участника. Агент находит релевантные контакты за пределами своего клуба — в Атлантах, Реформе, Техно-регате и других подключённых комьюнити.'
                  : 'Cross-community introductions via paid member subscription. The agent finds relevant contacts beyond your club — across all connected communities.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductLayers;
