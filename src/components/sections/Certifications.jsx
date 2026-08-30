import { useEffect, useState } from "react";
import { Award, CalendarDays, Clock3, ExternalLink, FileText, KeyRound, X } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import certifications from "../../data/certifications";

function CertificationModal({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;
    const handleKey = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/75 backdrop-blur-sm px-3 py-5 sm:px-6 sm:py-8" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
      <div className="glass-panel bg-surface-panel w-full max-w-5xl relative p-5 sm:p-7 my-2 sm:my-4" onClick={(event) => event.stopPropagation()}>
        <button onClick={onClose} aria-label="Close certification details" className="absolute top-4 right-4 z-10 h-8 w-8 rounded-md border border-surface-border bg-surface-panel/90 flex items-center justify-center text-ink-muted hover:text-signal hover:border-signal/30 transition-colors"><X size={17} /></button>
        <div className="pr-10 mb-5">
          <p className="panel-label mb-2">CERTIFICATION_RECORD</p>
          <h3 id="cert-modal-title" className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-tight">{cert.title}</h3>
          <p className="text-xs text-ink-muted mt-2">{cert.issuer} · {cert.date} · {cert.type}</p>
        </div>
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-4">
          <div className="rounded-xl border border-surface-border bg-surface-panel/60 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2"><Award size={15} className="text-signal" /><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-faint">Certificate</p></div>
              {cert.certificatePdf && <a href={cert.certificatePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-signal/30 bg-signal/5 px-2.5 py-1.5 font-mono text-[8px] text-signal hover:bg-signal/10 transition-colors">Open PDF <ExternalLink size={11} /></a>}
            </div>
            {cert.certificatePdf ? (
              <div className="overflow-hidden rounded-lg border border-surface-border bg-black/20">
                <iframe src={`${cert.certificatePdf}#toolbar=1&navpanes=0&view=FitH`} title={`${cert.title} certificate PDF`} className="w-full h-[62vh] min-h-[420px] sm:min-h-[560px]" />
              </div>
            ) : (
              <div className="rounded-lg border border-surface-border bg-surface-raised/35 p-5 min-h-[230px] flex flex-col justify-between">
                <div><p className="font-mono text-[8px] uppercase tracking-widest text-signal">{cert.issuer}</p><p className="font-display text-xl font-semibold text-ink mt-3 leading-tight">{cert.title}</p><p className="text-[10px] text-ink-muted mt-3">{cert.type}</p></div>
                <div className="pt-5 mt-5 border-t border-surface-border grid grid-cols-2 gap-3"><div><p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">Issued</p><p className="text-[10px] text-ink mt-1">{cert.date}</p></div><div><p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">Record</p><p className="text-[10px] text-ink mt-1">Verified source details</p></div></div>
              </div>
            )}
            <p className="text-[9px] leading-4 text-ink-faint mt-3">{cert.certificateNote}</p>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-surface-border bg-surface-panel/60 p-4"><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-signal mb-2">What I achieved</p><ul className="space-y-2">{cert.achievements.map((item) => <li key={item} className="flex gap-2 text-[11px] leading-5 text-ink-muted"><span className="text-signal shrink-0">✓</span><span>{item}</span></li>)}</ul></div>
            <div className="rounded-xl border border-surface-border bg-surface-panel/60 p-4"><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-signal mb-2">Skills learned</p><div className="flex flex-wrap gap-1.5">{cert.skills.map((skill) => <span key={skill} className="rounded-md border border-surface-border bg-surface-raised/40 px-2 py-1 text-[9px] text-ink">{skill}</span>)}</div></div>
            <div className="rounded-xl border border-surface-border bg-surface-panel/60 p-4"><div className="flex items-center gap-2 mb-3"><KeyRound size={14} className="text-signal" /><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-signal">Credential details</p></div><p className="font-mono text-[9px] text-ink-muted leading-5 break-all">{cert.credential}</p>{cert.additionalCredential && <p className="font-mono text-[9px] text-ink-muted leading-5 break-all mt-2">{cert.additionalCredential}</p>}</div>
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-surface-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[9px] text-ink-faint font-mono"><CalendarDays size={13} className="text-signal" /> {cert.date}{cert.id.includes("linkedin") && <><Clock3 size={13} className="text-signal ml-2" /> 2h 21m</>}</div>
          <div className="flex flex-wrap items-center gap-2">
            {cert.certificatePdf && <a href={cert.certificatePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-surface-border bg-surface-raised/40 px-3 py-2 font-mono text-[9px] text-ink-muted hover:text-ink transition-colors"><FileText size={12} /> View full certificate</a>}
            {cert.verification && <a href={cert.verification} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-signal/30 bg-signal/5 px-3 py-2 font-mono text-[9px] text-signal hover:bg-signal/10 transition-colors">Verify credential <ExternalLink size={12} /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [active, setActive] = useState(null);
  return (
    <section id="certifications" className="min-h-[calc(100vh-4rem)] py-1 lg:py-2">
      <div className="flex items-end justify-between border-b border-surface-border pb-3 mb-4"><SectionHeading index="05" label="CERTIFICATIONS" title="Verified Learning" description="Courses and simulations with the skills, issuer details, and credential records behind them." /><span className="hidden sm:inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-ink-faint"><Award size={14} className="text-signal" /> {certifications.length} records</span></div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">{certifications.map((cert, index) => <button key={cert.id} type="button" onClick={() => setActive(cert)} className="text-left"><GlassCard hover className="h-full p-4 sm:p-5 group"><div className="flex items-start justify-between gap-3 mb-5"><span className="font-mono text-[8px] text-signal">{String(index + 1).padStart(2, "0")}</span><Award size={17} className="text-ink-faint group-hover:text-signal transition-colors" /></div><p className="font-mono text-[8px] uppercase tracking-wider text-ink-faint">{cert.issuer}</p><h3 className="font-display text-base font-semibold text-ink leading-tight mt-2 min-h-[44px]">{cert.title}</h3><p className="text-[10px] text-ink-muted leading-4 mt-3">{cert.summary}</p><div className="mt-4 pt-3 border-t border-surface-border grid grid-cols-2 gap-3"><div><p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">Issued</p><p className="text-[9px] text-ink mt-1">{cert.date}</p></div><div><p className="font-mono text-[7px] uppercase tracking-wider text-ink-faint">Focus</p><p className="text-[9px] text-ink mt-1">{cert.skills[0]}</p></div></div><div className="mt-4 font-mono text-[9px] text-signal group-hover:text-signal-glow transition-colors">{cert.certificatePdf ? "View certificate PDF →" : "View certification record →"}</div></GlassCard></button>)}</div>
      <CertificationModal cert={active} onClose={() => setActive(null)} />
    </section>
  );
}
