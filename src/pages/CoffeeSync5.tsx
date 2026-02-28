
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Clock, MapPin, Calendar, Mic, Zap, Target, ChevronDown, ChevronUp, Crown, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import groupPhoto from '@/assets/coffeesync5-group.jpg';

const TAG_CLOUD = [
  { text: 'Автоматизация', size: 'text-2xl', color: 'text-pulse-green' },
  { text: 'Нейронные сети', size: 'text-xl', color: 'text-pulse-blue' },
  { text: 'Контент', size: 'text-lg', color: 'text-pulse-orange' },
  { text: 'Управление', size: 'text-xl', color: 'text-pulse-purple' },
  { text: 'Продажи', size: 'text-lg', color: 'text-pulse-pink' },
  { text: 'Процессы', size: 'text-base', color: 'text-pulse-blue' },
  { text: 'Команда', size: 'text-lg', color: 'text-pulse-green' },
  { text: 'Финансы', size: 'text-base', color: 'text-pulse-orange' },
  { text: 'AI-агенты', size: 'text-lg', color: 'text-pulse-blue' },
  { text: 'Недвижимость', size: 'text-base', color: 'text-pulse-orange' },
  { text: 'Масштабирование', size: 'text-base', color: 'text-pulse-purple' },
  { text: 'Клиенты', size: 'text-base', color: 'text-pulse-green' },
  { text: 'Выручка', size: 'text-sm', color: 'text-pulse-pink' },
  { text: 'Система', size: 'text-base', color: 'text-pulse-blue' },
  { text: 'Потребность', size: 'text-base', color: 'text-pulse-purple' },
  { text: 'Рынок', size: 'text-sm', color: 'text-pulse-orange' },
  { text: 'Эффективность', size: 'text-base', color: 'text-pulse-green' },
  { text: 'Рост', size: 'text-sm', color: 'text-pulse-blue' },
  { text: 'Внедрение', size: 'text-base', color: 'text-pulse-purple' },
  { text: 'Энергия', size: 'text-sm', color: 'text-pulse-pink' },
];

const SPEECH_DATA = [
  { name: 'Владимир Макаров', percent: 42, role: 'organizer' },
  { name: 'Дарья Жмуд', percent: 23, role: 'participant' },
  { name: 'Алексей Чулков', percent: 20, role: 'participant' },
  { name: 'Алина Жажина', percent: 10, role: 'participant' },
  { name: 'Алексей Скопин', percent: 4, role: 'participant' },
];

const TOP_REQUESTS = [
  'Внедрение AI-автоматизации в существующие бизнесы без разрушения текущих процессов для получения кратного эффекта в эффективности.',
  'Масштабирование контент-стратегии и продаж через нейросети, используя автоматизацию контента и персональных AI-агентов.',
  'Сделать компанию готовой к автоматизации и масштабированию через системы и процессы, а не через расширение команды.',
];

