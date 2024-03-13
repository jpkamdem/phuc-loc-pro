const { createConnection } = require('mysql')

class Database {}

const connection = createConnection({
  host: 'localhost',
  dbname: 'phuc',
  user: 'root',
  password: '',
});

connection.query