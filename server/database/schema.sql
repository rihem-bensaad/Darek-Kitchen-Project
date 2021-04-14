DROP DATABASE IF EXISTS darekitchen;

CREATE DATABASE darekitchen;

USE darekitchen;

CREATE TABLE chef (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(55) NOT NULL,
    lastName VARCHAR(55) NOT NULL,
    phoneNumber INT NOT NULL,
    locationChef VARCHAR(255) NOT NULL,
    imageCardId VARCHAR(255) NOT NULL
);

CREATE TABLE brands (
    ID_brands INT AUTO_INCREMENT PRIMARY KEY,
    brandName VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    menu VARCHAR(255) NOT NULL,
    logo VARCHAR(55) NOT NULL
);

CREATE TABLE menu (
    ID_menu INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    descriptionMenu VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    ID_brands INT,
    PRIMARY KEY (ID_menu),
    FOREIGN KEY (ID_brands) REFERENCES brands(ID_brands)
);


CREATE TABLE admin (
    ID INT AUTO_INCREMENT,
    userName VARCHAR(55) NOT NULL,
    email VARCHAR(55) NOT NULL,
    password VARCHAR(55) NOT NULL,
    PRIMARY KEY (ID)
);


CREATE TABLE user (
    ID_user INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(55) NOT NULL,
    lastName VARCHAR(55) NOT NULL,
    email VARCHAR(55) NOT NULL,
    password VARCHAR(55) NOT NULL,
    phoneNumber INT NOT NULL,
    location VARCHAR(255) NOT NULL
    );

CREATE TABLE sessionn (
    ID_session INT AUTO_INCREMENT,
    sessionName  VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY (ID_session),
    ID_user INT,
    PRIMARY KEY (ID_session),
    FOREIGN KEY (ID_brands) REFERENCES brands(ID_brands)
);