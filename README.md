# Strata API

API REST em **camadas** — projeto de portfólio de **John Norelly** (Dev Strata).

Demonstra organização de rotas, serviços, testes e documentação para vagas de desenvolvedor júnior back-end / full stack.

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/v1/health` | Health check |
| GET | `/api/v1/strata/layers` | Lista camadas do projeto |
| GET | `/api/v1/strata/layers/:id` | Detalhe de uma camada |

## Stack

Node.js · Express · ES Modules · Node Test Runner

## Como rodar

```bash
npm install
npm run dev
```

Teste: `curl http://localhost:3333/api/v1/strata/layers`

## Testes

```bash
npm test
```

## Estrutura

```
strata-api/
├── src/
│   ├── server.js
│   ├── routes/
│   └── services/
└── tests/
```

## Licença

MIT © John Norelly
