
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoffeeSyncSection from '@/components/CoffeeSyncSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, Brain, ArrowRight } from 'lucide-react';

const CoffeeSync: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>CoffeeSync — Pulse Community</title>
        <meta name="description" content="Еженедельные бизнес-завтраки с AI-аналитикой. Формат встреч CoffeeSync от Pulse." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="pt-28 pb-12 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Badge className="mb-4 bg-pulse-orange/10 text-pulse-orange border-pulse-orange/30">
              ☕ CoffeeSync
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {language === 'ru' ? 'Бизнес-завтраки с AI-аналитикой' : 'Business breakfasts with AI analytics'}
            </h1>
            <p className="text-lg text-muted-foreground font-inter">
              {language === 'ru'
                ? 'Каждая встреча CoffeeSync — это данные, инсайты и новые связи.'
                : 'Every CoffeeSync meeting generates data, insights, and new connections.'}
            </p>
          </div>
        </section>

        {/* Pulse Cycle */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-muted/50 to-background">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text text-center">
                  {language === 'ru' ? 'Цикл Pulse' : 'The Pulse Cycle'}
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">CoffeeSync</h4>
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
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Meeting Dashboards */}
        <CoffeeSyncSection />

        {/* Become an organizer */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <Button
              size="lg"
              className="border-pulse-orange text-pulse-orange hover:bg-pulse-orange hover:text-white"
              variant="outline"
              onClick={() => window.open('https://t.me/+Dg9qYT-N7mtkMTMy', '_blank')}
            >
              {language === 'ru' ? 'Стать организатором' : 'Become an organizer'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CoffeeSync;
