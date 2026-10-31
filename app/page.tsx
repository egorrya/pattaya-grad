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
	const title = `${landing.heroHeading.replace(/^[^\p{L}\p{N}]+/u, '').trim()} | Pattaya Grad`;
	const description = `${landing.heroHeading} ${landing.heroDescription}`.replace(/^[^\p{L}\p{N}]+/u, '').trim();

	return {
		title,
		description,
		openGraph: {
			title,
			description,
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
			title,
			description,
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
			analyticsLandingName={landing.defaultLandingName}
			landingSlug='main'
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
