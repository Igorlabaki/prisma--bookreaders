-- CreateTable
CREATE TABLE `Likes` (
    `id` VARCHAR(191) NOT NULL,
    `like` BOOLEAN NOT NULL DEFAULT false,
    `post_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
