# profile-api

Simple REST API returning profile info + dynamic cat fact.
Stack: Node.js + Express + TypeScript, Jest, Supertest.

## Endpoint
GET `/me`

## Run locally
1. `git clone <repo>`
2. `cp .env.example .env` and edit values
3. `npm install`
4. `npm run dev`
5. Visit `http://localhost:5000/me`

## Build & Run (production)
`npm run build && npm start`

## Docker
1. `npm run build`
2. `docker build -t profile-api .`
3. `docker run -p 5000:5000 --env-file .env profile-api`

## Env variables
- `PORT` (optional)
- `CAT_FACT_API` (default: https://catfact.ninja/fact)
- `USER_EMAIL`
- `USER_NAME`
- `USER_STACK`
