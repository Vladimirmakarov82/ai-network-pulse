
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Globe, Briefcase, MessageCircle, Star, ChevronRight } from 'lucide-react';

const DEMO_PROFILES = [
  {
    id: 1,
    name: 'Алексей Петров',
    nameEn: 'Alexey Petrov',
    avatar: 'АП',
    club: 'SOYUZzniki',
    clubColor: '#f97316',
    role: 'CEO · EdTech платформа',
    roleEn: 'CEO · EdTech platform',
    location: 'Дубай, ОАЭ',
    locationEn: 'Dubai, UAE',
    revenue: '$4.2M',
    tagline: 'Масштабируем онлайн-обучение на MENA-регион',
    taglineEn: 'Scaling online education to MENA region',
    tags: ['EdTech', 'AI', 'B2B SaaS', 'MENA'],
    request: 'Ищу партнёра по контенту на арабском языке',
    requestEn: 'Looking for content partner in Arabic language',
    offer: 'Готов делиться опытом выхода на рынок ОАЭ',
    offerEn: 'Can share UAE market entry experience',
    matchScore: 87,
  },
  {
    id: 2,
    name: 'Мария Козлова',
    nameEn: 'Maria Kozlova',
    avatar: 'МК',
    club: 'SOYUZzniki',
    clubColor: '#f97316',
    role: 'Основатель · Консалтинг',
    roleEn: 'Founder · Consulting',
    location: 'Бали, Индонезия',
    locationEn: 'Bali, Indonesia',
    revenue: '$1.8M',
    tagline: 'Помогаю IT-компаниям выстроить процессы',
    taglineEn: 'Helping IT companies build processes',
    tags: ['Consulting', 'Operations', 'IT', 'Remote'],
    request: 'Ищу клиентов на стратегический консалтинг',
    requestEn: 'Looking for strategic consulting clients',
    offer: 'Бесплатный аудит процессов для участников',
    offerEn: 'Free process audit for community members',
    matchScore: 72,
  },
  {
    id: 3,
    name: 'Дмитрий Волков',
    nameEn: 'Dmitry Volkov',
    avatar: 'ДВ',
    club: 'SOYUZzniki',
    clubColor: '#f97316',
    role: 'CTO · Fintech',
    roleEn: 'CTO · Fintech',
    location: 'Лиссабон, Португалия',
    locationEn: 'Lisbon, Portugal',
    revenue: '$12M',
    tagline: 'Строим платёжную инфраструктуру для Европы',
    taglineEn: 'Building payment infrastructure for Europe',
    tags: ['Fintech', 'Payments', 'Crypto', 'Europe'],
    request: 'Ищу CFO с опытом в регулируемых рынках',
    requestEn: 'Looking for CFO with regulated markets experience',
    offer: 'Интеграция платежей для участников сети',
    offerEn: 'Payment integration for network members',
    matchScore: 94,
  },
];

const PulseCardDemo: React.FC = () => {
  const { language } = useLanguage();
  const [activeCard, setActiveCard] = useState(0);
  const ru = language === 'ru';

  const profile = DEMO_PROFILES[activeCard];

  return (
    <section id="pulse-card" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-4">
            <Badge className="mb-4 bg-pulse-green/10 text-pulse-green border-pulse-green/30">
              Pulse Card
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              {ru ? 'Единый стандарт описания бизнес-участников' : 'A universal standard for business profiles'}
            </h2>
            <p className="text-muted-foreground font-inter max-w-2xl text-base leading-relaxed">
              {ru
                ? 'Обновляется автоматически на основе интро. Работает на любом нетворкинге. Рост 200–300 участников в неделю.'
                : 'Auto-updated based on intros. Works at any networking event. Growing 200–300 participants per week.'}
            </p>
          </div>

          {/* Card demo */}
          <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6">
            {/* Left: profile list */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {DEMO_PROFILES.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveCard(i)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 min-w-[220px] lg:min-w-0 ${
                    i === activeCard
                      ? 'bg-card shadow-md border border-border/50'
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pulse-green to-pulse-blue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {p.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{ru ? p.name : p.nameEn}</p>
                    <p className="text-xs text-muted-foreground truncate">{ru ? p.role : p.roleEn}</p>
                  </div>
                  {i === activeCard && <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto flex-shrink-0 hidden lg:block" />}
                </button>
              ))}
            </div>

            {/* Right: full card */}
            <div className="bg-card rounded-2xl border border-border/50 shadow-xl overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-foreground/[0.03] to-transparent p-6 md:p-8 border-b border-border/30">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pulse-green to-pulse-blue flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {profile.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{ru ? profile.name : profile.nameEn}</h3>
                      <p className="text-sm text-muted-foreground">{ru ? profile.role : profile.roleEn}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{ru ? profile.location : profile.locationEn}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-pulse-green">{profile.revenue}</div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{ru ? 'оборот' : 'revenue'}</span>
                  </div>
                </div>

                {/* Club badge — key branding element */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-background/80">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ backgroundColor: profile.clubColor }}>
                    {profile.club[0]}
                  </div>
                  <span className="text-xs font-medium">{profile.club}</span>
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                    {ru ? 'первый клуб' : 'first club'}
                  </Badge>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8 space-y-5">
                {/* Tagline */}
                <div>
                  <p className="text-base font-medium">{ru ? profile.tagline : profile.taglineEn}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {profile.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Request & Offer */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-pulse-orange" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {ru ? 'Запрос' : 'Looking for'}
                      </span>
                    </div>
                    <p className="text-sm">{ru ? profile.request : profile.requestEn}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-pulse-green" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {ru ? 'Предлагает' : 'Offering'}
                      </span>
                    </div>
                    <p className="text-sm">{ru ? profile.offer : profile.offerEn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-6 text-sm text-muted-foreground font-inter leading-relaxed max-w-2xl">
            ☝️ {ru
              ? 'В карточке участника навсегда закрепляется бренд первого клуба, которое присоединило пользователя. На примере — Клуб SOYUZzniki.'
              : 'The participant\'s card permanently carries the brand of the first club that onboarded them. Example — Club SOYUZzniki.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PulseCardDemo;
