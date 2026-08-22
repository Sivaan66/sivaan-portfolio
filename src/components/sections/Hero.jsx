import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Download,
  Github,
  Layers3,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import Button from "../ui/Button";

const TYPED_LINE = "portfolio --overview";
const TYPE_SPEED_MS = 55;

const KPI_CARDS = [
  {
    label: "Projects",
    value: "10+",
    detail: "Substantive projects",
    icon: BriefcaseBusiness,
  },
  {
    label: "Records analyzed",
    value: "500K+",
    detail: "Across analytical work",
    icon: Database,
  },
  {
    label: "Core tools",
    value: "15+",
    detail: "Across the portfolio",
    icon: Layers3,
  },
  {
    label: "Focus",
    value: "Analytics",
    detail: "ML + AI as differentiators",
    icon: BarChart3,
  },
];

const FOCUS = [
  ["Analytics", "EDA · SQL · BI", "Strong"],
  ["Machine Learning", "Classification · SHAP", "Strong"],
  ["Automation", "ETL · AI workflows", "Building"],
  ["Engineering", "Systems · Optimization", "Foundation"],
];

export default function Hero({ onNavigate }) {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= TYPED_LINE.length) {
        setTyped(TYPED_LINE.slice(0, i));
        i += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 120);
      }
    }, TYPE_SPEED_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] py-2 lg:py-3 flex flex-col">
      <div className="border-b border-surface-border pb-4 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="panel-label mb-1">// PORTFOLIO_OVERVIEW</p>
          <p className="text-xs text-ink-muted">Professional analytics snapshot</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/5 px-3 py-1.5 font-mono text-[10px] text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
            Available for opportunities
          </span>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Sivaan_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-panel px-3 py-1.5 font-mono text-[11px] text-ink-muted hover:text-ink hover:border-signal/30 transition-colors"
          >
            <Download size={13} /> Resume
          </a>
        </div>
      </div>

      <div className="grid xl:grid-cols-[1.5fr_0.85fr] gap-5">
        <div className="glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[300px] overflow-hidden relative">
          <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-signal/5 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-6 font-mono text-[11px] text-ink-faint">
              <Terminal size={13} className="text-signal" />
              sivaan@analytics:~$ {typed}
              {!showOutput && <span className="animate-blink text-signal">▌</span>}
            </div>

            {showOutput && (
              <div className="animate-fade-up">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-3">
                  DATA ANALYST · ML / AI BUILDER
                </p>
                <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-tight text-ink leading-[0.95] max-w-3xl">
                  Turning data into
                  <span className="block text-signal">useful decisions.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-ink-muted">
                  Analytical workflows, machine learning, and automation built
                  around real business questions—not just tools.
                </p>
              </div>
            )}
          </div>

          <div className="relative mt-7 flex flex-wrap gap-2">
            <Button onClick={() => onNavigate?.("projects")} icon={ArrowUpRight}>
              Explore Work
            </Button>
            <Button
              onClick={() => onNavigate?.("contact")}
              variant="ghost"
              icon={Mail}
            >
              Contact
            </Button>
            <a
              href="https://github.com/Sivaan66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 font-mono text-[11px] text-ink-muted hover:text-ink transition-colors"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-1 gap-3">
          {KPI_CARDS.map(({ label, value, detail, icon: Icon }) => (
            <div key={label} className="glass-panel p-4 flex items-center justify-between min-h-[110px]">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-ink-faint mb-2">
                  {label}
                </p>
                <p className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {value}
                </p>
                <p className="text-[11px] text-ink-muted mt-1">{detail}</p>
              </div>
              <div className="h-9 w-9 rounded-lg bg-signal/5 border border-signal/15 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-signal" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid lg:grid-cols-[1.15fr_0.85fr] gap-5 flex-1">
        <div className="glass-panel p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="panel-label">CAPABILITY PROFILE</p>
              <p className="text-[11px] text-ink-muted mt-1">Where the portfolio has the strongest evidence</p>
            </div>
            <Activity size={17} className="text-signal" />
          </div>

          <div className="space-y-4">
            {FOCUS.map(([name, detail, status], index) => (
              <div key={name}>
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <div>
                    <span className="text-xs font-medium text-ink">{name}</span>
                    <span className="text-[10px] text-ink-faint ml-2">{detail}</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-signal">{status}</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-raised overflow-hidden">
                  <div
                    className="h-full rounded-full bg-signal/70"
                    style={{ width: `${[92, 82, 66, 58][index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="panel-label">ANALYTICS STACK</p>
              <p className="text-[11px] text-ink-muted mt-1">Core technologies represented across projects</p>
            </div>
            <Sparkles size={17} className="text-signal" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              ["Python", "Primary"],
              ["SQL", "Primary"],
              ["Power BI", "BI"],
              ["Pandas", "Analysis"],
              ["Scikit-learn", "ML"],
              ["SHAP", "Explainability"],
              ["Excel", "Analysis"],
              ["MATLAB", "Engineering"],
            ].map(([name, tag]) => (
              <div key={name} className="rounded-lg border border-surface-border bg-surface-panel/60 px-3 py-2.5 flex items-center justify-between gap-2">
                <span className="text-xs text-ink">{name}</span>
                <span className="font-mono text-[8px] uppercase tracking-wider text-ink-faint">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          ["01", "Business Analysis", "From question to insight"],
          ["02", "Data Work", "Clean · explore · model"],
          ["03", "Explainability", "Make models understandable"],
          ["04", "Automation", "Turn repeat work into systems"],
        ].map(([number, title, detail]) => (
          <div key={number} className="border-t border-surface-border pt-3">
            <p className="font-mono text-[9px] text-signal mb-1">{number}</p>
            <p className="text-xs font-medium text-ink">{title}</p>
            <p className="text-[10px] text-ink-muted mt-1">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
