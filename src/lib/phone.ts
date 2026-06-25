import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js/min';

export type PhoneCountry = {
	iso: string;
	label: string;
	dialCode: string;
	flagEmoji: string;
	minNationalDigits: number;
	maxNationalDigits: number;
	placeholder: string;
};

export const PHONE_COUNTRIES = [
	{
		iso: 'RU',
		label: 'Россия',
		dialCode: '7',
		flagEmoji: '🇷🇺',
		minNationalDigits: 10,
		maxNationalDigits: 10,
		placeholder: '999 123 45 67',
	},
	{
		iso: 'PT',
		label: 'Португалия',
		dialCode: '351',
		flagEmoji: '🇵🇹',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '912 345 678',
	},
	{
		iso: 'US',
		label: 'США',
		dialCode: '1',
		flagEmoji: '🇺🇸',
		minNationalDigits: 10,
		maxNationalDigits: 10,
		placeholder: '201 555 0123',
	},
	{
		iso: 'GB',
		label: 'Великобритания',
		dialCode: '44',
		flagEmoji: '🇬🇧',
		minNationalDigits: 9,
		maxNationalDigits: 10,
		placeholder: '7400 123456',
	},
	{
		iso: 'DE',
		label: 'Германия',
		dialCode: '49',
		flagEmoji: '🇩🇪',
		minNationalDigits: 5,
		maxNationalDigits: 11,
		placeholder: '151 23456789',
	},
	{
		iso: 'UA',
		label: 'Украина',
		dialCode: '380',
		flagEmoji: '🇺🇦',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '67 123 45 67',
	},
	{
		iso: 'AM',
		label: 'Армения',
		dialCode: '374',
		flagEmoji: '🇦🇲',
		minNationalDigits: 8,
		maxNationalDigits: 8,
		placeholder: '91 234 567',
	},
	{
		iso: 'AZ',
		label: 'Азербайджан',
		dialCode: '994',
		flagEmoji: '🇦🇿',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '50 123 45 67',
	},
	{
		iso: 'GE',
		label: 'Грузия',
		dialCode: '995',
		flagEmoji: '🇬🇪',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '555 12 34 56',
	},
	{
		iso: 'KZ',
		label: 'Казахстан',
		dialCode: '7',
		flagEmoji: '🇰🇿',
		minNationalDigits: 10,
		maxNationalDigits: 10,
		placeholder: '707 123 45 67',
	},
	{
		iso: 'BY',
		label: 'Беларусь',
		dialCode: '375',
		flagEmoji: '🇧🇾',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '29 123 45 67',
	},
	{
		iso: 'KG',
		label: 'Кыргызстан',
		dialCode: '996',
		flagEmoji: '🇰🇬',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '700 123 456',
	},
	{
		iso: 'MD',
		label: 'Молдова',
		dialCode: '373',
		flagEmoji: '🇲🇩',
		minNationalDigits: 8,
		maxNationalDigits: 8,
		placeholder: '69 12 34 56',
	},
	{
		iso: 'TJ',
		label: 'Таджикистан',
		dialCode: '992',
		flagEmoji: '🇹🇯',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '93 123 45 67',
	},
	{
		iso: 'TM',
		label: 'Туркменистан',
		dialCode: '993',
		flagEmoji: '🇹🇲',
		minNationalDigits: 8,
		maxNationalDigits: 8,
		placeholder: '61 23 45 67',
	},
	{
		iso: 'UZ',
		label: 'Узбекистан',
		dialCode: '998',
		flagEmoji: '🇺🇿',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '90 123 45 67',
	},
	{
		iso: 'RS',
		label: 'Сербия',
		dialCode: '381',
		flagEmoji: '🇷🇸',
		minNationalDigits: 8,
		maxNationalDigits: 9,
		placeholder: '60 123 45 67',
	},
	{
		iso: 'TR',
		label: 'Турция',
		dialCode: '90',
		flagEmoji: '🇹🇷',
		minNationalDigits: 10,
		maxNationalDigits: 10,
		placeholder: '532 123 45 67',
	},
	{
		iso: 'TH',
		label: 'Таиланд',
		dialCode: '66',
		flagEmoji: '🇹🇭',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '81 234 5678',
	},
	{
		iso: 'PL',
		label: 'Польша',
		dialCode: '48',
		flagEmoji: '🇵🇱',
		minNationalDigits: 9,
		maxNationalDigits: 9,
		placeholder: '512 345 678',
	},
] as const satisfies readonly PhoneCountry[];

