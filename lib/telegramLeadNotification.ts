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
