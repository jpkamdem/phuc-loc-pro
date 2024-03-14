const connection  = require("../config/database.js")

connection.query("INSERT INTO Aliments (nom) VALUES ('test255')", (err) => {
  if (err) {
    console.log("Erreur dans la requête d'insertion", err)
    return;
  }
  console.log("Requête d'insertion effectuée")

  connection.query("SELECT * FROM Aliments", (err, res) => {
    if (err) {
      console.log("Erreur dans la requête de lecture")
      return;
    }
    console.log("Résultat de la requête de lecture : ", res)

    connection.end()
  })
})
