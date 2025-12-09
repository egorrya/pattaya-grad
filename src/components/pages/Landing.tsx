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
import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';

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

type Channel = 'whatsapp' | 'telegram';

const formatWhatsAppNumber = (rawValue: string) => {
	const digitsOnly = rawValue.replace(/\D/g, '');
	if (digitsOnly.length === 0) {
		return '';
	}

	let normalized = digitsOnly;
	if (normalized[0] === '8') {
		normalized = `7${normalized.slice(1)}`;
	} else if (normalized[0] !== '7') {
		normalized = `7${normalized}`;
	}

	const rest = normalized.slice(1, 11);
	const areaCode = rest.slice(0, 3);
	const prefix = rest.slice(3, 6);
	const mid = rest.slice(6, 8);
	const tail = rest.slice(8, 10);

	let formatted = '+7';
	if (areaCode.length > 0) {
		formatted += ` (${areaCode}`;
		if (areaCode.length === 3) {
			formatted += ')';
		}
	}
	if (prefix.length > 0) {
		formatted += ` ${prefix}`;
	}
	if (mid.length > 0) {
		formatted += `-${mid}`;
	}
	if (tail.length > 0) {
		formatted += `-${tail}`;
	}

	return formatted;
};

type OptionItem = {
	label: string;
	icon: ReactNode;
	channel: Channel;
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
	videoUrl?: string;
	customScript?: string;
	logoPath?: string;
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
		videoUrl,
		customScript,
		logoPath,
	}: LandingProps) {
		const [shownNext, setShownNext] = useState(false);
		const [selectedChannel, setSelectedChannel] = useState<
			Channel | null
		>(null);
		const [contactInput, setContactInput] = useState('');
		const [isSubmittingContact, setIsSubmittingContact] = useState(false);
		const [submissionStatus, setSubmissionStatus] = useState<
			'idle' | 'success' | 'error'
		>('idle');
		const [submissionMessage, setSubmissionMessage] = useState<string | null>(
			null,
		);
		const [videoOpen, setVideoOpen] = useState(false);
		const hasHeroImage = Boolean(heroImage);
		const textPaddingClass = hasHeroImage
			? 'pt-4'
			: 'pt-6 rounded-t-[32px]';
		const resolvedVideoUrl =
			videoUrl ?? 'https://www.youtube.com/embed/GBiYp3E1_ws?autoplay=1&rel=0';
		const resolvedLogoPath = logoPath ?? '/assets/images/logo.webp';
		const heroSupportText = heroSupport.trim();
		const whatsappNumber = contact.replace(/\D/g, '');
		const channelLabelMap: Record<Channel, string> = {
			whatsapp: 'WhatsApp',
			telegram: 'Telegram',
		};
		const currentChannelLabel = selectedChannel
			? channelLabelMap[selectedChannel]
			: null;
		const contactPlaceholder =
			selectedChannel === 'whatsapp'
				? 'Например, +7 911 123 45 67'
				: 'Например, +7 911 123 45 67 или @nikname';
		const channelHint =
			nextScreen?.options && nextScreen.options.length > 0
				? nextScreen.options.map((option) => option.label).join(', ')
				: 'WhatsApp, Telegram';
		const customScriptContent = customScript?.trim();
		const scriptContainerRef = useRef<HTMLDivElement | null>(null);
		const handleOptionSelect = (channel: Channel) => {
			setSelectedChannel(channel);
			setSubmissionStatus('idle');
			setSubmissionMessage(null);
			setContactInput('');
		};

		const validateContactInput = (
			channel: Channel,
			value: string,
		): string | null => {
			const trimmed = value.trim();
			if (trimmed.length < 3) {
				return 'Контакт должен быть не короче 3 символов.';
			}

			const phonePattern = /^[+\d][\d\s-]*\d$/;
			const digitsOnly = trimmed.replace(/\D/g, '');

			if (channel === 'whatsapp') {
				if (digitsOnly.length < 7) {
					return 'Номер WhatsApp должен содержать как минимум 7 цифр.';
				}
				if (!phonePattern.test(trimmed)) {
					return 'В WhatsApp можно вводить только цифры, пробелы, дефисы и плюс.';
				}
				return null;
			}

			// Telegram допускает телефон или никнейм
			if (phonePattern.test(trimmed)) {
				if (digitsOnly.length < 7) {
					return 'Номер в Telegram должен содержать как минимум 7 цифр.';
				}
				return null;
			}

			const telegramHandle = trimmed.replace(/^@/, '');
			if (!/^[A-Za-z0-9_.]{3,}$/.test(telegramHandle)) {
				return 'Telegram-ник должен начинаться с буквы или @ и содержать минимум 3 символа.';
			}

			return null;
		};

		const resetChannelSelection = () => {
			setSelectedChannel(null);
			setSubmissionStatus('idle');
			setSubmissionMessage(null);
			setContactInput('');
		};

		const handleContactInputChange = (value: string) => {
			setSubmissionStatus('idle');
			setSubmissionMessage(null);
			if (selectedChannel === 'whatsapp') {
				const digitsOnly = value.replace(/\D/g, '');
				if (digitsOnly.length === 0) {
					setContactInput('');
					return;
				}
				setContactInput(formatWhatsAppNumber(digitsOnly));
				return;
			}

			if (selectedChannel === 'telegram') {
				const digitsOnly = value.replace(/\D/g, '');
				const numericInputPattern = /^[\d\s()+-]*$/;
				if (digitsOnly.length > 0 && numericInputPattern.test(value)) {
					setContactInput(formatWhatsAppNumber(digitsOnly));
					return;
				}
				const sanitized = value.replace(/[^A-Za-z0-9@]/g, '');
				setContactInput(sanitized);
				return;
			}

			setContactInput(value);
		};

		useEffect(() => {
			if (selectedChannel === 'whatsapp') {
				setContactInput((value) => {
					const digitsOnly = value.replace(/\D/g, '');
					if (digitsOnly.length === 0) {
						return '';
					}
					return formatWhatsAppNumber(digitsOnly);
				});
				return;
			}

			if (selectedChannel === 'telegram') {
				setContactInput((value) => {
					const digitsOnly = value.replace(/\D/g, '');
					const numericInputPattern = /^[\d\s()+-]*$/;
					if (digitsOnly.length > 0 && numericInputPattern.test(value)) {
						return formatWhatsAppNumber(digitsOnly);
					}
					return value.replace(/[^A-Za-z0-9@]/g, '');
				});
			}
		}, [selectedChannel]);

		const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			if (!selectedChannel) {
				return;
			}

			const normalizedContact = contactInput.trim();
			const validationError = validateContactInput(
				selectedChannel,
				normalizedContact,
			);
			if (validationError) {
				setSubmissionStatus('error');
				setSubmissionMessage(validationError);
				return;
			}

			setIsSubmittingContact(true);
			setSubmissionStatus('idle');
			setSubmissionMessage(null);

			try {
				const response = await fetch('/api/lead', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						channel: selectedChannel,
						contact: normalizedContact,
					}),
				});

				const responseBody = await response.json().catch(() => null);

				if (!response.ok || responseBody?.ok !== true) {
					const errorText =
						responseBody?.error ?? 'Не удалось отправить заявку. Повторите позже.';
					setSubmissionStatus('error');
					setSubmissionMessage(errorText);
					return;
				}

				setSubmissionStatus('success');
				setSubmissionMessage('Готово! Скоро менеджер напишет вам.');
				setContactInput('');
			} catch (error) {
				console.error('Lead submit error', error);
				setSubmissionStatus('error');
				setSubmissionMessage('Сбой отправки. Попробуйте снова.');
			} finally {
				setIsSubmittingContact(false);
			}
	};

	useEffect(() => {
		const container = scriptContainerRef.current;
		if (!container) {
			return;
		}

		if (!customScriptContent) {
			container.innerHTML = '';
			return;
		}

		// Inject the HTML provided by the backend and re-create script tags
		container.innerHTML = customScriptContent;
		const scriptNodes = Array.from(container.querySelectorAll('script'));
		scriptNodes.forEach((oldScript) => {
			const newScript = document.createElement('script');
			Array.from(oldScript.attributes).forEach((attr) => {
				newScript.setAttribute(attr.name, attr.value);
			});
			newScript.text = oldScript.text;
			oldScript.replaceWith(newScript);
		});

		return () => {
			container.innerHTML = '';
		};
	}, [customScriptContent]);

	return (
		<div className='min-h-screen bg-[#faf7f1] text-slate-900'>
			<main className='mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-3 px-4 py-8'>
				<header className='self-stretch flex flex-col gap-3 text-sm font-medium leading-[1.2]'>
					<div className='flex items-center gap-3'>
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
									src={resolvedVideoUrl}
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
									{heroSupportText && (
										<p className='text-sm text-slate-500'>
											{heroSupportText}
										</p>
									)}
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
									{!selectedChannel ? (
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
														onClick={() => handleOptionSelect(option.channel)}
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
									) : (
										<div className='flex items-center justify-between rounded-2xl border border-pink-200/70 bg-pink-50/60 px-4 py-3 text-sm text-slate-800'>
											<p>
												Вы выбрали канал{' '}
												<span className='font-semibold'>
													{currentChannelLabel}
												</span>
											</p>
											<button
												type='button'
												className='text-xs font-semibold uppercase tracking-wide text-pink-500 underline-offset-2 transition hover:text-pink-400 cursor-pointer'
												onClick={resetChannelSelection}
											>
												Сменить выбор
											</button>
										</div>
									)}
								{selectedChannel && (
									<form
										onSubmit={handleSubmit}
										className='space-y-3 pt-3'
									>
										<div className='flex flex-col gap-2'>
											<label
												htmlFor='contact-input'
												className='text-sm font-semibold text-slate-800'
											>
												Контакт для {currentChannelLabel}
											</label>
											<input
												id='contact-input'
												type='text'
												value={contactInput}
												onChange={(event) =>
													handleContactInputChange(event.target.value)
												}
												placeholder={contactPlaceholder}
												className='w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200'
											/>
										</div>
										<button
											type='submit'
											disabled={isSubmittingContact}
											className='inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70 cursor-pointer'
										>
											{isSubmittingContact
												? 'Сохраняем...'
												: `Отправить заявку в ${currentChannelLabel}`}
										</button>
										{submissionMessage && (
											<p
												className={`text-sm ${
													submissionStatus === 'error'
														? 'text-red-500'
														: 'text-emerald-600'
												}`}
											>
												{submissionMessage}
											</p>
										)}
									</form>
								)}
								<p className='text-sm text-slate-600'>
									При отправке заявки я согласен на обработку персональных
									данных и согласен с{' '}
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<button className='inline text-sm font-semibold text-slate-900 underline-offset-4 transition hover:text-slate-800 hover:underline cursor-pointer'>
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
						className='text-lg font-bold text-slate-900 transition hover:text-slate-800 cursor-pointer'
					>
						{contact}
					</a>
					<span className='text-sm text-slate-500 -mt-0.5 block'>
						({channelHint}) Паттайя Град
					</span>
					</footer>
				</main>
				{customScriptContent ? (
					<div ref={scriptContainerRef} aria-hidden />
				) : null}
			</div>
		);
	}
