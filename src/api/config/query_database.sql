--
-- Structure de la table `Saveur`
--

CREATE TABLE `Saveur` (
    `id_saveur` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nom` varchar(30) DEFAULT NULL
)

CREATE TABLE `Aliment` (
    `id_aliment` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nom` varchar(30) DEFAULT NULL
)

CREATE TABLE `Box` (
    `id_box` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nom` varchar(30) DEFAULT NULL,
    `pieces` int(11) DEFAULT NULL,
    `prix` int(11) DEFAULT NULL,
    `image` varchar(255) DEFAULT NULL,
    `aliments` varchar(30) DEFAULT NULL
)