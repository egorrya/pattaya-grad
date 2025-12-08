export type LandingContentPayload = {
  headerPhrase: string;
  heroImage?: string | null;
  heroHeading: string;
  heroDescription: string;
  heroSupport: string;
  buttonLabel: string;
  contact: string;
  videoUrl: string;
  nextScreenTitle: string;
  nextScreenDescription: string;
  nextScreenQuestion: string;
  telegramEnabled: boolean;
  whatsappEnabled: boolean;
  customScript?: string | null;
  telegramBotToken?: string | null;
  telegramChatIds?: string | null;
  logoPath: string;
};

export const defaultLandingContent: LandingContentPayload = {
  headerPhrase: '15 лет опыта. Более 2000 завершенных сделок',
  heroImage: '/assets/images/image.webp',
  heroHeading: '📘 Отправим каталог недвижимости Паттайи и поможем с выбором.',
  heroDescription:
    '🚗 Заберем вас от отеля и за 3 часа покажем реальные и выгодные варианты, достойные внимания.',
  heroSupport:
    'Мы отправим каталог моментально, и менеджер свяжется в WhatsApp или Telegram.',
  buttonLabel: 'Получить каталог',
  contact: '+6680-151-31-11',
  videoUrl: 'https://www.youtube.com/embed/GBiYp3E1_ws?autoplay=1&rel=0',
  nextScreenTitle:
    '🔑 Мы поможем подобрать апартаменты и сопроводим сделку до получения ключей и документов.',
  nextScreenDescription:
    'Оставьте контакт и мы пришлем каталог недвижимости. Подберем объекты под вас и запланируем экскурсию. Пишите, звоните.',
  nextScreenQuestion: 'Куда отправить каталог недвижимости Паттайи?',
  telegramEnabled: true,
  whatsappEnabled: true,
  customScript: null,
  telegramBotToken: null,
  telegramChatIds: null,
  logoPath: '/assets/images/logo.webp',
};
