-- DropIndex
DROP INDEX "User.email_index";

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");
