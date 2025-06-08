
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
    'hero.description': 'In Pulse — connections that really work. Every meeting is AI navigation to new opportunities: investors, clients, friends. Whether you\'re in Berlin, Bali or Bucharest — the same format, same culture, same meaning awaits you. Like Starbucks, but instead of coffee — people who change your life.',
    'hero.cta.primary': 'Get Early Access',
    'hero.cta.secondary': 'Join Telegram',
    'hero.launch.date': 'Launch: June 19, 2025',
    
    // About Section
    'about.title': 'The Future of Business Networking',
    'about.mission': 'Building the "Starbucks" of community networking',
    'about.vision': 'Pulse is not an elite club, but a global movement. You can launch the first hub in your city, host a meeting and become part of history. We\'ll give you the format, support, AI infrastructure and even help you earn.',
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
    'about.ai.step2.description': 'You can forget who you met last week — AI won\'t forget. Every your participation in Pulse is a set of signals: voice, interests, goals, requests.',
    'about.ai.step3.title': 'Smart Recommendations',
    'about.ai.step3.description': 'AI connects them with hundreds of other participants worldwide and offers you precise matches — partners, clients, friends, co-founders.',
    
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
    'pricing.pulse.features.4': 'Priority AI recommendations',
    'pricing.builder.title': 'Builder Pass',
    'pricing.builder.description': 'Opportunity to speak at events',
    'pricing.builder.price': '$133/year',
    'pricing.builder.early': '$100 for 2 years',
    'pricing.builder.features.1': 'All Pulse Pass features',
    'pricing.builder.features.2': 'Speaking opportunities',
    'pricing.builder.features.3': 'Expert showcase',
    'pricing.builder.features.4': 'Priority AI recommendations',
    'pricing.org.title': 'Org Pass',
    'pricing.org.description': 'Host meetups, local partner',
    'pricing.org.price': '$1,333',
    'pricing.org.early': '$467 (first 30)',
    'pricing.org.features.1': 'Revenue from $500+/month for 4 meetings',
    'pricing.org.features.2': 'Local Pulse hub status',
    'pricing.org.features.3': 'Priority AI promotion of your products',
    'pricing.org.features.4': 'Support and ready infrastructure',
    'pricing.ambassador.title': 'Pulse Ambassador',
    'pricing.ambassador.description': 'Special status for community founders, leaders and influencers',
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
    'faq.q1': 'What do I get immediately after payment?',
    'faq.a1': '— Ability to attend any Pulse meetings in any city — without limitations. — At your first meeting you\'ll briefly tell what you can offer and what you\'re looking for. — From this moment AI starts working for you: it analyzes meeting contexts and finds people who can become your clients, partners or employees. — Want more, come more often, share updates, and AI will work 24/7 to find solutions through other club members.',
    'faq.q2': 'I don\'t have a strong personal brand — is this really for me?',
    'faq.a2': 'Yes. Here we value not "big names", but concrete value. You just say what you can offer, and people start reaching out to you.',
    'faq.q3': 'If I\'m an introvert and don\'t like "selling myself"?',
    'faq.a3': 'You don\'t need to "sell" here. Just say — here\'s my experience, here\'s how I can help. Everything else is done by AI and meeting structure.',
    'faq.q4': 'Can I share this access with a partner or colleague?',
    'faq.a4': 'No. Everyone needs their own individual access because AI remembers specifically you, your requests and your value. This isn\'t about an entry ticket, it\'s about digital memory of you in the Pulse system.',
    'faq.q5': 'What if I don\'t know how I can be useful at all?',
    'faq.a5': 'Come to the first meeting and just listen. AI will remember you anyway and can "catch" a match later when you clarify where you want to go. Sometimes a random acquaintance can change your whole life.',
    'faq.q6': 'How does the AI concierge work?',
    'faq.a6': 'You can forget who you met last week — AI won\'t forget. Every your participation in Pulse is a set of signals: voice, interests, goals, requests. AI connects them with hundreds of other participants worldwide and offers you precise matches — partners, clients, friends, co-founders.',
    'faq.q7': 'Can I get a refund?',
    'faq.a7': 'Early access is non-refundable as you get a special price and instead of $100 for annual access, you pay $67 for 2 years.',
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
    'hero.description': 'В Pulse — связи, которые реально работают. Каждая встреча — это AI-навигация к новым возможностям: инвесторы, клиенты, друзья. Ты в Берлине, Бали или Бухаресте — тебя ждёт тот же формат, та же культура, те же смыслы. Как Starbucks, только вместо кофе — люди, которые меняют твою жизнь.',
    'hero.cta.primary': 'Ранний доступ',
    'hero.cta.secondary': 'Telegram канал',
    'hero.launch.date': 'Запуск: 19 июня 2025',
    
    // About Section
    'about.title': 'Будущее бизнес-нетворкинга',
    'about.mission': 'Создаем "Starbucks" в мире комьюнити',
    'about.vision': 'Pulse — это не элитный клуб, а глобальное движение. Ты можешь запустить первую точку в своём городе, провести встречу и стать частью истории. Мы дадим тебе формат, поддержку, AI-инфраструктуру и даже поможем заработать.',
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
    'about.ai.step2.description': 'Ты можешь забыть, кого встретил на прошлой неделе — AI не забудет. Каждое твоё участие в Pulse — это набор сигналов: голос, интересы, цели, запросы.',
    'about.ai.step3.title': 'Умные рекомендации',
    'about.ai.step3.description': 'AI соединяет их с сотнями других участников по всему миру и предлагает тебе точные совпадения — партнёров, клиентов, друзей, сооснователей.',
    
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
    'pricing.pulse.features.4': 'Приоритетные ИИ-рекомендации',
    'pricing.builder.title': 'Builder Pass',
    'pricing.builder.description': 'Возможность выступать',
    'pricing.builder.price': '20 000 ₽/год',
    'pricing.builder.early': '15 000 ₽ за 2 года',
    'pricing.builder.features.1': 'Все функции Pulse Pass',
    'pricing.builder.features.2': 'Возможности выступлений',
    'pricing.builder.features.3': 'Витрина экспертов',
    'pricing.builder.features.4': 'Приоритетные ИИ-рекомендации',
    'pricing.org.title': 'Org Pass',
    'pricing.org.description': 'Организация встреч, партнер в локации',
    'pricing.org.price': '200 000 ₽',
    'pricing.org.early': '70 000 ₽ (первым 30)',
    'pricing.org.features.1': 'Доход от 35 000 ₽/месяц за 4 встречи',
    'pricing.org.features.2': 'Статус локального хаба Pulse',
    'pricing.org.features.3': 'Приоритет в продвижении ИИ твоих продуктов внутри комьюнити',
    'pricing.org.features.4': 'Поддержка и готовая инфраструктура',
    'pricing.ambassador.title': 'Pulse Ambassador',
    'pricing.ambassador.description': 'Специальный статус для основателей клубов, лидеров комьюнити и инфлюенсеров',
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
    'faq.q1': 'Что я получу сразу после оплаты?',
    'faq.a1': '— Возможность приходить на любые встречи Pulse в любом городе — без ограничений. — На первой встрече ты кратко расскажешь, чем можешь быть полезен и что ищешь. — С этого момента ИИ начинает работать на тебя: он анализирует контексты встреч и сам подбирает людей, которые могут стать твоими клиентами, партнёрами или сотрудниками. — Хочешь больше, приходи чаще, делись обновлениями, а ИИ будет 24/7 искать решения с помощью других участников клуба.',
    'faq.q2': 'У меня нет сильного личного бренда — мне точно сюда?',
    'faq.a2': 'Да. Здесь ценят не "громкие имена", а конкретную пользу. Ты просто говоришь, чем можешь быть полезен, и к тебе начинают обращаться.',
    'faq.q3': 'Если я интроверт и не люблю "продавать себя"?',
    'faq.a3': 'Здесь не нужно "продавать". Просто говоришь — вот мой опыт, вот чем могу быть полезен. Всё остальное делает AI и структура встреч.',
    'faq.q4': 'Могу ли я делиться этим доступом с партнёром или коллегой?',
    'faq.a4': 'Нет. Каждому нужен свой индивидуальный доступ, потому что AI запоминает именно тебя, твои запросы и твою пользу. Это не про входной билет, это про цифровую память о тебе в системе Pulse.',
    'faq.q5': 'А если я вообще не знаю, чем могу быть полезен?',
    'faq.a5': 'Приди на первую встречу и просто послушай. AI всё равно тебя запомнит и может "подцепить" сопоставление позже, когда ты сам прояснишь, куда хочешь двигаться. Иногда случайное знакомство может поменять всю жизнь.',
    'faq.q6': 'Как работает ИИ-консьерж?',
    'faq.a6': 'Ты можешь забыть, кого встретил на прошлой неделе — AI не забудет. Каждое твоё участие в Pulse — это набор сигналов: голос, интересы, цели, запросы. AI соединяет их с сотнями других участников по всему миру и предлагает тебе точные совпадения — партнёров, клиентов, друзей, сооснователей.',
    'faq.q7': 'Можно ли вернуть деньги?',
    'faq.a7': 'Ранний доступ не подлежит возврату, так как вы получаете специальную цену и вместо 15 000 за годовой доступ, вы оплачиваете 10 000 за 2 года.',
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
