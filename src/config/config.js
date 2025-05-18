const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do arquivo .env
const result = dotenv.config();

if (result.error) {
    console.error('Erro ao carregar o arquivo .env:', result.error.message);
    process.exit(1); // Encerra o processo com erro
}

// Centraliza as variáveis de ambiente
const PORT = process.env.PORT || 3000;

// Validação das variáveis de ambiente
if (!process.env.PORT) {
    console.warn('Aviso: A variável de ambiente PORT não está definida. Usando o valor padrão: 3000.');
}

module.exports = {
    PORT,
};