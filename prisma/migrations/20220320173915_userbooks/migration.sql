/*
  Warnings:

  - You are about to drop the column `currentlyReading` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `wantRead` on the `books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `books` DROP COLUMN `currentlyReading`,
    DROP COLUMN `wantRead`;

-- AlterTable
ALTER TABLE `usersbooks` ADD COLUMN `currentlyReading` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `wantRead` BOOLEAN NOT NULL DEFAULT false;
