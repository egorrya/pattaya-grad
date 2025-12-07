'use client';

import Image from 'next/image';

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui';
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
	privacyPolicyParagraphs,
	privacyPolicyVersion,
} from '@/data/privacyPolicy';
import { ReactNode, useState } from 'react';

const hexToRgb = (hex: string): [number, number, number] | null => {
	const normalized = hex.replace(/^#/, '');
	const expanded =
		normalized.length === 3
			? normalized
					.split('')
					.map((value) => value + value)
					.join('')
			: normalized;

	if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
		return null;
	}

	const values = expanded.match(/.{2}/g);
	if (!values) {
		return null;
	}

	return values.map((segment) => parseInt(segment, 16)) as [
		number,
		number,
		number
	];
};

const clampColor = (value: number) =>
	Math.max(0, Math.min(255, Math.round(value)));

const darkenColor = (hex: string, amount = 0.7) => {
	const rgb = hexToRgb(hex);
	if (!rgb) {
		return '#111827';
	}

	const keep = Math.max(0, Math.min(1, 1 - amount));
	const base = 15;
	const darkened = rgb.map((channel) =>
		clampColor(base + (channel - base) * keep)
	);

	return `rgb(${darkened.join(', ')})`;
};

const lightenColor = (hex: string, amount = 0.9) => {
	const rgb = hexToRgb(hex);
	if (!rgb) {
		return '#ffffff';
	}

	const mix = Math.max(0, Math.min(1, amount));
	const lightened = rgb.map((channel) =>
		clampColor(channel + (255 - channel) * mix)
	);

	return `rgb(${lightened.join(', ')})`;
};

type OptionItem = {
	label: string;
	icon: ReactNode;
	accentClass?: string;
	iconColor?: string;
	buttonColor?: string;
};

export type NextScreenData = {
	title: string;
	description: string;
	question: string;
	options: OptionItem[];
	consent: ReactNode;
};

