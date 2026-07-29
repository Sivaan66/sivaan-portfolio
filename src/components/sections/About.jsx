import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const FOCUS_AREAS = [
  {
    label: "Data Analytics",
    detail: "Cleaning, exploring, and visualizing data to surface decisions, not just charts.",
  },
  {
    label: "Machine Learning",
    detail: "Classification systems built around the metric that actually matters for the business problem.",
  },
  {
    label: "Explainable AI",
    detail: "Using SHAP to make model predictions auditable rather than black-box.",
  },
  {
    label: "AI Automation",
    detail: "Exploring Generative AI and LLM workflows for practical automation.",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="01" label="ABOUT" title="About Me" />

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-ink-muted leading-relaxed">
          <p>
            I'm a final-year Electrical Engineering student transitioning into{" "}
            <span className="text-ink">data analytics and artificial intelligence</span>.
            My engineering background gave me a foundation in systems thinking
            and mathematical rigor — I now apply that to data, building
            models that don't just perform well on a metric, but hold up
            when someone asks "why did the model decide that?"
          </p>
          <p>
            I'm especially drawn to the intersection of{" "}
            <span className="text-signal">machine learning</span> and{" "}
            <span className="text-signal">explainability</span> — building
            classification systems where every prediction can be traced back
            to a reason, and exploring how{" "}
            <span className="text-amber">Generative AI</span> and automation
            can turn model outputs into real business workflows.
          </p>
          <p>
            Currently building a portfolio of end-to-end projects and
            actively applying for data analyst and entry-level ML/AI
            engineering roles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {FOCUS_AREAS.map((area) => (
            <GlassCard key={area.label} hover>
              <p className="font-mono text-xs text-signal uppercase tracking-wide mb-2">
                {area.label}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                {area.detail}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
