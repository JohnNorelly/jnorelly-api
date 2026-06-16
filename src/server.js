import express from "express";
import cors from "cors";
import { projectsRouter } from "./routes/strata.routes.js";
import { healthRouter } from "./routes/health.routes.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRouter);
app.use("/api/v1/projects", projectsRouter);

app.use((_req, res) => {
  res.status(404).json({
    error: "Rota nao encontrada",
    docs: "/api/v1/health",
  });
});

app.listen(PORT, () => {
  console.log(`jnorelly-api rodando em http://localhost:${PORT}`);
});
