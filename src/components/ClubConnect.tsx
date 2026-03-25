
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Percent, DollarSign, UserPlus, Bot, Clock, Link, CheckCircle2 } from 'lucide-react';

const ClubConnect: React.FC = () => {
  const { language } = useLanguage();

  const requirements = language === 'ru' ? [
    { icon: <Users className="w-5 h-5" />, text: 'Не менее 200 участников' },
    { icon: <Percent className="w-5 h-5" />, text: 'Не менее 10% участников имеют интро' },
    { icon: <DollarSign className="w-5 h-5" />, text: '$700/год · первым 30 комьюнити первый год — бесплатно' },
  ] : [
    { icon: <Users className="w-5 h-5" />, text: 'At least 200 members' },
    { icon: <Percent className="w-5 h-5" />, text: 'At least 10% of members have intros' },
    { icon: <DollarSign className="w-5 h-5" />, text: '$700/year · first 30 communities — first year free' },
  ];

  const steps = language === 'ru' ? [
    {
      num: '1',
      title: 'Добавь двух участников в свой клуб',
      description: 'Открой свой Telegram-чат и добавь:',
      details: [
        { avatar: 'LA', handle: '@lavadaja', role: 'основатель Pulse · модерация заявки' },
        { avatar: 'PB', handle: '@pulsiaprotocol_bot', role: 'бот · сбор интро и создание карточек' },
      ],
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      num: '2',
      title: 'Ожидай модерацию',
      description: 'Бот проверяет соответствие условиям: число участников, наличие интро, активность чата. Участие фаундера не требуется.',
      badge: '⏱ до 3 рабочих дней',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      num: '3',
      title: 'Закрепи ссылку в чате',
      description: 'После одобрения бот пришлёт персональную ссылку на Pulse Feed твоего клуба. Закрепи её в чате — и участники у которых было интро увидят готовую ленту заполненных профилей.',
      gradient: 'from-orange-500 to-amber-400',
    },
  ] : [
    {
      num: '1',
      title: 'Add two members to your club',
      description: 'Open your Telegram chat and add:',
      details: [
        { avatar: 'LA', handle: '@lavadaja', role: 'Pulse founder · application review' },
        { avatar: 'PB', handle: '@pulsiaprotocol_bot', role: 'bot · intro collection & card creation' },
      ],
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      num: '2',
      title: 'Wait for moderation',
      description: 'The bot checks requirements: member count, intros, chat activity. No founder involvement needed.',
      badge: '⏱ up to 3 business days',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      num: '3',
      title: 'Pin the link in your chat',
      description: 'After approval, the bot sends a personal link to your club\'s Pulse Feed. Pin it — members who had intros will see a ready-made feed of filled profiles.',
      gradient: 'from-orange-500 to-amber-400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Requirements */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pulse-orange/10 text-pulse-orange border-pulse-orange/30 text-sm">
            {language === 'ru' ? 'Условия подключения' : 'Connection requirements'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            {language === 'ru' ? 'Для клубов и комьюнити' : 'For clubs & communities'}
          </h2>
        </div>

        <div className="grid gap-4 mb-16">
          {requirements.map((req, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-sm">
              <span className="text-pulse-green flex-shrink-0">{req.icon}</span>
              <span className="text-base font-medium">{req.text}</span>
            </div>
          ))}
        </div>

        {/* How to connect */}
        <div id="how-to-connect" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
            {language === 'ru' ? 'Как подключить комьюнити — 3 шага' : 'How to connect — 3 steps'}
          </h2>

          <div className="space-y-6">
            {steps.map((step) => (
              <Card key={step.num} className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md`}>
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground font-inter mb-3">{step.description}</p>
                      
                      {step.details && (
                        <div className="space-y-3 mt-4">
                          {step.details.map((d, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pulse-green to-pulse-blue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                {d.avatar}
                              </div>
                              <div>
                                <span className="font-mono text-sm font-semibold">{d.handle}</span>
                                <p className="text-xs text-muted-foreground">{d.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.badge && (
                        <Badge variant="secondary" className="mt-3 text-xs">
                          {step.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What participants get */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-muted/50 to-background">
          <CardContent className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-pulse-green" />
              <h3 className="text-2xl font-bold">
                {language === 'ru' ? 'Что получат участники' : 'What participants get'}
              </h3>
            </div>
            <p className="text-muted-foreground font-inter leading-relaxed text-lg">
              {language === 'ru'
                ? 'Ленту из заполненных Pulse Card — все кто писал интро, уже внутри. Остальные подтянутся сами.'
                : 'A feed of filled Pulse Cards — everyone who wrote an intro is already inside. The rest will join on their own.'}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClubConnect;
