CREATE DATABASE IF NOT EXISTS phuc_db

CREATE TABLE IF NOT EXISTS Saveurs (
    id_saveur int primary key auto_increment,
    nom varchar(30)
)

CREATE TABLE IF NOT EXISTS Aliments (
    id_aliment int primary key auto_increment,
    nom varchar(30)
)

CREATE TABLE IF NOT EXISTS Box (
    id_box int primary key auto_increment,
    nom varchar(30) default null,
    pieces int(11) default null,
    prix int(11) default null,
    images varchar(255) default null,
    aliments varchar(30),
    saveurs varchar(30),
    foreign key(aliments) references Aliments(id_aliment),
    foreign key(saveurs) references Saveurs(id_saveur),
)