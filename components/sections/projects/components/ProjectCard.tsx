import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  href: string;
}

export function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <Card className="bg-bg-elevated border-border-subtle rounded-2xl p-8 h-full flex flex-col hover:border-cta transition-colors">
      <CardHeader className="p-0">
        <CardTitle className="text-4xl font-bold force-text-primary-color mb-3">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-grow">
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-text-tertiary bg-bg-secondary px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <a
          href={href}
          className="text-text-primary font-medium underline decoration-cta decoration-2 underline-offset-4 hover:decoration-cta-hover transition-colors inline-flex items-center gap-1"
        >
          Ver detalhes
          <ArrowLeft />
        </a>
      </CardFooter>
    </Card>
  );
}
