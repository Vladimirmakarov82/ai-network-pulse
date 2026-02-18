
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Clock, MapPin, Calendar, Mic, Zap, Target, ChevronDown, ChevronUp, Crown } from 'lucide-react';
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
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="ml-auto"
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 to-foreground/80 z-10" />
        <img
          src={groupPhoto}
          alt="CoffeeSync Canggu #4 participants"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-28 text-center">
          <Badge className="mb-4 bg-pulse-green/20 text-pulse-green border-pulse-green/30 text-sm">
            ☕ Meeting Dashboard
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            CoffeeSync Canggu <span className="gradient-text">#4</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm mt-6">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Четверг, 11:00</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Чангу, Бали</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 4 участника</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~90 мин</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Участников', value: '4', icon: Users, accent: 'text-pulse-green' },
            { label: 'Слов произнесено', value: '~12 400', icon: Mic, accent: 'text-pulse-blue' },
            { label: 'Инициатив / час', value: '6.2', icon: Zap, accent: 'text-pulse-orange' },
            { label: 'Индекс энергетики', value: '8.4/10', icon: Target, accent: 'text-pulse-purple' },
          ].map((metric, i) => (
            <Card key={i} className="border-0 shadow-md text-center">
              <CardContent className="pt-6 pb-4">
                <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.accent}`} />
                <p className="text-2xl md:text-3xl font-bold">{metric.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emotional atmosphere */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-pulse-green/5 via-pulse-blue/5 to-pulse-purple/5">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-3">🌡 Атмосфера встречи</h3>
            <p className="text-muted-foreground leading-relaxed">
              Открытая, энергичная атмосфера с высоким уровнем доверия. Участники быстро перешли от формальных представлений к обсуждению реальных бизнес-вызовов, обмену инсайтами и совместному поиску решений. Заметен сильный взаимный интерес к возможностям AI-автоматизации и оффлайн-нетворкинга. Уровень вовлечённости — выше среднего: каждый участник активно задавал вопросы и делился опытом.
            </p>
          </CardContent>
        </Card>

        {/* Two column: Sync Value Scores + Speech Distribution */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sync Value Score */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-pulse-green" />
                Sync Value Score
              </CardTitle>
              <p className="text-xs text-muted-foreground">Оценка ценности участника для сети по 10-балльной шкале</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around">
                {SYNC_SCORES.map((s) => (
                  <ScoreRing key={s.name} score={s.score} gradient={s.color} name={s.name} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Speech Distribution */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Mic className="w-5 h-5 text-pulse-blue" />
                Распределение речи
              </CardTitle>
              <p className="text-xs text-muted-foreground">Доля времени каждого участника</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {SPEECH_DATA.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium flex items-center gap-1.5">
                      {s.name}
                      {s.role === 'organizer' && <Crown className="w-3.5 h-3.5 text-amber-500" />}
                    </span>
                    <span className="text-muted-foreground">{s.percent}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-pulse-green to-pulse-blue transition-all duration-1000"
                      style={{ width: `${s.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tag Cloud */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">☁️ Облако тегов встречи</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-4">
              {TAG_CLOUD.map((tag, i) => (
                <span key={i} className={`${tag.size} ${tag.color} font-medium opacity-90 hover:opacity-100 transition-opacity cursor-default`}>
                  {tag.text}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top-3 requests */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🎯 Топ-3 самых чётких запроса
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {TOP_REQUESTS.map((req, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pulse-green to-pulse-blue flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-muted-foreground">{req}</p>
              </div>
            ))}
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
              onClick={() => navigate('/')}
            >
              Узнать больше о Pulse Community
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>Pulse Community © 2025 · CoffeeSync Canggu #4</p>
      </footer>
    </div>
  );
};

export default CoffeeSync4;
