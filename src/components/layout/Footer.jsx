import { Github, Linkedin, Mail } from "lucide-react";

// Replace these placeholders with your real links.
const SOCIALS = [
  { icon: Github, href: "https://github.com/Sivaan66", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/your-handle", label: "LinkedIn" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Sivaan — built with React, Vite & Tailwind
        </p>

        <div className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-ink-muted hover:text-signal transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
