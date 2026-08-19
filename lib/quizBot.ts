import { prisma } from './db';
import type { QuizBotSettings } from '../generated-prisma-client';

const SINGLETON_ID = 'quiz-bot';

export type QuizBotSettingsPayload = {
	enabled: boolean;
	welcomeMessage: string;
	startButtonLabel: string;
	completionMessage: string;
	managerContactUrl: string | null;
	channelUrl: string | null;
};

export const defaultQuizBotSettings: QuizBotSettingsPayload = {
	enabled: true,
	welcomeMessage:
		'👋 Добрый день!\nМы агентство недвижимости Паттайя Град. Поможем подобрать недвижимость в Таиланде под ваши цели и бюджет.\nОтветьте на несколько коротких вопросов — мы сделаем под вас персональную подборку подходящих объектов и пришлем вам.',
	startButtonLabel: 'ПОДОБРАТЬ НЕДВИЖИМОСТЬ →',
	completionMessage:
		'✅ Спасибо! Ваша заявка направляется менеджеру Паттайя Град. Он изучит ваши пожелания, подберет подходящие варианты и свяжется с вами в ближайшее время.',
	managerContactUrl: 'https://t.me/pattayagrad',
	channelUrl: 'https://t.me/pattayagradthailand',
};

const requireNonEmptyString = (value: unknown, field: string) => {
	if (typeof value !== 'string') {
		throw new Error(`Поле ${field} должно быть строкой`);
	}
	const trimmed = value.trim();
	if (trimmed.length === 0) {
		throw new Error(`Поле ${field} не должно быть пустым`);
	}
	return trimmed;
};

const requireBoolean = (value: unknown, field: string) => {
	if (typeof value !== 'boolean') {
		throw new Error(`Поле ${field} должно быть логическим значением`);
	}
	return value;
};

const normalizeOptionalUrl = (value: unknown, field: string): string | null => {
	if (value === undefined || value === null) {
		return null;
	}

	if (typeof value !== 'string') {
		throw new Error(`Поле ${field} должно быть строкой`);
	}

	const trimmed = value.trim();
	if (trimmed.length === 0) {
		return null;
	}

	if (!/^https?:\/\//i.test(trimmed)) {
		throw new Error(`Поле ${field} должно быть ссылкой (начинаться с http:// или https://)`);
	}

	return trimmed;
};

export const buildQuizBotSettingsPayload = (payload: unknown): QuizBotSettingsPayload => {
	if (!payload || typeof payload !== 'object') {
		throw new Error('Данные запроса должны быть объектом');
	}

	const fields = payload as Record<string, unknown>;

	return {
		enabled: requireBoolean(fields.enabled, 'enabled'),
		welcomeMessage: requireNonEmptyString(fields.welcomeMessage, 'welcomeMessage'),
		startButtonLabel: requireNonEmptyString(fields.startButtonLabel, 'startButtonLabel'),
		completionMessage: requireNonEmptyString(fields.completionMessage, 'completionMessage'),
		managerContactUrl: normalizeOptionalUrl(fields.managerContactUrl, 'managerContactUrl'),
		channelUrl: normalizeOptionalUrl(fields.channelUrl, 'channelUrl'),
	};
};

export async function getQuizBotSettings(): Promise<QuizBotSettings> {
	const settings = await prisma.quizBotSettings.findUnique({
		where: { id: SINGLETON_ID },
	});

	if (settings) {
		return settings;
	}

	return prisma.quizBotSettings.create({
		data: { id: SINGLETON_ID, ...defaultQuizBotSettings },
	});
}

export async function updateQuizBotSettings(
	payload: QuizBotSettingsPayload,
): Promise<QuizBotSettings> {
	return prisma.quizBotSettings.upsert({
		where: { id: SINGLETON_ID },
		update: payload,
		create: { id: SINGLETON_ID, ...payload },
	});
}
