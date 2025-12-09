import { defaultLandingContent, type LandingContentPayload } from './landing';

export type LandingFormState = Omit<LandingContentPayload, 'heroImage'> & {
  heroImage: string;
  customScript: string;
  logoPath: string;
  telegramBotToken: string;
  telegramChatIds: string;
};

export const normalizeToLandingFormState = (payload: LandingContentPayload): LandingFormState => ({
  ...payload,
  heroImage: payload.heroImage ?? '',
  customScript: payload.customScript ?? '',
  logoPath: payload.logoPath ?? '',
  telegramBotToken: payload.telegramBotToken ?? '',
  telegramChatIds: payload.telegramChatIds ?? '',
});

export const defaultLandingFormState = normalizeToLandingFormState(defaultLandingContent);

const ensureAssetPath = (value: string) => {
  if (value.startsWith('/') || /^https?:\/\//i.test(value)) {
    return value;
  }

  return `/${value}`;
};

export const buildLandingFormPayload = (state: LandingFormState): LandingContentPayload => {
  const optimizedHeroImage = state.heroImage.trim();
  const optimizedScript = state.customScript.trim();
  const optimizedLogoPath = state.logoPath.trim();
  const optimizedBotToken = state.telegramBotToken.trim();
  const optimizedChatIds = state.telegramChatIds.trim();

  return {
    ...state,
    heroImage: optimizedHeroImage === '' ? null : ensureAssetPath(optimizedHeroImage),
    customScript: optimizedScript === '' ? null : optimizedScript,
    telegramBotToken: optimizedBotToken === '' ? null : optimizedBotToken,
    telegramChatIds: optimizedChatIds === '' ? null : optimizedChatIds,
    logoPath: optimizedLogoPath === '' ? '' : ensureAssetPath(optimizedLogoPath),
  };
};
