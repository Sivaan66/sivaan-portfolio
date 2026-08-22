import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import Button from "../ui/Button";

const TYPED_LINE = "whoami";
const TYPE_SPEED_MS = 70;

const METRICS = [
  { label: "Focus", value: "Data Analytics", detail: "Primary role" },
  { label: "Toolkit", value: "Python · SQL", detail: "Core stack" },
  { label: "Specialty", value: "ML + Explainability", detail: "Differentiator" },
  { label: "Status", value: "Open to work", detail: "2026" },
];

export default function Hero() {
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
        setTimeout(() => setShowOutput(true), 180);
      }
    }, TYPE_SPEED_MS);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen py-24 lg:py-10">
      <div className="border-b border-surface-border pb-5 mb-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="panel-label mb-1">// DASHBOARD_OVERVIEW</p>
          <p className="text-sm text-ink-muted">Sivaan's analytics workspace</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/5 px-3 py-1.5 font-mono text-[11px] text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
            Available for opportunities
          </span>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Sivaan_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-panel px-3 py-1.5 font-mono text-xs text-ink-muted hover:text-ink hover:border-signal/30 transition-colors"
          >
            <Download size={14} /> Resume
          </a>
        </div>
      </div>

      <div className="grid xl:grid-cols-[1.45fr_0.8fr] gap-6">
        <div className="glass-panel p-6 sm:p-9 min-h-[430px] flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -right-28 -top-28 w-72 h-72 rounded-full bg-signal/5 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-7 font-mono text-xs text-ink-faint">
              <Terminal size={14} className="text-signal" />
              sivaan@analytics:~$ {typed}
              {!showOutput && <span className="animate-blink text-signal">▌</span>}
            </div>

            {showOutput && (
              <div className="animate-fade-up">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal mb-4">
                  DATA ANALYST · ML / AI BUILDER
                </p>
                <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tight text-ink leading-[0.95] max-w-4xl">
                  Turning raw data into
                  <span className="block text-signal">useful decisions.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-sm sm:text-base leading-7 text-ink-muted">
                  I build analytical workflows, machine learning systems, and
                  explainable models that connect messy data to clear business
                  questions and actionable outcomes.
                </p>
              </div>
            )}
          </div>

          <div className="relative mt-10 flex flex-wrap gap-3">
            <Button onClick={scrollToProjects} icon={ArrowDown}>
              Explore Work
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              icon={Mail}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </Button>
            <a
              href="https://github.com/Sivaan66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs text-ink-muted hover:text-ink transition-colors"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-4">
          {METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className="glass-panel p-5 flex items-center justify-between min-h-[96px]"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-2">
                  {metric.label}
                </p>
                <p className="font-display text-lg font-semibold text-ink">
                  {metric.value}
                </p>
                <p className="text-xs text-ink-muted mt-1">{metric.detail}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-signal/5 border border-signal/15 flex items-center justify-center">
                {index === 0 && <BriefcaseBusiness size={17} className="text-signal" />}
                {index === 1 && <Terminal size={17} className="text-signal" />}
                {index === 2 && <Sparkles size={17} className="text-signal" />}
                {index === 3 && <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_14px_rgba(52,216,168,0.6)]" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          ["01", "Analytics", "EDA · BI · SQL"],
          ["02", "Machine Learning", "Classification · SHAP"],
          ["03", "Automation", "ETL · AI workflows"],
          ["04", "Engineering", "Systems · Optimization"],
        ].map(([number, title, detail]) => (
          <div key={number} className="border-t border-surface-border pt-4">
            <p className="font-mono text-[10px] text-signal mb-2">{number}</p>
            <p className="text-sm font-medium text-ink">{title}</p>
            <p className="text-xs text-ink-muted mt-1">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
