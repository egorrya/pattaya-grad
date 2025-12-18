import { Metadata } from 'next';
import { loadLanding } from '@/lib/landingRoutes';
import { LandingSuccess } from '@/components/pages/LandingSuccess';

type LandingPageParams = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 0;

export async function generateMetadata({
  params,
}: LandingPageParams): Promise<Metadata> {
  const { slug } = await params;
  const landing = await loadLanding(slug);
  const description = landing.heroSupport || landing.heroDescription;

  return {
    title: 'Заявка принята · Pattaya Grad',
    description,
    openGraph: {
      title: 'Заявка принята · Pattaya Grad',
      description,
      url: `https://mrqz-landing.com/${slug}/success`,
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
      title: 'Заявка принята · Pattaya Grad',
      description,
      images: [landing.heroImage ?? '/assets/images/image.webp'],
    },
    metadataBase: new URL('https://mrqz-landing.com'),
  };
}

export default async function LandingSuccessPage({
  params,
}: LandingPageParams) {
  const { slug } = await params;
  const landing = await loadLanding(slug);

  return (
    <>
      <head>
        <link rel='preload' href='/assets/images/image.webp' as='image' />
        <link rel='preload' href='/assets/images/logo.webp' as='image' />
      </head>
      <LandingSuccess
        headerPhrase={landing.headerPhrase}
        contact={landing.contact}
        logoPath={landing.logoPath ?? undefined}
      />
    </>
  );
}
