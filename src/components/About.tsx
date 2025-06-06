
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('about.ai.title'),
      description: t('about.ai.description'),
      color: 'pulse-green',
      icon: '🤖'
    },
    {
      title: t('about.regular.title'),
      description: t('about.regular.description'),
      color: 'pulse-blue',
      icon: '📅'
    },
    {
      title: t('about.trust.title'),
      description: t('about.trust.description'),
      color: 'pulse-pink',
      icon: '🤝'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-4 font-medium">
            {t('about.mission')}
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            {t('about.vision')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${feature.color}/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Agent Info */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-gray-50 to-white">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                  How AI Agent Works
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pulse-green rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">Meeting Recording</h4>
                      <p className="text-sm text-gray-600">Meetings are recorded (opt-out available) for AI analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pulse-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">AI Analysis</h4>
                      <p className="text-sm text-gray-600">AI transcribes and understands what you do and what you're looking for</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pulse-pink rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">Smart Recommendations</h4>
                      <p className="text-sm text-gray-600">Receive lists of who you can help and who can help you - clients, partners, investors</p>
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
