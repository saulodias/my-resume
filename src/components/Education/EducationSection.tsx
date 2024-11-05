import { Section, Timeline, TimelineItem } from "@/components";
import { Education } from "@/types/portfolio";

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <Section title="Education">
      <Timeline>
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            title={edu.degree}
            subtitle={edu.school}
            period={edu.period}
            description={[edu?.description || ""]}
          />
        ))}
      </Timeline>
    </Section>
  );
};
