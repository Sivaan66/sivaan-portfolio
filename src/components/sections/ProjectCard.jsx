import { ArrowUpRight, Github, Clock } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import SkillBadge from "../ui/SkillBadge";

const STATUS_STYLES = {
  completed: "text-signal border-signal/40",
  "in-progress": "text-amber border-amber/40",
  planned: "text-ink-faint border-base-border",
};

const STATUS_LABEL = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

export default function ProjectCard({ project, onOpen }) {
  const isPlanned = project.status === "planned";

  return (
    <GlassCard hover className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-ink-faint uppercase tracking-wide">
          {project.category}
        </span>
        <span
          className={`font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded border ${STATUS_STYLES[project.status]}`}
        >
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-ink mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-ink-muted mb-5 leading-relaxed flex-1">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 4).map((t) => (
          <SkillBadge key={t}>{t}</SkillBadge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-base-border">
        <button
          onClick={() => onOpen(project)}
          disabled={isPlanned}
          className={`font-mono text-xs flex items-center gap-1.5 transition-colors ${
            isPlanned
              ? "text-ink-faint cursor-not-allowed"
              : "text-signal hover:text-signal-glow"
          }`}
        >
          {isPlanned ? "Details soon" : "View case study"}
          {!isPlanned && <ArrowUpRight size={14} />}
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-muted hover:text-ink transition-colors"
          aria-label={`${project.title} on GitHub`}
        >
          {isPlanned ? <Clock size={16} /> : <Github size={16} />}
        </a>
      </div>
    </GlassCard>
  );
}
