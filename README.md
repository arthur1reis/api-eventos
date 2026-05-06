# API de Eventos

## Como rodar
npm install
npm run dev

## Rotas

POST /auth/register
POST /auth/login

GET /eventos
POST /eventos
PUT /eventos/:id
DELETE /eventos/:id

# API de Eventos

API REST para gerenciamento de eventos, permitindo criação, listagem e inscrição de usuários.
Desenvolvida com foco em organização, escalabilidade e boas práticas de arquitetura.


## Funcionalidades

*  Criar eventos
*  Listar eventos
*  Visualizar detalhes de um evento
*  Inscrever usuários em eventos
*  Autenticação de usuários (JWT)
*  Atualizar e remover eventos


## Tecnologias Utilizadas

* Node.js
* Express
* Banco de dados (PostgreSQL / MongoDB — ajuste conforme o seu)
* Prisma / Mongoose (ajuste conforme o seu)
* JWT (autenticação)
* Docker (opcional)


## Estrutura do Projeto


src/
|-- controllers/
|-- services/
|-- repositories/
|-- middlewares/
|-- routes/
|-- config/
|-- app.js / server.js


Arquitetura baseada em separação de responsabilidades, facilitando manutenção e escalabilidade.


## Instalação

git clone https://github.com/arthur1reis/api-eventos.git
cd api-eventos
npm install



## Como Executar

npm run dev


A aplicação estará disponível em:

http://localhost:3000



## Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

env
PORT=3000

DATABASE_URL=postgresql://user:password@localhost:5432/events

JWT_SECRET=sua_chave_secreta



## Endpoints

### Eventos

POST /events

Cria um novo evento

GET /events


Lista todos os eventos

GET /events/:id


Retorna detalhes de um evento

PUT /events/:id

Atualiza um evento

DELETE /events/:id


Remove um evento


### Inscrições

POST /subscriptions

Inscreve um usuário em um evento


### Autenticação

POST /auth/register

Cadastro de usuário

POST /auth/login

Login de usuário (retorna token JWT)


## Exemplo de Requisição

### Criar Evento

POST /events
Content-Type: application/json

{
  "title": "Tech Conference",
  "date": "2026-01-01",
  "location": "São Paulo"
}


### Resposta

{
  "id": 1,
  "title": "Tech Conference",
  "date": "2026-01-01",
  "location": "São Paulo"
}



## Decisões Técnicas

* Estrutura em camadas (Controller → Service → Repository) para melhor organização
* Uso de JWT para autenticação stateless
* ORM utilizado para facilitar acesso e manipulação do banco de dados
* Separação de responsabilidades visando escalabilidade


## Testes

npm run test


## Docker(Opcional)

docker-compose up --build


## Deploy

Você pode fazer deploy utilizando:

* Render
* Railway
* Vercel (para APIs serverless)
* AWS / DigitalOcean
