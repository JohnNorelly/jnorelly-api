const PROJECTS = [
  {
    id: "jnorelly-portfolio",
    name: "JNorelly Portfolio",
    type: "Front-end",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "Site portfolio responsivo com deploy no GitHub Pages.",
  },
  {
    id: "jnorelly-api",
    name: "JNorelly API",
    type: "Back-end",
    stack: ["Node.js", "Express"],
    description: "API REST com rotas versionadas e testes automatizados.",
  },
  {
    id: "jnorelly-ui",
    name: "JNorelly UI",
    type: "UI",
    stack: ["React", "TypeScript", "Vite"],
    description: "Showcase de componentes React tipados e reutilizaveis.",
  },
  {
    id: "jnorelly-cli",
    name: "JNorelly CLI",
    type: "Tools",
    stack: ["Python", "pytest"],
    description: "CLI para validar estrutura minima de repositorios.",
  },
];

export function getProjects() {
  return PROJECTS;
}

// compat alias
export function getLayers() {
  return getProjects();
}
