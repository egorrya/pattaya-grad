'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button, Card, CardContent, CardDescription, CardTitle } from '@/components/ui';
import { syncLandingAttribution } from '@/lib/analytics/landingAttribution';

type Channel = 'telegram' | 'whatsapp';

type EnglishLandingProps = {
  slug: string; name: string; headerPhrase: string; heroImage: string | null;
  heroHeading: string; heroDescription: string; heroSupport: string;
  buttonLabel: string; contact: string; videoUrl: string; logoPath: string;
  nextScreenTitle: string; nextScreenDescription: string; nextScreenQuestion: string;
  telegramEnabled: boolean; whatsappEnabled: boolean; customScript: string | null;
};

export default function EnglishLanding(props: EnglishLandingProps) {
  const [step, setStep] = useState<'intro' | 'channel' | 'form' | 'success'>('intro');
  const [channel, setChannel] = useState<Channel>('whatsapp');
  const [contact, setContact] = useState('');
  const [videoOpen, setVideoOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const scriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scriptRef.current;
    if (!container || !props.customScript) return;
    container.innerHTML = props.customScript;
    container.querySelectorAll('script').forEach(oldScript => {
      const script = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attribute => script.setAttribute(attribute.name, attribute.value));
      script.text = oldScript.text;
      oldScript.replaceWith(script);
    });
    return () => { container.innerHTML = ''; };
  }, [props.customScript]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (contact.trim().length < 3) { setError('Please enter a valid contact.'); return; }
    setBusy(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ channel, contact: contact.trim(), internationalPhone: channel === 'whatsapp', landingSlug: props.slug, attribution: syncLandingAttribution(window.location.pathname, window.location.search.slice(1)) }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error();
      setStep('success');
    } catch { setError('We could not submit your request. Please check your contact and try again.'); }
    finally { setBusy(false); }
  }

  return <div className='min-h-screen bg-[#faf7f1] text-slate-900' lang='en'>
    <main className='mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-3 px-4 py-8'>
      <header className='flex self-stretch items-center gap-3 text-base font-medium leading-[1.2]'>
        <div className='relative h-12 w-12 overflow-hidden rounded-xl border border-slate-200 bg-slate-900/10 shadow-sm'><Image src={props.logoPath} alt='Pattaya Grad' fill className='object-contain' priority /></div>
        <p>{props.headerPhrase}</p>
      </header>
      <section className='self-stretch'>
        <Card className='gap-0 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-0 shadow-[0_20px_45px_rgba(15,15,15,0.12)]'>
          {props.heroImage && <div className='relative aspect-video w-full bg-cover bg-center' style={{backgroundImage: `url('${props.heroImage}')`}}>
            <div className='absolute inset-0 flex items-center justify-center'><button type='button' onClick={() => setVideoOpen(true)} aria-label='Play video' className='flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white text-slate-900 shadow-lg transition hover:bg-white/80'><svg className='h-6 w-6' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M8 5v14l11-7z' /></svg></button></div>
          </div>}
          <CardContent className='space-y-3 px-5 pb-5 pt-4'>
            {step === 'intro' ? <>
              <CardTitle className='text-[1.65rem] font-bold leading-[1.2] text-slate-900 md:text-[1.85rem]'>{props.heroHeading}</CardTitle>
              <CardDescription className='text-base text-slate-600'>{props.heroDescription}</CardDescription>
              <div className='flex flex-wrap items-center gap-3'><Button label={props.buttonLabel} onClick={() => setStep('channel')} /><p className='text-sm text-slate-500'>{props.heroSupport}</p></div>
            </> : step === 'success' ? <><CardTitle className='text-2xl font-bold'>Thank you! Your request has been received.</CardTitle><CardDescription>Our team will contact you soon.</CardDescription></> : <>
              <CardTitle className='text-2xl font-bold leading-[1.2] text-slate-900'>{props.nextScreenTitle}</CardTitle>
              <CardDescription className='text-base text-slate-600'>{props.nextScreenDescription}</CardDescription>
              <h3 className='text-lg font-semibold text-slate-800'>{props.nextScreenQuestion}</h3>
              {step === 'channel' ? <div className='flex flex-wrap gap-3'>
                {props.telegramEnabled && <Button icon={<Send className='h-4 w-4' />} style={{backgroundColor:'#14386e'}} onClick={() => {setChannel('telegram'); setStep('form');}}>Telegram</Button>}
                {props.whatsappEnabled && <Button icon={<MessageCircle className='h-4 w-4' />} style={{backgroundColor:'#08745d'}} onClick={() => {setChannel('whatsapp'); setStep('form');}}>WhatsApp</Button>}
              </div> : <>
                <div className='flex items-center justify-between rounded-2xl border border-pink-200/70 bg-pink-50/60 px-4 py-3 text-sm'><p>Selected: <strong>{channel === 'whatsapp' ? 'WhatsApp' : 'Telegram'}</strong></p><button type='button' onClick={() => { setStep('channel'); setContact(''); setError(''); }} className='text-xs font-semibold uppercase text-pink-500'>Change</button></div>
                <form onSubmit={submit} className='space-y-3 pt-3'><label htmlFor='contact' className='block text-sm font-semibold'>Your {channel === 'whatsapp' ? 'WhatsApp number' : 'Telegram username or phone number'}</label><input id='contact' required value={contact} onChange={e => setContact(e.target.value)} placeholder={channel === 'whatsapp' ? '+66 80 123 4567' : '@username or +66 80 123 4567'} className='w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200' /><p className='text-xs text-slate-500'>For phone numbers, include the country code.</p><button disabled={busy} className='w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white disabled:opacity-70'>{busy ? 'Sending…' : 'Send request'}</button>{error && <p role='alert' className='text-sm text-red-600'>{error}</p>}</form>
              </>}
              <p className='text-sm text-slate-600'>By submitting this request, you consent to the processing of your personal data in accordance with our <a className='font-semibold underline' href='/privacy-en' target='_blank' rel='noreferrer'>privacy policy</a>.</p>
            </>}
          </CardContent>
        </Card>
      </section>
      <footer className='flex self-stretch flex-col items-end text-right leading-[1.2]'><a href={`https://wa.me/${props.contact.replace(/\D/g, '')}`} target='_blank' rel='noreferrer' className='text-lg font-bold'>{props.contact}</a><span className='-mt-0.5 text-sm text-slate-500'>WhatsApp · Telegram</span></footer>
    </main>
    {videoOpen && <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4' role='dialog' aria-modal='true' aria-label='Video tour' onClick={() => setVideoOpen(false)}><div className='w-full max-w-3xl rounded-2xl bg-white p-4' onClick={e => e.stopPropagation()}><div className='mb-3 flex items-center justify-between'><h2 className='font-semibold'>Watch the video tour</h2><button type='button' onClick={() => setVideoOpen(false)} className='rounded-full px-3 py-1 text-sm hover:bg-slate-100'>Close ✕</button></div>{/\.(mp4|webm)(?:[?#]|$)/i.test(props.videoUrl) ? <video controls autoPlay playsInline className='max-h-[75vh] w-full rounded-xl bg-black' src={props.videoUrl} /> : <iframe className='aspect-video w-full rounded-xl' src={props.videoUrl} title='Video tour' allow='autoplay; fullscreen' allowFullScreen />}</div></div>}
    <div ref={scriptRef} aria-hidden />
  </div>;
}
