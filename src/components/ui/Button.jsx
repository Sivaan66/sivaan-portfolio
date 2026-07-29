/**
 * Button — shared button primitive with two visual variants.
 * variant: "primary" (solid signal color) | "ghost" (outlined)
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  download,
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm tracking-wide transition-all duration-200";

  const variants = {
    primary:
      "bg-signal text-base font-medium hover:bg-signal-glow hover:shadow-[0_0_20px_rgba(52,216,168,0.35)]",
    ghost:
      "border border-base-border text-ink hover:border-signal hover:text-signal",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <
        a 
        href={href} 
        onClick={onClick} 
        download={download || true} 
        className={classes}
    >
        {Icon && <Icon size={16} />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
