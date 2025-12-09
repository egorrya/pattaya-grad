import { Landing } from '@/components/pages/Landing';
import { buildNextScreen } from '@/lib/landingNextScreen';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLandingPageByUrlPath } from '@lib/landingPages';

export type LandingPageRouteData = NonNullable<
  Awaited<ReturnType<typeof getLandingPageByUrlPath>>
>;

export async function loadLanding(slug: string): Promise<LandingPageRouteData> {
  const landing = await getLandingPageByUrlPath(slug);
  if (!landing) {
    notFound();
  }
  return landing;
}

export function createLandingMetadata(
  landing: LandingPageRouteData,
  slug: string,
): Metadata {
  const title = landing.headerPhrase;
  const description = landing.heroDescription;
  const openGraphDescription = landing.heroSupport || description;

  return {
    title,
    description,
    openGraph: {
      title: `${title} · Pattaya Grad`,
      description: openGraphDescription,
      url: `https://mrqz-landing.com/${slug}`,
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
      title: `${title} · Pattaya Grad`,
      description: openGraphDescription,
      images: [landing.heroImage ?? '/assets/images/image.webp'],
    },
    metadataBase: new URL('https://mrqz-landing.com'),
  };
}

export function renderLandingPage(landing: LandingPageRouteData, slug: string) {
  const nextScreen = buildNextScreen(landing);

  return (
    <Landing
      landingSlug={slug}
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
