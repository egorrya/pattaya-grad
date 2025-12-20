import { Metadata } from 'next';
import { loadLanding, createLandingMetadata, renderLandingPage } from '@/lib/landingRoutes';

type LandingPageParams = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 0;

export async function generateMetadata({ params }: LandingPageParams): Promise<Metadata> {
  const { slug } = await params;
  const landing = await loadLanding(slug);
  return createLandingMetadata(landing, slug);
}

export default async function LandingPage({ params }: LandingPageParams) {
  const { slug } = await params;
  const landing = await loadLanding(slug);
	return (
		<>
			{renderLandingPage(landing, slug)}
		</>
	);
}
