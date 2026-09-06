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
}): Promise<boolean> => {
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
			console.error('Failed to send Telegram message', {
				chatId,
				status: response.status,
				details,
			});
			return false;
		}

		return true;
	} catch (error) {
		console.error('Failed to send Telegram message', { chatId, error });
		return false;
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
}): Promise<boolean> => {
	if (!botToken || chatIds.length === 0) {
		return false;
	}

	let deliveredToAllChats = true;
	for (const chatId of chatIds) {
		const delivered = await sendTelegramMessage({ botToken, chatId, text, replyMarkup });
		if (!delivered) {
			deliveredToAllChats = false;
		}
	}

	return deliveredToAllChats;
};
