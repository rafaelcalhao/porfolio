import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <ThemeSwitch />
    </div>
  );
}