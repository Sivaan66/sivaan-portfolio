import { BriefcaseBusiness, Cpu, Database, Eye, GraduationCap, Network, Workflow } from "lucide-react";

const FOCUS_AREAS = [
  ["Data Analytics", "Cleaning, exploring, and visualizing data to surface decisions.", Database],
  ["Machine Learning", "Classification systems built around meaningful business metrics.", Cpu],
  ["Explainable AI", "Using SHAP to make model predictions auditable and understandable.", Eye],
  ["AI Automation", "Exploring Generative AI and LLM workflows for practical automation.", BriefcaseBusiness],
];

function MiniVisual({ index }) {
  if (index === 0) return (
    <div className="h-16 flex items-end gap-1.5 px-1 pt-2">
      {[28, 42, 34, 54, 45, 62, 51, 72].map((height, i) => (
        <div key={i} className="flex-1 rounded-t-sm bg-signal/25 relative overflow-hidden" style={{ height: `${height}%` }}>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-signal/60" />
        </div>
      ))}
    </div>
  );

  if (index === 1) return (
    <div className="h-16 relative px-1 pt-2">
      <div className="absolute left-2 right-2 top-1/2 border-t border-surface-border" />
      <div className="absolute left-2 top-2 bottom-2 border-l border-surface-border" />
      <div className="absolute left-[20%] top-[38%] w-2 h-2 rounded-full bg-signal/70" />
      <div className="absolute left-[35%] top-[28%] w-2 h-2 rounded-full bg-signal/50" />
      <div className="absolute left-[48%] top-[44%] w-2 h-2 rounded-full bg-signal/80" />
      <div className="absolute left-[62%] top-[24%] w-2 h-2 rounded-full bg-signal/60" />
      <div className="absolute left-[75%] top-[34%] w-2 h-2 rounded-full bg-signal/80" />
      <div className="absolute left-[82%] top-[65%] w-2 h-2 rounded-full bg-signal/35" />
      <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <path d="M5 31 C20 26, 28 18, 42 23 S67 12, 94 7" fill="none" stroke="currentColor" strokeWidth="1" className="text-signal/60" />
      </svg>
    </div>
  );

  if (index === 2) return (
    <div className="h-16 flex items-center justify-center relative">
      <div className="absolute w-24 h-24 rounded-full border border-signal/10" />
      <div className="absolute w-16 h-16 rounded-full border border-signal/20" />
      <div className="absolute w-8 h-8 rounded-full bg-signal/15 border border-signal/40 flex items-center justify-center">
        <Eye size={12} className="text-signal" />
      </div>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = i * 60;
        return <span key={i} className="absolute w-1.5 h-1.5 rounded-full bg-signal/60" style={{ transform: `rotate(${angle}deg) translateY(-31px)` }} />;
      })}
    </div>
  );

  return (
    <div className="h-16 flex items-center justify-center gap-2 px-2">
      <div className="h-8 w-8 rounded-lg border border-signal/25 bg-signal/5 flex items-center justify-center"><Network size={14} className="text-signal" /></div>
      <div className="flex flex-col gap-1.5">
        <span className="w-7 h-px bg-signal/40" />
        <span className="w-7 h-px bg-signal/20" />
        <span className="w-7 h-px bg-signal/40" />
      </div>
      <div className="h-8 w-8 rounded-lg border border-surface-border bg-surface-raised/50 flex items-center justify-center"><Workflow size={14} className="text-ink-faint" /></div>
    </div>
  );
}

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
            <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">Engineering mindset.<br /><span className="text-signal">Data-driven direction.</span></h1>
            <div className="mt-5 space-y-3 text-xs sm:text-sm text-ink-muted leading-5 sm:leading-6">
              <p>I'm an Electrical Engineering graduate transitioning into <span className="text-ink">data analytics and artificial intelligence</span>. Engineering gave me a foundation in systems thinking, mathematics, and structured problem solving; I now apply that foundation to data and machine learning.</p>
              <p>My strongest interest is the intersection of <span className="text-signal">machine learning and explainability</span>—building models that perform well while making their decisions understandable.</p>
              <p>I'm also exploring <span className="text-amber">Generative AI and automation</span> to turn analytical outputs into practical workflows.</p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-surface-border grid grid-cols-2 gap-3">
            <div><p className="font-mono text-[8px] uppercase tracking-widest text-ink-faint">Current direction</p><p className="text-xs text-ink mt-1">Data Analyst · ML / AI</p></div>
            <div><p className="font-mono text-[8px] uppercase tracking-widest text-ink-faint">Working style</p><p className="text-xs text-ink mt-1">Evidence → insight → system</p></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {FOCUS_AREAS.map(([label, detail, Icon], index) => (
            <div key={label} className="glass-panel p-4 sm:p-5 flex flex-col justify-between min-h-[150px] overflow-hidden">
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[8px] text-signal">0{index + 1}</span>
                <Icon size={15} className="text-ink-faint" />
              </div>
              <MiniVisual index={index} />
              <div className="mt-2">
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
