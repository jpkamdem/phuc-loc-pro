const { createConnection } = require('mysql')

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RooT123***',
  database: 'phuc_db'
})

connection.connect((err => {
  if (err) {
    console.error('Erreur de connexion à la base de donnée : ', err)
    return
  }
  console.log('Connexion à la base de donnée effectuée.')
}))

connection.end()

module.exports = connection