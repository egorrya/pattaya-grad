-- AlterTable
ALTER TABLE "Lead"
ADD COLUMN     "pagePath" TEXT,
ADD COLUMN     "utmSource" TEXT,
ADD COLUMN     "utmMedium" TEXT,
ADD COLUMN     "utmCampaign" TEXT,
ADD COLUMN     "utmContent" TEXT,
ADD COLUMN     "utmTerm" TEXT,
ADD COLUMN     "gclid" TEXT,
ADD COLUMN     "gbraid" TEXT,
ADD COLUMN     "wbraid" TEXT,
ADD COLUMN     "fbclid" TEXT;
