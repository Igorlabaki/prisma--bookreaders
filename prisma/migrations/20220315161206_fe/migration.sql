/*
  Warnings:

  - You are about to drop the `courses_modules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `courses_modules` DROP FOREIGN KEY `courses_modules_fk_id_book_fkey`;

-- DropForeignKey
ALTER TABLE `courses_modules` DROP FOREIGN KEY `courses_modules_fk_id_user_fkey`;

-- DropTable
DROP TABLE `courses_modules`;

-- CreateTable
CREATE TABLE `usersBooks` (
    `id` VARCHAR(191) NOT NULL,
    `fk_id_book` VARCHAR(191) NOT NULL,
    `fk_id_user` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usersBooks` ADD CONSTRAINT `usersBooks_fk_id_user_fkey` FOREIGN KEY (`fk_id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usersBooks` ADD CONSTRAINT `usersBooks_fk_id_book_fkey` FOREIGN KEY (`fk_id_book`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
