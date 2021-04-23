DROP DATABASE IF EXISTS darekitchen;

CREATE DATABASE darekitchen;

USE darekitchen;

CREATE TABLE chef (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(55) NOT NULL,
    lastName VARCHAR(55) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phoneNumber INT NOT NULL,
    location VARCHAR(255) NOT NULL,
    imageCardId VARCHAR(255) NOT NULL
);

CREATE TABLE brands (
    ID_brand INT AUTO_INCREMENT PRIMARY KEY,
    brandName VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL
);

CREATE TABLE menu (
    ID_menu INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    ID_brands INT,
    PRIMARY KEY (ID_menu),
    FOREIGN KEY (ID_brands) REFERENCES brands(ID_brands)
);


CREATE TABLE admin (
    ID INT AUTO_INCREMENT,
    userName VARCHAR(55) NOT NULL,
    email VARCHAR(55) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID)
);


CREATE TABLE user (
    ID_user INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(55) NOT NULL,
    lastName VARCHAR(55) NOT NULL,
    email VARCHAR(55) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phoneNumber INT NOT NULL,
    location VARCHAR(255) NOT NULL
);

-- Traditional Food
INSERT INTO brands ( brandName,category,logo) values ("Dar MiMa","Traditional Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Pates Fait Maison","Traditional Food","https://i.pinimg.com/236x/ba/d5/23/bad5236544c13ffbbe784546ecfcaaa8--secret-menu-fastfood.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Le Pirate","Traditional Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("GRANNY'S","Traditional Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
-- Homemade Fast Food;
INSERT INTO brands ( brandName,category,logo) values ("Home Burger","HomeMade Fast Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("CowBoys","HomeMade Fast Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Faster&Cheaper","HomeMade Fast Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Hot doggy dog","HomeMade Fast Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
-- Sweaty Food
INSERT INTO brands ( brandName,category,logo) values ("Donuts&Bagels","Sweaty Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Flavors","Sweaty Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Chocolatine","Sweaty Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Juice Fountain","Sweaty Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");

-- -- Dar Zmen
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous T "", r aditionel",9,1) ;
-- INSERT INTO menu (title, image, price, ID_brands) values ("Ojja au me "", r guez",6,1) ;
-- INSERT INTO menu (title, image, price, ID_brands) values ("Chakchouka "", " ,6,1);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Madfouna", "", 8 ,1);

-- -- Pates Fait Maison
-- INSERT INTO menu (title, image, price, ID_brands) values ("Spaguetti  "", C arbonara",7,2);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Spaguetti  "", b olognaise",7,2);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Tagliatell "", e s au saumon fumé ",14,2);
-- INSERT INTO menu (title, image, price, ID_brands) values ("ravioli ma "", i son",9,2);
-- -- Le Pirate
-- INSERT INTO menu (title, image, price, ID_brands) values ("daurade gr "", i llé au four",9,3);
-- INSERT INTO menu (title, image, price, ID_brands) values ("loup de me "", r  au four",9,3);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Poisson du "",   jour",9,3);
-- INSERT INTO menu (title, image, price, ID_brands) values ("daurade gr "", i llé au four",9,3);
-- -- Granny kitchen
-- INSERT INTO menu (title, image, price, ID_brands) values ("Ojja",6,4) "", ; 
-- INSERT INTO menu (title, image, price, ID_brands) values ("Loubia",9, "", 4 );
-- INSERT INTO menu (title, image, price, ID_brands) values ("riz basmat "", i  au four",9,4);
-- INSERT INTO menu (title, image, price, ID_brands) values ("market kaa "", b er",4,4);

-- -- Home Burger
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,5);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,5);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,5);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,5);
-- -- Cowboys

-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,6);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,6);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,6);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,6);
-- -- Faster&Cheaper
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,7);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,7);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,7);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,7);
-- -- Hot doggy dog
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,8);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,8);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,8);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,8);

-- -- Donuts&Bagels
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,9);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,9);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,9);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,9);
-- -- Flavors
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,10);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,10);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,10);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,10);
-- -- Chocolatine
-- INSERT INTO menu (title, image, price, ID_brands) values ("Chantilly  "", 9 ,11);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,11);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,11);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,11);
-- -- juice Fountain
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,12);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,12);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,12);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,12);
