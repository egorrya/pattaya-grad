type BufferLike = {
  from: {
    (value: string): { toString(encoding?: string): string };
    (value: string, encoding: string): { toString(encoding?: string): string };
  };
};

const globalBuffer = (globalThis as typeof globalThis & { Buffer?: BufferLike }).Buffer;

export const adminLoginPath = '/admin/login';
export const adminCookieName = 'admin-token';

const encodeBase64 = (value: string) => {
  if (globalBuffer) {
    return globalBuffer.from(value).toString('base64');
  }

  if (typeof globalThis.btoa === 'function') {
    return globalThis.btoa(value);
  }

  throw new Error('Base64 encoder is not available');
};

export const createAdminToken = (user: string, pass: string) =>
  encodeBase64(`${user}:${pass}`);

export const decodeBase64 = (value: string) => {
  if (globalBuffer) {
    return globalBuffer.from(value, 'base64').toString('utf-8');
  }

  if (typeof globalThis.atob === 'function') {
    return globalThis.atob(value);
  }

  throw new Error('Base64 decoder is not available');
};
