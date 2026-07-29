/**
 * SectionHeading — every section opens with a mono "panel label"
 * (e.g. "// 02_PROJECTS") followed by a large display heading.
 * This is the recurring structural device that ties sections together.
 */
export default function SectionHeading({ index, label, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="panel-label mb-3">
        {index && `// ${index}_`}
        {label}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
