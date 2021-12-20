/*
  Warnings:

  - The `created_at` column on the `guestbook` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_at` column on the `guestbook` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "guestbook" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;
