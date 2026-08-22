import { BarChart3, BrainCircuit, Database, GitBranch, LineChart, Sparkles, Terminal, Wrench } from "lucide-react";
import skills from "../../data/skills";

const ICONS = {
  Programming: Terminal,
  "Data Analytics": BarChart3,
  "Machine Learning": BrainCircuit,
  AI: Sparkles,
  Tools: Wrench,
};

const VISUALS = {
  Programming: (
    <div className="flex items-end gap-1 h-8">
      {[45, 70, 55, 88, 62].map((height, i) => <span key={i} className="w-1.5 rounded-t bg-signal/70" style={{ height: `${height}%` }} />)}
    </div>
  ),
  "Data Analytics": (
    <div className="relative h-9 w-16">
      <div className="absolute inset-x-0 bottom-1 border-b border-surface-border" />
      <div className="absolute left-1 bottom-1 h-5 w-1.5 rounded-t bg-signal/45" />
      <div className="absolute left-5 bottom-1 h-7 w-1.5 rounded-t bg-signal/65" />
      <div className="absolute left-9 bottom-1 h-4 w-1.5 rounded-t bg-signal/40" />
      <div className="absolute left-13 bottom-1 h-8 w-1.5 rounded-t bg-signal" />
    </div>
  ),
  "Machine Learning": (
    <div className="relative h-9 w-16">
      <div className="absolute left-1 top-2 h-1.5 w-1.5 rounded-full bg-signal" />
      <div className="absolute left-5 top-6 h-1.5 w-1.5 rounded-full bg-signal/70" />
      <div className="absolute left-9 top-1 h-1.5 w-1.5 rounded-full bg-signal" />
      <div className="absolute right-1 top-5 h-1.5 w-1.5 rounded-full bg-signal/60" />
      <div className="absolute left-2 top-3 h-px w-10 rotate-[22deg] bg-signal/30" />
      <div className="absolute left-6 top-4 h-px w-7 -rotate-[24deg] bg-signal/30" />
    </div>
  ),
  AI: (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_12px_rgba(45,212,191,0.45)]" />
      <span className="h-px w-5 bg-signal/40" />
      <span className="h-3 w-3 rounded border border-signal/60" />
      <span className="h-px w-5 bg-signal/40" />
      <span className="h-2 w-2 rounded-full bg-signal/70" />
    </div>
  ),
  Tools: (
    <div className="flex items-center gap-1.5">
      {[GitBranch, Database, LineChart].map((Icon, i) => <span key={i} className="flex h-7 w-7 items-center justify-center rounded-md border border-surface-border bg-surface-raised"><Icon size={13} className="text-signal/80" /></span>)}
    </div>
  ),
};

export default function Skills() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-1 lg:py-2 flex flex-col">
      <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
        <div>
          <p className="panel-label">// SKILLS</p>
          <p className="text-[10px] text-ink-muted mt-0.5">Technical toolkit · languages · analytics · AI</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[9px] text-ink-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" /> 05 capability groups
        </div>
      </div>

      <div className="glass-panel flex-1 min-h-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-hidden relative">
        <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-signal/5 blur-3xl pointer-events-none" />

        <div className="relative flex items-start justify-between gap-5 border-b border-surface-border pb-5">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-signal mb-2">TECHNICAL_PROFILE</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-none">
              What I work with<span className="text-signal">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-xs leading-5 text-ink-muted">A practical stack for moving from raw data to analysis, models, explainability, and automated workflows.</p>
          </div>
          <div className="hidden md:block font-mono text-[8px] text-ink-faint text-right leading-5">
            <div>STACK_STATUS: ACTIVE</div>
            <div>MODE: HANDS_ON</div>
            <div>FOCUS: DATA → DECISION</div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-5 gap-2.5 mt-4 flex-1 items-stretch">
          {skills.map((group, index) => {
            const Icon = ICONS[group.category] || Wrench;
            return (
              <div key={group.category} className="group rounded-xl border border-surface-border bg-surface-panel/70 p-3.5 sm:p-4 flex flex-col min-h-[185px] hover:border-signal/30 hover:bg-surface-panel transition-all duration-200">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[8px] text-signal">0{index + 1}</span>
                  <Icon size={16} className="text-ink-faint group-hover:text-signal transition-colors" />
                </div>

                <div className="mt-4 h-10 flex items-center">
                  {VISUALS[group.category]}
                </div>

                <div className="mt-3">
                  <h2 className="text-xs sm:text-sm font-medium text-ink">{group.category}</h2>
                  <p className="text-[9px] text-ink-faint mt-0.5">{group.items.length} capabilities</p>
                </div>

                <div className="mt-3 pt-3 border-t border-surface-border space-y-1.5">
                  {group.items.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-[9px] text-ink-muted">
                      <span className="h-1 w-1 rounded-full bg-signal/60 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                  {group.items.length > 4 && <p className="font-mono text-[8px] text-signal/70">+{group.items.length - 4} more</p>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-4 pt-3 border-t border-surface-border grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div><p className="font-mono text-[8px] text-ink-faint uppercase">Languages</p><p className="text-[10px] text-ink mt-1">Python · SQL · MATLAB</p></div>
          <div><p className="font-mono text-[8px] text-ink-faint uppercase">Analytics</p><p className="text-[10px] text-ink mt-1">Pandas · NumPy · Power BI</p></div>
          <div><p className="font-mono text-[8px] text-ink-faint uppercase">ML / AI</p><p className="text-[10px] text-ink mt-1">Scikit-learn · SHAP · LLMs</p></div>
          <div><p className="font-mono text-[8px] text-ink-faint uppercase">Workflow</p><p className="text-[10px] text-ink mt-1">GitHub · Jupyter · VS Code</p></div>
        </div>
      </div>
    </section>
  );
}
