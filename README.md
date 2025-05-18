# Clima Dashboard

Um dashboard simples para consulta e monitoramento de informações climáticas, desenvolvido em Node.js com Express.

## Funcionalidades

- Middleware global para validação de API Key
- Rotas principais:
  - `/` - Mensagem de boas-vindas
  - `/health` - Verificação de status do servidor
  - `/info` - Informações do app
- Rotas de clima:
  - `/clima/ping` - Teste de disponibilidade da rota de clima

## Como rodar localmente

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/clima-dashboard.git
   cd clima-dashboard
   ```

2. **Configure o arquivo `.env`**
   - Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias, por exemplo:
     ```
     PORT=3000
     API_KEY=sua_api_key_aqui
     MYSQL_ROOT_PASSWORD=sua_senha_mysql
     MYSQL_DATABASE=clima
     MYSQL_PORT=3306
     ```

3. **Suba os containers com Docker Compose**
   ```sh
   docker-compose up --build
   ```

   O backend estará disponível em `http://localhost:3000`.

## Scripts

- `npm run dev` — Inicia o servidor em modo desenvolvimento com nodemon
- `npm start` — Inicia o servidor em modo produção

## Estrutura do Projeto

```
src/
  app.js
  index.js
  config/
    config.js
  controllers/
    clima.controller.js
  middleware/
    validateApiKey.js
  routes/
    clima.routes.js
    main.routes.js
  services/
    clima.service.js
```

## Tecnologias

- Node.js
- Express
- Docker & Docker Compose
- MySQL

## Autor

Breno

---
Sinta-se à vontade para contribuir!