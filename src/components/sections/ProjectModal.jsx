import { useEffect } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import SkillBadge from "../ui/SkillBadge";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 backdrop-blur-sm px-3 pt-14 pb-14 sm:px-6 sm:pt-16 sm:pb-16"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="glass-panel bg-surface-panel w-full max-w-2xl mx-auto relative animate-fade-up p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-md bg-surface-panel/90 text-ink-muted hover:text-signal transition-colors"
        >
          <X size={20} />
        </button>

        <div className="pr-10">
          <p className="panel-label mb-2">{project.category}</p>
          <h3 id="modal-title" className="font-display text-2xl font-semibold text-ink mb-6">
            {project.title}
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <p className="font-mono text-xs text-amber uppercase tracking-wide mb-2">Problem</p>
            <p className="text-sm text-ink-muted leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <p className="font-mono text-xs text-amber uppercase tracking-wide mb-2">Approach</p>
            <ul className="space-y-2">
              {project.approach.map((step, i) => (
                <li key={i} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                  <span className="text-signal shrink-0">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.results.length > 0 && (
            <div>
              <p className="font-mono text-xs text-amber uppercase tracking-wide mb-2">Results</p>
              <ul className="space-y-2">
                {project.results.map((r, i) => (
                  <li key={i} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                    <span className="text-signal shrink-0">✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="font-mono text-xs text-amber uppercase tracking-wide mb-3">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <SkillBadge key={t}>{t}</SkillBadge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-base-border">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-signal hover:text-signal-glow transition-colors">
            <Github size={16} /> View on GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-ink-muted hover:text-ink transition-colors">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
