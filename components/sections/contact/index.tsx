import { SectionTitle } from "@/components/ui/SectionTitle";
import { FakeTerminal } from "./components/FakeTerminal";

export function Contact() {
  return (
    <section className="bg-bg-primary py-20 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle>Conecte-se</SectionTitle>
      </div>
      <div className="mt-12">
        <FakeTerminal />
      </div>
    </section>
  );
}