-- AlterTable
ALTER TABLE `books` MODIFY `currentlyReading` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `wantRead` BOOLEAN NOT NULL DEFAULT false;
