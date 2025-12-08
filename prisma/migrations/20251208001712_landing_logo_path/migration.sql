-- AlterTable
ALTER TABLE "LandingContent" ADD COLUMN     "logoPath" TEXT NOT NULL DEFAULT '/assets/images/logo.webp',
ALTER COLUMN "notificationEmail" SET DEFAULT 'pc-move@gmail.com';
