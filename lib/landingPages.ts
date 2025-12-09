import { prisma } from './db';
import { buildLandingContentPayload } from './landing';
import { defaultLandingContent, type LandingContentPayload } from '../src/lib/landing';

const URL_PATH_PATTERN = /^[a-z0-9-]+$/;
const RESERVED_PREFIXES = ['admin', 'api', 'landing', '_next', 'static', 'assets', 'favicon.ico'];

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

const normalizeLandingUrlPath = (value: unknown): string => {
  const trimmed = requireNonEmptyString(value, 'urlPath').toLowerCase().replace(/^\/+|\/+$/g, '');

  if (!URL_PATH_PATTERN.test(trimmed)) {
    throw new Error('URL должен содержать только строчные латинские буквы, цифры и дефисы');
  }

  const matchedReserved = RESERVED_PREFIXES.find((prefix) => trimmed.startsWith(prefix));
  if (matchedReserved) {
    throw new Error(`URL не может начинаться с "${matchedReserved}"`);
  }

  return trimmed;
};

export type LandingPagePayload = LandingContentPayload & {
  urlPath: string;
  name: string;
};

export const buildLandingPagePayload = (payload: unknown): LandingPagePayload => {
  const fields = payload as Record<string, unknown>;
  const landingContent = buildLandingContentPayload({
    ...fields,
    defaultLandingName:
      fields.defaultLandingName ?? defaultLandingContent.defaultLandingName,
  });
  const urlPath = normalizeLandingUrlPath(fields.urlPath);
  const name = requireNonEmptyString(fields.name, 'name');

  const { defaultLandingName, ...contentWithoutDefault } = landingContent;

  return {
    ...contentWithoutDefault,
    urlPath,
    name,
  };
};

export async function getLandingPages() {
  return prisma.landingPage.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function getLandingPageById(id: string) {
  return prisma.landingPage.findUnique({
    where: { id },
  });
}

export async function getLandingPageByUrlPath(urlPath: string) {
  return prisma.landingPage.findUnique({
    where: { urlPath },
  });
}

export async function createLandingPage(payload: LandingPagePayload) {
  return prisma.landingPage.create({
    data: payload,
  });
}

export async function updateLandingPage(id: string, payload: LandingPagePayload) {
  return prisma.landingPage.update({
    where: { id },
    data: payload,
  });
}

export async function deleteLandingPage(id: string) {
  return prisma.landingPage.delete({
    where: { id },
  });
}

export const landingUrlPathToRoute = (urlPath: string) => `/${urlPath}`;
