import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen bg-bg-primary px-8 py-20 flex flex-col justify-center">
      <h1 className="text-7xl font-black text-text-primary mb-4">
        Rafael Pinheiro
      </h1>
      <h2 className="text-6xl font-black text-text-primary mb-4">
        Desenvolvedor
      </h2>
      <h2 className="text-6xl font-black text-text-primary mb-6">
        Fullstack
      </h2>
      <p className="text-xl text-text-secondary max-w-2xl mb-8">
        Especializado em React, Node.js e TypeScript. Entregar qualidade com
        velocidade é o que me norteia.
      </p>
      <div className="flex">
        <Button
          variant="default"
          size="lg"
          className="inline-flex items-center gap-2"
        >
          Projetos
          <span>↓</span>
        </Button>
      </div>
    </section>
  );
}