type LandingProps = {
	headerPhrase: string;
	heroImage?: string;
	heroHeading: string;
	heroDescription: string;
	heroSupport: string;
	buttonLabel: string;
	contact: string;
	nextScreen?: NextScreenData;
};

	export function Landing({
		headerPhrase,
		heroImage,
		heroHeading,
		heroDescription,
		heroSupport,
		buttonLabel,
		contact,
		nextScreen,
	}: LandingProps) {
		const [shownNext, setShownNext] = useState(false);
		const [videoOpen, setVideoOpen] = useState(false);
		const hasHeroImage = Boolean(heroImage);
		const textPaddingClass = hasHeroImage
			? 'pt-4'
			: 'pt-6 rounded-t-[32px]';
		const videoUrl =
			'https://www.youtube.com/embed/GBiYp3E1_ws?autoplay=1&rel=0';
		const whatsappNumber = contact.replace(/\D/g, '');

	return (
		<div className='min-h-screen bg-[#faf7f1] text-slate-900'>
			<main className='mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-3 px-4 py-8'>
				<header className='self-stretch flex flex-col gap-3 text-sm font-medium leading-[1.2]'>
					<div className='flex items-center gap-3'>
						<div className='relative h-12 w-12 overflow-hidden rounded-xl border border-slate-200 bg-slate-900/10 shadow-sm'>
							<Image
								src='/assets/images/logo.webp'
								alt='MRQZ logo'
								fill
								className='object-contain'
								priority
							/>
						</div>
						<p className='text-base font-medium'>{headerPhrase}</p>
					</div>
				</header>

				<section className='self-stretch'>
					<Card className='overflow-hidden rounded-[32px] border border-slate-200 bg-white p-0 shadow-[0_20px_45px_rgba(15,15,15,0.12)] gap-0'>
						{hasHeroImage && (
							<div
								className='relative aspect-[16/9] w-full bg-cover bg-center'
								style={{ backgroundImage: `url('${heroImage}')` }}
							>
								<AlertDialog open={videoOpen} onOpenChange={setVideoOpen}>
									<div className='absolute inset-0 flex items-center justify-center'>
										<AlertDialogTrigger asChild>
											<button
												type='button'
												className='flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/70 bg-white text-slate-900 shadow-lg transition hover:bg-white/80'
											>
												<span className='sr-only'>Play video</span>
												<svg
													className='h-6 w-6'
													viewBox='0 0 24 24'
													fill='currentColor'
													aria-hidden='true'
												>
													<path d='M8 5v14l11-7z' />
												</svg>
											</button>
										</AlertDialogTrigger>
									</div>
									<AlertDialogContent className='max-w-3xl'>
										<AlertDialogHeader>
											<AlertDialogTitle>Видео о PATTAYA GRAD</AlertDialogTitle>
											<AlertDialogDescription>
												Смотрите короткий обзор в формате YouTube.
											</AlertDialogDescription>
										</AlertDialogHeader>
										<div className='relative aspect-video w-full overflow-hidden rounded-xl bg-black'>
											{videoOpen && (
												<iframe
													className='absolute inset-0 h-full w-full'
													src={videoUrl}
													title='Pattaya Grad'
													allow='autoplay; fullscreen'
													allowFullScreen
												/>
											)}
										</div>
										<AlertDialogFooter>
											<AlertDialogCancel>Закрыть</AlertDialogCancel>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>
							</div>
						)}
						{!shownNext && (
							<CardContent
								className={`space-y-3 px-5 pb-5 ${textPaddingClass}`}
							>
								<CardTitle className='text-[1.65rem] font-bold leading-[1.2] text-slate-900 md:text-[1.85rem]'>
									{heroHeading}
								</CardTitle>
								<CardDescription className='text-base text-slate-600'>
									{heroDescription}
								</CardDescription>
								<div className='flex flex-wrap items-center gap-3'>
									<Button
										label={buttonLabel}
										onClick={() => setShownNext(true)}
									/>
									<p className='text-sm text-slate-500'>{heroSupport}</p>
								</div>
							</CardContent>
						)}
						{shownNext && nextScreen && (
							<CardContent
								className={`space-y-4 px-5 pb-5 ${textPaddingClass}`}
							>
								<CardTitle className='text-2xl font-bold leading-[1.2] text-slate-900'>
									{nextScreen.title}
								</CardTitle>
								<CardDescription className='text-base text-slate-600'>
									{nextScreen.description}
								</CardDescription>
								<h3 className='text-lg font-semibold text-slate-800'>
									{nextScreen.question}
								</h3>
								<div className='flex flex-wrap gap-3'>
									{nextScreen.options.map((option) => {
										const baseColor =
											option.buttonColor ?? option.iconColor ?? '#111827';
										// derive brand-aware shades so the controls stay dark yet legible
										const buttonBackgroundColor = darkenColor(
											baseColor,
											0.35,
										);
										const iconBackgroundColor = darkenColor(baseColor);
										const iconForegroundColor = lightenColor(baseColor);

										return (
											<Button
												key={option.label}
												icon={option.icon}
												iconBgColor={iconBackgroundColor}
												iconColor={iconForegroundColor}
												backgroundClass='bg-transparent hover:opacity-90'
												style={{
													backgroundColor: buttonBackgroundColor,
												}}
												className='transition-[filter] hover:brightness-105'
											>
												{option.label}
											</Button>
										);
									})}
								</div>
								<p className='text-sm text-slate-600'>
									При отправке заявки я согласен на обработку персональных
									данных и согласен с{' '}
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<button className='inline text-sm font-semibold text-slate-900 underline-offset-4 transition hover:text-slate-800 hover:underline'>
												Политикой конфиденциальности
											</button>
										</AlertDialogTrigger>
										<AlertDialogContent className='max-h-[80vh] overflow-y-auto'>
											<AlertDialogHeader>
												<AlertDialogTitle>
													Политика конфиденциальности
												</AlertDialogTitle>
												<p className='text-xs text-slate-500'>
													{privacyPolicyVersion}
												</p>
											</AlertDialogHeader>
											<AlertDialogDescription className='!p-0'>
												<div className='space-y-3 text-xs leading-relaxed text-slate-700'>
													{privacyPolicyParagraphs.map((paragraph, index) => (
														<p key={index}>{paragraph}</p>
													))}
												</div>
											</AlertDialogDescription>
											<AlertDialogFooter>
												<AlertDialogCancel>Закрыть</AlertDialogCancel>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialog>
								</p>
							</CardContent>
						)}
					</Card>
				</section>

				<footer className='self-stretch flex flex-col items-end gap-0 text-right leading-[1.2]'>
					<a
						href={`https://wa.me/${whatsappNumber}`}
						target='_blank'
						rel='noreferrer'
						className='text-lg font-bold text-slate-900 transition hover:text-slate-800'
					>
						{contact}
					</a>
					<span className='text-sm text-slate-500 -mt-0.5 block'>
						(WhatsApp, Telegram) Паттайя Град
					</span>
				</footer>
			</main>
		</div>
	);
}
