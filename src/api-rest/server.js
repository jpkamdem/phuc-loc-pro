const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./routes');
const { getBoxes } = require('./api/read');

const PORT = 3000;

app.use(cors());

app.get('/getboxes', (req, res) => {
  getBoxes(res);
});

app.use('/', router);
app.use(express.static('images'));


app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});