import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const scrollRail = (direction) => {
    document.getElementById("projects-rail")?.scrollBy({
      left: direction * 380,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="max-w-[1500px] mx-auto px-1 py-1 lg:py-2">
      <div className="flex items-end justify-between gap-4 border-b border-surface-border pb-3 mb-4">
        <SectionHeading
          index="03"
          label="PROJECTS"
          title="Featured Projects"
          description="End-to-end work — from raw data to a model someone could actually act on."
        />
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => scrollRail(-1)}
            className="h-8 w-8 rounded-md border border-surface-border bg-surface-panel text-ink-muted hover:text-ink hover:border-signal/30 transition-colors flex items-center justify-center"
            aria-label="Previous projects"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            onClick={() => scrollRail(1)}
            className="h-8 w-8 rounded-md border border-surface-border bg-surface-panel text-ink-muted hover:text-ink hover:border-signal/30 transition-colors flex items-center justify-center"
            aria-label="Next projects"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <div
        id="projects-rail"
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 pr-4 [scrollbar-width:thin]"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[min(82vw,360px)] sm:w-[350px] lg:w-[370px] shrink-0 snap-start"
          >
            <ProjectCard project={project} onOpen={setActiveProject} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2 text-[9px] font-mono text-ink-faint uppercase tracking-wider">
        <span>Scroll horizontally to explore</span>
        <span>{projects.length} projects</span>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
