import test from "node:test";
import assert from "node:assert/strict";
import { getProjects } from "../src/services/strata.service.js";

test("getProjects retorna 4 projetos JNorelly", () => {
  const projects = getProjects();
  assert.equal(projects.length, 4);
});

test("cada projeto possui id unico", () => {
  const ids = getProjects().map((p) => p.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("projeto jnorelly-api existe", () => {
  const project = getProjects().find((p) => p.id === "jnorelly-api");
  assert.ok(project);
  assert.match(project.name, /JNorelly API/);
});
