const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./routes');
const { getBoxes } = require('./api/read');

const PORT = 3000;

app.use(cors());

// Route pour récupérer les boîtes
app.get('/getboxes', (req, res) => {
  getBoxes(res); // Passer res comme paramètre
});

// Utiliser le routeur pour gérer les autres routes
app.use('/', router);
app.use(express.static('images'));


// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
