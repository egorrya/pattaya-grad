import { NextRequest, NextResponse } from 'next/server';
import {
  adminCookieName,
  createAdminToken,
  decodeBase64,
} from './adminAuth';

type AdminGuardResult =
  | { allowed: true }
  | { allowed: false; response: NextResponse };

const unauthorizedResponse = () =>
  NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });

const credentialsNotConfiguredResponse = () =>
  NextResponse.json(
    { ok: false, error: 'Admin credentials are not configured' },
    { status: 500 },
  );

export function requireAdminAccess(request: NextRequest): AdminGuardResult {
  const { ADMIN_USER, ADMIN_PASS } = process.env;
  if (!ADMIN_USER || !ADMIN_PASS) {
    return { allowed: false, response: credentialsNotConfiguredResponse() };
  }

  const expectedToken = createAdminToken(ADMIN_USER, ADMIN_PASS);
  const cookieToken = request.cookies.get(adminCookieName)?.value;
  if (cookieToken === expectedToken) {
    return { allowed: true };
  }

  const authorization = request.headers.get('authorization');
  if (!authorization) {
    return { allowed: false, response: unauthorizedResponse() };
  }

  const [type, encoded] = authorization.split(' ');
  if (!encoded || type.toLowerCase() !== 'basic') {
    return { allowed: false, response: unauthorizedResponse() };
  }

  let credentials: string;
  try {
    credentials = decodeBase64(encoded);
  } catch {
    return { allowed: false, response: unauthorizedResponse() };
  }

  const separatorIndex = credentials.indexOf(':');
  if (separatorIndex === -1) {
    return { allowed: false, response: unauthorizedResponse() };
  }

  const username = credentials.slice(0, separatorIndex);
  const password = credentials.slice(separatorIndex + 1);
  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return { allowed: false, response: unauthorizedResponse() };
  }

  return { allowed: true };
}
