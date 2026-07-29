/**
 * SkillBadge — small mono-font pill used for individual skills/tech tags.
 */
export default function SkillBadge({ children }) {
  return (
    <span className="inline-block px-3 py-1.5 rounded-md bg-surface-raised border border-base-border font-mono text-xs text-ink-muted hover:border-signal/50 hover:text-signal transition-colors duration-200">
      {children}
    </span>
  );
}
