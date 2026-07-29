/**
 * GlassCard — glassmorphism container used across sections
 * (project cards, skill panels, contact card, etc.)
 */
export default function GlassCard({ children, className = "", hover = false }) {
  return (
    <div
      className={`glass-panel p-6 ${
        hover
          ? "transition-all duration-300 hover:border-signal/40 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
