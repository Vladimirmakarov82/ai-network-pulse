
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Clock, MapPin, Calendar, Mic, Zap, Target, ChevronDown, ChevronUp, Crown, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import groupPhoto from '@/assets/coffeesync4-group.jpg';

const TAG_CLOUD = [
  { text: 'Нетворкинг', size: 'text-2xl', color: 'text-pulse-green' },
  { text: 'AI-автоматизация', size: 'text-xl', color: 'text-pulse-blue' },
  { text: 'Недвижимость', size: 'text-lg', color: 'text-pulse-orange' },
  { text: 'Системы управления', size: 'text-xl', color: 'text-pulse-purple' },
  { text: 'Масштабирование', size: 'text-lg', color: 'text-pulse-pink' },
  { text: 'Консалтинг', size: 'text-base', color: 'text-pulse-blue' },
  { text: 'Личный бренд', size: 'text-lg', color: 'text-pulse-green' },
  { text: 'Оффлайн-продажи', size: 'text-base', color: 'text-pulse-orange' },
  { text: 'Финпланирование', size: 'text-base', color: 'text-pulse-purple' },
  { text: 'IT-стартапы', size: 'text-sm', color: 'text-pulse-blue' },
  { text: 'Арендный бизнес', size: 'text-base', color: 'text-pulse-orange' },
  { text: 'CRM', size: 'text-sm', color: 'text-pulse-green' },
  { text: 'Делегирование', size: 'text-lg', color: 'text-pulse-pink' },
  { text: 'Бали', size: 'text-base', color: 'text-pulse-purple' },
  { text: 'Партнёрства', size: 'text-xl', color: 'text-pulse-green' },
  { text: 'Лидогенерация', size: 'text-base', color: 'text-pulse-blue' },
  { text: 'Рестораны', size: 'text-sm', color: 'text-pulse-orange' },
  { text: 'AI-агенты', size: 'text-lg', color: 'text-pulse-blue' },
];

const SPEECH_DATA = [
  { name: 'Владимир Макаров', percent: 42, role: 'organizer' },
  { name: 'Анна Козлова', percent: 28, role: 'participant' },
  { name: 'Егор', percent: 18, role: 'participant' },
  { name: 'Алексей Скопин', percent: 12, role: 'participant' },
];

const TOP_REQUESTS = [
  'Привлечение дешёвого банковского финансирования через прямые контакты с директорами банков',
  'Площадки для качественного оффлайн-нетворкинга и клиенты на построение систем управления',
  'Проверка гипотез автоматизации, где AI даёт кратный эффект без команды',
];

const SYNC_SCORES = [
  { name: 'Анна Козлова', score: 8.6, color: 'from-green-400 to-emerald-500' },
  { name: 'Алексей Скопин', score: 8.0, color: 'from-blue-400 to-cyan-500' },
  { name: 'Егор', score: 7.8, color: 'from-orange-400 to-amber-500' },
];

interface Participant {
  name: string;
  role: string;
  tagline: string;
  experience: string;
  insight: string;
  insight2?: string;
  facts: string;
  earnings: string;
  focus: string;
  request: string;
}

