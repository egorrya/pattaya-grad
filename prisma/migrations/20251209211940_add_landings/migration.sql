-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "landingPageId" TEXT;

-- CreateTable
CREATE TABLE "LandingPage" (
    "id" TEXT NOT NULL,
    "urlPath" TEXT NOT NULL,
    "headerPhrase" TEXT NOT NULL,
    "heroImage" TEXT,
    "heroHeading" TEXT NOT NULL,
    "heroDescription" TEXT NOT NULL,
    "heroSupport" TEXT NOT NULL,
    "buttonLabel" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "nextScreenTitle" TEXT NOT NULL,
    "nextScreenDescription" TEXT NOT NULL,
    "nextScreenQuestion" TEXT NOT NULL,
    "telegramEnabled" BOOLEAN NOT NULL DEFAULT true,
    "whatsappEnabled" BOOLEAN NOT NULL DEFAULT true,
    "customScript" TEXT,
    "telegramBotToken" TEXT,
    "telegramChatIds" TEXT,
    "logoPath" TEXT NOT NULL DEFAULT '/assets/images/logo.webp',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LandingPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LandingPage_urlPath_key" ON "LandingPage"("urlPath");

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
