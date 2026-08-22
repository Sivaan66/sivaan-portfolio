import { ArrowUpRight, Github, Clock, Lightbulb, Database, FlaskConical } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const STATUS_STYLES = {
  completed: "text-signal border-signal/40 bg-signal/5",
  "in-progress": "text-amber border-amber/40 bg-amber/5",
  planned: "text-ink-faint border-base-border bg-surface-panel/40",
};

const STATUS_LABEL = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Research Preview",
};

export default function ProjectCard({ project, onOpen }) {
  const isPlanned = project.status === "planned";
  const Icon = isPlanned ? FlaskConical : Database;

  return (
    <GlassCard hover className="flex flex-col h-full min-w-[310px] sm:min-w-[360px] lg:min-w-[390px] snap-start p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="font-mono text-[9px] text-ink-faint uppercase tracking-[0.16em]">
          {project.category}
        </span>
        <span className={`font-mono text-[8px] uppercase tracking-wide px-2 py-1 rounded border ${STATUS_STYLES[project.status]}`}>
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <h3 className="font-display text-xl sm:text-[22px] leading-tight font-semibold text-ink mb-2">
        {project.title}
      </h3>
      <p className="text-[11px] text-ink-muted leading-5 min-h-[40px] mb-4">
        {project.tagline}
      </p>

      <div className="rounded-lg border border-surface-border bg-surface-panel/45 p-3 mb-4">
        <div className="flex items-center gap-1.5 mb-2">
          <Icon size={12} className="text-signal" />
          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint">
            {isPlanned ? "Project direction" : "Analytical evidence"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {project.metrics.map(([label, value, context]) => (
            <div key={label}>
              <p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">{label}</p>
              <p className="font-display text-sm font-semibold text-signal mt-0.5">{value}</p>
              <p className="text-[8px] text-ink-muted mt-0.5">{context}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint mb-2">KEY METHOD</p>
        <div className="flex flex-wrap gap-1.5">
          {project.method.map((item) => (
            <span key={item} className="rounded-md border border-surface-border px-2 py-1 text-[9px] text-ink-muted bg-surface-panel/40">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 flex-1">
        <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint mb-2">HOW THE TOOLS WERE USED</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
          {project.techContext.map(([tool, role]) => (
            <div key={tool} className="flex items-center justify-between gap-2 border-b border-surface-border/60 pb-1">
              <span className="text-[9px] text-ink">{tool}</span>
              <span className="font-mono text-[7px] text-ink-faint text-right">{role}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-md bg-signal/5 border-l-2 border-signal px-3 py-2.5 mb-4">
        <div className="flex items-center gap-1.5 mb-1">
          <Lightbulb size={11} className="text-signal" />
          <span className="font-mono text-[7px] uppercase tracking-wider text-signal">Key Insight</span>
        </div>
        <p className="text-[9px] leading-4 text-ink-muted">{project.impact}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-base-border">
        <button
          onClick={() => onOpen(project)}
          disabled={isPlanned}
          className={`font-mono text-[9px] flex items-center gap-1.5 transition-colors ${isPlanned ? "text-signal hover:text-signal-glow" : "text-signal hover:text-signal-glow"}`}
        >
          {isPlanned ? "View research direction" : "View case study"}
          <ArrowUpRight size={12} />
        </button>

        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink transition-colors" aria-label={`${project.title} on GitHub`}>
          {isPlanned ? <Clock size={14} /> : <Github size={14} />}
        </a>
      </div>
    </GlassCard>
  );
}
