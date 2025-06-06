
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.join': 'Join Community',
    
    // Hero Section
    'hero.title': 'Global AI-Powered Networking',
    'hero.subtitle': 'Weekly meetups worldwide with AI concierge connecting you to the right people',
    'hero.description': 'Join thousands of entrepreneurs, creators, and professionals building meaningful connections through regular offline meetings enhanced by intelligent recommendations.',
    'hero.cta.primary': 'Get Early Access',
    'hero.cta.secondary': 'Join Telegram',
    'hero.launch.date': 'Launch: June 19, 2025',
    
    // About Section
    'about.title': 'The Future of Business Networking',
    'about.mission': 'Building the "Starbucks" of community networking',
    'about.vision': 'Creating a global layer of regular live meetings where every participant gets access to the right people, regardless of city, social circle, or level of "success".',
    'about.ai.title': 'AI Concierge',
    'about.ai.description': 'Our AI remembers everyone and creates perfect connections - finding clients, partners, investors, and even potential romantic matches.',
    'about.regular.title': 'Weekly Habit',
    'about.regular.description': 'Regular meetings once a week in your city (or wherever you travel) building consistent networking habits.',
    'about.trust.title': 'Trust Economy',
    'about.trust.description': 'Every participant pays for participation, while local organizers build sustainable income based on value, not manipulation.',
    'about.ai.works.title': 'How AI Agent Works',
    'about.ai.step1.title': 'Meeting Recording',
    'about.ai.step1.description': 'Meetings are recorded (opt-out available) for AI analysis',
    'about.ai.step2.title': 'AI Analysis',
    'about.ai.step2.description': 'AI transcribes and understands what you do and what you\'re looking for',
    'about.ai.step3.title': 'Smart Recommendations',
    'about.ai.step3.description': 'Receive lists of who you can help and who can help you - clients, partners, investors',
    
    // Pricing
    'pricing.title': 'Choose Your Role',
    'pricing.subtitle': 'Join the global networking revolution',
    'pricing.pulse.title': 'Pulse Pass',
    'pricing.pulse.description': 'Regular access to meetups',
    'pricing.pulse.price': '$100/year',
    'pricing.pulse.early': '$67 for 2 years',
    'pricing.pulse.features.1': 'Weekly meetup access',
    'pricing.pulse.features.2': 'AI recommendations',
    'pricing.pulse.features.3': 'Global community access',
    'pricing.pulse.features.4': '4.5% referral discount',
    'pricing.builder.title': 'Builder Pass',
    'pricing.builder.description': 'Opportunity to speak at events',
    'pricing.builder.price': '$133/year',
    'pricing.builder.early': '$100 for 2 years',
    'pricing.builder.features.1': 'All Pulse Pass features',
    'pricing.builder.features.2': 'Speaking opportunities',
    'pricing.builder.features.3': 'Expert showcase',
    'pricing.builder.features.4': 'Priority AI recommendations',
    'pricing.org.title': 'Org Pass',
    'pricing.org.description': 'Organize meetups, personal dashboard',
    'pricing.org.price': '$1,333',
    'pricing.org.early': '$467 (first 30)',
    'pricing.org.features.1': 'Organize weekly meetups',
    'pricing.org.features.2': 'Personal dashboard',
    'pricing.org.features.3': 'Revenue sharing',
    'pricing.org.features.4': 'First 30 organizers special price',
    'pricing.ambassador.title': 'Pulse Ambassador',
    'pricing.ambassador.description': 'Invite participants, earn commissions',
    'pricing.ambassador.price': 'Not sold',
    'pricing.ambassador.commission.title': 'Referral Commission',
    'pricing.ambassador.commission.description': 'Earn 4.5% on all referral sales',
    'pricing.ambassador.dashboard.title': 'Personal Dashboard',
    'pricing.ambassador.dashboard.description': 'Track all purchases via your link',
    'pricing.ambassador.links.title': 'Custom Links',
    'pricing.ambassador.links.description': 'Generate personalized referral URLs',
    'pricing.corporate.title': 'Corporate Pulse Pass',
    'pricing.corporate.description': 'Perfect gift for employees. AI agent promotes company interests based on active participants.',
    'pricing.corporate.discount1': '10+ Passes',
    'pricing.corporate.discount1.value': '10% discount',
    'pricing.corporate.discount2': '50+ Passes',
    'pricing.corporate.discount2.value': '15% discount',
    'pricing.early.special': 'Early Access Special',
    'pricing.popular': 'Most Popular',
    
    // CTA Buttons
    'cta.early.access': 'Get Early Access',
    'cta.become.organizer': 'Become Organizer',
    'cta.apply': 'Apply Now',
    'cta.join.telegram': 'Join Telegram',
    'cta.corporate.quote': 'Request Corporate Quote',
    'cta.ambassador.apply': 'Apply for Ambassador Role',
    
    // Footer
    'footer.description': 'AI-powered global networking community',
    'footer.links': 'Quick Links',
    'footer.community': 'Community',
    'footer.support': 'Support',
    'footer.telegram.participants': 'Participants Channel',
    'footer.telegram.open': 'Open Channel',
    'footer.telegram.organizers': 'Organizers Channel',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What makes Pulse different from other networking clubs?',
    'faq.a1': 'Pulse combines regular offline meetings with AI-powered connections, making it accessible globally with consistent format and AI recommendations.',
    'faq.q2': 'How does the AI concierge work?',
    'faq.a2': 'Meetings are recorded (opt-out available), AI transcribes conversations, learns about participants, and provides recommendations for connections, business opportunities, and partnerships.',
    'faq.q3': 'When does Pulse launch?',
    'faq.a3': 'The first 10 business breakfasts organized by partners will take place on June 19, 2025.',
    'faq.q4': 'Can I get a refund?',
    'faq.a4': 'Early access is non-refundable as you receive immediate digital access to the closed Telegram channel and community features.',
    'faq.q5': 'What if there are no meetups in my city yet?',
    'faq.a5': 'You can vote for launching a meetup in your city or apply to become an organizer. You also get access to the global community and can attend meetups when traveling.',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О проекте',
    'nav.pricing': 'Цены',
    'nav.faq': 'FAQ',
    'nav.join': 'Вступить',
    
    // Hero Section
    'hero.title': 'Глобальный нетворкинг с ИИ',
    'hero.subtitle': 'Еженедельные встречи по всему миру с ИИ-консьержем, который соединяет с нужными людьми',
    'hero.description': 'Присоединяйтесь к тысячам предпринимателей, креаторов и профессионалов, которые строят значимые связи через регулярные офлайн-встречи с умными рекомендациями.',
    'hero.cta.primary': 'Ранний доступ',
    'hero.cta.secondary': 'Telegram канал',
    'hero.launch.date': 'Запуск: 19 июня 2025',
    
    // About Section
    'about.title': 'Будущее бизнес-нетворкинга',
    'about.mission': 'Создаем "Starbucks" в мире комьюнити',
    'about.vision': 'Строим глобальный слой регулярных живых встреч, где каждый участник получает доступ к нужным людям, независимо от города, социального круга или уровня "успешности".',
    'about.ai.title': 'ИИ-консьерж',
    'about.ai.description': 'Наш ИИ запоминает всех и создает идеальные связи - находит клиентов, партнеров, инвесторов и даже потенциальные романтические знакомства.',
    'about.regular.title': 'Еженедельная привычка',
    'about.regular.description': 'Регулярные встречи раз в неделю в вашем городе (или там, куда вы приехали), формирующие устойчивые нетворкинг-привычки.',
    'about.trust.title': 'Экономика доверия',
    'about.trust.description': 'Каждый участник платит за участие, а локальные организаторы строят устойчивый доход на ценности, а не на манипуляциях.',
    'about.ai.works.title': 'Как работает ИИ-агент',
    'about.ai.step1.title': 'Запись встречи',
    'about.ai.step1.description': 'Встречи записываются (можно отказаться) для анализа ИИ',
    'about.ai.step2.title': 'Анализ ИИ',
    'about.ai.step2.description': 'ИИ расшифровывает и понимает, чем вы занимаетесь и что ищете',
    'about.ai.step3.title': 'Умные рекомендации',
    'about.ai.step3.description': 'Получайте списки тех, кому можете помочь и кто может помочь вам - клиенты, партнеры, инвесторы',
    
    // Pricing
    'pricing.title': 'Выберите свою роль',
    'pricing.subtitle': 'Присоединяйтесь к революции нетворкинга',
    'pricing.pulse.title': 'Pulse Pass',
    'pricing.pulse.description': 'Обычный доступ к встречам',
    'pricing.pulse.price': '15 000 ₽/год',
    'pricing.pulse.early': '10 000 ₽ за 2 года',
    'pricing.pulse.features.1': 'Доступ к еженедельным встречам',
    'pricing.pulse.features.2': 'ИИ-рекомендации',
    'pricing.pulse.features.3': 'Доступ к глобальному сообществу',
    'pricing.pulse.features.4': 'Скидка 4.5% по ссылке',
    'pricing.builder.title': 'Builder Pass',
    'pricing.builder.description': 'Возможность выступать',
    'pricing.builder.price': '20 000 ₽/год',
    'pricing.builder.early': '15 000 ₽ за 2 года',
    'pricing.builder.features.1': 'Все функции Pulse Pass',
    'pricing.builder.features.2': 'Возможности выступлений',
    'pricing.builder.features.3': 'Витрина экспертов',
    'pricing.builder.features.4': 'Приоритетные ИИ-рекомендации',
    'pricing.org.title': 'Org Pass',
    'pricing.org.description': 'Организация встреч, личный кабинет',
    'pricing.org.price': '200 000 ₽',
    'pricing.org.early': '70 000 ₽ (первым 30)',
    'pricing.org.features.1': 'Организация еженедельных встреч',
    'pricing.org.features.2': 'Личный кабинет',
    'pricing.org.features.3': 'Разделение доходов',
    'pricing.org.features.4': 'Специальная цена для первых 30 организаторов',
    'pricing.ambassador.title': 'Pulse Ambassador',
    'pricing.ambassador.description': 'Привлекает участников, имеет кабинет',
    'pricing.ambassador.price': 'Не продается',
    'pricing.ambassador.commission.title': 'Реферальная комиссия',
    'pricing.ambassador.commission.description': 'Зарабатывайте 4.5% с каждой реферальной продажи',
    'pricing.ambassador.dashboard.title': 'Личный кабинет',
    'pricing.ambassador.dashboard.description': 'Отслеживайте все покупки по вашей ссылке',
    'pricing.ambassador.links.title': 'Персональные ссылки',
    'pricing.ambassador.links.description': 'Генерируйте персонализированные реферальные URL',
    'pricing.corporate.title': 'Корпоративный Pulse Pass',
    'pricing.corporate.description': 'Идеальный подарок для сотрудников. ИИ-агент продвигает интересы компании на основе активных участников.',
    'pricing.corporate.discount1': '10+ пассов',
    'pricing.corporate.discount1.value': 'Скидка 10%',
    'pricing.corporate.discount2': '50+ пассов',
    'pricing.corporate.discount2.value': 'Скидка 15%',
    'pricing.early.special': 'Специальное предложение раннего доступа',
    'pricing.popular': 'Самый популярный',
    
    // CTA Buttons
    'cta.early.access': 'Ранний доступ',
    'cta.become.organizer': 'Стать организатором',
    'cta.apply': 'Подать заявку',
    'cta.join.telegram': 'Telegram канал',
    'cta.corporate.quote': 'Запросить корпоративное предложение',
    'cta.ambassador.apply': 'Подать заявку на роль амбассадора',
    
    // Footer
    'footer.description': 'Глобальное сообщество нетворкинга с ИИ',
    'footer.links': 'Быстрые ссылки',
    'footer.community': 'Сообщество',
    'footer.support': 'Поддержка',
    'footer.telegram.participants': 'Канал участников',
    'footer.telegram.open': 'Открытый канал',
    'footer.telegram.organizers': 'Канал организаторов',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Чем Pulse отличается от других нетворкинг-клубов?',
    'faq.a1': 'Pulse сочетает регулярные офлайн-встречи с ИИ-рекомендациями, делая нетворкинг доступным глобально с единым форматом.',
    'faq.q2': 'Как работает ИИ-консьерж?',
    'faq.a2': 'Встречи записываются (можно отказаться), ИИ расшифровывает разговоры, изучает участников и дает рекомендации по связям и возможностям.',
    'faq.q3': 'Когда запускается Pulse?',
    'faq.a3': 'Первые 10 бизнес-завтраков, организованных партнерами, пройдут 19 июня 2025 года.',
    'faq.q4': 'Можно ли вернуть деньги?',
    'faq.a4': 'Ранний доступ не подлежит возврату, так как вы сразу получаете цифровой доступ к закрытому Telegram-каналу и функциям сообщества.',
    'faq.q5': 'Что если в моем городе еще нет встреч?',
    'faq.a5': 'Вы можете голосовать за запуск встреч в своем городе или подать заявку на роль организатора. Также вы получаете доступ к глобальному сообществу и можете посещать встречи в путешествиях.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
