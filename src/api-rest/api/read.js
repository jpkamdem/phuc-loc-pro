const connection = require("../config/database");

const getBoxes = (res) => {
  const query = `
  SELECT
  b.id_box,
  b.nom AS nom_box,
  b.pieces,
  b.prix,
  b.image,
  (
      SELECT CONCAT('[', GROUP_CONCAT(CONCAT('{"nom": "', s.nom, '"}') SEPARATOR ','), ']')
      FROM Box_Saveur bs
      JOIN Saveurs s ON bs.id_saveur = s.id_saveur
      WHERE bs.id_box = b.id_box
  ) AS saveurs,
  (
      SELECT CONCAT('[', GROUP_CONCAT(CONCAT('{"nom": "', a.nom, '", "quantite": ', ba.quantite, '}') SEPARATOR ','), ']')
      FROM Box_Aliment ba
      JOIN Aliments a ON ba.id_aliment = a.id_aliment
      WHERE ba.id_box = b.id_box
  ) AS aliments
FROM
  Box b;

`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête :', err)
            res.status(500).json({ error: "Erreur lors de la récupération des données"})
            return
        }

        const boxes = results.map(box => ({
            id_box: box.id_box,
            nom: box.nom,
            pieces: box.pieces,
            prix: box.prix,
            image: box.image,
            aliments: JSON.parse(box.aliments),
            saveurs: JSON.parse(box.saveurs)
        }))
        res.json(boxes)
    })
};

module.exports = {
    getBoxes
};
