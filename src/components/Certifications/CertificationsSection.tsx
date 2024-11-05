import { CertificationCard, Section } from "@/components";
import { Certification } from "@/types/portfolio";
import { Grid2 } from "@mui/material";

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection = ({
  certifications,
}: CertificationsSectionProps) => (
  <Section title="Certifications">
    <Grid2 container spacing={3}>
      {certifications.map((cert, index) => (
        <Grid2
          size={{
            xs: 12,
            lg: 6,
          }}
          key={index}
        >
          <CertificationCard certification={cert} />
        </Grid2>
      ))}
    </Grid2>
  </Section>
);
