import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/db';
import { getLandingContent } from '@lib/landing';
import { getLandingPageByUrlPath } from '@lib/landingPages';
import type { Prisma } from '../../../generated-prisma-client';

type Channel = 'whatsapp' | 'telegram';
type LeadWithLandingName = Prisma.LeadGetPayload<{
	include: { landingPage: { select: { name: true } } };
}>;

const MIN_CONTACT_LENGTH = 3;
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;
const DEFAULT_MAIN_LANDING_NAME = 'Главная страница';

const badRequest = (message: string) =>
	NextResponse.json({ ok: false, error: message }, { status: 400 });

const serverError = () =>
	NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });

const parsePositiveInteger = (value: string | null, fallback: number, max?: number) => {
	if (value === null) {
		return fallback;
	}

	const parsed = Number(value);

	if (!Number.isFinite(parsed) || parsed < 1) {
		return NaN;
	}

	if (typeof max === 'number' && parsed > max) {
		return max;
	}

	return Math.floor(parsed);
};

const parseChannelParam = (value: string | null): Channel | undefined => {
	if (value === 'whatsapp' || value === 'telegram') {
		return value;
	}
	return undefined;
};

const formatChannelLabel = (channel: Channel) =>
	channel === 'telegram' ? 'Telegram' : 'WhatsApp';

const parseTelegramChatIds = (raw: string | null | undefined): string[] => {
	if (!raw) {
		return [];
	}

	return raw
		.split(/[\s,;]+/)
		.map((value) => value.trim())
		.filter((value) => value.length > 0);
};

const extractClientIp = (request: NextRequest) => {
	const forwarded = request.headers.get('x-forwarded-for');
	if (forwarded) {
		return forwarded.split(',')[0].trim();
	}

	const realIp = request.headers.get('x-real-ip');
	if (realIp) {
		return realIp.trim();
	}

	return null;
};

const extractClientCountry = (request: NextRequest) => {
	const geoCountry = (request as NextRequest & { geo?: { country?: string } }).geo?.country;
	if (geoCountry) {
		return geoCountry;
	}

	const countryHeader = request.headers.get('x-vercel-ip-country');
	const normalizedCountry = countryHeader?.trim();
	if (!normalizedCountry) {
		return null;
	}
	return normalizedCountry.toUpperCase();
};

const sendTelegramNotification = async ({
	channel,
	contact,
	ipAddress,
	country,
	botToken,
	chatIds,
}: {
	channel: Channel;
	contact: string;
	ipAddress: string | null;
	country: string | null;
	botToken: string;
	chatIds: string[];
}) => {
	if (!botToken || chatIds.length === 0) {
		return;
	}

	const sendUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
	const message = [
		'Новая заявка с лендинга',
		`Канал: ${formatChannelLabel(channel)}`,
		`Контакт: ${contact}`,
		`IP: ${ipAddress ?? 'не определено'}`,
		`Страна: ${country ?? 'не определена'}`,
	].join('\n');

	for (const chatId of chatIds) {
		try {
			const response = await fetch(sendUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					chat_id: chatId,
					text: message,
				}),
			});

			if (!response.ok) {
				const details = await response.text().catch(() => null);
				console.error('Failed to send Telegram notification', {
					chatId,
					status: response.status,
					details,
				});
			}
		} catch (error) {
			console.error('Failed to send Telegram notification', { chatId, error });
		}
	}
};

export async function POST(request: NextRequest) {
	let payload: unknown;

	try {
		payload = await request.json();
	} catch {
		return badRequest('Invalid JSON body');
	}

	if (typeof payload !== 'object' || payload === null) {
		return badRequest('Request body must be an object');
	}

	const { channel, contact, honeypot, landingSlug } = payload as {
		channel?: Channel;
		contact?: unknown;
		honeypot?: unknown;
		landingSlug?: unknown;
	};

	if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
		return badRequest('Invalid request');
	}

	if (channel !== 'whatsapp' && channel !== 'telegram') {
		return badRequest("Channel must be either 'whatsapp' or 'telegram'");
	}

	if (typeof contact !== 'string' || contact.trim().length < MIN_CONTACT_LENGTH) {
		return badRequest(`Contact must be a string with at least ${MIN_CONTACT_LENGTH} characters`);
	}

	const normalizedContact = contact.trim();

	try {
		const ipAddress = extractClientIp(request);
		const country = extractClientCountry(request);

		const landing =
			typeof landingSlug === 'string'
				? await getLandingPageByUrlPath(landingSlug)
				: await getLandingContent();

		if (!landing) {
			return badRequest('Лендинг не найден');
		}

		await prisma.lead.create({
			data: {
				contact: normalizedContact,
				channel,
				ipAddress,
				country,
				landingPageId: typeof landingSlug === 'string' ? landing.id : null,
			},
		});

		const botToken = landing.telegramBotToken?.trim();
		const chatIds = parseTelegramChatIds(landing.telegramChatIds);
		await sendTelegramNotification({
			channel,
			contact: normalizedContact,
			ipAddress,
			country,
			botToken: botToken ?? '',
			chatIds,
		});

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error('Failed to save lead', error);
		return serverError();
	}
}

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const rawChannel = url.searchParams.get('channel');
	const channel = parseChannelParam(rawChannel);

	if (rawChannel !== null && channel === undefined) {
		return badRequest("Channel query should be 'whatsapp' or 'telegram'");
	}

	const limit = parsePositiveInteger(url.searchParams.get('limit'), DEFAULT_LIMIT, MAX_LIMIT);
	if (!Number.isFinite(limit)) {
		return badRequest('Limit must be a positive integer');
	}

	const page = parsePositiveInteger(url.searchParams.get('page'), 1);
	if (!Number.isFinite(page)) {
		return badRequest('Page must be a positive integer');
	}

	const skip = (page - 1) * limit;

	try {
		const where = channel ? { channel } : undefined;

		const leadsPromise = prisma.lead.findMany({
			where,
			skip,
			take: limit,
			orderBy: { createdAt: 'desc' },
			include: {
				landingPage: {
					select: { name: true },
				},
			},
		});
		const totalPromise = prisma.lead.count({ where });
		const landingContentPromise = getLandingContent();

		const leads = await leadsPromise;
		const [total, landingContent] = await Promise.all([totalPromise, landingContentPromise]);

		const defaultLandingName = landingContent.defaultLandingName ?? DEFAULT_MAIN_LANDING_NAME;
		const typedLeads = leads as LeadWithLandingName[];
		const formattedLeads = typedLeads.map((lead) => ({
			id: lead.id,
			channel: lead.channel,
			contact: lead.contact,
			createdAt: lead.createdAt,
			ipAddress: lead.ipAddress,
			country: lead.country,
			landingName: lead.landingPage?.name ?? defaultLandingName,
		}));

		return NextResponse.json({
			ok: true,
			data: formattedLeads,
			meta: {
				limit,
				page,
				total,
				totalPages: Math.ceil(total / limit),
			},
		});
	} catch (error) {
		console.error('Failed to fetch leads', error);
		return serverError();
	}
}
