const { PORT } = require('./config/config');
const app = require('./app'); // Importa o app configurado

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});