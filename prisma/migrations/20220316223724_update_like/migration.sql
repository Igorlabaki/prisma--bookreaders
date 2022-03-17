/*
  Warnings:

  - Added the required column `user_id` to the `Likes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `likes` ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
