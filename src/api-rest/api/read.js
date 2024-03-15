const connection = require("../config/database.js");

const totalQueries = 13;
let completedQueries = 0;

const read = (cb) => {
  connection.query("select * from Box", (err, res) => {
    if (err) {
      console.log("Erreur dans la première requete :", err);
      cb(err); // Appel du callback avec l'erreur
      return;
    }

    const boxesData = [];

    res.forEach((box) => {
      connection.query(
        "select * from Box_Saveur where id_box = ?",
        [box.id_box],
        (errSaveurs, resSaveurs) => {
          if (errSaveurs) {
            console.log("Erreur dans la requête Box_Saveur :", errSaveurs);
            cb(errSaveurs); // Appel du callback avec l'erreur
            return;
          }
          connection.query(
            "select * from Box_Aliment where id_box = ?",
            [box.id_box],
            (errAlim, resAlim) => {
              if (errAlim) {
                console.log("Erreur dans la requête Box_Aliments : ", errAlim);
                cb(errAlim); // Appel du callback avec l'erreur
                return;
              }

              const saveursPromises = resSaveurs.map((item) => {
                return new Promise((resolve, reject) => {
                  connection.query(
                    "select nom from Saveurs where id_saveur = ?",
                    [item.id_saveur],
                    (err, res) => {
                      if (err) {
                        reject(err);
                      } else {
                        resolve(res[0].nom);
                      }
                    }
                  );
                });
              });

              const alimentsPromises = resAlim.map((item) => {
                return new Promise((resolve, reject) => {
                  connection.query(
                    "select nom from Aliments where id_aliment = ?",
                    [item.id_aliment],
                    (err, res) => {
                      if (err) {
                        reject(err);
                      } else {
                        resolve({ nom: res[0].nom, quantite: item.quantite });
                      }
                    }
                  );
                });
              });

              Promise.all(saveursPromises)
                .then((saveurs) => {
                  Promise.all(alimentsPromises)
                    .then((aliments) => {
                      const formattedBox = {
                        id_box: box.id_box,
                        nom: box.nom,
                        pieces: box.pieces,
                        image: box.image,
                        saveurs: saveurs,
                        aliments: aliments,
                      };
                      boxesData.push(formattedBox);
                      completedQueries++; // Mettre à jour le compteur des requêtes terminées
                      if (completedQueries === totalQueries) {
                        // Vérifier si toutes les requêtes sont terminées
                        cb(null, boxesData); // Appel du callback avec les données
                      }
                    })
                    .catch((err) => {
                      console.log(
                        "Erreur lors de la récupération des aliments :",
                        err
                      );
                      cb(err); // Appel du callback avec l'erreur
                    });
                })
                .catch((err) => {
                  console.log("Erreur lors de la récupération des saveurs :", err);
                  cb(err); // Appel du callback avec l'erreur
                });
            }
          );
        }
      );
    });
  });
};

module.exports = read;
