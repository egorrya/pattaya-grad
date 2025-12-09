import { Landing, NextScreenData } from '@/components/pages/Landing';
import { MessageCircle, Send } from 'lucide-react';
import { Metadata } from 'next';
import { getLandingContent } from '../lib/landing';

export const revalidate = 0;

async function buildNextScreen(
	landing: Awaited<ReturnType<typeof getLandingContent>>,
) {
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
				<span className='text-pink-500 underline'>
					политике конфиденциальности
				</span>
			</span>
		),
	};
}

async function loadLandingData() {
	return getLandingContent();
}

export async function generateMetadata(): Promise<Metadata> {
	const landing = await loadLandingData();
	const title = landing.headerPhrase;
	const description = landing.heroDescription;
	const openGraphTitle = `${title} · Pattaya Grad`;
	const openGraphDescription = landing.heroSupport || description;

	return {
		title,
		description,
		openGraph: {
			title: openGraphTitle,
			description: openGraphDescription,
			url: 'https://mrqz-landing.com/',
			images: [
				{
					url: landing.heroImage ?? '/assets/images/image.webp',
					alt: 'Pattaya Grad',
				},
			],
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: openGraphTitle,
			description: openGraphDescription,
			images: [landing.heroImage ?? '/assets/images/image.webp'],
		},
		metadataBase: new URL('https://mrqz-landing.com'),
	};
}

export default async function HomePage() {
	const landing = await loadLandingData();
	const nextScreen = await buildNextScreen(landing);

	return (
		<Landing
			headerPhrase={landing.headerPhrase}
			heroImage={landing.heroImage ?? undefined}
			heroHeading={landing.heroHeading}
			heroDescription={landing.heroDescription}
			heroSupport={landing.heroSupport}
			buttonLabel={landing.buttonLabel}
			contact={landing.contact}
			videoUrl={landing.videoUrl}
			nextScreen={nextScreen}
			customScript={landing.customScript ?? undefined}
			logoPath={landing.logoPath}
		/>
	);
}
