"use client";

import {
  CertificationsSection,
  EducationSection,
  ExperienceSection,
  Hero,
} from "@/components";
import { profileData } from "@/data/portfolio";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Hero
        photoUrl={profileData.photoUrl}
        title={profileData.title}
        subtitle={profileData.subtitle}
      />
      <ExperienceSection experiences={profileData.experiences} />
      <EducationSection education={profileData.education} />
      <CertificationsSection certifications={profileData.certifications} />
    </Container>
  );
}
