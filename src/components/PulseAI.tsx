
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Network, Wallet, Coffee, Brain, Globe, BarChart3, Mic, CalendarSync, ShieldCheck } from 'lucide-react';

const PulseAI: React.FC = () => {
  const { language } = useLanguage();

  const passFeatures = language === 'ru' ? [
    { icon: <Coffee className="w-4 h-4" />, text: 'Посещение CoffeeSync в любом городе мира' },
    { icon: <Brain className="w-4 h-4" />, text: '1 целевое знакомство от Pulsia каждую неделю' },
    { icon: <Globe className="w-4 h-4" />, text: 'Доступ к глобальной сети 200+ предпринимателей' },
    { icon: <BarChart3 className="w-4 h-4" />, text: 'Персональный профиль на базе живых данных' },
  ] : [
    { icon: <Coffee className="w-4 h-4" />, text: 'Attend CoffeeSync in any city worldwide' },
    { icon: <Brain className="w-4 h-4" />, text: '1 targeted introduction from Pulsia weekly' },
    { icon: <Globe className="w-4 h-4" />, text: 'Access to global network of 200+ entrepreneurs' },
    { icon: <BarChart3 className="w-4 h-4" />, text: 'Personal profile based on live data' },
  ];

  const whyItWorks = language === 'ru' ? [
    { icon: <Mic className="w-4 h-4" />, text: 'На встречах человек раскрывает информацию о себе на порядок детальнее, чем в любом текстовом формате.' },
    { icon: <CalendarSync className="w-4 h-4" />, text: 'Данные всегда актуальны — каждая встреча обновляет профиль. В соцсетях информация устаревает.' },
    { icon: <ShieldCheck className="w-4 h-4" />, text: 'Социально подтверждённая информация — вы говорите при людях, а не пишете красивое резюме.' },
  ] : [
    { icon: <Mic className="w-4 h-4" />, text: 'At meetings, people reveal information about themselves in far more detail than in any text format.' },
    { icon: <CalendarSync className="w-4 h-4" />, text: 'Data stays current — every meeting updates the profile. Social media info gets stale.' },
    { icon: <ShieldCheck className="w-4 h-4" />, text: 'Socially verified information — you speak in front of people, not write a polished resume.' },
  ];

  return (
    <section id="pulse-ai" className="py-20 bg-gradient-to-br from-muted/30 to-muted/60">
      <div className="container mx-auto px-4">
        {/* CoffeeSync Pass */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              CoffeeSync Pass
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              {language === 'ru'
                ? 'Доступ для всех, кому интересен непринуждённый нетворкинг с предпринимателями по всему миру'
                : 'Access for anyone interested in effortless networking with entrepreneurs worldwide'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold tracking-tight">$150</p>
                  <p className="text-muted-foreground text-sm">{language === 'ru' ? '/ год' : '/ year'}</p>
                </div>
                <ul className="space-y-4">
                  {passFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 text-pulse-green">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6 bg-pulse-green hover:bg-pulse-green/90 text-white"
                  onClick={() => window.open('https://t.me/pulsecommunityopenrus', '_blank')}
                >
                  {language === 'ru' ? 'Узнать подробнее' : 'Learn more'}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-5 tracking-tight">
                  {language === 'ru' ? 'Почему это работает' : 'Why it works'}
                </h3>
                <div className="space-y-5">
                  {whyItWorks.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-0.5 text-pulse-blue flex-shrink-0">{item.icon}</span>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* For community founders / organizers */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              {language === 'ru' ? 'Для фаундеров сообществ и бизнес-клубов' : 'For community founders & business clubs'}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-inter">
              {language === 'ru'
                ? 'Формируем ядро партнёров-организаторов — людей, для которых объединение людей это естественная часть жизни'
                : 'Building a core of partner-organizers — people for whom connecting others is a natural part of life'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: language === 'ru' ? 'Привлечение участников' : 'Attract participants',
                desc: language === 'ru'
                  ? 'Системно привлекайте участников через единую инфраструктуру Pulse'
                  : 'Systematically attract participants through Pulse infrastructure',
                gradient: 'from-emerald-500 to-teal-400',
              },
              {
                icon: <Network className="w-6 h-6" />,
                title: language === 'ru' ? 'Контакты другого уровня' : 'Higher-level contacts',
                desc: language === 'ru'
                  ? 'Находите контакты более высокого уровня из других клубов и сообществ'
                  : 'Find higher-level contacts from other clubs and communities',
                gradient: 'from-blue-500 to-cyan-400',
              },
              {
                icon: <Wallet className="w-6 h-6" />,
                title: language === 'ru' ? 'Пассивный доход' : 'Passive income',
                desc: language === 'ru'
                  ? 'Получайте пассивный доход от партнёрской программы'
                  : 'Earn passive income from the partner program',
                gradient: 'from-orange-500 to-amber-400',
              },
            ].map((item, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline"
              className="border-pulse-orange text-pulse-orange hover:bg-pulse-orange hover:text-white"
              onClick={() => window.open('https://t.me/+Dg9qYT-N7mtkMTMy', '_blank')}
            >
              {language === 'ru' ? 'Стать организатором' : 'Become an organizer'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseAI;