const PARTICIPANTS: Participant[] = [
  {
    name: 'Анна Козлова',
    role: 'Участник',
    tagline: 'Из хаотичных бизнесов делает управляемые системы и сразу замечает, когда собственник работает ассистентом у своей команды.',
    experience: 'С 2010-х выстроила сеть пекарен (25 точек в Москве и Петербурге) и продала крупному игроку. В 2020 открыла ресторан Joy на Бали и вывела его на рост показателей в 3 раза в период ковида. За карьеру наняла более 100 управляющих и директоров. В 2023–2024 открыла 7 ресторанов в разных странах, включая США, Испанию, Италию и Черногорию. С 2020 года развивает консалтинг по построению систем управления и масштабированию команд.',
    insight: 'После анализа 35 клиентов за год увидела, что только 2 сделки пришли из Instagram при вложениях 500 000 ₽ в инфопродукт. Остальные клиенты пришли через личные знакомства и рекомендации. Сместила приоритет на оффлайн-нетворкинг как основной канал продаж.',
    insight2: 'Работа с операционным ресторанным бизнесом дала понимание, что самые сложные процессы уже пройдены. Начала работать с IT-стартапами и другими отраслями, применяя ту же систему построения структуры, найма и управления.',
    facts: 'В 2018 году внедрила собственную систему финансового планирования с распределением каждого рубля по фондам и масштабировала её на 25 точек через собственную Excel-программу. Сейчас внедряет эту модель вместе с финансовым партнёром (опыт более 700 компаний).',
    earnings: 'Консалтинг по построению систем управления, структуры и команды. Проекты по открытию ресторанов и девелопмент операционных процессов.',
    focus: 'Переход в оффлайн-нетворкинг как основной канал продаж. Расширение географии проектов. Развитие собственной платформы управления бизнесом и внедрение AI-инструментов.',
    request: 'Партнёрства и площадки для качественного нетворкинга на Бали и в других странах. Клиенты на построение систем управления и масштабирование бизнеса.',
  },
  {
    name: 'Алексей Скопин',
    role: 'Участник',
    tagline: 'Работает с недвижимостью так, будто у каждого здания есть срок годности и его нужно успеть продать, пока оно стало вкуснее.',
    experience: '20 лет в коммерческой недвижимости. Две компании, одна — партнёрство с Артуром Исхаковым. Покупает недооценённые объекты в городах-миллионниках России (Екатеринбург, Уфа, Казань, Москва), проводит капитальные и функциональные улучшения, заполняет арендаторами и продаёт как готовый арендный бизнес. Последние сделки — объекты уровня 5 000 м² и чеки около $4 млн.',
    insight: 'Ключевой драйвер ликвидности — 100% заполнение площадей. Решение — доводить объект до полной аренды и только после этого выходить в продажу с циклом сделки до 6 месяцев.',
    facts: 'Работает только с банками и институциональными деньгами, частных инвесторов не привлекает. Использует кредитование с обеспечением 3× от суммы займа. Типовой продукт — арендный бизнес с окупаемостью 8–12 лет.',
    earnings: 'Маржа создаётся на разнице входа в недооценённый актив, росте арендного потока после улучшений и последующей продаже как готового денежного потока.',
    focus: 'Полная релокация в Москву как основной рынок. Усиление команды аренды и продаж. Оптимизация финансовой модели.',
    request: 'Привлечение более дешёвого банковского финансирования через прямые контакты с директорами банков и улучшение управленческой методологии для масштабирования портфеля.',
  },
  {
    name: 'Егор',
    role: 'Участник',
    tagline: '15 лет в Индонезии. Построил экосистему сервисов на Бали и теперь создаёт AI-агентов, которые заменяют целые отделы.',
    experience: '15 лет в Индонезии. Запустил BaliForum и вокруг него экосистему сервисов: юридический и бухгалтерский бизнес (Legal Indonesia), туристические и транспортные услуги, видеопродакшн. Несколько компаний в разных нишах, операционкой сейчас не занимается.',
    insight: 'При работе над автоматизацией увидел, что доступ к данным компании даёт кратный рост эффективности. Решение — строить единый агент с доступом к CRM, чатам, задачам и финансам, который выступает high-level ассистентом руководителя.',
    facts: 'Ежедневно тратит 10–14 часов на разработку и внедрение собственных ботов (Clowd/Clowbot). Уже использует агента для личных задач: ремонт техники, поиск подрядчиков, коммуникации через мессенджеры.',
    earnings: 'Доход формируют действующие бизнесы на Бали: юридические услуги, туризм, аренда транспорта, продакшн. Автоматизация снижает операционные издержки.',
    focus: 'Создание операционной системы компании на базе AI-агентов: управление задачами, клиентскими коммуникациями, платежами и поддержкой в одном контуре.',
    request: 'Проверка гипотез, где автоматизация даёт кратный эффект и позволяет запускать новые компании без команды, используя связку AI-инструментов.',
  },
];

const ScoreRing: React.FC<{ score: number; gradient: string; name: string }> = ({ score, gradient, name }) => {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 10) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="hsl(var(--muted))" strokeWidth="6" fill="none" />
          <circle
            cx="50" cy="50" r="40"
            stroke="url(#grad)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{score}</span>
        </div>
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};

