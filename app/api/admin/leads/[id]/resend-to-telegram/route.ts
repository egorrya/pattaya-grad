import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/db';
import { requireAdminAccess } from '@lib/adminGuard';
import { getLandingContent } from '@lib/landing';
import { parseTelegramChatIds } from '@lib/telegramNotify';
import {
	resolveTelegramLeadLinkContact,
	sendTelegramQuizLeadNotificationToAdmins,
} from '@lib/telegramLeadNotification';

const notFoundResponse = () =>
	NextResponse.json({ ok: false, error: 'Заявка не найдена' }, { status: 404 });

const badRequest = (message: string) =>
	NextResponse.json({ ok: false, error: message }, { status: 400 });

const telegramError = () =>
	NextResponse.json(
		{ ok: false, error: 'Не удалось отправить заявку в Telegram' },
		{ status: 502 },
	);

const serverError = () =>
	NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });

export async function POST(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const guard = requireAdminAccess(request);
	if (!guard.allowed) {
		return guard.response;
	}

	try {
		const { id } = await params;
		const lead = await prisma.lead.findUnique({ where: { id } });
		if (!lead) {
			return notFoundResponse();
		}

		if (lead.source !== 'telegram_bot') {
			return badRequest('Повторная отправка доступна только для заявок из Telegram-бота');
		}

		if (!lead.message) {
			return badRequest('Для этой заявки не найдено Telegram-уведомление');
		}

		const telegramContact = resolveTelegramLeadLinkContact({
			telegramUserId: lead.telegramUserId,
			telegramUsername: lead.telegramUsername,
			legacyContact: lead.contact,
			legacyMessage: lead.message,
		});
		const landingContent = await getLandingContent();
		const notification = await sendTelegramQuizLeadNotificationToAdmins({
			notificationBotToken: landingContent.telegramBotToken?.trim(),
			quizBotToken: process.env.TELEGRAM_QUIZ_BOT_TOKEN?.trim(),
			chatIds: parseTelegramChatIds(landingContent.telegramChatIds),
			text: lead.message,
			contact: telegramContact,
			quizBotUsername: process.env.TELEGRAM_QUIZ_BOT_USERNAME,
		});

		if (!notification.sent) {
			return telegramError();
		}

		return NextResponse.json({
			ok: true,
			telegramLinkRequested: notification.telegramLinkRequested,
			telegramLinkIncluded: notification.telegramLinkIncluded,
		});
	} catch (error) {
		console.error('Failed to resend lead to Telegram', error);
		return serverError();
	}
}
