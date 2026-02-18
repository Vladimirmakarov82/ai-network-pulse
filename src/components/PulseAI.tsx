
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Zap, Globe, DollarSign } from 'lucide-react';

const PulseAI: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="pulse-ai" className="py-20 bg-gradient-to-br from-muted/30 to-muted/60">
      <div className="container mx-auto px-4">
        {/* CoffeeSync Pass */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {language === 'ru' ? 'CoffeeSync Pass' : 'CoffeeSync Pass'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Доступ для всех, кому интересен непринуждённый нетворкинг с предпринимателями по всему миру'
                : 'Access for anyone interested in effortless networking with entrepreneurs worldwide'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold">$150</p>
                  <p className="text-muted-foreground">{language === 'ru' ? '/ год' : '/ year'}</p>
                </div>
                <ul className="space-y-4">
                  {(language === 'ru' ? [
                    '☕ Посещение CoffeeSync в любом городе мира',
                    '🧠 1 целевое знакомство от Pulsia каждую неделю',
                    '🌍 Доступ к глобальной сети 200+ предпринимателей',
                    '📊 Персональный профиль на базе живых данных',
                  ] : [
                    '☕ Attend CoffeeSync in any city worldwide',
                    '🧠 1 targeted introduction from Pulsia weekly',
                    '🌍 Access to global network of 200+ entrepreneurs',
                    '📊 Personal profile based on live data',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span>{item}</span>
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
                <h3 className="text-xl font-bold mb-4">
                  {language === 'ru' ? 'Почему это работает' : 'Why it works'}
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    {language === 'ru'
                      ? '🎙️ На встречах человек раскрывает информацию о себе на порядок детальнее, чем в любом текстовом формате.'
                      : '🎙️ At meetings, people reveal information about themselves in far more detail than in any text format.'}
                  </p>
                  <p>
                    {language === 'ru'
                      ? '📅 Данные всегда актуальны — каждая встреча обновляет профиль. В соцсетях информация устаревает.'
                      : '📅 Data stays current — every meeting updates the profile. Social media info gets stale.'}
                  </p>
                  <p>
                    {language === 'ru'
                      ? '🔒 Социально подтверждённая информация — вы говорите при людях, а не пишете красивое резюме.'
                      : '🔒 Socially verified information — you speak in front of people, not write a polished resume.'}
                  </p>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                color: 'bg-pulse-green/10 text-pulse-green',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: language === 'ru' ? 'Контакты другого уровня' : 'Higher-level contacts',
                desc: language === 'ru'
                  ? 'Находите контакты более высокого уровня из других клубов и сообществ'
                  : 'Find higher-level contacts from other clubs and communities',
                color: 'bg-pulse-blue/10 text-pulse-blue',
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: language === 'ru' ? 'Пассивный доход' : 'Passive income',
                desc: language === 'ru'
                  ? 'Получайте пассивный доход от партнёрской программы'
                  : 'Earn passive income from the partner program',
                color: 'bg-pulse-orange/10 text-pulse-orange',
              },
            ].map((item, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${item.color} flex items-center justify-center`}>
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
              onClick={() => window.open('https://t.me/pulsecommunityopenrus', '_blank')}
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
