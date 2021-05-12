DROP DATABASE IF EXISTS darekitchen;

CREATE DATABASE darekitchen;

USE darekitchen;

CREATE TABLE chef (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(55) NOT NULL,
    lastName VARCHAR(55) NOT NULL,
    password VARCHAR(255) Not NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phoneNumber INT NOT NULL,
    location VARCHAR(255) NOT NULL,
    imageCardId VARCHAR(255) NOT NULL
);
CREATE TABLE brands (
    ID_brands INT AUTO_INCREMENT PRIMARY KEY,
    brandName VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL
);
CREATE TABLE menu (
    ID_menu INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL, 
    price INT NOT NULL,
    description VARCHAR(555) NOT NULL,
    quantity Int NOT NULL,
    PRIMARY KEY (ID_menu),
    ID INT NOT NULL,
    INDEX chef_ind (ID),
    FOREIGN KEY (ID)
    REFERENCES chef(ID)
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
INSERT INTO brands ( brandName,category,logo) values ("Espace MiMa","Traditional Food","https://www.monlabel.net/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_M.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Fait Maison","Traditional Food","https://im.qccdn.fr/node/decryptage-restauration-que-recouvre-la-mention-fait-maison-64043/original-42267.jpg");
INSERT INTO brands ( brandName,category,logo) values ("EL PRATA","Traditional Food","https://logopond.com/logos/f53415b25befdad90e6636d973bc4eb7.png");
INSERT INTO brands ( brandName,category,logo) values ("GRANNY'S","Traditional Food","https://pbs.twimg.com/profile_images/702199326383198209/2z5vkEie.png");
-- Homemade Fast Food;
-- INSERT INTO brands ( brandName,category,logo) values ("Papy Burger","HomeMade Fast Food","https://static.wixstatic.com/media/0259db_4af9537da28e423093cad7ee262e6032~mv2.png/v1/fit/w_2500,h_1330,al_c/0259db_4af9537da28e423093cad7ee262e6032~mv2.png");
-- INSERT INTO brands ( brandName,category,logo) values ("CowBoys","HomeMade Fast Food","https://pbs.twimg.com/profile_images/1372568603501936650/WZ_u6Zsr_400x400.jpg");
-- INSERT INTO brands ( brandName,category,logo) values ("Hot doggy dog","HomeMade Fast Food","https://i.pinimg.com/736x/00/ee/8c/00ee8c8f9dcf4d3b1e8587e508b7dc3a.jpg");
-- INSERT INTO brands ( brandName,category,logo) values ("Streat House","HomeMade Fast Food","http://lh3.googleusercontent.com/TzGYMcbZ9HWy3zbsuP_yh3uNYapE0ZaeUsEwuE_vzwvSndxxj07CyH3i39wOVp4NumDjXIfVjGDftLi5oc3wh1ZNmjk");
INSERT INTO brands ( brandName,category,logo) values ("Berger Home","HomeMade Fast Food","https://s3.eu-central-1.amazonaws.com/w4ve/box/shops/logo/@3x251648@3x.png");
INSERT INTO brands ( brandName,category,logo) values ("Holy Chick","HomeMade Fast Food","https://3.bp.blogspot.com/-JcRI6gm4C5Y/WEf5ueBrreI/AAAAAAAAAGI/PsD8Pzmw2PEoUuv4ncKKWjAip4f9zcEPQCLcB/s320/13882647_182398792174241_6209154348795634606_n.jpg");

-- Sweaty Food
INSERT INTO brands ( brandName,category,logo) values ("Donuts&Bagels","Sweaty Food","https://static1.squarespace.com/static/58a77322db29d65028521ddb/t/59ad4fd5cd39c3b55fa39891/1603846457585.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Flavor","Sweaty Food","https://dcassetcdn.com/design_img/2515312/609044/609044_13373251_2515312_333f8848_image.jpg");
INSERT INTO brands ( brandName,category,logo) values ("Miss PoP cake","Sweaty Food","https://www.misspopcake.com/themes/paprika/img/logo.png?1549924073.jpg");
-- Healthy food
INSERT INTO brands ( brandName,category,logo) values ("Food Express","Healthy Food","https://dcassetcdn.com/design_img/1889677/191816/191816_10296849_1889677_9e3dc4c9_image.png");
INSERT INTO brands ( brandName,category,logo) values ("Foundation","Healthy Food","https://i.pinimg.com/236x/ac/56/bc/ac56bca76efa388b7b6f01dbe5d900cb--coffee-logo-food-logos.jpg");
-- -- Dar zmen
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "https://www.196flavors.com/wp-content/uploads/2018/03/couscous-tunisien-1-FP-500x500.jpg",9600, 1) ;
-- INSERT INTO menu (title, image, price, ID_brands) values ("Ojja",  "https://www.mesinspirationsculinaires.com/wp-content/uploads/2018/08/ojja-tunisienne-merguez-et-oeufs-1.jpg",6500, 1) ;
-- INSERT INTO menu (title, image, price, ID_brands) values ("Makarouna", "https://pbs.twimg.com/media/EWM97HvXYAAIwuk.jpg",10450, 1);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Mloukhiya", "https://assets.afcdn.com/recipe/20180727/81606_w1024h1024c1cx355cy250.jpg", 18000, 1);
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
-- INSERT INTO menu (title, image, price, ID_brands) values ("Chantilly", "http://qccdn.ar-cdn.com/recipes/port500/ac2b48ec-33b4-44e3-aa68-2c37452e8d7a.jpg", 9000, 10);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Grewech", "https://recettes.de/images/blogs/couscous-et-puddings/griwech-griweche-gateau-algerien-au-miel.640x480.jpg", 91000 ,11);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,2);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,3);
-- -- -- juice Fountain
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,12);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,12);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,12);
-- INSERT INTO menu (title, image, price, ID_brands) values ("Couscous", "", 9 ,12);



  --  "title":"Tajin",
  --   "image":"https://www.196flavors.com/wp-content/uploads/2018/03/tajine-el-bey-3.jpg",
  --   "location": "Sousse",
  --   "description":"This Moroccan dish having its origin in Berber cuisine, but also very widespread in traditional Maghreb cuisine",
  --   "price": 12


--    "title":"Mlewi",
--     "image":"https://1.bp.blogspot.com/-VT4MZ9BggJs/XnCGadcmwGI/AAAAAAAAgNY/kMNzGHycI1I_zyC3RLrTaRkgzRrEAj4XQCLcBGAsYHQ/s1600/90020401_216144062835727_2104574493761470464_n.jpg",
--     "location": "Mestir",
--     "description":"The ingredients: 300 g fine semolina 200 g flour lukewarm water 2 tbsp olive oil salt.",
--     "price": 18 