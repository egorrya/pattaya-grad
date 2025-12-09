-- the SQL that actually ran when the migration was first applied
ALTER TABLE "LandingPage" ADD COLUMN "name" TEXT;
UPDATE "LandingPage" SET "name" = 'Главная страница' WHERE "name" IS NULL;
ALTER TABLE "LandingPage" ALTER COLUMN "name" SET NOT NULL;
