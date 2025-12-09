import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { requireAdminAccess } from '@lib/adminGuard';
import {
  buildLandingPagePayload,
  deleteLandingPage,
  getLandingPageById,
  landingUrlPathToRoute,
  updateLandingPage,
} from '@lib/landingPages';

const badRequest = (message: string) =>
  NextResponse.json({ ok: false, error: message }, { status: 400 });

const notFoundResponse = () =>
  NextResponse.json({ ok: false, error: 'Landing page not found' }, { status: 404 });

const serverError = () =>
  NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const guard = requireAdminAccess(request);
  if (!guard.allowed) {
    return guard.response;
  }

  try {
    const { id } = await params;
    const landing = await getLandingPageById(id);
    if (!landing) {
      return notFoundResponse();
    }
    return NextResponse.json({ ok: true, data: landing });
  } catch (error) {
    console.error('Failed to load landing page', error);
    return serverError();
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
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
    const { id } = await params;
    const existing = await getLandingPageById(id);
    if (!existing) {
      return notFoundResponse();
    }

    const updated = await updateLandingPage(id, payload);
    revalidatePath(landingUrlPathToRoute(updated.urlPath));
    if (existing.urlPath !== updated.urlPath) {
      revalidatePath(landingUrlPathToRoute(existing.urlPath));
    }
    return NextResponse.json({ ok: true, data: updated });
  } catch (error) {
    console.error('Failed to update landing page', error);
    const err = error as { code?: string };
    if (err.code === 'P2002') {
      return badRequest('URL уже занят');
    }
    return serverError();
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const guard = requireAdminAccess(request);
  if (!guard.allowed) {
    return guard.response;
  }

  try {
    const { id } = await params;
    const existing = await getLandingPageById(id);
    if (!existing) {
      return notFoundResponse();
    }

    await deleteLandingPage(id);
    revalidatePath(landingUrlPathToRoute(existing.urlPath));
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to delete landing page', error);
    return serverError();
  }
}
