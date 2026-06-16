import { Router } from "express";
import { getProjects } from "../services/strata.service.js";

export const projectsRouter = Router();

projectsRouter.get("/", (_req, res) => {
  res.json({
    brand: "JNorelly",
    author: "John Norelly",
    projects: getProjects(),
  });
});

projectsRouter.get("/:id", (req, res) => {
  const project = getProjects().find((item) => item.id === req.params.id);

  if (!project) {
    return res.status(404).json({ error: "Projeto nao encontrado" });
  }

  return res.json(project);
});
