import { Metadata } from 'next';
import { LandingSuccess } from '@/components/pages/LandingSuccess';
import { getLandingContent } from '@lib/landing';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const landing = await getLandingContent();
  const description = landing.heroSupport || landing.heroDescription;

  return {
    title: 'Заявка принята · Pattaya Grad',
    description,
    openGraph: {
      title: 'Заявка принята · Pattaya Grad',
      description,
      url: 'https://mrqz-landing.com/success',
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

export default async function SuccessPage() {
  const landing = await getLandingContent();

  return (
    <LandingSuccess
      headerPhrase={landing.headerPhrase}
      contact={landing.contact}
      logoPath={landing.logoPath ?? undefined}
    />
  );
}
