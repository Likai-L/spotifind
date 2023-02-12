/*
  Warnings:

  - You are about to drop the column `geo_location` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "geo_location",
ADD COLUMN     "latitude" TEXT,
ADD COLUMN     "longitude" TEXT;
