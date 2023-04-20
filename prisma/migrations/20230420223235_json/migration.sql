/*
  Warnings:

  - Added the required column `config` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User.email_index";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "config" JSONB NOT NULL;

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");
