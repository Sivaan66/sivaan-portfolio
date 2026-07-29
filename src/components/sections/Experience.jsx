import SectionHeading from "../ui/SectionHeading";
import Timeline from "../ui/Timeline";
import experience from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="04"
        label="JOURNEY"
        title="Experience & Learning Journey"
        description="The path from Electrical Engineering into data and AI — an ongoing, self-directed transition."
      />
      <Timeline entries={experience} />
    </section>
  );
}
