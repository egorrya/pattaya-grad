import { prisma } from './db';
import { getLandingContent } from './landing';
import { getQuizBotSettings } from './quizBot';
import {
	answerTelegramCallbackQuery,
	parseTelegramChatIds,
	sendTelegramMessage,
} from './telegramNotify';
import {
	formatTelegramBotLeadMessage,
	formatTelegramLeadContact,
	sendTelegramQuizLeadNotificationToAdmins,
	type TelegramLeadContact,
} from './telegramLeadNotification';

type Contact = TelegramLeadContact;

type QuizAnswers = {
	city?: string;
	cityLabel?: string;
	propertyTypeLabel?: string;
	purposeLabel?: string;
	budgetLabel?: string;
	wishes?: string | null;
};

type Option = { label: string; reaction?: string };

const CITY_OPTIONS: Option[] = [
	{ label: 'Паттайя', reaction: 'Отлично! 🏖 В Паттайе большой выбор объектов как для жизни, так и для инвестиций.' },
	{ label: 'Пхукет', reaction: 'Отлично! 🏝 На Пхукете большой выбор объектов у моря и высокий туристический спрос.' },
	{ label: 'Пока не определился', reaction: 'Хорошо, посмотрим варианты в обоих направлениях и поможем определиться.' },
];

const TYPE_OPTIONS: Option[] = [
	{ label: 'Квартира / кондо', reaction: 'Понял. Подберём варианты именно в этом формате 👍' },
	{ label: 'Вилла / частный дом', reaction: 'Понял. Подберём варианты именно в этом формате 👍' },
	{ label: 'Рассматриваю разные варианты', reaction: 'Хорошо, покажем разные форматы, чтобы было проще сравнить.' },
];

const PURPOSE_OPTIONS: Option[] = [
	{
		label: 'Инвестиции / сдача в аренду',
		reaction:
			'Отлично. Тогда при подборе сделаем акцент на ликвидности, арендном потенциале и перспективных локациях.',
	},
	{ label: 'Для собственного проживания', reaction: 'Отлично! Подберём варианты, комфортные для постоянного проживания.' },
	{ label: 'Для отдыха', reaction: 'Здорово! Учтём близость к пляжу и инфраструктуре для отдыха.' },
	{
		label: 'Инвестиции + личное использование',
		reaction: 'Отлично! Найдём баланс между доходностью и комфортом для себя.',
	},
	{ label: 'Пока не определился', reaction: 'Хорошо, разберёмся по ходу подбора вариантов.' },
];

const BUDGET_BY_CITY: Record<string, { hint?: string; options: Option[] }> = {
	'Паттайя': {
		hint: 'Подсказка: стоимость недвижимости в Паттайе начинается примерно от 5,7 млн ₽.',
		options: ['До 7 млн ₽', '7-10 млн ₽', '10-15 млн ₽', '15-25 млн ₽', 'Более 25 млн ₽', 'Пока не определился'].map(
			(label) => ({ label }),
		),
	},
	'Пхукет': {
		hint: 'Подсказка: стоимость недвижимости на Пхукете начинается примерно от 9 млн ₽.',
		options: ['До 12 млн ₽', '12-20 млн ₽', '20-30 млн ₽', '30-50 млн ₽', 'Более 50 млн ₽', 'Пока не определился'].map(
			(label) => ({ label }),
		),
	},
	default: {
		options: ['До 10 млн ₽', '10-20 млн ₽', '20-30 млн ₽', '30-50 млн ₽', 'Более 50 млн ₽', 'Пока не определился'].map(
			(label) => ({ label }),
		),
	},
};

const CITY_QUESTION = 'В каком городе рассматриваете покупку недвижимости?';
const TYPE_QUESTION = 'Какой тип недвижимости рассматриваете?';
const PURPOSE_QUESTION = 'Для какой цели рассматриваете недвижимость?';
const BUDGET_QUESTION = 'На какой бюджет ориентируетесь?';
const WISHES_QUESTION =
	'Расскажите немного подробнее, что вы ищете.\n\nНапример: квартира у моря, объект для сдачи в аренду, недвижимость для собственного проживания, рассрочка от застройщика или определённый район.\n\nНапишите пожелания сообщением ниже 👇';
