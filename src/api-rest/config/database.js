const { createConnection } = require('mysql')

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'phuc_db'
})

connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de donnée : ', err)
    return
  }
  console.log('Connexion à la base de donnée établie.')
})

module.exports = connection