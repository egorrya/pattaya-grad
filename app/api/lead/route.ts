import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';
import { getLandingContent } from '../../../lib/landing';
import { Resend } from 'resend';

type Channel = 'whatsapp' | 'telegram';

const MIN_CONTACT_LENGTH = 3;
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;

const resendClient =
	process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.length > 0
		? new Resend(process.env.RESEND_API_KEY)
		: null;
const defaultNotificationFrom = process.env.NOTIFICATION_FROM ?? 'pc-move@gmail.com';

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

const sendNotificationEmail = async ({
	channel,
	contact,
	landingEmail,
	notificationFrom,
}: {
	channel: Channel;
	contact: string;
	landingEmail?: string | null;
	notificationFrom?: string;
}) => {
	if (!resendClient) {
		console.warn('Resend API key is not configured; notification skipped.');
		return;
	}

	if (!landingEmail) {
		console.warn('Notification email is empty; skipping send.');
		return;
	}

	const fromAddress = notificationFrom ?? defaultNotificationFrom;

	try {
		console.info('Sending lead notification', { channel, to: landingEmail });
		await resendClient.emails.send({
			from: fromAddress,
			to: landingEmail,
			subject: 'Новая заявка с лендинга',
			html: `
				<p>Новая заявка через <strong>${channel}</strong>.</p>
				<p>Контакт: ${contact}</p>
			`,
		});
		console.info('Notification email sent', { to: landingEmail });
	} catch (error) {
		console.error('Failed to send notification email', error);
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
		await sendNotificationEmail({
			channel,
			contact: normalizedContact,
			landingEmail: landing.notificationEmail,
			notificationFrom: landing.notificationFrom,
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
	const channel = rawChannel === null ? undefined : rawChannel;

	if (channel && channel !== 'whatsapp' && channel !== 'telegram') {
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
