-- updates that make LandingPage.name required safely
UPDATE "LandingPage" SET "name" = 'Главная страница' WHERE "name" IS NULL;
ALTER TABLE "LandingPage" ALTER COLUMN "name" SET NOT NULL;
