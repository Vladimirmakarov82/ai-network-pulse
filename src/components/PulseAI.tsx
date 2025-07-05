
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { MessageCircle, Users, Zap, CheckCircle, ChevronDown } from 'lucide-react';

const PulseAI: React.FC = () => {
  const { t } = useLanguage();
  const [isExampleOpen, setIsExampleOpen] = useState(false);

  return (
    <section id="pulse-ai" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('pulseai.title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('pulseai.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('pulseai.feature1.title')}</h3>
                  <p className="text-gray-600">{t('pulseai.feature1.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('pulseai.feature2.title')}</h3>
                  <p className="text-gray-600">{t('pulseai.feature2.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('pulseai.feature3.title')}</h3>
                  <p className="text-gray-600">{t('pulseai.feature3.description')}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border">
              <h4 className="text-lg font-semibold mb-4">{t('pulseai.pricing.title')}</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('pulseai.pricing.monthly')}</span>
                  <span className="font-bold text-xl">{t('pulseai.pricing.monthly.price')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('pulseai.pricing.yearly')}</span>
                  <span className="font-bold text-xl text-green-600">{t('pulseai.pricing.yearly.price')}</span>
                </div>
              </div>
              <Button className="w-full mt-6">
                {t('pulseai.cta')}
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <Collapsible open={isExampleOpen} onOpenChange={setIsExampleOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full mb-4 hover:opacity-70 transition-opacity">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-semibold">{t('pulseai.example.title')}</h4>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isExampleOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 text-sm leading-relaxed whitespace-pre-line">
                  {t('pulseai.example.content')}
                </div>
                <p className="text-center text-gray-600 font-medium">
                  {t('pulseai.example.footer')}
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseAI;
