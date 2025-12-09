import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { requireAdminAccess } from '@lib/adminGuard';
import {
  buildLandingPagePayload,
  createLandingPage,
  getLandingPages,
  landingUrlPathToRoute,
} from '@lib/landingPages';

const badRequest = (message: string) =>
  NextResponse.json({ ok: false, error: message }, { status: 400 });

const serverError = () =>
  NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });

export async function GET(request: NextRequest) {
  const guard = requireAdminAccess(request);
  if (!guard.allowed) {
    return guard.response;
  }

  try {
    const landings = await getLandingPages();
    return NextResponse.json({ ok: true, data: landings });
  } catch (error) {
    console.error('Failed to list landing pages', error);
    return serverError();
  }
}

export async function POST(request: NextRequest) {
  const guard = requireAdminAccess(request);
  if (!guard.allowed) {
    return guard.response;
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest('Invalid JSON body');
  }

  let payload;
  try {
    payload = buildLandingPagePayload(body);
  } catch (error) {
    if (error instanceof Error) {
      return badRequest(error.message);
    }
    return badRequest('Неверный формат данных');
  }

  try {
    const created = await createLandingPage(payload);
    revalidatePath(landingUrlPathToRoute(created.urlPath));
    return NextResponse.json({ ok: true, data: created });
  } catch (error) {
    console.error('Failed to create landing page', error);
    const err = error as { code?: string };
    if (err.code === 'P2002') {
      return badRequest('URL уже занят');
    }
    return serverError();
  }
}