const BUTTONS_HINT_MESSAGE = 'Пожалуйста, выберите один из вариантов на кнопках выше 👆';

const getBotToken = () => process.env.TELEGRAM_QUIZ_BOT_TOKEN?.trim() ?? '';

const getBudgetBucket = (cityLabel: string | undefined) =>
	BUDGET_BY_CITY[cityLabel ?? ''] ?? BUDGET_BY_CITY.default;

const optionsKeyboard = (options: Option[], prefix: string) => ({
	inline_keyboard: options.map((option, index) => [
		{ text: option.label, callback_data: `quiz:${prefix}:${index}` },
	]),
});

const sendQuizBotMessage = (chatId: string, text: string, replyMarkup?: Record<string, unknown>) =>
	sendTelegramMessage({ botToken: getBotToken(), chatId, text, replyMarkup });

type ParsedUpdate =
	| {
			kind: 'message';
			chatId: string;
			telegramUserId: string | null;
			username: string | null;
			firstName: string | null;
			lastName: string | null;
			text: string | null;
	  }
	| {
			kind: 'callback_query';
			chatId: string;
			telegramUserId: string | null;
			username: string | null;
			firstName: string | null;
			lastName: string | null;
			data: string;
			callbackQueryId: string;
	  };

const parseUpdate = (update: unknown): ParsedUpdate | null => {
	if (typeof update !== 'object' || update === null) {
		return null;
	}

	const record = update as Record<string, unknown>;
	const callbackQuery = record.callback_query as Record<string, unknown> | undefined;

	if (callbackQuery) {
		const message = callbackQuery.message as Record<string, unknown> | undefined;
		const chat = message?.chat as Record<string, unknown> | undefined;
		const chatId = chat?.id;
		const data = callbackQuery.data;
		const callbackQueryId = callbackQuery.id;
		if (chatId === undefined || chatId === null || typeof data !== 'string' || typeof callbackQueryId !== 'string') {
			return null;
		}

		const from = (callbackQuery.from as Record<string, unknown> | undefined) ?? {};
		return {
			kind: 'callback_query',
			chatId: String(chatId),
			telegramUserId: from.id !== undefined ? String(from.id) : null,
			username: typeof from.username === 'string' ? from.username : null,
			firstName: typeof from.first_name === 'string' ? from.first_name : null,
			lastName: typeof from.last_name === 'string' ? from.last_name : null,
			data,
			callbackQueryId,
		};
	}

	const message = record.message as Record<string, unknown> | undefined;
	if (!message) {
		return null;
	}

	const chat = message.chat as Record<string, unknown> | undefined;
	const chatId = chat?.id;
	if (chatId === undefined || chatId === null) {
		return null;
	}

	const from = (message.from as Record<string, unknown> | undefined) ?? {};
	const text = typeof message.text === 'string' ? message.text.trim() : null;

	return {
		kind: 'message',
		chatId: String(chatId),
		telegramUserId: from.id !== undefined ? String(from.id) : null,
		username: typeof from.username === 'string' ? from.username : null,
		firstName: typeof from.first_name === 'string' ? from.first_name : null,
		lastName: typeof from.last_name === 'string' ? from.last_name : null,
		text: text && text.length > 0 ? text : null,
	};
};

const parseStartParam = (text: string | null): string | null => {
	if (!text) {
		return null;
	}
	const match = text.match(/^\/start(?:@\S+)?(?:\s+(.+))?$/i);
	if (!match) {
		return null;
	}
	return match[1]?.trim() || null;
};

const isStartCommand = (text: string | null) =>
	text !== null && /^\/start(?:@\S+)?(\s|$)/i.test(text);

const sendWelcome = async (chatId: string, settings: { welcomeMessage: string; startButtonLabel: string }) => {
	await sendQuizBotMessage(chatId, settings.welcomeMessage, {
		inline_keyboard: [[{ text: settings.startButtonLabel, callback_data: 'quiz:begin' }]],
	});
};

const sendCityQuestion = (chatId: string) =>
	sendQuizBotMessage(chatId, CITY_QUESTION, optionsKeyboard(CITY_OPTIONS, 'city'));

const sendTypeQuestion = (chatId: string) =>
	sendQuizBotMessage(chatId, TYPE_QUESTION, optionsKeyboard(TYPE_OPTIONS, 'type'));

