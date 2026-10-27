import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Crafting modern, accessible, and high-performance user interfaces with component-driven architecture.",
    icon: "Layout",
    skills: [
      { name: "HTML5", description: "Semantic markup & web standards" },
      { name: "CSS3", description: "Responsive layouts, Flexbox & Grid" },
      { name: "JavaScript", description: "ES6+, asynchronous programming & DOM" },
      { name: "TypeScript", description: "Type safety, interfaces & generics" },
      { name: "React.js", description: "Hooks, state management & component lifecycle" },
      { name: "Next.js", description: "App Router, SSR, Turbopack & routing" },
      { name: "Tailwind CSS", description: "Utility-first design & modern styling" },
    ],
  },
  {
    title: "Backend Development",
    description: "Architecting server-side logic, routing pipelines, and secure API communication.",
    icon: "Server",
    skills: [
      { name: "Node.js", description: "Event-driven runtime & asynchronous I/O" },
      { name: "Express.js", description: "RESTful routing, middleware & error handling" },
      { name: "REST APIs", description: "Endpoint design, HTTP methods & data serialization" },
    ],
  },
  {
    title: "Database & Authentication",
    description: "Data modeling, schema validation, persistence, and modern session/credential management.",
    icon: "Database",
    skills: [
      { name: "MongoDB", description: "NoSQL document storage & aggregation" },
      { name: "Mongoose", description: "Schema definition, hooks & relationships" },
      { name: "Better Auth", description: "Secure modern authentication & sessions" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Version control, modern IDE tooling, and continuous cloud deployment pipelines.",
    icon: "Terminal",
    skills: [
      { name: "Git", description: "Branching, committing & version control" },
      { name: "GitHub", description: "Repository hosting, collaboration & CI/CD" },
      { name: "VS Code", description: "Primary development environment & extensions" },
      { name: "Vercel", description: "Cloud hosting, edge deployments & previews" },
    ],
  },
];
