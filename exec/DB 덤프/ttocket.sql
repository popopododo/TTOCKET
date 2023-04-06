-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ttocket
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ttocket
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ttocket` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ttocket` ;

-- -----------------------------------------------------
-- Table `ttocket`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ttocket`.`user` (
  `user_id` VARCHAR(255) NOT NULL,
  `user_nickname` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ttocket`.`performance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ttocket`.`performance` (
  `performance_id` INT NOT NULL AUTO_INCREMENT,
  `performance_desc` VARCHAR(255) NULL DEFAULT NULL,
  `performance_end_time` DATETIME NULL DEFAULT NULL,
  `performance_etc` VARCHAR(255) NULL DEFAULT NULL,
  `performance_location` VARCHAR(255) NULL DEFAULT NULL,
  `performance_max_seats` INT NULL DEFAULT NULL,
  `performance_poster` VARCHAR(255) NULL DEFAULT NULL,
  `performance_price` DOUBLE NULL DEFAULT NULL,
  `performance_start_time` DATETIME NULL DEFAULT NULL,
  `performance_title` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`performance_id`),
  INDEX `FKmp0n6p508qriwusmhnwaqg49q` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FKmp0n6p508qriwusmhnwaqg49q`
    FOREIGN KEY (`user_id`)
    REFERENCES `ttocket`.`user` (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 30
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ttocket`.`enter_log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ttocket`.`enter_log` (
  `enterlog_id` INT NOT NULL AUTO_INCREMENT,
  `enterlog_time` DATETIME NULL DEFAULT NULL,
  `enterlog_nickname` VARCHAR(255) NULL DEFAULT NULL,
  `enterlog_seat_no` INT NULL DEFAULT NULL,
  `performance_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`enterlog_id`),
  INDEX `FKh4fdl9pax3gojb0tp9opmsx96` (`performance_id` ASC) VISIBLE,
  CONSTRAINT `FKh4fdl9pax3gojb0tp9opmsx96`
    FOREIGN KEY (`performance_id`)
    REFERENCES `ttocket`.`performance` (`performance_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ttocket`.`performance_like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ttocket`.`performance_like` (
  `performance_id` INT NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `is_like` TINYINT(1) NULL DEFAULT '1',
  PRIMARY KEY (`performance_id`, `user_id`),
  INDEX `FKeq5kmrqdrp7lxcvn62bcujk6r` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FKeq5kmrqdrp7lxcvn62bcujk6r`
    FOREIGN KEY (`user_id`)
    REFERENCES `ttocket`.`user` (`user_id`),
  CONSTRAINT `FKff23l2wjr6vo351ckpov24ofc`
    FOREIGN KEY (`performance_id`)
    REFERENCES `ttocket`.`performance` (`performance_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ttocket`.`seat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ttocket`.`seat` (
  `performance_id` INT NOT NULL,
  `seat_no` INT NOT NULL,
  `status` VARCHAR(255) NULL DEFAULT 'EMPTY',
  PRIMARY KEY (`performance_id`, `seat_no`),
  CONSTRAINT `FKffshrdy3iorbg2iqvrgj0t7yw`
    FOREIGN KEY (`performance_id`)
    REFERENCES `ttocket`.`performance` (`performance_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
