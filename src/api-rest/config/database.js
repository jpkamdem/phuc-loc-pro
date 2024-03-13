const { createConnection } = require("mysql")

const connection = createConnection({
  host: "localhost",
  dbname: "phuc_db",
  user: "root",
  password: "Crocodile123***",
})

connection.query(
  'select * from aliment', (err, res, fields) => {
    if (err) {
      console.log(err)
    }
    console.log(res)
  } 
)

connection.end()
