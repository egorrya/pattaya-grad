import { Landing } from '@/components/pages/Landing';
import EnglishLanding from '@/components/pages/EnglishLanding';
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
  const title = `${landing.heroHeading.replace(/^[^\p{L}\p{N}]+/u, '').trim()} | Pattaya Grad`;
  const description = `${landing.heroHeading} ${landing.heroDescription}`.replace(/^[^\p{L}\p{N}]+/u, '').trim();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
      title,
      description,
      images: [landing.heroImage ?? '/assets/images/image.webp'],
    },
    metadataBase: new URL('https://mrqz-landing.com'),
  };
}

export function renderLandingPage(landing: LandingPageRouteData, slug: string) {
  if (landing.language === 'en') {
    return <EnglishLanding
      slug={slug} name={landing.name} headerPhrase={landing.headerPhrase}
      heroImage={landing.heroImage} heroHeading={landing.heroHeading}
      heroDescription={landing.heroDescription} heroSupport={landing.heroSupport}
      buttonLabel={landing.buttonLabel} contact={landing.contact} videoUrl={landing.videoUrl}
      logoPath={landing.logoPath} nextScreenTitle={landing.nextScreenTitle}
      nextScreenDescription={landing.nextScreenDescription} nextScreenQuestion={landing.nextScreenQuestion}
      telegramEnabled={landing.telegramEnabled} whatsappEnabled={landing.whatsappEnabled}
      customScript={landing.customScript}
    />;
  }
  const nextScreen = buildNextScreen(landing);

  return (
    <Landing
      analyticsLandingName={landing.name}
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
