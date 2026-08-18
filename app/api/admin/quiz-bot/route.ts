import { NextRequest, NextResponse } from 'next/server';
import { getQuizBotSettings, updateQuizBotSettings, buildQuizBotSettingsPayload } from '@lib/quizBot';
import { requireAdminAccess } from '@lib/adminGuard';

const badRequest = (message: string) =>
	NextResponse.json({ ok: false, error: message }, { status: 400 });

const serverError = () =>
	NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });

const getBotInfo = () => ({
	botUsername: process.env.TELEGRAM_QUIZ_BOT_USERNAME ?? null,
	tokenConfigured: Boolean(process.env.TELEGRAM_QUIZ_BOT_TOKEN),
	webhookSecretConfigured: Boolean(process.env.TELEGRAM_QUIZ_BOT_WEBHOOK_SECRET),
});

export async function GET(request: NextRequest) {
	const guard = requireAdminAccess(request);
	if (!guard.allowed) {
		return guard.response;
	}

	try {
		const settings = await getQuizBotSettings();
		return NextResponse.json({ ok: true, data: settings, bot: getBotInfo() });
	} catch (error) {
		console.error('Failed to load quiz bot settings', error);
		return serverError();
	}
}

export async function PATCH(request: NextRequest) {
	const guard = requireAdminAccess(request);
	if (!guard.allowed) {
		return guard.response;
	}

	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return badRequest('Invalid JSON body');
	}

	let payload;
	try {
		payload = buildQuizBotSettingsPayload(body);
	} catch (error) {
		if (error instanceof Error) {
			return badRequest(error.message);
		}
		return badRequest('Неверный формат данных');
	}

	try {
		const updated = await updateQuizBotSettings(payload);
		return NextResponse.json({ ok: true, data: updated, bot: getBotInfo() });
	} catch (error) {
		console.error('Failed to update quiz bot settings', error);
		return serverError();
	}
}