const ParticipantCard: React.FC<{ participant: Participant; isOrganizer?: boolean }> = ({ participant, isOrganizer }) => {
  const [expanded, setExpanded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const getShareText = () => {
    return `${participant.name} — ${participant.tagline}\n\n` +
      `💼 Опыт: ${participant.experience}\n\n` +
      `🎯 Запрос: ${participant.request}\n\n` +
      `Подробнее: https://ai-network-pulse.lovable.app/coffeesync/canggu-4`;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: participant.name, text: getShareText() });
      } catch {}
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const shareToTelegram = () => {
    const text = encodeURIComponent(getShareText());
    window.open(`https://t.me/share/url?url=${encodeURIComponent('https://ai-network-pulse.lovable.app/coffeesync/canggu-4')}&text=${text}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://ai-network-pulse.lovable.app/coffeesync/canggu-4')}&quote=${encodeURIComponent(getShareText())}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(getShareText());
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://ai-network-pulse.lovable.app/coffeesync/canggu-4')}`, '_blank');
    setShowShareMenu(false);
  };

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pulse-green to-pulse-blue flex items-center justify-center text-white font-bold text-lg">
            {participant.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{participant.name}</CardTitle>
              {isOrganizer && (
                <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 gap-1">
                  <Crown className="w-3 h-3" />
                  Организатор
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{participant.role}</p>
          </div>
          <div className="relative shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              title="Поделиться контактом"
            >
              <Share2 className="w-4 h-4" />
            </Button>
            {showShareMenu && (
              <div className="absolute right-0 top-full mt-1 z-50 bg-background border rounded-lg shadow-lg p-2 min-w-[180px] space-y-1">
                <button onClick={shareToTelegram} className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted flex items-center gap-2">
                  📨 Telegram
                </button>
                <button onClick={shareToWhatsApp} className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted flex items-center gap-2">
                  💬 WhatsApp
                </button>
                <button onClick={shareToFacebook} className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted flex items-center gap-2">
                  📘 Facebook
                </button>
                <button onClick={shareToLinkedIn} className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted flex items-center gap-2">
                  💼 LinkedIn
                </button>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="shrink-0"
          >
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>
        <p className="text-sm italic text-muted-foreground mt-2">{participant.tagline}</p>
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0 space-y-4 animate-fade-in">
          <div>
            <h4 className="font-semibold text-sm mb-1 text-pulse-blue">Опыт</h4>
            <p className="text-sm text-muted-foreground">{participant.experience}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1 text-pulse-green">Ключевой инсайт</h4>
            <p className="text-sm text-muted-foreground">{participant.insight}</p>
          </div>
          {participant.insight2 && (
            <div>
              <h4 className="font-semibold text-sm mb-1 text-pulse-green">Инсайт 2</h4>
              <p className="text-sm text-muted-foreground">{participant.insight2}</p>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-sm mb-1 text-pulse-purple">Интересные факты</h4>
            <p className="text-sm text-muted-foreground">{participant.facts}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1 text-pulse-orange">Модель заработка</h4>
            <p className="text-sm text-muted-foreground">{participant.earnings}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1 text-pulse-pink">Текущий фокус</h4>
            <p className="text-sm text-muted-foreground">{participant.focus}</p>
          </div>
          <div className="bg-gradient-to-r from-pulse-green/5 to-pulse-blue/5 rounded-lg p-3 border border-pulse-green/20">
            <h4 className="font-semibold text-sm mb-1 text-pulse-green">🎯 Текущий запрос</h4>
            <p className="text-sm text-muted-foreground">{participant.request}</p>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const CoffeeSync4: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>CoffeeSync Canggu #4 — Дашборд встречи | Pulse Community</title>
        <meta name="description" content="Результаты CoffeeSync #4 в Canggu: 12 участников, AI-аналитика встречи, облако тегов и ключевые запросы предпринимателей." />
        <link rel="canonical" href="https://ai-network-pulse.lovable.app/coffeesync/canggu-4" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ai-network-pulse.lovable.app/coffeesync/canggu-4" />
        <meta property="og:title" content="CoffeeSync Canggu #4 — Дашборд встречи | Pulse Community" />
        <meta property="og:description" content="Результаты CoffeeSync #4 в Canggu: 12 участников, AI-аналитика встречи, облако тегов и ключевые запросы предпринимателей." />
        <meta property="og:image" content="https://ai-network-pulse.lovable.app/og-coffeesync4.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CoffeeSync Canggu #4 — Дашборд встречи | Pulse Community" />
        <meta name="twitter:description" content="Результаты CoffeeSync #4 в Canggu: 12 участников, AI-аналитика встречи, облако тегов и ключевые запросы предпринимателей." />
        <meta name="twitter:image" content="https://ai-network-pulse.lovable.app/og-coffeesync4.png" />
      </Helmet>
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Главная
          </Button>
          <div className="flex-1" />
          <Badge variant="outline" className="border-pulse-green text-pulse-green">
            CoffeeSync #4
          </Badge>
        </div>
      </header>

      {/* Compact Header Strip */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-xl md:text-2xl font-bold">
            CoffeeSync Canggu <span className="gradient-text">#4</span>
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Чт, 11:00</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Чангу</span>
            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 4</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> ~90 мин</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Compact Metrics Strip */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Участников', value: '4', icon: Users, accent: 'text-pulse-green' },
            { label: 'Слов', value: '~12 400', icon: Mic, accent: 'text-pulse-blue' },
            { label: 'Инициатив/ч', value: '6.2', icon: Zap, accent: 'text-pulse-orange' },
            { label: 'Энергия', value: '8.4', icon: Target, accent: 'text-pulse-purple' },
          ].map((metric, i) => (
            <Card key={i} className="border-0 shadow-md">
              <CardContent className="p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center flex-shrink-0">
                  <metric.icon className={`w-5 h-5 ${metric.accent}`} />
                </div>
                <div>
                  <p className="text-xl font-bold leading-tight">{metric.value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dense 3-column grid: Scores + Speech + Tags */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Sync Value Score — compact */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-pulse-green" />
                <h3 className="text-sm font-semibold">Sync Value Score</h3>
              </div>
              <div className="space-y-2.5">
                {SYNC_SCORES.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pulse-green/20 to-pulse-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">{s.score}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{s.name}</p>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-1">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${s.color} transition-all duration-1000`}
                          style={{ width: `${(s.score / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Speech Distribution — compact */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Mic className="w-4 h-4 text-pulse-blue" />
                <h3 className="text-sm font-semibold">Распределение речи</h3>
              </div>
              <div className="space-y-2.5">
                {SPEECH_DATA.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium flex items-center gap-1">
                        {s.name}
                        {s.role === 'organizer' && <Crown className="w-3 h-3 text-amber-500" />}
                      </span>
                      <span className="text-muted-foreground tabular-nums">{s.percent}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pulse-green to-pulse-blue transition-all duration-1000"
                        style={{ width: `${s.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tag Cloud — dynamic scattered layout */}
          <Card className="border-0 shadow-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pulse-green/5 via-transparent to-pulse-purple/5" />
            <CardContent className="p-4 relative">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-pulse-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
                <h3 className="text-sm font-semibold">Облако тегов</h3>
              </div>
              <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
                {TAG_CLOUD.map((tag, i) => {
                  const rotation = i % 3 === 0 ? '-rotate-2' : i % 3 === 1 ? 'rotate-1' : '';
                  return (
                    <span
                      key={i}
                      className={`${tag.size} ${tag.color} font-semibold ${rotation} hover:scale-110 transition-transform cursor-default inline-block`}
                      style={{ opacity: 0.7 + Math.random() * 0.3 }}
                    >
                      {tag.text}
                    </span>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top-3 requests — horizontal compact */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-pulse-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <h3 className="text-sm font-semibold">Топ-3 самых чётких запроса</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              {TOP_REQUESTS.map((req, i) => (
                <div key={i} className="flex gap-2.5 items-start p-3 rounded-lg bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.05] border border-border/50">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pulse-orange to-pulse-pink flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Organizer */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Crown className="w-6 h-6 text-amber-500" />
            Организатор
          </h2>
          <Card className="border-0 shadow-lg ring-2 ring-amber-400/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  В
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <CardTitle>Владимир Макаров</CardTitle>
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 gap-1">
                      <Crown className="w-3 h-3" />
                      Организатор CoffeeSync
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Основатель Pulse Community · Организатор CoffeeSync Canggu
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Participants */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Участники встречи</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Нажмите на карточку, чтобы раскрыть подробное интро участника
          </p>
          <div className="space-y-4">
            {PARTICIPANTS.map((p) => (
              <ParticipantCard key={p.name} participant={p} />
            ))}
          </div>
        </div>

        {/* Group Photo */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <img
            src={groupPhoto}
            alt="CoffeeSync Canggu #4 — участники встречи"
            className="w-full h-auto"
          />
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Слева направо: Егор, Владимир Макаров, Анна Козлова, Алексей Скопин
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-pulse-green/10 to-pulse-blue/10 text-center">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">
              Хочешь быть на следующей встрече?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Присоединяйся к Pulse Community и получи доступ к еженедельным CoffeeSync-встречам в разных городах мира
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pulse-green to-pulse-blue text-white hover:opacity-90"
              onClick={() => window.open('https://t.me/+txlodGJtXWFjM2Uy', '_blank')}
            >
              Присоединиться
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>Pulse Community © 2025 · CoffeeSync Canggu #4</p>
      </footer>
    </div>
    </>
  );
};

export default CoffeeSync4;
