import { ArrowUpRight, Github, Clock, Lightbulb, Database, FlaskConical, FileText } from "lucide-react";
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
    <article className="w-full">
      <GlassCard hover className="grid lg:grid-cols-[0.78fr_1fr_1.12fr] gap-5 lg:gap-7 min-h-[300px] p-5 sm:p-6">
        <div className="flex flex-col min-w-0 lg:border-r lg:border-surface-border lg:pr-6">
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="font-mono text-[9px] text-ink-faint uppercase tracking-[0.16em]">{project.category}</span>
            <span className={`font-mono text-[8px] uppercase tracking-wide px-2 py-1 rounded border shrink-0 ${STATUS_STYLES[project.status]}`}>{STATUS_LABEL[project.status]}</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl leading-tight font-semibold text-ink mb-2">{project.title}</h3>
          <p className="text-[11px] text-ink-muted leading-5 mb-5 max-w-2xl">{project.tagline}</p>

          <div className="mt-auto">
            <div className="rounded-lg border border-surface-border bg-surface-panel/45 p-3">
              <div className="flex items-center gap-1.5 mb-2">
                <Icon size={12} className="text-signal" />
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint">{isPlanned ? "Project direction" : "Analytical evidence"}</span>
              </div>
              <div className={`grid ${project.metrics.length > 2 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2"} gap-3`}>
                {project.metrics.map(([label, value, context]) => (
                  <div key={label} className="min-w-0">
                    <p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint break-words">{label}</p>
                    <p className="font-display text-sm font-semibold text-signal mt-0.5 break-words leading-tight">{value}</p>
                    <p className="text-[8px] text-ink-muted mt-0.5 break-words leading-4">{context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-w-0 lg:border-r lg:border-surface-border lg:pr-6">
          <div className="mb-4">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint mb-2">KEY METHOD</p>
            <div className="flex flex-wrap gap-1.5">
              {project.method.map((item) => (
                <span key={item} className="rounded-md border border-surface-border px-2 py-1 text-[9px] text-ink-muted bg-surface-panel/40">{item}</span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint mb-2">HOW THE TOOLS WERE USED</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {project.techContext.map(([tool, role]) => (
                <div key={tool} className="flex items-center justify-between gap-2 border-b border-surface-border/60 pb-1 min-w-0">
                  <span className="text-[9px] text-ink truncate">{tool}</span>
                  <span className="font-mono text-[7px] text-ink-faint text-right break-words">{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-signal/5 border-l-2 border-signal px-3 py-2.5 mt-auto">
            <div className="flex items-center gap-1.5 mb-1">
              <Lightbulb size={11} className="text-signal" />
              <span className="font-mono text-[7px] uppercase tracking-wider text-signal">Key Insight</span>
            </div>
            <p className="text-[9px] leading-4 text-ink-muted">{project.impact}</p>
          </div>
        </div>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 mb-2">
            <FileText size={13} className="text-signal" />
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint">PROJECT DESCRIPTION</p>
          </div>
          <p className="text-[10px] sm:text-[11px] leading-5 text-ink-muted mb-4">{project.problem}</p>

          <div className="rounded-md border border-surface-border bg-surface-panel/45 px-3 py-3 mt-auto">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint mb-2">WHAT THIS PROJECT DOES</p>
            <p className="text-[10px] leading-5 text-ink-muted">{project.status === "planned" ? project.tagline : project.impact}</p>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg border border-surface-border bg-surface-panel/70 px-3 py-2">
            <button onClick={() => onOpen(project)} className="font-mono text-[9px] flex items-center gap-1.5 text-signal hover:text-signal-glow transition-colors">
              {isPlanned ? "View research direction" : "View case study"}<ArrowUpRight size={12} />
            </button>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink transition-colors" aria-label={`${project.title} on GitHub`}>
              {isPlanned ? <Clock size={14} /> : <Github size={14} />}
            </a>
          </div>
        </div>
      </GlassCard>
    </article>
  );
}
