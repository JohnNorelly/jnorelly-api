const LAYERS = [
  {
    id: "presentation",
    name: "Camada de Apresentação",
    depth: 0,
    stack: ["React", "HTML", "CSS"],
    description: "Interfaces acessíveis e responsivas.",
  },
  {
    id: "application",
    name: "Camada de Aplicação",
    depth: 1,
    stack: ["Express", "Node.js"],
    description: "Rotas, validação e orquestração de serviços.",
  },
  {
    id: "domain",
    name: "Camada de Domínio",
    depth: 2,
    stack: ["JavaScript", "TypeScript"],
    description: "Regras de negócio e modelos de dados.",
  },
  {
    id: "foundation",
    name: "Fundação",
    depth: 3,
    stack: ["Git", "Tests", "CI"],
    description: "Qualidade, versionamento e deploy confiável.",
  },
];

export function getLayers() {
  return LAYERS;
}
