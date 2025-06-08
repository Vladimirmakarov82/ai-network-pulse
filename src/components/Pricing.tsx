
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const { t, language } = useLanguage();

  const plans = [
    {
      name: t('pricing.pulse.title'),
      description: t('pricing.pulse.description'),
      price: t('pricing.pulse.price'),
      earlyPrice: t('pricing.pulse.early'),
      color: 'pulse-green',
      popular: true,
      features: [
        t('pricing.pulse.features.1'),
        t('pricing.pulse.features.2'),
        t('pricing.pulse.features.3'),
        t('pricing.pulse.features.4')
      ],
      cta: t('cta.early.access'),
      action: () => {
        console.log('Early access for Pulse Pass');
      }
    },
    {
      name: t('pricing.builder.title'),
      description: t('pricing.builder.description'),
      price: t('pricing.builder.price'),
      earlyPrice: t('pricing.builder.early'),
      color: 'pulse-blue',
      popular: false,
      features: [
        t('pricing.builder.features.1'),
        t('pricing.builder.features.2'),
        t('pricing.builder.features.3'),
        t('pricing.builder.features.4')
      ],
      cta: t('cta.early.access'),
      action: () => {
        console.log('Early access for Builder Pass');
      }
    },
    {
      name: t('pricing.org.title'),
      description: t('pricing.org.description'),
      price: t('pricing.org.price'),
      earlyPrice: t('pricing.org.early'),
      color: 'pulse-orange',
      popular: false,
      features: [
        t('pricing.org.features.1'),
        t('pricing.org.features.2'),
        t('pricing.org.features.3'),
        t('pricing.org.features.4')
      ],
      cta: t('cta.become.organizer'),
      action: () => {
        console.log('Open organizer application');
      }
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-pulse-green ring-opacity-50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pulse-green text-white px-4 py-1">
                  {t('pricing.popular')}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}/10 flex items-center justify-center`}>
                  <div className={`w-8 h-8 bg-${plan.color} rounded-full`}></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="text-center">
                  <p className="text-sm text-gray-500 line-through">
                    {plan.price}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {plan.earlyPrice}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('pricing.early.special')}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-pulse-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full bg-${plan.color} hover:bg-${plan.color}/90 text-white font-semibold py-3`}
                  onClick={plan.action}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ambassador Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-pulse-purple/10 to-pulse-pink/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {t('pricing.ambassador.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('pricing.ambassador.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{t('pricing.ambassador.commission.title')}</h4>
                  <p className="text-gray-600">{t('pricing.ambassador.commission.description')}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{t('pricing.ambassador.dashboard.title')}</h4>
                  <p className="text-gray-600">{t('pricing.ambassador.dashboard.description')}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{t('pricing.ambassador.links.title')}</h4>
                  <p className="text-gray-600">{t('pricing.ambassador.links.description')}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="mt-6 border-pulse-purple text-pulse-purple hover:bg-pulse-purple hover:text-white"
                onClick={() => window.open('https://forms.gle/3QDRp53KjkvZbX2c6', '_blank')}
              >
                {t('cta.ambassador.apply')}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Corporate Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t('pricing.corporate.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('pricing.corporate.description')}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{t('pricing.corporate.discount1')}</h4>
                  <p className="text-gray-600">{t('pricing.corporate.discount1.value')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{t('pricing.corporate.discount2')}</h4>
                  <p className="text-gray-600">{t('pricing.corporate.discount2.value')}</p>
                </div>
              </div>
              <Button 
                className="bg-pulse-blue hover:bg-pulse-blue/90 text-white"
                onClick={() => window.open('https://forms.gle/Y9m9QiWgTqcRSQQ89', '_blank')}
              >
                {t('cta.corporate.quote')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
