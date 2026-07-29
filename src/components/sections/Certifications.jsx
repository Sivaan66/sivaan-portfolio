import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import certifications from "../../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="05" label="CERTIFICATIONS" title="Certifications" />

      {certifications.length === 0 ? (
        <GlassCard className="flex flex-col items-center text-center py-12">
          <Award className="text-ink-faint mb-4" size={28} />
          <p className="text-ink-muted text-sm max-w-sm">
            No certifications added yet — edit{" "}
            <code className="font-mono text-signal text-xs">
              src/data/certifications.js
            </code>{" "}
            to list yours here.
          </p>
        </GlassCard>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <GlassCard key={cert.title} hover>
              <Award className="text-signal mb-3" size={20} />
              <h3 className="font-display text-base font-semibold text-ink mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-ink-muted mb-3">
                {cert.issuer} · {cert.date}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-signal hover:text-signal-glow"
                >
                  Verify <ExternalLink size={12} />
                </a>
              )}
            </GlassCard>
          ))}
        </div>
      )}
    </section>
  );
}
