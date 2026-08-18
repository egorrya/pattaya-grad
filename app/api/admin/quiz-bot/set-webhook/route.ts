import { NextRequest, NextResponse } from 'next/server';
import { requireAdminAccess } from '@lib/adminGuard';

const badRequest = (message: string) =>
	NextResponse.json({ ok: false, error: message }, { status: 400 });

const serverError = (message: string) =>
	NextResponse.json({ ok: false, error: message }, { status: 500 });

const resolveWebhookUrl = (request: NextRequest) => {
	const siteUrl = process.env.SITE_URL?.trim().replace(/\/+$/, '');
	const origin = siteUrl && siteUrl.length > 0 ? siteUrl : request.nextUrl.origin;
	return `${origin}/api/telegram/quiz-bot`;
};

export async function GET(request: NextRequest) {
	const guard = requireAdminAccess(request);
	if (!guard.allowed) {
		return guard.response;
	}

	const botToken = process.env.TELEGRAM_QUIZ_BOT_TOKEN;
	if (!botToken) {
		return badRequest('TELEGRAM_QUIZ_BOT_TOKEN не настроен в переменных окружения');
	}

	try {
		const response = await fetch(`https://api.telegram.org/bot${botToken}/getWebhookInfo`);
		const result = await response.json();
		return NextResponse.json({ ok: true, expectedUrl: resolveWebhookUrl(request), webhookInfo: result.result });
	} catch (error) {
		console.error('Failed to fetch quiz bot webhook info', error);
		return serverError('Не удалось получить информацию о вебхуке');
	}
}

export async function POST(request: NextRequest) {
	const guard = requireAdminAccess(request);
	if (!guard.allowed) {
		return guard.response;
	}

	const botToken = process.env.TELEGRAM_QUIZ_BOT_TOKEN;
	const secretToken = process.env.TELEGRAM_QUIZ_BOT_WEBHOOK_SECRET;

	if (!botToken) {
		return badRequest('TELEGRAM_QUIZ_BOT_TOKEN не настроен в переменных окружения');
	}
	if (!secretToken) {
		return badRequest('TELEGRAM_QUIZ_BOT_WEBHOOK_SECRET не настроен в переменных окружения');
	}

	const webhookUrl = resolveWebhookUrl(request);

	try {
		const response = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				url: webhookUrl,
				secret_token: secretToken,
				allowed_updates: ['message', 'callback_query'],
			}),
		});
		const result = await response.json();

		if (!result.ok) {
			return serverError(result.description ?? 'Telegram отклонил установку вебхука');
		}

		return NextResponse.json({ ok: true, webhookUrl, telegram: result });
	} catch (error) {
		console.error('Failed to set quiz bot webhook', error);
		return serverError('Не удалось установить вебхук');
	}
}
