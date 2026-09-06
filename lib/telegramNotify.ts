export const parseTelegramChatIds = (raw: string | null | undefined): string[] => {
	if (!raw) {
		return [];
	}

	return raw
		.split(/[\s,;]+/)
		.map((value) => value.trim())
		.filter((value) => value.length > 0);
};

export type TelegramReplyMarkup = Record<string, unknown>;

type TelegramSendResult = {
	sent: boolean;
	errorCode?: string;
};

export type TelegramBroadcastResult = {
	sent: boolean;
	replyMarkupIncluded: boolean;
	errorCode?: string;
};

export const sendTelegramMessage = async ({
	botToken,
	chatId,
	text,
	replyMarkup,
}: {
	botToken: string;
	chatId: string;
	text: string;
	replyMarkup?: TelegramReplyMarkup;
}): Promise<TelegramSendResult> => {
	const sendUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

	try {
		const response = await fetch(sendUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: chatId,
				text,
				...(replyMarkup ? { reply_markup: replyMarkup } : {}),
			}),
		});

		if (!response.ok) {
			const details = await response.text().catch(() => null);
			const errorCode = details?.match(/\bBUTTON_USER_[A-Z_]+\b/)?.[0];
			console.error('Failed to send Telegram message', {
				chatId,
				status: response.status,
				details,
			});
			return { sent: false, errorCode };
		}

		return { sent: true };
	} catch (error) {
		console.error('Failed to send Telegram message', { chatId, error });
		return { sent: false };
	}
};

export const answerTelegramCallbackQuery = async ({
	botToken,
	callbackQueryId,
}: {
	botToken: string;
	callbackQueryId: string;
}): Promise<void> => {
	try {
		const response = await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ callback_query_id: callbackQueryId }),
		});

		if (!response.ok) {
			const details = await response.text().catch(() => null);
			console.error('Failed to answer Telegram callback query', {
				callbackQueryId,
				status: response.status,
				details,
			});
		}
	} catch (error) {
		console.error('Failed to answer Telegram callback query', { callbackQueryId, error });
	}
};

export const broadcastTelegramMessage = async ({
	botToken,
	chatIds,
	text,
	replyMarkup,
}: {
	botToken: string | null | undefined;
	chatIds: string[];
	text: string;
	replyMarkup?: TelegramReplyMarkup;
}): Promise<TelegramBroadcastResult> => {
	if (!botToken || chatIds.length === 0) {
		return { sent: false, replyMarkupIncluded: false };
	}

	let deliveredToAllChats = true;
	let replyMarkupIncluded = Boolean(replyMarkup);
	let errorCode: string | undefined;
	for (const chatId of chatIds) {
		const result = await sendTelegramMessage({ botToken, chatId, text, replyMarkup });

		if (!result.sent) {
			deliveredToAllChats = false;
			errorCode ??= result.errorCode;
			if (replyMarkup) {
				replyMarkupIncluded = false;
			}
		}
	}

	return { sent: deliveredToAllChats, replyMarkupIncluded, errorCode };
};
