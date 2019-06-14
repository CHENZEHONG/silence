CREATE TABLE IF NOT EXISTS `users`(
    `userId` INT UNSIGNED AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `createdAt` timestamp,
    `updatedAt` timestamp,
   PRIMARY KEY ( `userId` )
)