import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "strata-api",
    version: "1.0.0",
    uptime: process.uptime(),
  });
});
