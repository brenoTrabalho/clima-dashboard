const express = require('express');
const climaRoutes = require('./routes/clima.routes');
const mainRoutes = require('./routes/main.routes'); // Importa as rotas principais
const validateApiKey = require('./middleware/validateApiKey'); // Importa o middleware de validação

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Middleware para logging simples
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware para validar API Key
app.use(validateApiKey); // Aplica o middleware de validação globalmente

// Usa as rotas principais
app.use('/', mainRoutes);

// Usa as rotas de clima
app.use('/clima', climaRoutes);

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error('Erro:', err.message);
    res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' });
});

module.exports = app;