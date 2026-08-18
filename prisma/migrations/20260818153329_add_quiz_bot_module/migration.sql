-- CreateEnum
CREATE TYPE "LeadSource" AS ENUM ('site', 'telegram_bot');

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "message" TEXT,
ADD COLUMN     "source" "LeadSource" NOT NULL DEFAULT 'site';

-- CreateTable
CREATE TABLE "QuizBotSettings" (
    "id" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "welcomeMessage" TEXT NOT NULL,
    "questions" TEXT NOT NULL,
    "completionMessage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizBotSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizBotSession" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "telegramUserId" TEXT,
    "username" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "step" INTEGER NOT NULL DEFAULT 0,
    "answers" JSONB NOT NULL DEFAULT '[]',
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizBotSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuizBotSession_chatId_key" ON "QuizBotSession"("chatId");
