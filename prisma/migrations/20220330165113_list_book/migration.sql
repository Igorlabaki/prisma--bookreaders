/*
  Warnings:

  - You are about to drop the column `currentlyReading` on the `userbooks` table. All the data in the column will be lost.
  - You are about to drop the column `wantRead` on the `userbooks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `userbooks` DROP COLUMN `currentlyReading`,
    DROP COLUMN `wantRead`,
    ADD COLUMN `list_type` VARCHAR(191) NULL;
