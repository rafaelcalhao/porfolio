import { SectionDescription } from "@/components/ui/SectionDescription";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section className="px-8 py-20 bg-bg-secondary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Coluna de Texto */}
        <div>
          <SectionTitle className="mb-6">Sobre Mim</SectionTitle>
          <SectionDescription className="text-base">
            Olá! Sou Rafael, um desenvolvedor Full-Stack apaixonado por criar
            soluções tecnológicas que resolvem problemas reais. Com mais de X
            anos de experiência, minha jornada na programação começou com...
            <br />
            <br />
            Acredito que a melhor forma de trabalho é através da colaboração,
            comunicação clara e um foco incansável na qualidade do código e na
            experiência do usuário final.
          </SectionDescription>
        </div>

        {/* Coluna da Imagem */}
        <div className="w-full max-w-sm mx-auto md:mx-0 h-80 bg-bg-elevated rounded-2xl border-2 border-border-default flex items-center justify-center">
          <p className="text-text-tertiary">Placeholder para Imagem</p>
        </div>
      </div>
    </section>
  );
}
