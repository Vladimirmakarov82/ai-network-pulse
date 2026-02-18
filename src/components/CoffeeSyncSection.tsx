
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import groupPhoto from '@/assets/coffeesync4-group.jpg';

const MEETINGS = [
  {
    id: 'canggu-4',
    path: '/coffeesync/canggu-4',
    title: 'CoffeeSync Canggu #4',
    location: 'Чангу, Бали',
    participants: 4,
    image: groupPhoto,
    tags: ['AI-автоматизация', 'Недвижимость', 'Системы управления'],
  },
];

const CoffeeSyncSection: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="coffeesync" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-pulse-orange/10 text-pulse-orange border-pulse-orange/30">
            ☕ CoffeeSync
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {language === 'ru' ? 'Дашборды встреч' : 'Meeting Dashboards'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === 'ru'
              ? 'Каждая встреча CoffeeSync — это данные, инсайты и новые связи. Смотрите результаты прошедших встреч.'
              : 'Every CoffeeSync meeting generates data, insights, and new connections. Explore past meeting results.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {MEETINGS.map((meeting) => (
            <Card
              key={meeting.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => navigate(meeting.path)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={meeting.image}
                  alt={meeting.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-lg">{meeting.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{meeting.location}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{meeting.participants}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {meeting.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full group-hover:text-pulse-green transition-colors">
                  {language === 'ru' ? 'Открыть дашборд' : 'Open dashboard'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeSyncSection;
