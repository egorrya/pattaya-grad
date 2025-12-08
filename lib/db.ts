import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient } from '../app/generated-prisma-client/index.js';

const accelerateUrl =
	process.env.PRISMA_DATABASE_URL ?? process.env.DATABASE_URL;

const createAcceleratedPrisma = () =>
	new PrismaClient({
		accelerateUrl,
	}).$extends(withAccelerate());
type PrismaWithAccelerate = ReturnType<typeof createAcceleratedPrisma>;

declare global {
	// eslint-disable-next-line vars-on-top, no-var
	var prisma: PrismaWithAccelerate | undefined;
}

const client = globalThis.prisma ?? createAcceleratedPrisma();

if (process.env.NODE_ENV !== 'production') {
	globalThis.prisma = client;
}

export { client as prisma };
