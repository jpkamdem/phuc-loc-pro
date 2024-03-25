CREATE DATABASE IF NOT EXISTS phuc_db;

CREATE TABLE IF NOT EXISTS Saveurs (
    id_saveur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS Aliments (
    id_aliment INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS Box (
    id_box int(11) PRIMARY KEY AUTO_INCREMENT,
    nom varchar(255) DEFAULT NULL,
    pieces int(11) DEFAULT NULL,
    prix decimal(10, 2) DEFAULT NULL,
    image varchar(255) DEFAULT NULL,
    saveurs int(11) DEFAULT NULL,
    aliments int(11) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Box_Saveur (
    id_box INT,
    id_saveur INT,
    FOREIGN KEY (id_box) REFERENCES Box (id_box),
    FOREIGN KEY (id_saveur) REFERENCES Saveurs (id_saveur)
);

CREATE TABLE IF NOT EXISTS Box_Aliment (
    id_box INT,
    id_aliment INT,
    quantite INT,
    FOREIGN KEY (id_box) REFERENCES Box(id_box),
    FOREIGN KEY (id_aliment) REFERENCES Aliments (id_aliment)
);

INSERT INTO
    Saveurs (nom)
VALUES
    ("saumon"),
    ("avocat"),
    ("cheese"),
    ("coriandre"),
    ("thon"),
    ("viande"),
    ("spicy"),
    ("crevette"),
    ("seriole lalandi");

INSERT INTO
    Aliments (nom)
VALUES
    ("California Saumon Avocat"),
    ("Sushi Saumon"),
    ("Spring Avocat Cheese"),
    ("California pacific"),
    ("Edamame/Salade de chou"),
    ("Maki Salmon Roll"),
    ("Spring Saumon Avocat"),
    ("Maki Cheese Avocat"),
    ("Sushi Thon"),
    ("California Thon Avocat"),
    ("California Thon Cuit Avocat"),
    ("Sando Chicken Katsu"),
    ("Sando Salmon Aburi"),
    ("California Crevette"),
    ("California Chicken Katsu"),
    ("Spring tataki Saumon"),
    ("Signature Dragon Roll"),
    ("California French Touch"),
    ("California French salmon"),
    ("California Yellowtail Ponzu"),
    ("Signature Rock'n Roll"),
    ("Sushi Saumon Tsukudani"),
    ("Maki Salmon"),
    ("Sushi Salmon");

INSERT INTO
    Box (nom, pieces, prix, image, saveurs, aliments)
VALUES
    (
        "Tasty Blend",
        12,
        12.50,
        "tasty-blend",
        1,
        1
    ),
    (
        "Amateur Mix",
        18,
        15.90,
        "amateur-mix",
        2,
        2
    ),
    (
        "Saumon Original",
        11,
        12.50,
        "saumon-original",
        3,
        3
    ),
    (
        "Salmon Lovers",
        18,
        15.90,
        "salmon-lovers",
        4,
        4
    ),
    (
        "Salmon Classic",
        10,
        15.90,
        "salmon-classic",
        5,
        5
    ),
    (
        "Master Mix",
        12,
        15.90,
        "master-mix",
        6,
        6
    ),
    (
        "Sunrise",
        18,
        15.90,
        "sunrise",
        7,
        7
    ),
    (
        "Sando Box Chicken Katsu",
        13,
        15.90,
        "sando-box-chicken-katsu",
        8,
        8
    ),
    (
        "Sando Box Salmon Aburi",
        13,
        15.90,
        "sando-box-salmon-aburi",
        9,
        9
    ),
    (
        "Super Salmon",
        24,
        19.90,
        "super-salmon",
        10,
        10
    ),
    (
        "California Dream",
        24,
        19.90,
        "california-dream",
        11,
        11
    ),
    (
        "Gourmet Mix",
        22,
        24.50,
        "gourmet-mix",
        12,
        12
    ),
    (
        "Fresh Mix",
        22,
        24.50,
        "fresh-mix",
        13,
        13
    );

INSERT INTO
    Box_Aliment (id_box, id_aliment, quantite)
VALUES
    (1, 1, 3),
    (1, 2, 3),
    (1, 3, 3),
    (1, 4, 3),
    (1, 5, 1),
    --
    (2, 6, 3),
    (2, 7, 3),
    (2, 8, 6),
    (2, 1, 3),
    (2, 5, 1),
    --
    (3, 1, 6),
    (3, 2, 5),
    (3, 5, 1),
    --
    (4, 1, 6),
    (4, 7, 6),
    (4, 2, 6),
    (4, 5, 1),
    --
    (5, 2, 10),
    (5, 5, 1),
    --
    (6, 2, 4),
    (6, 9, 2),
    (6, 10, 3),
    (6, 1, 3),
    (6, 5, 1),
    --
    (7, 6, 6),
    (7, 1, 6),
    (7, 11, 6),
    (7, 5, 1),
    --
    (8, 12, 0.5),
    (8, 6, 6),
    (8, 1, 6),
    (8, 11, 6),
    (8, 5, 1),
    --
    (9, 13, 0.5),
    (9, 1, 6),
    (9, 11, 6),
    (9, 5, 1),
    --
    (10, 1, 6),
    (10, 6, 6),
    (10, 23, 6),
    (10, 7, 6),
    (10, 5, 1),
    --
    (11, 1, 6),
    (11, 14, 6),
    (11, 10, 6),
    (11, 15, 6),
    (11, 5, 1),
    --
    (12, 16, 6),
    (12, 17, 4),
    (12, 18, 3),
    (12, 19, 6),
    (12, 20, 3),
    (12, 5, 1),
    --
    (13, 21, 4),
    (13, 6, 6),
    (13, 4, 6),
    (13, 24, 4),
    (13, 22, 2),
    (13, 5, 1);

INSERT INTO
    Box_Saveur (id_box, id_saveur)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    --
    (2, 4),
    (2, 1),
    (2, 2),
    (2, 3),
    --
    (3, 1),
    (3, 2),
    --
    (4, 4),
    (4, 1),
    (4, 2),
    --
    (5, 1),
    --
    (6, 1),
    (6, 5),
    (6, 2),
    --
    (7, 1),
    (7, 5),
    (7, 2),
    (7, 3),
    --
    (8, 1),
    (8, 6),
    (8, 2),
    (8, 3),
    --
    (9, 1),
    (9, 5),
    (9, 2),
    --
    (10, 4),
    (10, 1),
    (10, 2),
    (10, 3),
    --
    (11, 7),
    (11, 1),
    (11, 5),
    (11, 8),
    (11, 6),
    (11, 2),
    --
    (12, 4),
    (12, 7),
    (12, 1),
    (12, 6),
    (12, 2),
    (12, 9),
    --
    (13, 7),
    (13, 7),
    (13, 5),
    (13, 2),
    (13, 3);