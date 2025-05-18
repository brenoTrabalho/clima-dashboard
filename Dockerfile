# Escolhendo a imagem base, essa linha é para montar a base do projeto, nessa caso a base é nodejs
FROM node:20

# Definir o diretório de trabalho dentro do container, aqui vamos configurar o container para funcionar como nosso projeto
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json primeiro.
# O arquivo package.json é o coração de um projeto Node.js, onde ficam informações importantes como nome, versão, dependências e scripts do projeto.
# Ele permite gerenciar pacotes e facilita o compartilhamento e execução do projeto em diferentes ambientes.
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar tudo de uma vez só, incluindo src, .env, etc.
COPY . .

# Expor a porta que o servidor vai usar
EXPOSE 3000

# Comando para iniciar o servidor em modo de desenvolvimento com nodemon
CMD ["npm", "run", "dev"]