import { NextRequest, NextResponse } from 'next/server';
import { handleQuizBotUpdate } from '@lib/telegramQuizBot';

export async function POST(request: NextRequest) {
	const expectedSecret = process.env.TELEGRAM_QUIZ_BOT_WEBHOOK_SECRET;
	const providedSecret = request.headers.get('x-telegram-bot-api-secret-token');

	if (!expectedSecret || providedSecret !== expectedSecret) {
		return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
	}

	let update: unknown;
	try {
		update = await request.json();
	} catch {
		return NextResponse.json({ ok: true });
	}

	try {
		await handleQuizBotUpdate(update);
	} catch (error) {
		console.error('Failed to process quiz bot update', error);
	}

	return NextResponse.json({ ok: true });
}