export type PhoneCountryIso = (typeof PHONE_COUNTRIES)[number]['iso'];

export const DEFAULT_PHONE_COUNTRY_ISO: PhoneCountryIso = 'RU';

export const PHONE_INPUT_COUNTRIES = PHONE_COUNTRIES.map(
	(country) => country.iso,
) as PhoneCountryIso[];

export const PHONE_INPUT_LABELS = PHONE_COUNTRIES.reduce<
	Record<string, string>
>(
	(acc, country) => {
		acc[country.iso] = country.label;
		return acc;
	},
	{
		country: 'Страна',
		phone: 'Телефон',
	},
);

export const getPhoneCountryByIso = (
	iso: string | null | undefined,
): PhoneCountry | undefined =>
	PHONE_COUNTRIES.find((country) => country.iso === iso);

export const sanitizePhoneDigits = (value: string) => value.replace(/\D/g, '');

export const normalizePhoneNationalDigits = (
	value: string,
	country: PhoneCountry,
) => {
	const trimmedValue = value.trim();
	if (!trimmedValue) {
		return '';
	}

	const parsed = parsePhoneNumberFromString(
		trimmedValue,
		country.iso as CountryCode,
	);
	if (parsed) {
		return parsed.nationalNumber.slice(0, country.maxNationalDigits);
	}

	const hasInternationalPrefix =
		trimmedValue.startsWith('+') || trimmedValue.startsWith('00');
	let digits = sanitizePhoneDigits(trimmedValue);

	if (hasInternationalPrefix && digits.startsWith(country.dialCode)) {
		digits = digits.slice(country.dialCode.length);
	} else if (
		digits.length > country.maxNationalDigits &&
		digits.startsWith(country.dialCode)
	) {
		digits = digits.slice(country.dialCode.length);
	}

	return digits.slice(0, country.maxNationalDigits);
};

export const validatePhoneNationalDigits = (
	nationalDigits: string,
	country: PhoneCountry,
) => {
	if (nationalDigits.length < country.minNationalDigits) {
		const suffix =
			country.minNationalDigits === country.maxNationalDigits
				? `${country.minNationalDigits}`
				: `от ${country.minNationalDigits} до ${country.maxNationalDigits}`;
		return `Национальная длина номера для страны «${country.label}» должна быть ${suffix} цифр.`;
	}

	return null;
};

const getPhoneCountryNationalDigitGroups = (country: PhoneCountry) => {
	const groups = country.placeholder.match(/\d+/g)?.map((group) => group.length);
	const fallbackGroups = [country.maxNationalDigits];
	const resolvedGroups = groups?.length ? groups : fallbackGroups;
	const groupsDigitCount = resolvedGroups.reduce((sum, group) => sum + group, 0);

	if (groupsDigitCount >= country.maxNationalDigits) {
		return resolvedGroups;
	}

	return [...resolvedGroups, country.maxNationalDigits - groupsDigitCount];
};

export const formatPhoneNationalDigits = (
	nationalDigits: string,
	country: PhoneCountry,
) => {
	const digits = sanitizePhoneDigits(nationalDigits).slice(
		0,
		country.maxNationalDigits,
	);
	if (!digits) {
		return '';
	}

	const groups = getPhoneCountryNationalDigitGroups(country);
	const formattedGroups: string[] = [];
	let cursor = 0;

	for (const groupLength of groups) {
		if (cursor >= digits.length) {
			break;
		}

		const nextGroup = digits.slice(cursor, cursor + groupLength);
		formattedGroups.push(nextGroup);
		cursor += groupLength;
	}

	return formattedGroups.join(' ');
};

export const getPhoneCountryNationalInputMaxLength = (country: PhoneCountry) =>
	formatPhoneNationalDigits('9'.repeat(country.maxNationalDigits), country)
		.length;

export const buildWhatsAppContact = (
	nationalDigits: string,
	country: PhoneCountry,
) => `+${country.dialCode}${nationalDigits}`;

export const formatWhatsAppDisplayValue = (
	value: string,
	country: PhoneCountry,
) => {
	const trimmedValue = value.trim();
	if (!trimmedValue) {
		return '';
	}

	return formatPhoneNationalDigits(
		normalizePhoneNationalDigits(trimmedValue, country),
		country,
	);
};
