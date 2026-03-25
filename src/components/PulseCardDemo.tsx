
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, MessageCircle, Star, ChevronRight } from 'lucide-react';

const DEMO_PROFILES = [
  {
    id: 1,
    name: 'Алексей Петров',
    nameEn: 'Alexey Petrov',
    initials: 'АП',
    club: 'SOYUZzniki',
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
  },
  {
    id: 2,
    name: 'Мария Козлова',
    nameEn: 'Maria Kozlova',
    initials: 'МК',
    club: 'SOYUZzniki',
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
  },
  {
    id: 3,
    name: 'Дмитрий Волков',
    nameEn: 'Dmitry Volkov',
    initials: 'ДВ',
    club: 'SOYUZzniki',
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
  },
];

const PulseCardDemo: React.FC = () => {
  const { language } = useLanguage();
  const [activeCard, setActiveCard] = useState(0);
  const ru = language === 'ru';
  const profile = DEMO_PROFILES[activeCard];

  return (
    <section id="pulse-card" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Pulse Card
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              {ru ? 'Единый стандарт описания бизнес-участников' : 'A universal standard for business profiles'}
            </h2>
            <p className="text-muted-foreground text-base max-w-xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {ru
                ? 'Если пользователь создал Pulse Card в твоём комьюнити, он становится носителем бренда твоего комьюнити.'
                : 'When a user creates a Pulse Card in your community, they become a carrier of your brand.'}
            </p>
          </div>

          {/* Card demo */}
          <div className="grid lg:grid-cols-[240px_1fr] gap-6">
            {/* Left: profile selector */}
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {DEMO_PROFILES.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveCard(i)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 min-w-[200px] lg:min-w-0 ${
                    i === activeCard
                      ? 'bg-card shadow-md ring-1 ring-border'
                      : 'hover:bg-card/60'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center text-primary-foreground text-xs font-semibold flex-shrink-0">
                    {p.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ru ? p.name : p.nameEn}</p>
                    <p className="text-xs text-muted-foreground truncate">{ru ? p.role : p.roleEn}</p>
                  </div>
                  {i === activeCard && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground ml-auto flex-shrink-0 hidden lg:block" />}
                </button>
              ))}
            </div>

            {/* Right: full card */}
            <div className="bg-card rounded-2xl ring-1 ring-border shadow-xl overflow-hidden">
              {/* Card header */}
              <div className="p-6 md:p-8 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center text-primary-foreground text-lg font-bold shadow-lg">
                      {profile.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>{ru ? profile.name : profile.nameEn}</h3>
                      <p className="text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ru ? profile.role : profile.roleEn}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{ru ? profile.location : profile.locationEn}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-accent tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>{profile.revenue}</div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {ru ? 'оборот' : 'revenue'}
                    </span>
                  </div>
                </div>

                {/* Club badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50">
                  <div className="w-4 h-4 rounded bg-foreground flex items-center justify-center text-[7px] font-bold text-primary-foreground">
                    S
                  </div>
                  <span className="text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{profile.club}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-medium">
                    {ru ? 'первый клуб' : 'first club'}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8 space-y-5">
                <p className="text-base font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {ru ? profile.tagline : profile.taglineEn}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {profile.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Request & Offer */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-secondary/70 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {ru ? 'Запрос' : 'Looking for'}
                      </span>
                    </div>
                    <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ru ? profile.request : profile.requestEn}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/70 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {ru ? 'Предлагает' : 'Offering'}
                      </span>
                    </div>
                    <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ru ? profile.offer : profile.offerEn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ☝️ {ru
              ? 'В карточке участника навсегда закрепляется бренд первого клуба, которое присоединило пользователя. На примере — Клуб SOYUZzniki.'
              : 'The participant\'s card permanently carries the brand of the first club that onboarded them. Example — Club SOYUZzniki.'}
          </p>

          {/* Growth stat */}
          <div className="mt-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {ru ? 'Рост 200–300 участников в неделю' : 'Growing 200–300 participants per week'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseCardDemo;
