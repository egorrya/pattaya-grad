import {
	broadcastTelegramMessage,
	type TelegramReplyMarkup,
} from './telegramNotify';

export type TelegramLeadContact = {
	telegramUserId: string | null;
	telegramUsername: string | null;
	telegramFirstName: string | null;
	telegramLastName: string | null;
};

export type TelegramLeadAnswers = {
	cityLabel?: string;
	propertyTypeLabel?: string;
	purposeLabel?: string;
	budgetLabel?: string;
	wishes?: string | null;
};

const normalizedValue = (value: string | null) => value?.trim() || null;

const getTelegramContactFromMessage = (message: string | null) => {
	if (!message) {
		return null;
	}

	return message.match(/^Имя \/ Telegram:\s*(.+)$/m)?.[1]?.trim() || null;
};

export const resolveTelegramLeadLinkContact = ({
	telegramUserId,
	telegramUsername,
	legacyContact,
	legacyMessage,
}: Pick<TelegramLeadContact, 'telegramUserId' | 'telegramUsername'> & {
	legacyContact: string | null;
	legacyMessage: string | null;
}): Pick<TelegramLeadContact, 'telegramUserId' | 'telegramUsername'> => {
	const contact = getTelegramContactFromMessage(legacyMessage) ?? legacyContact ?? '';
	const username = contact.match(/@([A-Za-z0-9_]+)/)?.[1] ?? null;
	const userId = contact.match(/\bid:\s*(\d+)\b/i)?.[1] ?? null;

	return {
		telegramUserId: normalizedValue(telegramUserId) ?? userId,
		telegramUsername: normalizedValue(telegramUsername)?.replace(/^@+/, '') ?? username,
	};
};

export const formatTelegramLeadContact = ({
	telegramUsername,
	telegramFirstName,
	telegramLastName,
	telegramUserId,
}: TelegramLeadContact) => {
	const username = normalizedValue(telegramUsername)?.replace(/^@+/, '');
	if (username) {
		return `@${username}`;
	}

	const name = [telegramFirstName, telegramLastName]
		.map((value) => normalizedValue(value))
		.filter((value): value is string => value !== null)
		.join(' ');
	const userId = normalizedValue(telegramUserId);
	if (name && userId) {
		return `${name} (id: ${userId})`;
	}

	return userId ? `id: ${userId}` : 'неизвестный пользователь';
};

export const formatTelegramBotLeadMessage = ({
	contact,
	answers,
	createdAt,
}: {
	contact: TelegramLeadContact;
	answers: TelegramLeadAnswers;
	createdAt: Date;
}) => {
	const contactLabel = formatTelegramLeadContact(contact);
	const formattedDate = createdAt.toLocaleString('ru-RU', {
		dateStyle: 'short',
		timeStyle: 'short',
		timeZone: 'Asia/Bangkok',
	});

	return [
		'Новая заявка Pattaya Grad',
		`Имя / Telegram: ${contactLabel}`,
		`Город: ${answers.cityLabel ?? '—'}`,
		`Тип: ${answers.propertyTypeLabel ?? '—'}`,
		`Цель: ${answers.purposeLabel ?? '—'}`,
		`Бюджет: ${answers.budgetLabel ?? '—'}`,
		`Пожелания: ${answers.wishes || '—'}`,
		'Источник: Telegram Bot',
		`Дата и время заявки: ${formattedDate}`,
	].join('\n');
};

export const buildTelegramLeadReplyMarkup = ({
	telegramUserId,
	telegramUsername,
}: Pick<TelegramLeadContact, 'telegramUserId' | 'telegramUsername'>): TelegramReplyMarkup | undefined => {
	const username = normalizedValue(telegramUsername)?.replace(/^@+/, '');
	const userId = normalizedValue(telegramUserId);

	if (!username && !userId) {
		return undefined;
	}

	return {
		inline_keyboard: [
			[
				{
					text: 'Открыть Telegram',
					url: username ? `https://t.me/${username}` : `tg://user?id=${userId}`,
				},
			],
		],
	};
};

const formatPrivateLinkQuizBotNotice = (text: string) =>
	[
		'🔒 У пользователя нет публичного username.',
		'Ссылка на его профиль отправлена администраторам в квиз-бот.',
		'',
		text,
	].join('\n');

const buildQuizBotReplyMarkup = (quizBotUsername: string | null | undefined): TelegramReplyMarkup | undefined => {
	const username = normalizedValue(quizBotUsername ?? null)?.replace(/^@+/, '');
	if (!username) {
		return undefined;
	}

	return {
		inline_keyboard: [[{ text: 'Открыть квиз-бот', url: `https://t.me/${username}` }]],
	};
};

export const sendTelegramBotLeadNotification = async ({
	botToken,
	chatIds,
	text,
	contact,
}: {
	botToken: string | null | undefined;
	chatIds: string[];
	text: string;
	contact: Pick<TelegramLeadContact, 'telegramUserId' | 'telegramUsername'>;
}) =>
	broadcastTelegramMessage({
		botToken,
		chatIds,
		text,
		replyMarkup: buildTelegramLeadReplyMarkup(contact),
	});

export type TelegramLeadNotificationResult = {
	sent: boolean;
	telegramLinkRequested: boolean;
	telegramLinkIncluded: boolean;
};

export const sendTelegramQuizLeadNotificationToAdmins = async ({
	notificationBotToken,
	quizBotToken,
	chatIds,
	text,
	contact,
	quizBotUsername,
}: {
	notificationBotToken: string | null | undefined;
	quizBotToken: string | null | undefined;
	chatIds: string[];
	text: string;
	contact: Pick<TelegramLeadContact, 'telegramUserId' | 'telegramUsername'>;
	quizBotUsername?: string | null;
}): Promise<TelegramLeadNotificationResult> => {
	const username = normalizedValue(contact.telegramUsername)?.replace(/^@+/, '');
	const userId = normalizedValue(contact.telegramUserId);
	// A private chat ID is equal to the Telegram user ID. Never use it as an
	// admin recipient, even if it was accidentally added to the admin chat list.
	const adminChatIds = userId ? chatIds.filter((chatId) => chatId !== userId) : chatIds;
	const needsSeparateQuizBotLink = !username && Boolean(userId);
	if (!needsSeparateQuizBotLink) {
		const adminNotification = await broadcastTelegramMessage({
			botToken: notificationBotToken,
			chatIds: adminChatIds,
			text,
			replyMarkup: buildTelegramLeadReplyMarkup(contact),
		});

		return {
			sent: adminNotification.sent,
			telegramLinkRequested: Boolean(username),
			telegramLinkIncluded: Boolean(username) && adminNotification.replyMarkupIncluded,
		};
	}

	const quizBotLinkNotification = await broadcastTelegramMessage({
		botToken: quizBotToken,
		chatIds: adminChatIds,
		text: `🔒 Приватная ссылка на Telegram пользователя\n\n${text}`,
		replyMarkup: buildTelegramLeadReplyMarkup(contact),
	});
	const telegramLinkIncluded =
		quizBotLinkNotification.sent && quizBotLinkNotification.replyMarkupIncluded;
	const adminNotification = await broadcastTelegramMessage({
		botToken: notificationBotToken,
		chatIds: adminChatIds,
		text: formatPrivateLinkQuizBotNotice(text),
		replyMarkup: buildQuizBotReplyMarkup(quizBotUsername),
	});

	return {
		sent: adminNotification.sent,
		telegramLinkRequested: true,
		telegramLinkIncluded,
	};
};
