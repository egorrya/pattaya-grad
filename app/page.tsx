import { Landing } from '@/components/pages/Landing';
import { Metadata } from 'next';
import { getLandingContent } from '@lib/landing';
import { buildNextScreen } from '@/lib/landingNextScreen';

export const revalidate = 0;

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
		<>
			<head>
				<link rel='preload' href='/assets/images/image.webp' as='image' />
				<link rel='preload' href='/assets/images/logo.webp' as='image' />
			</head>
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
		</>
	);
}
