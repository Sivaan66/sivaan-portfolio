import { useState } from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  Github,
  Home,
  Menu,
  Settings,
  UserRound,
  X,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Workspace",
    links: [
      { id: "hero", label: "Overview", icon: Home },
      { id: "about", label: "About", icon: UserRound },
      { id: "skills", label: "Skills", icon: BarChart3 },
    ],
  },
  {
    label: "Portfolio",
    links: [
      { id: "projects", label: "Projects", icon: BriefcaseBusiness },
      { id: "experience", label: "Journey", icon: FileText },
      { id: "certifications", label: "Certifications", icon: FileText },
      { id: "blog", label: "Writing", icon: FileText },
    ],
  },
];

function SidebarContent({ activeId, onNavigate }) {
  return (
    <>
      <div className="px-5 py-5 border-b border-surface-border">
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-3 text-left w-full"
          aria-label="Go to portfolio overview"
        >
          <span className="w-9 h-9 rounded-lg bg-signal/10 border border-signal/30 flex items-center justify-center font-mono text-sm font-semibold text-signal">
            S
          </span>
          <span>
            <span className="block font-display font-semibold text-ink tracking-tight">
              sivaan.dev
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-faint mt-0.5">
              Analytics Workspace
            </span>
          </span>
        </button>
      </div>

      <div className="flex-1 px-3 py-5 overflow-y-auto">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="mb-7 last:mb-0">
            <p className="px-3 mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
              {group.label}
            </p>
            <ul className="space-y-1">
              {group.links.map(({ id, label, icon: Icon }) => {
                const active = activeId === id;
                return (
                  <li key={id}>
                    <button
                      onClick={() => onNavigate(id)}
                      aria-current={active ? "page" : undefined}
                      className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                        active
                          ? "bg-signal text-surface font-medium shadow-[0_8px_24px_rgba(52,216,168,0.12)]"
                          : "text-ink-muted hover:text-ink hover:bg-surface-raised"
                      }`}
                    >
                      <Icon size={17} strokeWidth={active ? 2.2 : 1.8} />
                      <span>{label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-surface-border p-3">
        <a
          href="https://github.com/Sivaan66"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-raised transition-colors"
        >
          <Github size={17} />
          <span>GitHub</span>
        </a>
        <button
          onClick={() => onNavigate("contact")}
          className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
            activeId === "contact"
              ? "bg-signal text-surface font-medium"
              : "text-ink-muted hover:text-ink hover:bg-surface-raised"
          }`}
          aria-current={activeId === "contact" ? "page" : undefined}
        >
          <Settings size={17} />
          <span>Contact</span>
        </button>
      </div>
    </>
  );
}

export default function Navbar({ activeId, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-64 flex-col bg-surface/95 backdrop-blur-xl border-r border-surface-border">
        <SidebarContent activeId={activeId} onNavigate={handleNavigate} />
      </aside>

      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-border">
        <nav className="h-16 px-4 flex items-center justify-between">
          <button
            onClick={() => handleNavigate("hero")}
            className="flex items-center gap-2.5"
            aria-label="Go to portfolio overview"
          >
            <span className="w-8 h-8 rounded-lg bg-signal/10 border border-signal/30 flex items-center justify-center font-mono text-sm font-semibold text-signal">
              S
            </span>
            <span className="font-mono text-sm text-ink">sivaan.dev</span>
          </button>
          <button
            className="text-ink"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-surface-border bg-surface px-3 py-4">
            <SidebarContent activeId={activeId} onNavigate={handleNavigate} />
          </div>
        )}
      </header>
    </>
  );
}
