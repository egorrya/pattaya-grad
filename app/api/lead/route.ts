import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';
import { getLandingContent } from '../../../lib/landing';

type Channel = 'whatsapp' | 'telegram';

const MIN_CONTACT_LENGTH = 3;
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;

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

const sendTelegramNotification = async ({
	channel,
	contact,
	botToken,
	chatIds,
}: {
	channel: Channel;
	contact: string;
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

	const { channel, contact } = payload as {
		channel?: Channel;
		contact?: unknown;
	};

	if (channel !== 'whatsapp' && channel !== 'telegram') {
		return badRequest("Channel must be either 'whatsapp' or 'telegram'");
	}

	if (typeof contact !== 'string' || contact.trim().length < MIN_CONTACT_LENGTH) {
		return badRequest(`Contact must be a string with at least ${MIN_CONTACT_LENGTH} characters`);
	}

	const normalizedContact = contact.trim();

	try {
		await prisma.lead.create({
			data: {
				contact: normalizedContact,
				channel,
			},
		});

		const landing = await getLandingContent();
		const botToken = landing.telegramBotToken?.trim();
		const chatIds = parseTelegramChatIds(landing.telegramChatIds);
		await sendTelegramNotification({
			channel,
			contact: normalizedContact,
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

		const [leads, total] = await Promise.all([
			prisma.lead.findMany({
				where,
				skip,
				take: limit,
				orderBy: { createdAt: 'desc' },
			}),
			prisma.lead.count({ where }),
		]);

		return NextResponse.json({
			ok: true,
			data: leads,
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
