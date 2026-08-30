import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="max-w-[1500px] mx-auto px-1 py-1 lg:py-2">
      <div className="flex items-end justify-between gap-4 border-b border-surface-border pb-3 mb-5">
        <div className="flex-1 min-w-0">
          <SectionHeading
            index="03"
            label="PROJECTS"
            title="Featured Projects"
            description="End-to-end work — from raw data to a model someone could actually act on."
          />
        </div>
        <span className="hidden sm:inline-flex items-center gap-2 shrink-0 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          Vertical project rail · {projects.length} projects
        </span>
      </div>

      <div
        id="projects-rail"
        className="max-h-[calc(100vh-15rem)] overflow-y-auto overscroll-contain pr-2 sm:pr-3 space-y-4 [scrollbar-width:thin]"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
        ))}
      </div>

      <div className="flex items-center justify-between mt-3 text-[9px] font-mono text-ink-faint uppercase tracking-wider">
        <span>Scroll vertically to explore</span>
        <span>{projects.length} projects</span>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
