/*
  Warnings:

  - Added the required column `currentlyReading` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wantRead` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `books` ADD COLUMN `currentlyReading` BOOLEAN NOT NULL,
    ADD COLUMN `wantRead` BOOLEAN NOT NULL;
