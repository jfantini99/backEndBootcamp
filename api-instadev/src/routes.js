// router.js
const { Router } = require('express');
const routes = new Router();  // Cria uma nova instância do Router

// Definindo a rota para /health
routes.get('/health', (req, res) => {  // A ordem correta é (req, res)
    return res.send({ message: "Connected with success!" });
});

module.exports = routes;  // Exportando as rotas para serem usadas em server.js
