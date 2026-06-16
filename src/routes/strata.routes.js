import { Router } from "express";
import { getLayers } from "../services/strata.service.js";

export const strataRouter = Router();

strataRouter.get("/layers", (_req, res) => {
  res.json({
    project: "strata-api",
    author: "Johnn",
    layers: getLayers(),
  });
});

strataRouter.get("/layers/:id", (req, res) => {
  const layer = getLayers().find((item) => item.id === req.params.id);

  if (!layer) {
    return res.status(404).json({ error: "Camada não encontrada" });
  }

  return res.json(layer);
});
