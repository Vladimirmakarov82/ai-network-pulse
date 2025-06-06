
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-sm font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === 'ru' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className="text-sm font-medium"
      >
        RU
      </Button>
    </div>
  );
};

export default LanguageToggle;
