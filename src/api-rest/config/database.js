const { createConnection } = require('mysql')

const connection = createConnection({
  host: 'localhost',
  dbname: 'phuc_db',
  user: 'root',
  password: 'Crocodile123***',
});

connection.query('INSERT INTO aliment (nom) VALUES (pomme)', (err, res, fields) => {
  if (err) throw err
  console.log('Pour résoudre le problème : ', res[0].solution)
})

connection.end()