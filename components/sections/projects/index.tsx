import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "./components/ProjectCard";

const DUMMY_PROJECTS = [
  {
    title: "Plataforma de E-commerce",
    description: "Plataforma completa de e-commerce com Next.js, TypeScript e Stripe, focada em performance e experiência de usuário.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Sistema de Gerenciamento de Conteúdo (CMS)",
    description: "Um CMS headless construído com Node.js, GraphQL e PostgreSQL, permitindo que equipes de marketing gerenciem conteúdo de forma dinâmica.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "React"],
    href: "#",
  },
  {
    title: "Aplicativo de Fitness",
    description: "App mobile híbrido para acompanhamento de treinos e nutrição, desenvolvido com React Native e Firebase.",
    tags: ["React Native", "Firebase", "TypeScript"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section className="px-8 py-20">
      <SectionTitle>Projetos em Destaque</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
