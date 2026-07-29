import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="03"
        label="PROJECTS"
        title="Featured Projects"
        description="End-to-end work — from raw data to a model someone could actually act on. Click any project for the full case study."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
