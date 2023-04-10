import { AboutSection } from "@/pages/components/AboutSection";
import { HeroSection } from "@/pages/components/HeroSection";
import { ProjectSection } from "@/pages/components/ProjectSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
