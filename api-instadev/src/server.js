const express = require('express');
const routes = require('./routes');  // Verifique se 'routes' está correto
const app = express();

app.use(express.json());  // Para lidar com JSON no corpo da requisição

app.use(routes);  // Adicionando as rotas definidas em routes.js

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000!');
});
