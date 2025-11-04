import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "./components/ProjectCard";
import { AnimatedProjects, type Project } from "./components/animated-projects";

const DUMMY_PROJECTS:Project[]  = [
  {
    title: "Plataforma de E-commerce",
    description: "Plataforma completa de e-commerce com Next.js, TypeScript e Stripe, focada em performance e experiência de usuário.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    href: "https://picsum.photos/seed/1/500/500",
  },
  {
    title: "Sistema de Gerenciamento de Conteúdo (CMS)",
    description: "Um CMS headless construído com Node.js, GraphQL e PostgreSQL, permitindo que equipes de marketing gerenciem conteúdo de forma dinâmica.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "React"],
    href: "https://picsum.photos/seed/2/500/500",
  },
  {
    title: "Aplicativo de Fitness",
    description: "App mobile híbrido para acompanhamento de treinos e nutrição, desenvolvido com React Native e Firebase.",
    tags: ["React Native", "Firebase", "TypeScript"],
    href: "https://picsum.photos/seed/3/500/500",
  },
];

export function Projects() {
  return (
    <section className="px-8 py-20">
      <SectionTitle>Projetos em Destaque</SectionTitle>
      <AnimatedProjects projects={DUMMY_PROJECTS} />
    </section>
  );
}
