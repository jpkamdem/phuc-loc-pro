const express = require('express')
const router = express.Router()
const connection  = require("./config/database.js")
const read = require('./api/read.js')

// router.get('/test', (req, res) => {
//     connection.query('select * from Box', (err, result) => {
//         if (err) {
//             console.error('Erreur lors de la récupération des boxes :', err)
//             res.status(500).json({error: 'Erreur lors de la récupération des boxes'})
//             return
//         }
//         res.json(result)
//     })
// })

router.get('/test', (req, res) => {
    read((err, result) => {
        if (err) {
            console.error('Erreur dans la récupération des boxes :', err)
            res.status(500).json({error: 'Erreur dans la récupération des boxes'})
            return
        }
        res.json(result)
    })
})

// router.get('/carte/:id', (req, res) => {
//     const id = req.params.id
//     connection.query('select * from Box where id_box = ?', id, (err, res) => {
//         if (err) {
//             console.error('Erreur lors de la récupération de la box :', err)
//             res.status(500).json({error: 'Erreur lors de la récupération de la box'})
//             return
//         }
//         res.json(res[0])
//     })
// })

module.exports = router