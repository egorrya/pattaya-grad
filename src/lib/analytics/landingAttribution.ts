export type LeadAttribution = {
	pagePath?: string;
	utmSource?: string;
	utmMedium?: string;
	utmCampaign?: string;
	utmContent?: string;
	utmTerm?: string;
	gclid?: string;
	gbraid?: string;
	wbraid?: string;
	fbclid?: string;
};

const STORAGE_KEY = 'mrqz:lead_attribution';

const QUERY_PARAM_TO_FIELD = {
	utm_source: 'utmSource',
	utm_medium: 'utmMedium',
	utm_campaign: 'utmCampaign',
	utm_content: 'utmContent',
	utm_term: 'utmTerm',
	gclid: 'gclid',
	gbraid: 'gbraid',
	wbraid: 'wbraid',
	fbclid: 'fbclid',
} as const satisfies Record<string, keyof LeadAttribution>;

const ATTRIBUTION_FIELDS = [
	'pagePath',
	'utmSource',
	'utmMedium',
	'utmCampaign',
	'utmContent',
	'utmTerm',
	'gclid',
	'gbraid',
	'wbraid',
	'fbclid',
] as const;

const normalizeString = (value: unknown) => {
	if (typeof value !== 'string') {
		return undefined;
	}

	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : undefined;
};

const readStorage = (storage: Storage | undefined): Partial<LeadAttribution> => {
	if (!storage) {
		return {};
	}

	try {
		const rawValue = storage.getItem(STORAGE_KEY);
		if (!rawValue) {
			return {};
		}

		const parsed = JSON.parse(rawValue);
		if (typeof parsed !== 'object' || parsed === null) {
			return {};
		}

		const record = parsed as Record<string, unknown>;
		return ATTRIBUTION_FIELDS.reduce<Partial<LeadAttribution>>((acc, field) => {
			const value = normalizeString(record[field]);
			if (value) {
				acc[field] = value;
			}
			return acc;
		}, {});
	} catch {
		return {};
	}
};

const getSafeStorage = (getter: () => Storage) => {
	try {
		return getter();
	} catch {
		return undefined;
	}
};

const writeStorage = (storage: Storage | undefined, value: LeadAttribution) => {
	if (!storage) {
		return;
	}

	try {
		storage.setItem(STORAGE_KEY, JSON.stringify(value));
	} catch {
		// Ignore storage quota and privacy-mode failures.
	}
};

const normalizeSearchParams = (searchParams: string | URLSearchParams) =>
	typeof searchParams === 'string'
		? new URLSearchParams(searchParams)
		: searchParams;

export const syncLandingAttribution = (
	pagePath: string,
	searchParams: string | URLSearchParams,
): LeadAttribution | null => {
	if (typeof window === 'undefined') {
		return null;
	}

	const localStorage = getSafeStorage(() => window.localStorage);
	const sessionStorage = getSafeStorage(() => window.sessionStorage);
	const existing = {
		...readStorage(localStorage),
		...readStorage(sessionStorage),
	};
	const next: Partial<LeadAttribution> = {
		...existing,
		pagePath,
	};

	const params = normalizeSearchParams(searchParams);
	for (const [queryKey, field] of Object.entries(QUERY_PARAM_TO_FIELD)) {
		const value = normalizeString(params.get(queryKey));
		if (value) {
			next[field] = value;
		}
	}

	const stored = next as LeadAttribution;
	writeStorage(localStorage, stored);
	writeStorage(sessionStorage, stored);

	return stored;
};