const SYNC_SCORES = [
  { name: 'Дарья Жмуд', score: 9.5, color: 'from-green-400 to-emerald-500' },
  { name: 'Алексей Чулков', score: 8.9, color: 'from-blue-400 to-cyan-500' },
  { name: 'Алина Жажина', score: 7.1, color: 'from-orange-400 to-amber-500' },
  { name: 'Алексей Скопин', score: 6.5, color: 'from-purple-400 to-violet-500' },
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
    name: 'Дарья Жмуд',
    role: 'Участник',
    tagline: 'Специалист по автоматизации, которая не продаёт инструменты, а переводит компании на новую модель бизнеса через AI, сохраняя прибыль вместо сокращения костков.',
    experience: 'Руководитель студии (видеопродакшн или аналогичного направления). Занимается внедрением AI-решений для автоматизации контента и процессов в различных компаниях.',
    insight: 'Внедрение нейронок — это не просто сокращение затрат, это переход на новую модель бизнеса, где экономия на одном направлении создаёт новые расходы (серверы, поддержка, переобучение). Важно не сокращать затраты, а увеличивать прибыль через более эффективные процессы.',
    insight2: 'При работе с автоматизацией основная проблема — это не отсутствие инструмента, а отсутствие правильной гипотезы о том, где именно автоматизация даст кратный эффект.',
    facts: 'Руководит студией и уже имеет клиента, для которого внедряет автоматизацию бизнеса через нейросети. Понимает, что AI может кратно изменить модель бизнеса, но требует полной переструктуризации операционки, а не просто подстановки инструмента.',
    earnings: 'Внедрение AI-решений в компаниях, переработка операционных процессов, консультирование по автоматизации.',
    focus: 'Поиск компаний, которые готовы к трансформации через AI, создание кейсов и примеров успешного внедрения.',
    request: 'Компании, которые хотят автоматизировать контент, управление и продажи, готовые инвестировать в AI и переструктурировать процессы.',
  },
  {
    name: 'Алексей Чулков',
    role: 'Участник',
    tagline: 'Контент-предприниматель, который понял, что одна стратегия работает в России, совсем другая на Бали, и каждый рынок требует собственной адаптации и постоянного тестирования гипотез.',
    experience: 'Предприниматель в сфере контента и продаж. Работает с экосистемой рекомендаций и выстраивает личный бренд через различные каналы.',
    insight: 'Рост в контенте и продажах идёт не через алгоритмы и масштабирование одного канала, а через диверсификацию подходов и постоянное тестирование новых гипотез о том, что работает на конкретном рынке.',
    insight2: 'Что-то работает на одном рынке (например, в России), но совершенно не работает на другом (например, на Бали). Нужно переадаптировать стратегию под каждую географию и культурный контекст.',
    facts: 'Тестировал одинаковые маркетинговые стратегии в России и на Бали — обнаружил, что то, что работает в России, совершенно не работает в других культурах: нужна полная переделка подхода.',
    earnings: 'Создание контента, продажи через личный бренд, рекомендации и партнёрства для масштабирования.',
    focus: 'Расширение присутствия в разных географиях, поиск эффективных каналов привлечения клиентов, тестирование новых форматов.',
    request: 'Партнёры для расширения на новые географии, инвесторы в контент-проекты, специалисты по локализации стратегий для разных рынков.',
  },
  {
    name: 'Алина Жажина',
    role: 'Участник',
    tagline: 'Специалист по контенту, которая осваивает AI не как волшебную палочку, а как инструмент, требующий понимания того, где и зачем его применять для усиления творческой работы.',
    experience: 'Работает в сфере контента и коммуникаций. Интересуется AI и новыми технологиями в этой области.',
    insight: 'AI может усилить творческую работу, но требует правильной интеграции в существующий процесс и четкого понимания того, на каком этапе и зачем его использовать.',
    insight2: 'Качество итогового контента зависит не столько от инструмента, сколько от того, как его человек использует и какие гипотезы проверяет через инструмент.',
    facts: 'Работает в сфере контента и коммуникаций, сталкивается с давлением ускорить работу через AI, но не спешит идти на поводу у маркетинга — критически подходит к инструментам. Относится к AI как к инструменту, требующему специалистов, а не как к волшебной палочке.',
    earnings: 'Создание и управление контентом, потенциально через freelance или агентство.',
    focus: 'Освоение новых инструментов AI для ускорения и улучшения качества контента.',
    request: 'Практические примеры использования AI в контенте, наставники в этой области, инструменты и сервисы для автоматизации процессов.',
  },
  {
    name: 'Алексей Скопин',
    role: 'Участник',
    tagline: 'Специалист по недвижимости, который строит долгосрочный портфель через системы и банковское финансирование, а не через поиск сделок.',
    experience: '20 лет в коммерческой недвижимости. Покупает недооценённые объекты в городах-миллионниках, проводит улучшения, сдаёт в аренду и продаёт. Две компании, включая партнёрство с Артуром Исхаковым.',
    insight: 'При работе с недвижимостью ключевой драйвер ликвидности и доходности — это 100% заполнение площадей. Нельзя просто купить объект и надеяться на рост цены, нужно активно работать над его наполнением и операционкой.',
    insight2: 'Работает не с частными деньгами, а с банковским финансированием под 3× обеспечение. Это позволяет масштабировать портфель, опираясь на собственные компетенции, а не на личный капитал.',
    facts: 'Живет на Бали с семьёй (трое детей в местных школах). Интересуется токенизацией недвижимости — не зависит в своём мышлении от текущего статус-кво, смотрит в будущее отрасли.',
    earnings: 'Маржа на разнице входа в недооценённый актив, росте арендного потока после улучшений, и последующей продаже как готового денежного потока. Типовой чек — $4 млн, окупаемость 8–12 лет.',
    focus: 'Релокация всей операции в Москву как основной рынок, усиление команды, оптимизация финансовой модели.',
    request: 'Привлечение более дешёвого банковского финансирования через прямые контакты с директорами банков, улучшение управленческой методологии для масштабирования портфеля.',
  },
];

