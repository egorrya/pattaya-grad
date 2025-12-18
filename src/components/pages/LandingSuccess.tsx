import Image from 'next/image';

import { Card, CardContent } from '@/components/ui';

type LandingSuccessProps = {
  headerPhrase: string;
  contact: string;
  logoPath?: string;
};

const sanitizeContactDigits = (value: string) =>
  value.replace(/\D/g, '').replace(/^8/, '7');

export function LandingSuccess({
  headerPhrase,
  contact,
  logoPath,
}: LandingSuccessProps) {
  const resolvedLogoPath = logoPath ?? '/assets/images/logo.webp';
  const contactDigits = sanitizeContactDigits(contact);
  const whatsappHref = contactDigits ? `https://wa.me/${contactDigits}` : undefined;

  return (
    <div className='min-h-screen bg-[#faf7f1] text-slate-900'>
      <main className='mx-auto flex min-h-screen max-w-xl flex-col gap-6 px-4 py-10'>
        <header className='flex items-center gap-3 text-sm font-medium leading-[1.2]'>
          <div className='relative h-12 w-12 overflow-hidden rounded-xl border border-slate-200 bg-slate-900/10 shadow-sm'>
            <Image
              src={resolvedLogoPath}
              alt='MRQZ logo'
              fill
              className='object-contain'
              priority
            />
          </div>
          <p className='text-base font-medium'>{headerPhrase}</p>
        </header>

        <section>
          <Card className='rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(15,15,15,0.12)]'>
            <CardContent className='space-y-5'>
              <div className='space-y-1'>
                <p className='text-xs font-semibold uppercase tracking-[0.25em] text-slate-500'>
                  Успешно
                </p>
                <h1 className='text-3xl font-bold leading-tight text-slate-900'>
                  Спасибо, заявка принята
                </h1>
              </div>

              <div className='space-y-3 rounded-2xl border border-slate-200 bg-slate-50/90 p-5 text-sm text-slate-700'>
                <p className='text-base font-semibold text-slate-800 text-left'>
                  Мы получили вашу заявку — скоро с вами свяжется наш менеджер.
                </p>
                <p className='text-sm text-slate-600'>
                  Пока вы ждёте, загляните на наши площадки:
                </p>
                <ul className='space-y-2 text-sm text-slate-600'>
                  <li>
                    🔹{' '}
                    <span className='font-semibold text-slate-800'>Telegram-канал</span> — свежие
                    новости рынка, обзоры объектов, выгодные предложения и реальные кейсы покупателей.
                  </li>
                  <li>
                    🔹{' '}
                    <span className='font-semibold text-slate-800'>YouTube-канал</span> — подробные
                    видео-обзоры жилых комплексов, районов и инвестиционных возможностей.
                  </li>
                </ul>
                <p className='text-sm text-slate-600'>
                  Это поможет вам лучше разобраться в рынке и заранее присмотреть интересные варианты 👌
                </p>
                <div className='flex flex-col gap-3 sm:flex-row'>
                  <a
                    href='https://t.me/pattayagradthailand'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex flex-1 items-center justify-center rounded-full border border-[#00b8d4] bg-[#00b8d4]/10 px-4 py-3 text-sm font-semibold text-[#006a7a] transition hover:bg-[#00b8d4]/20'
                  >
                    Перейти в Telegram
                  </a>
                  <a
                    href='https://www.youtube.com/@pattayagradthailand/videos'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex flex-1 items-center justify-center rounded-full border border-[#ff0000] bg-[#ff0000]/10 px-4 py-3 text-sm font-semibold text-[#a10000] transition hover:bg-[#ff0000]/20'
                  >
                    Посмотреть YouTube
                  </a>
                </div>
              </div>

              <div className='space-y-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-relaxed text-slate-700'>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>
                  Контакт для связи
                </p>
                <p className='text-base font-semibold text-slate-900'>{contact}</p>
                {whatsappHref && (
                  <a
                    href={whatsappHref}
                    className='text-sm font-semibold text-pink-500 underline-offset-2 transition hover:text-pink-400'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Написать в WhatsApp
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
