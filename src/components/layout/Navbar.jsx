import { useState } from "react";
import { Menu, X } from "lucide-react";
import useScrollSpy from "../../hooks/useScrollSpy";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "certifications", label: "Certifications" },
  { id: "blog", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id));

  const handleLinkClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-base-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("hero");
          }}
          className="font-mono text-signal font-medium tracking-wide"
        >
          sivaan<span className="text-ink-faint">.dev</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`font-mono text-xs tracking-wide uppercase transition-colors duration-200 ${
                  activeId === link.id
                    ? "text-signal"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-surface border-b border-base-border">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left py-2.5 font-mono text-sm tracking-wide uppercase ${
                  activeId === link.id ? "text-signal" : "text-ink-muted"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
