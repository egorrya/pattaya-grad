import { prisma } from './db';
import type { LandingContent } from '../generated-prisma-client';
import {
  defaultLandingContent,
  LandingContentPayload,
} from '../src/lib/landing';

const SINGLETON_ID = 'landing';
const LANDING_CACHE_TTL = 30 * 1000;
let landingContentCache: {
  value: LandingContent;
  expiresAt: number;
} | null = null;

const requireNonEmptyString = (value: unknown, field: string) => {
  if (typeof value !== 'string') {
    throw new Error(`Поле ${field} должно быть строкой`);
  }
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    throw new Error(`Поле ${field} не должно быть пустым`);
  }
  return trimmed;
};

const requireString = (value: unknown, field: string) => {
  if (typeof value !== 'string') {
    throw new Error(`Поле ${field} должно быть строкой`);
  }
  return value.trim();
};

const normalizeOptionalString = (value: unknown): string | null => {
  if (value === undefined || value === null) {
    return null;
  }

  if (typeof value !== 'string') {
    throw new Error('Не удалось обработать необязательное текстовое поле');
  }

  const trimmed = value.trim();
  return trimmed.length === 0 ? null : trimmed;
};

const requireBoolean = (value: unknown, field: string) => {
  if (typeof value !== 'boolean') {
    throw new Error(`Поле ${field} должно быть логическим значением`);
  }
  return value;
};

export const buildLandingContentPayload = (payload: unknown): LandingContentPayload => {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Данные запроса должны быть объектом');
  }

  const fields = payload as Record<string, unknown>;

  return {
    headerPhrase: requireNonEmptyString(fields.headerPhrase, 'headerPhrase'),
    heroImage: normalizeOptionalString(fields.heroImage),
    heroHeading: requireNonEmptyString(fields.heroHeading, 'heroHeading'),
    heroDescription: requireNonEmptyString(fields.heroDescription, 'heroDescription'),
    heroSupport: requireString(fields.heroSupport, 'heroSupport'),
    buttonLabel: requireNonEmptyString(fields.buttonLabel, 'buttonLabel'),
    contact: requireNonEmptyString(fields.contact, 'contact'),
    videoUrl: requireNonEmptyString(fields.videoUrl, 'videoUrl'),
    nextScreenTitle: requireNonEmptyString(fields.nextScreenTitle, 'nextScreenTitle'),
    nextScreenDescription: requireNonEmptyString(
      fields.nextScreenDescription,
      'nextScreenDescription',
    ),
    nextScreenQuestion: requireNonEmptyString(fields.nextScreenQuestion, 'nextScreenQuestion'),
    telegramEnabled: requireBoolean(fields.telegramEnabled, 'telegramEnabled'),
    whatsappEnabled: requireBoolean(fields.whatsappEnabled, 'whatsappEnabled'),
    customScript: normalizeOptionalString(fields.customScript),
    telegramBotToken: normalizeOptionalString(fields.telegramBotToken),
    telegramChatIds: normalizeOptionalString(fields.telegramChatIds),
    logoPath: requireNonEmptyString(fields.logoPath, 'logoPath'),
  };
};

export async function getLandingContent(): Promise<LandingContent> {
  const content = await prisma.landingContent.findUnique({
    where: { id: SINGLETON_ID },
  });

  if (content) {
    return content;
  }

  return prisma.landingContent.create({
    data: { id: SINGLETON_ID, ...defaultLandingContent },
  });
}

export async function updateLandingContent(
  newContent: LandingContentPayload,
): Promise<LandingContent> {
  const updated = await prisma.landingContent.upsert({
    where: { id: SINGLETON_ID },
    update: newContent,
    create: { id: SINGLETON_ID, ...newContent },
  });
  landingContentCache = null;
  return updated;
}

export async function getLandingContentCached(): Promise<LandingContent> {
  const now = Date.now();
  if (landingContentCache && landingContentCache.expiresAt > now) {
    return landingContentCache.value;
  }

  const fresh = await getLandingContent();
  landingContentCache = {
    value: fresh,
    expiresAt: now + LANDING_CACHE_TTL,
  };
  return fresh;
}
