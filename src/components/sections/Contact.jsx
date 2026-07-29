import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

// GitHub Pages can't run a backend, so this form posts to Formspree
// (a free service for static-site forms). Sign up at https://formspree.io,
// create a form, and replace YOUR_FORM_ID below with the ID they give you.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const CONTACT_LINKS = [
  { icon: Mail, label: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: Linkedin, label: "linkedin.com/in/your-handle", href: "https://linkedin.com/in/your-handle" },
  { icon: Github, label: "github.com/Sivaan66", href: "https://github.com/Sivaan66" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="07"
        label="CONTACT"
        title="Let's Talk"
        description="Open to data analyst and entry-level AI/ML roles, internships, and collaborations. Reach out directly or use the form."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Direct links */}
        <div className="space-y-4">
          {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard hover className="flex items-center gap-4 py-4">
                <Icon className="text-signal shrink-0" size={20} />
                <span className="font-mono text-sm text-ink-muted">{label}</span>
              </GlassCard>
            </a>
          ))}
        </div>

        {/* Form */}
        <GlassCard>
          {status === "sent" ? (
            <div className="flex flex-col items-center text-center py-8">
              <CheckCircle2 className="text-signal mb-3" size={28} />
              <p className="text-ink font-medium">Message sent — thank you!</p>
              <p className="text-ink-muted text-sm mt-1">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-ink-muted block mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-ink focus:border-signal outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs text-ink-muted block mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-ink focus:border-signal outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs text-ink-muted block mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-ink focus:border-signal outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-signal text-base font-mono text-sm font-medium py-3 rounded-lg hover:bg-signal-glow transition-colors disabled:opacity-60"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-xs text-center text-amber">
                  Something went wrong — please email me directly instead.
                </p>
              )}
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