const ParticipantCard: React.FC<{ participant: Participant; isOrganizer?: boolean }> = ({ participant, isOrganizer }) => {
  const [expanded, setExpanded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const getShareText = () => {
    return `${participant.name} — ${participant.tagline}\n\n` +
      `💼 Опыт: ${participant.experience}\n\n` +
      `🎯 Запрос: ${participant.request}\n\n` +
      `Подробнее: https://ai-network-pulse.lovable.app/coffeesync/canggu-5`;
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
    window.open(`https://t.me/share/url?url=${encodeURIComponent('https://ai-network-pulse.lovable.app/coffeesync/canggu-5')}&text=${text}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(getShareText());
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://ai-network-pulse.lovable.app/coffeesync/canggu-5')}&quote=${encodeURIComponent(getShareText())}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://ai-network-pulse.lovable.app/coffeesync/canggu-5')}`, '_blank');
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

const CoffeeSync5: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>CoffeeSync Canggu #5 — Дашборд встречи | Pulse Community</title>
        <meta name="description" content="Результаты CoffeeSync #5 в Canggu: 5 участников, AI-аналитика встречи, облако тегов и ключевые запросы предпринимателей." />
        <link rel="canonical" href="https://ai-network-pulse.lovable.app/coffeesync/canggu-5" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ai-network-pulse.lovable.app/coffeesync/canggu-5" />
        <meta property="og:title" content="CoffeeSync Canggu #5 — Дашборд встречи | Pulse Community" />
        <meta property="og:description" content="Результаты CoffeeSync #5 в Canggu: 5 участников, AI-аналитика встречи, облако тегов и ключевые запросы предпринимателей." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CoffeeSync Canggu #5 — Дашборд встречи | Pulse Community" />
        <meta name="twitter:description" content="Результаты CoffeeSync #5 в Canggu: 5 участников, AI-аналитика встречи, облако тегов и ключевые запросы предпринимателей." />
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
              CoffeeSync #5
            </Badge>
          </div>
        </header>

        {/* Compact Header Strip */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h1 className="text-xl md:text-2xl font-bold">
              CoffeeSync Canggu <span className="gradient-text">#5</span>
            </h1>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Чт, 11:00</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Чангу</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 5</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> ~90 мин</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 space-y-6">
          {/* Compact Metrics Strip */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Участников', value: '5', icon: Users, accent: 'text-pulse-green' },
              { label: 'Слов', value: '~14 100', icon: Mic, accent: 'text-pulse-blue' },
              { label: 'Инициатив/ч', value: '8.7', icon: Zap, accent: 'text-pulse-orange' },
              { label: 'Энергия', value: '9.2', icon: Target, accent: 'text-pulse-purple' },
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
            {/* Sync Value Score */}
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

            {/* Speech Distribution */}
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

            {/* Tag Cloud */}
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
                        style={{ opacity: 0.7 + (i % 3) * 0.1 }}
                      >
                        {tag.text}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top-3 requests */}
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
              alt="CoffeeSync Canggu #5 — участники встречи"
              className="w-full h-auto"
            />
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">
                Слева направо: Алина Жажина, Дарья Жмуд, Алексей Чулков, Владимир Макаров, Алексей Скопин
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
          <p>Pulse Community © 2025 · CoffeeSync Canggu #5</p>
        </footer>
      </div>
    </>
  );
};

export default CoffeeSync5;
