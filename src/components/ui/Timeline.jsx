/**
 * Timeline — vertical timeline used for the "Experience / Learning Journey"
 * section. Renders whatever entries are passed in — order in the data
 * array determines order on screen.
 */
export default function Timeline({ entries }) {
  return (
    <div className="relative pl-8">
      {/* vertical line */}
      <div className="absolute left-[3px] top-2 bottom-2 w-px bg-surface-border" />

      <div className="space-y-10">
        {entries.map((entry, i) => (
          <div key={i} className="relative">
            {/* node */}
            <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-signal shadow-[0_0_8px_rgba(52,216,168,0.6)]" />

            <p className="panel-label mb-1">{entry.period}</p>
            <h3 className="font-display text-lg font-semibold text-ink mb-2">
              {entry.title}
            </h3>
            <p className="text-ink-muted text-sm leading-relaxed max-w-xl">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
