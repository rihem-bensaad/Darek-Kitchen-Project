DROP DATABASE IF EXISTS mykitchen;

CREATE DATABASE mykitchen;

USE mykitchen;

CREATE TABLE chef (
    ID INT AUTO_INCREMENT,
    firstName VARCHAR(55) NOT NULL ,
    lastName VARCHAR(55) NOT NULL ,
    phoneNumber INT NOT NULL ,
    location VARCHAR(255) NOT NULL ,
    imageCardId VARCHAR(255) NOT NULL ,
    PRIMARY KEY (ID)
);

CREATE TABLE virtualBrands (
    ID INT AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL ,
    category VARCHAR(255) NOT NULL ,
    menu VARCHAR(1000) NOT NULL ,
    logo VARCHAR(255) NOT NULL ,
    FOREIGN KEY (ID)
);

CREATE TABLE menu (
    ID INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL ,
    description VARCHAR(255) NOT NULL ,
    price INT NOT NULL , 
    PRIMARY KEY (ID)       
);

CREATE TABLE user (
    ID INT AUTO_INCREMENT,
    firstName VARCHAR(55) NOT NULL ,
    lastName VARCHAR(55) NOT NULL ,
    email VARCHAR(55) NOT NULL ,
    password VARCHAR(55) NOT NULL ,
    phoneNumber INT NOT NULL ,
    location VARCHAR(255) NOT NULL ,
    FOREIGN KEY (ID)
);

CREATE TABLE admin (
    ID INT AUTO_INCREMENT,
    userName VARCHAR(55) NOT NULL ,
    email VARCHAR(55) NOT NULL ,
    password VARCHAR(55) NOT NULL ,
    PRIMARY KEY (ID)
);

CREATE TABLE session (
    ID INT AUTO_INCREMENT,
    userId INT NOT NULL,
    session  VARCHAR(255) NOT NULL,
    date VARCHAR(55) NOT NULL,
    PRIMARY KEY (ID)
);
