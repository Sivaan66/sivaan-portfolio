import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import Button from "../ui/Button";

const TYPED_LINE = "whoami";
const TYPE_SPEED_MS = 90;

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= TYPED_LINE.length) {
        setTyped(TYPED_LINE.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 250);
      }
    }, TYPE_SPEED_MS);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs text-ink-muted">
          <span className="relative w-2 h-2 rounded-full bg-signal animate-pulse-dot" />
          Available for data analyst & entry-level ML roles
        </div>

        {/* Terminal block — the signature element */}
        <div className="glass-panel p-6 sm:p-8 mb-8 font-mono text-sm sm:text-base">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-base-border">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-ink-faint text-xs">sivaan@portfolio</span>
          </div>

          <p className="text-ink-muted">
            <span className="text-signal">$</span> {typed}
            {!showOutput && <span className="animate-blink">▌</span>}
          </p>

          {showOutput && (
            <div className="mt-3 animate-fade-up">
              <h1 className="font-display text-3xl sm:text-5xl font-semibold text-ink leading-tight">
                Sivaan
              </h1>
              <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Data Analyst & AI/ML Engineer in the making — turning raw data
                into models that are accurate,{" "}
                <span className="text-signal">explainable</span>, and{" "}
                <span className="text-amber">production-minded</span>.
                Electrical Engineering background, now building classification
                systems, SHAP-driven explainability, and AI automation
                workflows.
              </p>
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Button onClick={scrollToProjects} icon={ArrowDown}>
            View Projects
          </Button>
          <Button 
          href={`${import.meta.env.BASE_URL}resume.pdf`} 
          download="Sivaan_Resume.pdf" 
          variant="ghost" 
          icon={Download}
          >
            Download Resume
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
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
