import { Github } from "lucide-react";
import GlassCard from "../ui/GlassCard";

// Replace 'Sivaan66' if your GitHub username changes.
const GITHUB_USERNAME = "Sivaan66";

export default function GitHubStats() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <GlassCard className="flex flex-col items-center text-center gap-6 py-12">
        <Github className="text-signal" size={28} />
        <div>
          <p className="panel-label mb-2 justify-center">// LIVE_ACTIVITY</p>
          <h3 className="font-display text-2xl font-semibold text-ink">
            GitHub Contributions
          </h3>
        </div>

        {/* GitHub's own contribution graph, embedded as an image —
            no API key needed, updates automatically. */}
        <img
          src={`https://ghchart.rshah.org/34d8a8/${GITHUB_USERNAME}`}
          alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
          className="w-full max-w-2xl rounded-lg border border-base-border"
          loading="lazy"
        />

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-signal hover:text-signal-glow transition-colors"
        >
          @{GITHUB_USERNAME} on GitHub →
        </a>
      </GlassCard>
    </section>
  );
}