const sendPurposeQuestion = (chatId: string) =>
	sendQuizBotMessage(chatId, PURPOSE_QUESTION, optionsKeyboard(PURPOSE_OPTIONS, 'purpose'));

const sendBudgetQuestion = (chatId: string, cityLabel: string | undefined) => {
	const bucket = getBudgetBucket(cityLabel);
	const text = bucket.hint ? `${BUDGET_QUESTION}\n\n${bucket.hint}` : BUDGET_QUESTION;
	return sendQuizBotMessage(chatId, text, optionsKeyboard(bucket.options, 'budget'));
};

const sendWishesQuestion = (chatId: string) =>
	sendQuizBotMessage(chatId, WISHES_QUESTION, {
		inline_keyboard: [[{ text: 'Пропустить', callback_data: 'quiz:wishes:skip' }]],
	});

const resetSession = (chatId: string, contact: Contact, startParam: string | null) =>
	prisma.quizBotSession.upsert({
		where: { chatId },
		create: {
			chatId,
			telegramUserId: contact.telegramUserId,
			username: contact.telegramUsername,
			firstName: contact.telegramFirstName,
			lastName: contact.telegramLastName,
			step: 'idle',
			answers: {},
			startParam,
		},
		update: {
			telegramUserId: contact.telegramUserId,
			username: contact.telegramUsername,
			firstName: contact.telegramFirstName,
			lastName: contact.telegramLastName,
			step: 'idle',
			answers: {},
			completedAt: null,
			...(startParam ? { startParam } : {}),
		},
	});

const finalizeQuiz = async ({
	chatId,
	answers,
	startParam,
	contact,
	settings,
}: {
	chatId: string;
	answers: QuizAnswers;
	startParam: string | null;
	contact: Contact;
	settings: { completionMessage: string; managerContactUrl: string | null; channelUrl: string | null };
}) => {
	const createdAt = new Date();
	const contactLabel = formatTelegramLeadContact(contact);
	const leadMessage = formatTelegramBotLeadMessage({ contact, answers, createdAt });

	await prisma.quizBotSession.update({
		where: { chatId },
		data: { step: 'done', answers: answers as object, completedAt: new Date() },
	});

	await prisma.lead.create({
		data: {
			channel: 'telegram',
			source: 'telegram_bot',
			contact: contactLabel,
			message: leadMessage,
			telegramUserId: contact.telegramUserId,
			telegramUsername: contact.telegramUsername,
			telegramFirstName: contact.telegramFirstName,
			telegramLastName: contact.telegramLastName,
			utmCampaign: startParam,
			createdAt,
		},
	});

	const landingContent = await getLandingContent();
	await sendTelegramQuizLeadNotificationToAdmins({
		notificationBotToken: landingContent.telegramBotToken?.trim(),
		quizBotToken: getBotToken(),
		chatIds: parseTelegramChatIds(landingContent.telegramChatIds),
		text: leadMessage,
		contact,
		quizBotUsername: process.env.TELEGRAM_QUIZ_BOT_USERNAME,
	});

	const completionButtons = [
		settings.managerContactUrl ? { text: 'Связаться с менеджером', url: settings.managerContactUrl } : null,
		settings.channelUrl ? { text: 'Перейти в канал Pattaya Grad', url: settings.channelUrl } : null,
	].filter((button): button is { text: string; url: string } => button !== null);

	await sendQuizBotMessage(
		chatId,
		settings.completionMessage,
		completionButtons.length > 0 ? { inline_keyboard: completionButtons.map((button) => [button]) } : undefined,
	);
};

