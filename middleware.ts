import { NextRequest, NextResponse } from 'next/server';
import {
  adminCookieName,
  adminLoginPath,
  createAdminToken,
  decodeBase64,
} from './lib/adminAuth';

const redirectToLogin = (request: NextRequest) => {
  const loginUrl = new URL(adminLoginPath, request.url);
  return NextResponse.redirect(loginUrl);
};

export function middleware(request: NextRequest) {
  const { ADMIN_USER, ADMIN_PASS } = process.env;
  if (!ADMIN_USER || !ADMIN_PASS) {
    return redirectToLogin(request);
  }

  const pathname = request.nextUrl.pathname;
  if (pathname === adminLoginPath || pathname.startsWith(`${adminLoginPath}/`)) {
    return NextResponse.next();
  }

  const expectedToken = createAdminToken(ADMIN_USER, ADMIN_PASS);
  const cookieToken = request.cookies.get(adminCookieName)?.value;
  if (cookieToken === expectedToken) {
    return NextResponse.next();
  }

  const authorization = request.headers.get('authorization');
  if (!authorization) {
    return redirectToLogin(request);
  }

  const [type, encoded] = authorization.split(' ');
  if (type !== 'Basic' || !encoded) {
    return redirectToLogin(request);
  }

  let credentials: string;
  try {
    credentials = decodeBase64(encoded);
  } catch {
    return redirectToLogin(request);
  }

  const separatorIndex = credentials.indexOf(':');
  if (separatorIndex === -1) {
    return redirectToLogin(request);
  }

  const username = credentials.slice(0, separatorIndex);
  const password = credentials.slice(separatorIndex + 1);

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return redirectToLogin(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
