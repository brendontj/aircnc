// Import "library" express
const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const path = require('path');
// Adiciona routes.js com o caminho relativo, (se quisesse voltar uma pasta '../')
const routes = require('./routes');

// Create the aplication with express()
const app = express();


const configdb = require('./configdb');


mongoose.connect(`mongodb+srv://${configdb.user}:${configdb.pw}@clusteromnistack-7qtaa.mongodb.net/dbaircnc?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Metodos http
// GET, POST, PUST, DELETE

// Tipos de paramatros 
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao)
app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

// Listen the port 3333 
app.listen(3333);