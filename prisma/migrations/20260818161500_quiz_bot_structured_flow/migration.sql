-- AlterTable
ALTER TABLE "QuizBotSettings"
DROP COLUMN "questions",
ADD COLUMN     "startButtonLabel" TEXT NOT NULL DEFAULT 'ПОДОБРАТЬ НЕДВИЖИМОСТЬ →',
ADD COLUMN     "managerContactUrl" TEXT,
ADD COLUMN     "channelUrl" TEXT;

-- AlterTable
ALTER TABLE "QuizBotSession"
ADD COLUMN     "startParam" TEXT,
ALTER COLUMN "step" DROP DEFAULT,
ALTER COLUMN "step" SET DATA TYPE TEXT USING "step"::text,
ALTER COLUMN "step" SET DEFAULT 'idle',
ALTER COLUMN "answers" SET DEFAULT '{}';
