
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Percent, DollarSign, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

const ClubConnect: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  const requirements = [
    { icon: <Users className="w-5 h-5" />, text: ru ? 'Не менее 200 участников в чате' : 'At least 200 members in chat' },
    { icon: <Percent className="w-5 h-5" />, text: ru ? 'Не менее 10% участников имеют интро' : 'At least 10% of members have intros' },
    { icon: <DollarSign className="w-5 h-5" />, text: ru ? '$700/год · первым 30 комьюнити — первый год бесплатно' : '$700/year · first 30 communities — first year free' },
  ];

  const steps = [
    {
      num: '1',
      title: ru ? 'Добавь двух участников в свой клуб' : 'Add two members to your club',
      description: ru ? 'Открой свой Telegram-чат и добавь:' : 'Open your Telegram chat and add:',
      contacts: [
        { avatar: 'LA', handle: '@lavadaja', role: ru ? 'основатель Pulse · модерация заявки' : 'Pulse founder · application review' },
        { avatar: 'PB', handle: '@pulsiaprotocol_bot', role: ru ? 'бот · сбор интро и создание карточек' : 'bot · intro collection & card creation' },
      ],
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      num: '2',
      title: ru ? 'Ожидай модерацию' : 'Wait for moderation',
      description: ru
        ? 'Бот проверяет соответствие условиям: число участников, наличие интро, активность чата. Участие фаундера не требуется.'
        : 'The bot checks requirements: member count, intros, chat activity. No founder involvement needed.',
      badge: ru ? '⏱ до 3 рабочих дней' : '⏱ up to 3 business days',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      num: '3',
      title: ru ? 'Закрепи ссылку в чате' : 'Pin the link in your chat',
      description: ru
        ? 'После одобрения бот пришлёт персональную ссылку на Pulse Feed твоего клуба. Закрепи её в чате — и участники, у которых было интро, увидят готовую ленту заполненных профилей.'
        : 'After approval, the bot sends a link to your club\'s Pulse Feed. Pin it — members who had intros will see a ready-made feed.',
      gradient: 'from-orange-500 to-amber-400',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Slot urgency block */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center gap-3 bg-card border border-border/50 rounded-2xl px-10 py-8 shadow-xl">
            <div className="flex items-center gap-2 text-pulse-orange">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {ru ? 'Ограниченный набор' : 'Limited enrollment'}
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-6xl md:text-7xl font-bold text-pulse-orange tracking-tighter">5</span>
              <span className="text-lg text-muted-foreground font-inter">
                {ru ? 'слотов до 30 марта' : 'slots until March 30'}
              </span>
            </div>
            <p className="text-sm text-muted-foreground/70 font-inter max-w-sm">
              {ru
                ? 'Заявок больше, чем слотов. Первым 30 комьюнити — первый год бесплатно.'
                : 'More applications than slots. First 30 communities — first year free.'}
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
            {ru ? 'Условия для клубов и комьюнити' : 'Requirements for clubs & communities'}
          </h2>
          <div className="space-y-3">
            {requirements.map((req, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-sm">
                <span className="text-pulse-green flex-shrink-0">{req.icon}</span>
                <span className="text-base font-medium">{req.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How to connect — 3 steps */}
        <div id="how-to-connect" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
            {ru ? 'Как подключить комьюнити — 3 шага' : 'How to connect — 3 steps'}
          </h2>

          <div className="space-y-5">
            {steps.map((step) => (
              <Card key={step.num} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Step number sidebar */}
                    <div className={`w-14 md:w-16 flex-shrink-0 bg-gradient-to-b ${step.gradient} flex items-start justify-center pt-6`}>
                      <span className="text-2xl font-bold text-white">{step.num}</span>
                    </div>
                    <div className="p-5 md:p-6 flex-1">
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground font-inter leading-relaxed">{step.description}</p>

                      {step.contacts && (
                        <div className="space-y-2 mt-4">
                          {step.contacts.map((c, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pulse-green to-pulse-blue flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                                {c.avatar}
                              </div>
                              <div>
                                <span className="font-mono text-sm font-semibold">{c.handle}</span>
                                <p className="text-xs text-muted-foreground">{c.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.badge && (
                        <Badge variant="secondary" className="mt-4 text-xs">{step.badge}</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What participants get */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-pulse-green/5 to-transparent mb-10">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-pulse-green flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {ru ? 'Что получат участники' : 'What participants get'}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {ru
                    ? 'Ленту из заполненных Pulse Card — все кто писал интро, уже внутри. Остальные подтянутся сами.'
                    : 'A feed of filled Pulse Cards — everyone who wrote an intro is already inside. The rest will join on their own.'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-pulse-green hover:bg-pulse-green/90 text-white font-semibold px-8 shadow-lg shadow-pulse-green/20"
            onClick={() => window.open('https://t.me/lavadaja', '_blank')}
          >
            {ru ? 'Подать заявку' : 'Apply now'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            {ru ? 'Ответим в течение 24 часов' : 'We\'ll respond within 24 hours'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubConnect;
