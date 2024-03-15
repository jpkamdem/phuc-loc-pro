const connection  = require("../config/database.js")

const totalQueries = 13
let completedQueries = 0

const handleQueryCompletion = () => {
    completedQueries++

    if (completedQueries == totalQueries) {
        connection.end(err => {
            if (err) {
                console.error('Erreur lors de la fermeture de la connexion : ', err)
                return
            } else {
                console.log('Fermeture de la connexion.')
            }
        })
    }
}

connection.query('select * from Box', (err, res) => {
    if (err) {
        console.log('Erreur dans la première requete :', err)
        return
    }
    res.forEach(box => {
        connection.query('select * from Box_Saveur where id_box = ?', [box.id_box], (errSaveurs, resSaveurs) => {
            if (errSaveurs) {
                console.log('Erreur dans la requête Box_Saveur :', errSaveurs)
                return
            }
            connection.query('select * from Box_Aliment where id_box = ?', [box.id_box], (errAlim, resAlim) => {
                if (errAlim) {
                    console.log('Erreur dans la requête Box_Aliments : ', errAlim)
                    return
                }
                // const saveurs = resSaveurs.map(item => item.id_saveur)
                // const aliments = resAlim.map(item => item.id_aliment)

                // const formattedBox = {
                //     id_box: box.id_box,
                //     nom: box.nom,
                //     pieces: box.pieces,
                //     prix: box.prix,
                //     image: box.image,
                //     saveurs: saveurs,
                //     aliments: aliments
                // }

                const saveursPromises = resSaveurs.map(item => {
                    return new Promise ((resolve, reject) => {
                        connection.query('select nom from Saveurs where id_saveur = ?', [item.id_saveur], (err, res) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(res[0].nom)
                            }
                        })
                    })
                })

                const alimentsPromises = resAlim.map(item => {
                    return new Promise ((resolve, reject) => {
                        connection.query('select nom from Aliments where id_aliment = ?', [item.id_aliment], (err, res) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve({nom: res[0].nom, quantite: item.quantite})
                            }
                        })
                    })
                })

                Promise.all(saveursPromises)
                    .then(saveurs => {
                        Promise.all(alimentsPromises)
                            .then(aliments => {
                                const formattedBox = {
                                    id_box: box.id_box,
                                    nom: box.nom,
                                    pieces: box.pieces,
                                    image: box.image,
                                    saveurs: saveurs,
                                    aliments: aliments
                                }
                                console.log(formattedBox)
                                handleQueryCompletion()
                            })
                            .catch(err => {
                                console.log('Erreur lors de la récupération des aliments :', err)
                            })
                    })
                    .catch(err => {
                        console.log('Erreur lors de la récupération des saveurs :', err)
                    })
                    //test
            })
        })
    })
})
