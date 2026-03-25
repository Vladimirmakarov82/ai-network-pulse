
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Users, Percent, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

const ClubConnect: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  const requirements = [
    { icon: <Users className="w-4 h-4" />, text: ru ? 'Не менее 200 участников в чате' : 'At least 200 members in chat' },
    { icon: <Percent className="w-4 h-4" />, text: ru ? 'Не менее 10% участников имеют интро' : 'At least 10% of members have intros' },
    { icon: <DollarSign className="w-4 h-4" />, text: ru ? '$700/год · первым 30 комьюнити — первый год бесплатно' : '$700/year · first 30 communities — first year free' },
  ];

  const steps = [
    {
      num: '01',
      title: ru ? 'Добавь двух участников в свой клуб' : 'Add two members to your club',
      description: ru ? 'Открой свой Telegram-чат и добавь:' : 'Open your Telegram chat and add:',
      contacts: [
        { initials: 'LA', handle: '@lavadaja', role: ru ? 'основатель Pulse · модерация заявки' : 'Pulse founder · application review' },
        { initials: 'PB', handle: '@pulsiaprotocol_bot', role: ru ? 'бот · сбор интро и создание карточек' : 'bot · intro collection & card creation' },
      ],
    },
    {
      num: '02',
      title: ru ? 'Ожидай модерацию' : 'Wait for moderation',
      description: ru
        ? 'Бот проверяет соответствие условиям: число участников, наличие интро, активность чата.'
        : 'The bot checks requirements: member count, intros, chat activity.',
      badge: ru ? '⏱ до 3 рабочих дней' : '⏱ up to 3 business days',
    },
    {
      num: '03',
      title: ru ? 'Закрепи ссылку в чате' : 'Pin the link in your chat',
      description: ru
        ? 'После одобрения бот пришлёт персональную ссылку на Pulse Feed твоего клуба. Закрепи её в чате.'
        : 'After approval, the bot sends a link to your club\'s Pulse Feed. Pin it in your chat.',
    },
  ];

  return (
    <section className="py-24 warm-section">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Requirements */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase gradient-text mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {ru ? 'Условия' : 'Requirements'}
          </p>
          <h2 className="text-2xl md:text-3xl mb-8">
            {ru ? 'Условия для клубов и комьюнити' : 'Requirements for clubs & communities'}
          </h2>
          <div className="space-y-3">
            {requirements.map((req, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl gradient-border">
                <span className="text-accent flex-shrink-0">{req.icon}</span>
                <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{req.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How to connect — 3 steps */}
        <div id="how-to-connect" className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase gradient-text mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {ru ? 'Подключение' : 'Onboarding'}
          </p>
          <h2 className="text-2xl md:text-3xl mb-10">
            {ru ? 'Как подключить комьюнити — 3 шага' : 'How to connect — 3 steps'}
          </h2>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {step.num}
                </div>
                
                <div className="flex-1 pb-6 border-b border-border last:border-b-0">
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.description}</p>

                  {step.contacts && (
                    <div className="space-y-2">
                      {step.contacts.map((c, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-secondary/60 rounded-lg">
                          <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                            {c.initials}
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
                    <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {step.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What participants get */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 gradient-border mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {ru ? 'Что получат участники' : 'What participants get'}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {ru
                  ? 'Ленту из заполненных Pulse Card — все кто писал интро, уже внутри. Остальные подтянутся сами.'
                  : 'A feed of filled Pulse Cards — everyone who wrote an intro is already inside. The rest will join on their own.'}
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base rounded-xl glow-accent"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            onClick={() => window.open('https://t.me/lavadaja', '_blank')}
          >
            {ru ? 'Подать заявку' : 'Apply now'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="mt-4 text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {ru ? 'Ответим в течение 24 часов' : 'We\'ll respond within 24 hours'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubConnect;
