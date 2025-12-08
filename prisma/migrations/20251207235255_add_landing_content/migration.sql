-- CreateTable
CREATE TABLE "LandingContent" (
    "id" TEXT NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LandingContent_pkey" PRIMARY KEY ("id")
);
