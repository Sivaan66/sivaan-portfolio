export default function SectionHeading({ index, label, title, description }) {
  return (
    <div className="mb-8 border-b border-surface-border pb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <p className="panel-label mb-2">
          {index && `${index} · `}
          {label}
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-xl text-sm leading-6 text-ink-muted md:text-right">
          {description}
        </p>
      )}
    </div>
  );
}
