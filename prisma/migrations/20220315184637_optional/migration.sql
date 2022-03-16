-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_book_id_fkey`;

-- AlterTable
ALTER TABLE `posts` MODIFY `book_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
