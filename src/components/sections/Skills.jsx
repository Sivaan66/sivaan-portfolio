import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";
import GlassCard from "../ui/GlassCard";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="02"
        label="SKILLS"
        title="Technical Toolkit"
        description="The languages, libraries, and tools I use to move from raw data to a working, explainable model."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group) => (
          <GlassCard key={group.category} hover>
            <p className="panel-label mb-4">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item}>{item}</SkillBadge>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
