-- DropIndex
DROP INDEX "User_secrets_idx";

-- CreateIndex
CREATE INDEX "User_secrets_idx" ON "User"("secrets");
