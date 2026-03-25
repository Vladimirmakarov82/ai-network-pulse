
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductLayers: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';

  const steps = [
    {
      num: 1,
      color: 'bg-accent text-accent-foreground',
      title: ru ? 'Посещай завтрак' : 'Attend a breakfast',
      description: ru
        ? 'Приходи на еженедельный завтрак, расскажи о себе. Организатор записывает встречу.'
        : 'Attend a weekly breakfast, share about yourself. The organizer records the meeting.',
    },
    {
      num: 2,
      color: 'bg-violet-500 text-white',
      title: ru ? 'AI создаёт профиль' : 'AI builds your profile',
      description: ru
        ? 'AI обрабатывает аудио и создаёт глубокий профиль: цели, возможности, контекст.'
        : 'The AI processes audio and builds a deep profile: goals, capabilities, context.',
    },
    {
      num: 3,
      color: 'bg-pink-500 text-white',
      title: ru ? 'Получай знакомства' : 'Get introductions',
      description: ru
        ? 'Каждую неделю Pulsia находит одно знакомство, которое может изменить твой бизнес.'
        : 'Every week Pulsia finds you one connection that can change your business.',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold rainbow-text inline-block mb-4">
              {ru ? 'Как это работает' : 'How it works'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-5 text-lg font-bold`}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLayers;
