
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Brain, ShieldOff } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Mic className="w-7 h-7" />,
      title: language === 'ru' ? 'Автоматические профили' : 'Auto-generated profiles',
      description: language === 'ru'
        ? 'На встречах участники представляются и рассказывают о себе. Pulsia автоматически создаёт профиль на основе интро — без анкет и ручного ввода.'
        : 'At meetings, participants introduce themselves. Pulsia automatically creates a profile based on the intro — no forms or manual input needed.',
      gradient: 'from-emerald-500 to-teal-400',
      shadow: 'shadow-emerald-500/20',
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: language === 'ru' ? 'Pulsia всё помнит' : 'Pulsia remembers everything',
      description: language === 'ru'
        ? 'В отличие от соцсетей, где данные устаревают, Pulsia работает с актуальной информацией. Чем чаще участник приходит — тем точнее рекомендации.'
        : 'Unlike social media where data gets stale, Pulsia works with current information. The more a participant attends — the more precise the matches.',
      gradient: 'from-blue-500 to-cyan-400',
      shadow: 'shadow-blue-500/20',
    },
    {
      icon: <ShieldOff className="w-7 h-7" />,
      title: language === 'ru' ? 'Нет интерфейса — и это фича' : 'No interface — and that\'s a feature',
      description: language === 'ru'
        ? 'Участники не могут искать людей по параметрам. Pulsia сама решает, кого с кем познакомить, потому что знает запросы и возможности каждого.'
        : 'Participants can\'t search for people by parameters. Pulsia decides who to connect, because she knows everyone\'s needs and capabilities.',
      gradient: 'from-pink-500 to-rose-400',
      shadow: 'shadow-pink-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {language === 'ru' ? 'Как это работает' : 'How it works'}
          </h2>
          <p className="text-xl text-muted-foreground mb-4 font-medium">
            {language === 'ru'
              ? 'Создаём стандарт бизнес-встреч для клубов и комьюнити мира'
              : 'Creating a global standard for business meetings across clubs and communities'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.shadow} shadow-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How AI works - steps */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-muted/50 to-background">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">
                  {language === 'ru' ? 'Цикл Pulse' : 'The Pulse Cycle'}
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">{language === 'ru' ? 'CoffeeSync' : 'CoffeeSync'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ru'
                          ? 'Приходите на еженедельный завтрак, рассказывайте о себе. Организатор записывает.'
                          : 'Attend a weekly breakfast, share about yourself. The organizer records.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">{language === 'ru' ? 'Pulsia анализирует' : 'Pulsia analyzes'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ru'
                          ? 'Нейронка обрабатывает аудио и выстраивает глубокий профиль: цели, возможности, контекст.'
                          : 'The AI processes audio and builds a deep profile: goals, capabilities, context.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-400 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">{language === 'ru' ? 'Целевое знакомство' : 'Targeted match'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ru'
                          ? 'Каждую неделю Pulsia находит вам одно знакомство, которое может изменить ваш бизнес.'
                          : 'Every week Pulsia finds you one connection that can change your business.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
