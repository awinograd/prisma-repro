CREATE EXTENSION IF NOT EXISTS btree_gin;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "secrets" UUID[];

-- CreateIndex
CREATE INDEX "User_secrets_idx" ON "User" USING GIN ("secrets");
