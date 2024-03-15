const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
