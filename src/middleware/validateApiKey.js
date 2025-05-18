// Middleware para validar a API Key
module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key']; // Obtém a API Key do cabeçalho
    const validApiKey = process.env.API_KEY; // API Key válida armazenada no .env

    if (!apiKey) {
        return res.status(401).json({ error: 'API Key não fornecida' });
    }

    if (apiKey !== validApiKey) {
        return res.status(403).json({ error: 'API Key inválida' });
    }

    next(); // Continua para a próxima middleware ou rota
};