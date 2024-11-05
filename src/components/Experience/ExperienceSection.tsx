import { Section, Timeline, TimelineItem } from "@/components";
import { Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  if (!experiences) return null;

  return (
    <Section title="Professional Experience">
      <Timeline>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            title={experience.title}
            subtitle={experience.company}
            period={experience.period}
            description={experience.responsibilities}
            skills={experience.skills}
          />
        ))}
      </Timeline>
    </Section>
  );
};