export async function handleQuizBotUpdate(update: unknown): Promise<void> {
	if (!getBotToken()) {
		return;
	}

	const parsed = parseUpdate(update);
	if (!parsed) {
		return;
	}

	const settings = await getQuizBotSettings();
	if (!settings.enabled) {
		return;
	}

	const { chatId, telegramUserId, username, firstName, lastName } = parsed;
	const contact = {
		telegramUserId,
		telegramUsername: username,
		telegramFirstName: firstName,
		telegramLastName: lastName,
	};

	if (parsed.kind === 'callback_query') {
		await answerTelegramCallbackQuery({ botToken: getBotToken(), callbackQueryId: parsed.callbackQueryId });

		const session = await prisma.quizBotSession.findUnique({ where: { chatId } });
		if (!session || session.completedAt) {
			await resetSession(chatId, contact, null);
			await sendWelcome(chatId, settings);
			return;
		}

		const answers = (session.answers as QuizAnswers | null) ?? {};
		const [, stepFromData, indexFromData] = parsed.data.split(':');

		if (parsed.data === 'quiz:begin' && session.step === 'idle') {
			await prisma.quizBotSession.update({ where: { chatId }, data: { step: 'city' } });
			await sendCityQuestion(chatId);
			return;
		}

		if (stepFromData === 'city' && session.step === 'city') {
			const option = CITY_OPTIONS[Number(indexFromData)];
			if (!option) return;
			const updatedAnswers: QuizAnswers = { ...answers, city: option.label, cityLabel: option.label };
			await prisma.quizBotSession.update({
				where: { chatId },
				data: { step: 'type', answers: updatedAnswers as object },
			});
			if (option.reaction) await sendQuizBotMessage(chatId, option.reaction);
			await sendTypeQuestion(chatId);
			return;
		}

		if (stepFromData === 'type' && session.step === 'type') {
			const option = TYPE_OPTIONS[Number(indexFromData)];
			if (!option) return;
			const updatedAnswers: QuizAnswers = { ...answers, propertyTypeLabel: option.label };
			await prisma.quizBotSession.update({
				where: { chatId },
				data: { step: 'purpose', answers: updatedAnswers as object },
			});
			if (option.reaction) await sendQuizBotMessage(chatId, option.reaction);
			await sendPurposeQuestion(chatId);
			return;
		}

		if (stepFromData === 'purpose' && session.step === 'purpose') {
			const option = PURPOSE_OPTIONS[Number(indexFromData)];
			if (!option) return;
			const updatedAnswers: QuizAnswers = { ...answers, purposeLabel: option.label };
			await prisma.quizBotSession.update({
				where: { chatId },
				data: { step: 'budget', answers: updatedAnswers as object },
			});
			if (option.reaction) await sendQuizBotMessage(chatId, option.reaction);
			await sendBudgetQuestion(chatId, answers.cityLabel);
			return;
		}

		if (stepFromData === 'budget' && session.step === 'budget') {
			const bucket = getBudgetBucket(answers.cityLabel);
			const option = bucket.options[Number(indexFromData)];
			if (!option) return;
			const updatedAnswers: QuizAnswers = { ...answers, budgetLabel: option.label };
			await prisma.quizBotSession.update({
				where: { chatId },
				data: { step: 'wishes', answers: updatedAnswers as object },
			});
			await sendWishesQuestion(chatId);
			return;
		}

		if (parsed.data === 'quiz:wishes:skip' && session.step === 'wishes') {
			const updatedAnswers: QuizAnswers = { ...answers, wishes: null };
			await finalizeQuiz({
				chatId,
				answers: updatedAnswers,
				startParam: session.startParam,
				contact,
				settings,
			});
			return;
		}

		return;
	}

	const text = parsed.text;
	const startParam = parseStartParam(text);
	const session = await prisma.quizBotSession.findUnique({ where: { chatId } });

	if (isStartCommand(text) || !session || session.completedAt) {
		await resetSession(chatId, contact, startParam);
		await sendWelcome(chatId, settings);
		return;
	}

	if (session.step === 'idle') {
		await prisma.quizBotSession.update({ where: { chatId }, data: { step: 'city' } });
		await sendCityQuestion(chatId);
		return;
	}

	if (session.step === 'city' || session.step === 'type' || session.step === 'purpose' || session.step === 'budget') {
		await sendQuizBotMessage(chatId, BUTTONS_HINT_MESSAGE);
		return;
	}

	if (session.step === 'wishes') {
		if (!text) {
			await sendQuizBotMessage(chatId, 'Пожалуйста, напишите пожелания текстом или нажмите «Пропустить».');
			return;
		}
		const answers = (session.answers as QuizAnswers | null) ?? {};
		const updatedAnswers: QuizAnswers = { ...answers, wishes: text };
		await finalizeQuiz({
			chatId,
			answers: updatedAnswers,
			startParam: session.startParam,
			contact,
			settings,
		});
	}
}
