import { FileText, ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import articles from "../../data/blog";

export default function Blog() {
  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="06"
        label="WRITING"
        title="Blog & Articles"
        description="A collection of technical write-ups covering my projects, experiments, and learnings in data analytics, ML, and AI engineering."
      />

      {articles.length === 0 ? (
        <GlassCard className="flex flex-col items-center text-center py-12">
          <FileText className="text-ink-faint mb-4" size={28} />
          <p className="text-ink-muted text-sm max-w-sm">
            No articles linked yet — edit{" "}
            <code className="font-mono text-signal text-xs">src/data/blog.js</code>{" "}
            to feature your LinkedIn posts or technical writing here.
          </p>
        </GlassCard>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard hover className="h-full">
                <p className="font-mono text-xs text-ink-faint mb-2">{article.date}</p>
                <h3 className="font-display text-lg font-semibold text-ink mb-2 flex items-start justify-between gap-2">
                  {article.title}
                  <ArrowUpRight size={16} className="text-signal shrink-0 mt-1" />
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {article.summary}
                </p>
              </GlassCard>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
