import { ExternalLink, GitFork, Github, Star, GitBranch, Database, BrainCircuit, Workflow } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const GITHUB_USERNAME = "Sivaan66";

const PROFILE_REPOS = [
  ["Online_retails_CustomerCohort_And_RFM_Analysis_Python_PowerBI", "Customer analytics, cohort analysis, RFM segmentation and Power BI"],
  ["Customer-Delinquency-Risk-Analysis", "Risk analytics and delinquency classification"],
  ["ETL-Automation-Pipeline", "Incremental ETL, validation and dataset publishing"],
  ["Python-Data-Analysis-Handbook", "Python data-analysis reference and practice"],
  ["AutoAnalyst---DataAnalysis_Automation", "Data-analysis automation project"],
  ["FOPID-Cruise-Control_m-AHA", "FOPID control and metaheuristic optimization"],
];

const FOCUS = [
  ["Analytics", "Cohort · RFM · BI", Database],
  ["Machine Learning", "Risk classification · SHAP", BrainCircuit],
  ["Data Engineering", "ETL · APIs · validation", Workflow],
  ["Python", "Analysis · automation", GitBranch],
];

export default function GitHubStats() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 lg:py-6">
      <div className="border-b border-surface-border pb-3 mb-4">
        <p className="panel-label">// GITHUB_PROFILE</p>
        <p className="text-[10px] text-ink-muted mt-0.5">Code, projects and analytical work</p>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-3">
        <GlassCard className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-signal/10 border border-signal/25 flex items-center justify-center">
                <Github size={22} className="text-signal" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-ink">@{GITHUB_USERNAME}</p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-ink-faint mt-1">Public GitHub profile</p>
              </div>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-surface-border bg-surface-panel px-2.5 py-1.5 font-mono text-[9px] text-ink-muted hover:text-ink hover:border-signal/30 transition-colors"
            >
              Open Profile <ExternalLink size={11} />
            </a>
          </div>

          <p className="mt-5 text-sm leading-6 text-ink-muted">
            A public workspace containing data-analysis projects, machine-learning work, ETL automation, Python practice, and engineering/optimization projects.
          </p>

          <div className="grid grid-cols-3 gap-2 mt-5">
            <div className="rounded-lg border border-surface-border bg-surface-panel/60 px-3 py-3">
              <p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">Repositories</p>
              <p className="font-display text-xl font-semibold text-ink mt-1">11+</p>
              <p className="text-[8px] text-ink-muted mt-0.5">Currently surfaced</p>
            </div>
            <div className="rounded-lg border border-surface-border bg-surface-panel/60 px-3 py-3">
              <p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">Focus</p>
              <p className="font-display text-xl font-semibold text-signal mt-1">Data + AI</p>
              <p className="text-[8px] text-ink-muted mt-0.5">Primary themes</p>
            </div>
            <div className="rounded-lg border border-surface-border bg-surface-panel/60 px-3 py-3">
              <p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">Featured</p>
              <p className="font-display text-xl font-semibold text-ink mt-1">6</p>
              <p className="text-[8px] text-ink-muted mt-0.5">Highlighted here</p>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-surface-border bg-surface-panel/50 p-3">
            <div className="flex items-center gap-2 mb-3">
              <Github size={13} className="text-signal" />
              <span className="panel-label">CONTRIBUTION ACTIVITY</span>
            </div>
            <img
              src={`https://ghchart.rshah.org/34d8a8/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              className="w-full rounded-md"
              loading="lazy"
            />
          </div>
        </GlassCard>

        <GlassCard className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="panel-label">PROFILE SIGNALS</p>
              <p className="text-[9px] text-ink-muted mt-0.5">Themes visible across the repository set</p>
            </div>
            <GitFork size={15} className="text-signal" />
          </div>

          <div className="space-y-2.5">
            {FOCUS.map(([name, detail, Icon]) => (
              <div key={name} className="flex items-center gap-3 rounded-lg border border-surface-border bg-surface-panel/50 px-3 py-2.5">
                <div className="h-8 w-8 rounded-md bg-signal/5 border border-signal/15 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-signal" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-ink">{name}</p>
                  <p className="text-[9px] text-ink-muted mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-3">
              <p className="panel-label">HIGHLIGHTED REPOSITORIES</p>
              <div className="flex items-center gap-1 text-[8px] font-mono text-ink-faint"><Star size={10} /> Curated</div>
            </div>
            <div className="space-y-2">
              {PROFILE_REPOS.map(([name, description]) => (
                <a
                  key={name}
                  href={`https://github.com/${GITHUB_USERNAME}/${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-surface-border bg-surface-panel/40 px-3 py-2.5 hover:border-signal/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-medium text-ink truncate">{name}</span>
                    <ExternalLink size={10} className="text-ink-faint shrink-0" />
                  </div>
                  <p className="text-[8px] leading-4 text-ink-muted mt-1">{description}</p>
                </a>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
