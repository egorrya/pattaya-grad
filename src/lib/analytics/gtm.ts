export type GtmValue = string | number | boolean | null | undefined;

export type GtmPayload = Record<string, GtmValue>;

export type GtmEvent = {
	event: string;
} & GtmPayload;

declare global {
	interface Window {
		dataLayer?: GtmEvent[];
	}
}

const sanitizePayload = (payload: GtmPayload) =>
	Object.fromEntries(
		Object.entries(payload).filter(([, value]) => value !== undefined),
	) as GtmPayload;

export function pushGtmEvent<T extends GtmPayload>(
	event: string,
	payload?: T,
) {
	if (typeof window === 'undefined') {
		return;
	}

	const dataLayer = window.dataLayer ?? (window.dataLayer = []);
	dataLayer.push({
		event,
		...(payload ? sanitizePayload(payload) : {}),
	});
}
