import { NextRequest, NextResponse } from 'next/server';
import { adminCookieName, createAdminToken } from '../../../../lib/adminAuth';

const cookieOptions = {
  name: adminCookieName,
  path: '/',
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 60,
};

export async function POST(request: NextRequest) {
  const { ADMIN_USER, ADMIN_PASS } = process.env;
  if (!ADMIN_USER || !ADMIN_PASS) {
    return NextResponse.json(
      { message: 'Переменные ADMIN_USER и ADMIN_PASS не заданы' },
      { status: 500 }
    );
  }

  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== 'object') {
    return NextResponse.json({ message: 'Неверный запрос' }, { status: 400 });
  }

  const login = String(payload.login ?? '');
  const password = String(payload.password ?? '');

  if (login !== ADMIN_USER || password !== ADMIN_PASS) {
    return NextResponse.json({ message: 'Неверный логин или пароль' }, { status: 401 });
  }

  const token = createAdminToken(ADMIN_USER, ADMIN_PASS);
  const response = NextResponse.json({ success: true });
  response.cookies.set({ ...cookieOptions, value: token });
  return response;
}
