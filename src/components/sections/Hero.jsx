import { useEffect, useState } from "react";
import { Activity, ArrowUpRight, BarChart3, BriefcaseBusiness, Database, Download, Github, Layers3, Mail, Sparkles, Terminal, TrendingUp } from "lucide-react";
import Button from "../ui/Button";

const TYPED_LINE = "portfolio --overview";
const KPI_CARDS = [["Projects", "10+", "Substantive", BriefcaseBusiness], ["Records analyzed", "500K+", "Across projects", Database], ["Core tools", "15+", "Portfolio-wide", Layers3], ["Focus", "Analytics", "ML + AI", BarChart3]];
const FOCUS = [["Analytics", "EDA · SQL · BI", "Strong", 92], ["Machine Learning", "Classification · SHAP", "Strong", 82], ["Automation", "ETL · AI workflows", "Building", 66], ["Engineering", "Systems · Optimization", "Foundation", 58]];
const STACK = [["Python", "Primary"], ["SQL", "Primary"], ["Power BI", "BI"], ["Pandas", "Analysis"], ["Scikit-learn", "ML"], ["SHAP", "Explainability"], ["Excel", "Analysis"], ["MATLAB", "Engineering"]];
const SIGNAL_BARS = [28, 36, 31, 44, 40, 55, 51, 68, 64, 78, 73, 88];

export default function Hero({ onNavigate }) {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= TYPED_LINE.length) setTyped(TYPED_LINE.slice(0, i++));
      else { clearInterval(interval); setShowOutput(true); }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-1 lg:py-2">
      <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
        <div><p className="panel-label">// PORTFOLIO_OVERVIEW</p><p className="text-[10px] text-ink-muted mt-0.5">Professional analytics snapshot</p></div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/5 px-2.5 py-1 font-mono text-[9px] text-signal"><span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" /> Available</span>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Sivaan_Resume.pdf" className="inline-flex items-center gap-1.5 rounded-lg border border-surface-border bg-surface-panel px-2.5 py-1.5 font-mono text-[10px] text-ink-muted hover:text-ink transition-colors"><Download size={12} /> Resume</a>
        </div>
      </div>

      <div className="grid xl:grid-cols-[1.55fr_1fr] gap-3">
        <div className="glass-panel p-5 sm:p-6 min-h-[225px] flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-signal/5 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3 font-mono text-[10px] text-ink-faint"><Terminal size={12} className="text-signal" /> sivaan@analytics:~$ {typed}{!showOutput && <span className="animate-blink text-signal">▌</span>}</div>
            {showOutput && <div className="animate-fade-up">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-signal mb-2">DATA ANALYST · ML / AI BUILDER</p>
                  <h1 className="font-display text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-tight text-ink leading-none">Turning data into <span className="text-signal">useful decisions.</span></h1>
                  <p className="mt-3 max-w-xl text-xs leading-5 text-ink-muted">Analytics, machine learning, and automation built around real business questions.</p>
                </div>
                <div className="hidden sm:block w-[150px] shrink-0 p-1">
                  <div className="flex items-center justify-between mb-2"><span className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">Insight signal</span><TrendingUp size={11} className="text-signal" /></div>
                  <div className="flex items-end gap-1 h-12">{SIGNAL_BARS.map((height, index) => <div key={index} className="flex-1 rounded-t-sm bg-signal/40 hover:bg-signal/70 transition-all" style={{ height: `${height}%` }} />)}</div>
                  <div className="flex justify-between mt-1.5"><span className="font-mono text-[7px] text-ink-faint">DATA</span><span className="font-mono text-[7px] text-signal">+18.4%</span></div>
                </div>
              </div>
            </div>}
          </div>
          <div className="relative mt-5 flex flex-wrap items-center gap-1.5">
            <Button onClick={() => onNavigate?.("projects")} icon={ArrowUpRight} className="!px-3 !py-1.5 !rounded-md !text-[10px] !gap-1.5">Explore Work</Button>
            <Button onClick={() => onNavigate?.("contact")} variant="ghost" icon={Mail} className="!px-3 !py-1.5 !rounded-md !text-[10px] !gap-1.5">Contact</Button>
            <a href="https://github.com/Sivaan66" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-[10px] text-ink-muted hover:text-ink"><Github size={12} /> GitHub</a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {KPI_CARDS.map(([label, value, detail, Icon]) => <div key={label} className="glass-panel p-3.5 flex items-center justify-between min-h-[106px]"><div><p className="font-mono text-[8px] uppercase tracking-widest text-ink-faint mb-1.5">{label}</p><p className="font-display text-xl font-semibold text-ink">{value}</p><p className="text-[9px] text-ink-muted mt-0.5">{detail}</p></div><div className="h-8 w-8 rounded-lg bg-signal/5 border border-signal/15 flex items-center justify-center shrink-0"><Icon size={14} className="text-signal" /></div></div>)}
        </div>
      </div>

      <div className="mt-3 grid lg:grid-cols-[1.15fr_0.85fr] gap-3">
        <div className="glass-panel p-4 sm:p-5"><div className="flex items-center justify-between mb-4"><div><p className="panel-label">CAPABILITY PROFILE</p><p className="text-[9px] text-ink-muted mt-0.5">Portfolio evidence by focus area</p></div><Activity size={15} className="text-signal" /></div><div className="space-y-3">{FOCUS.map(([name, detail, status, width]) => <div key={name}><div className="flex items-center justify-between mb-1"><div><span className="text-[11px] font-medium text-ink">{name}</span><span className="text-[9px] text-ink-faint ml-2">{detail}</span></div><span className="font-mono text-[8px] uppercase text-signal">{status}</span></div><div className="h-1 rounded-full bg-surface-raised overflow-hidden"><div className="h-full rounded-full bg-signal/70" style={{ width: `${width}%` }} /></div></div>)}</div></div>
        <div className="glass-panel p-4 sm:p-5"><div className="flex items-center justify-between mb-4"><div><p className="panel-label">ANALYTICS STACK</p><p className="text-[9px] text-ink-muted mt-0.5">Core technologies</p></div><Sparkles size={15} className="text-signal" /></div><div className="grid grid-cols-2 gap-1.5">{STACK.map(([name, tag]) => <div key={name} className="rounded-md border border-surface-border bg-surface-panel/60 px-2.5 py-2 flex items-center justify-between gap-1"><span className="text-[10px] text-ink">{name}</span><span className="font-mono text-[7px] uppercase text-ink-faint">{tag}</span></div>)}</div></div>
      </div>

      <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-2.5">{[["01", "Business Analysis", "Question → insight"], ["02", "Data Work", "Clean · explore · model"], ["03", "Explainability", "Understand the model"], ["04", "Automation", "Build repeatable systems"]].map(([number, title, detail]) => <div key={number} className="border-t border-surface-border pt-2"><p className="font-mono text-[8px] text-signal mb-0.5">{number}</p><p className="text-[10px] font-medium text-ink">{title}</p><p className="text-[9px] text-ink-muted mt-0.5">{detail}</p></div>)}</div>
    </section>
  );
}
