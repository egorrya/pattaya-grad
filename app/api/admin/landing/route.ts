import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getLandingContent, updateLandingContent, buildLandingContentPayload } from '@lib/landing';
import { requireAdminAccess } from '@lib/adminGuard';

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
    const landing = await getLandingContent();
    return NextResponse.json({ ok: true, data: landing });
  } catch (error) {
    console.error('Failed to load landing content', error);
    return serverError();
  }
}

export async function PATCH(request: NextRequest) {
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
    payload = buildLandingContentPayload(body);
  } catch (error) {
    if (error instanceof Error) {
      return badRequest(error.message);
    }
    return badRequest('Неверный формат данных');
  }

  try {
    const updated = await updateLandingContent(payload);
    revalidatePath('/');
    return NextResponse.json({ ok: true, data: updated });
  } catch (error) {
    console.error('Failed to update landing content', error);
    return serverError();
  }
}
