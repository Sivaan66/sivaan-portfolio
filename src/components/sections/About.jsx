import { BriefcaseBusiness, Cpu, Database, Eye, GraduationCap } from "lucide-react";

const FOCUS_AREAS = [
  ["Data Analytics", "Cleaning, exploring, and visualizing data to surface decisions.", Database],
  ["Machine Learning", "Classification systems built around meaningful business metrics.", Cpu],
  ["Explainable AI", "Using SHAP to make model predictions auditable and understandable.", Eye],
  ["AI Automation", "Exploring Generative AI and LLM workflows for practical automation.", BriefcaseBusiness],
];

export default function About() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-1 lg:py-2 flex flex-col">
      <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
        <div>
          <p className="panel-label">// ABOUT_ME</p>
          <p className="text-[10px] text-ink-muted mt-0.5">Background · focus · direction</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[9px] text-ink-faint">
          <GraduationCap size={13} className="text-signal" /> Electrical Engineering → Data & AI
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-3 flex-1">
        <div className="glass-panel p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal mb-3">PROFILE</p>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
              Engineering mindset.<br />
              <span className="text-signal">Data-driven direction.</span>
            </h1>
            <div className="mt-5 space-y-3 text-xs sm:text-sm text-ink-muted leading-5 sm:leading-6">
              <p>
                I'm an Electrical Engineering graduate transitioning into <span className="text-ink">data analytics and artificial intelligence</span>. Engineering gave me a foundation in systems thinking, mathematics, and structured problem solving; I now apply that foundation to data and machine learning.
              </p>
              <p>
                My strongest interest is the intersection of <span className="text-signal">machine learning and explainability</span>—building models that perform well while making their decisions understandable.
              </p>
              <p>
                I'm also exploring <span className="text-amber">Generative AI and automation</span> to turn analytical outputs into practical workflows.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-surface-border grid grid-cols-2 gap-3">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-widest text-ink-faint">Current direction</p>
              <p className="text-xs text-ink mt-1">Data Analyst · ML / AI</p>
            </div>
            <div>
              <p className="font-mono text-[8px] uppercase tracking-widest text-ink-faint">Working style</p>
              <p className="text-xs text-ink mt-1">Evidence → insight → system</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {FOCUS_AREAS.map(([label, detail, Icon], index) => (
            <div key={label} className="glass-panel p-4 sm:p-5 flex flex-col justify-between min-h-[150px]">
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[8px] text-signal">0{index + 1}</span>
                <Icon size={15} className="text-ink-faint" />
              </div>
              <div className="mt-4">
                <p className="text-xs sm:text-sm font-medium text-ink">{label}</p>
                <p className="text-[10px] sm:text-[11px] text-ink-muted leading-4 mt-1.5">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
