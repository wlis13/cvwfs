# CVWFS Monorepo

Monorepo do CVWFS com frontend React/Vite e backend Node.js com MongoDB/Mongoose.

## Estrutura

```text
frontend/   App React + Vite existente
backend/    API Node.js + Express + Mongoose
```

## Requisitos

- Node.js
- npm
- MongoDB local ou uma connection string MongoDB Atlas

## Instalação

```bash
npm install
```

## Ambiente do Backend

Crie um arquivo `backend/.env` com base em `backend/.env.example`:

```env
NODE_ENV=development
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/cvwfs
CORS_ORIGIN=http://localhost:5173
```

## Scripts

Execute a partir da raiz:

```bash
npm run dev
npm run dev:frontend
npm run dev:backend
npm run build
npm run lint
npm run preview
npm run start
```

## Frontend

O frontend fica em `frontend` e mantém a estrutura Vite:

```text
frontend/
  index.html
  public/
  src/
  vite.config.js
  eslint.config.js
```

## Backend

O backend fica em `backend` e já inclui:

- Express
- Mongoose
- dotenv
- CORS
- Helmet
- Morgan
- Nodemon
- ESLint
- Health check em `GET /api/health`
- Rota inicial de contacto em `POST /api/contact`

## Deploy

O `vercel.json` da raiz está configurado para fazer build do frontend e publicar `frontend/dist`.
