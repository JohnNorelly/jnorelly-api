import test from "node:test";
import assert from "node:assert/strict";
import { getLayers } from "../src/services/strata.service.js";

test("getLayers retorna 4 camadas", () => {
  const layers = getLayers();
  assert.equal(layers.length, 4);
});

test("cada camada possui id único", () => {
  const ids = getLayers().map((layer) => layer.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("camada presentation existe", () => {
  const layer = getLayers().find((item) => item.id === "presentation");
  assert.ok(layer);
  assert.match(layer.name, /Apresentação/);
});
