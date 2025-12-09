import { MessageCircle, Send } from 'lucide-react';
import type { NextScreenData } from '@/components/pages/Landing';

type LandingNextScreenInput = {
  telegramEnabled: boolean;
  whatsappEnabled: boolean;
  nextScreenTitle: string;
  nextScreenDescription: string;
  nextScreenQuestion: string;
};

export function buildNextScreen(
  landing: LandingNextScreenInput,
): NextScreenData | undefined {
  const options: NextScreenData['options'] = [];
  if (landing.telegramEnabled) {
    options.push({
      label: 'Telegram',
      channel: 'telegram',
      icon: <Send className='h-4 w-4' />,
      buttonColor: '#1c4a99',
    });
  }
  if (landing.whatsappEnabled) {
    options.push({
      label: 'WhatsApp',
      channel: 'whatsapp',
      icon: <MessageCircle className='h-4 w-4' />,
      buttonColor: '#0a8f72',
    });
  }

  if (options.length === 0) {
    return undefined;
  }

  return {
    title: landing.nextScreenTitle,
    description: landing.nextScreenDescription,
    question: landing.nextScreenQuestion,
    options,
    consent: (
      <span>
        Я согласен на{' '}
        <span className='text-pink-500 underline'>
          обработку персональных данных
        </span>{' '}
        согласно{' '}
        <span className='text-pink-500 underline'>политике конфиденциальности</span>
      </span>
    ),
  };
}
