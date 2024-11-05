import { Profile } from "@/types/portfolio";

export const profileData: Profile = {
  title: "Full Stack Developer",
  subtitle: "Specialized in React, .NET Core, and Cloud Solutions",
  photoUrl: "profile_pic.png",
  experiences: [
    {
      title: "Mid-level Developer",
      company: "Radix Engenharia e Software",
      employmentType: "Full-time",
      period: "Sep 2021 - Nov 2024 · 3 yrs 3 mos",
      location: "Rio de Janeiro, Brazil · Remote",
      responsibilities: [
        "Developed a CLI for CDF Data Ingestion and automatic generation of TypeScript types from GraphQL Models facilitating development and reducing runtime errors",
        "Utilized React, .Net Core, and vertical slice architecture to develop apps with maintainable code",
        "Used tools such as Azure DevOps for task management and team collaboration",
        "Developed a Code 128 generator in JavaScript, adhering to detailed specifications outlined in the manual",
      ],
      skills: [
        "React",
        "TypeScript",
        ".NET Core",
        "Azure",
        "Docker",
        "Front-end Development",
      ],
    },
    {
      title: "Junior Developer",
      company: "Radix Engenharia e Software",
      employmentType: "Full-time",
      period: "Jan 2021 - Sep 2021 · 9 mos",
      location: "Rio de Janeiro, Brasil · Remote",
      responsibilities: [
        "Developed native Windows desktop applications with .Net Core backend implementation",
        "Implemented error logging for Power Apps applications using App Insights, improving end-user support",
        "Created Power BI dashboards and utilized Azure App Insights for applications usage and ops analysis",
        "Configured CI/CD pipelines and automated code checks for Azure cloud solutions deployment",
      ],
      skills: [
        ".NET Core",
        "Power BI",
        "Azure",
        "CI/CD",
        "Front-end Development",
        "Docker",
      ],
    },
    {
      title: "Engineering Intern",
      company: "Radix Engenharia e Software",
      employmentType: "Internship",
      period: "Mar 2019 - Jan 2021 · 1 yr 11 mos",
      location: "Rio de Janeiro, Brasil · On-site",
      responsibilities: [
        "Created dashboards for business intelligence, utilizing Angular, TypeScript, and Highcharts",
        "Refactored and optimized extensively validated tables using Handsontable, improving performance significantly",
        "Developed an Angular component library for unified UI across projects, ensuring consistency and efficiency",
      ],
      skills: ["Angular", "TypeScript", "RxJS", "Front-end Development"],
    },
    {
      title: "Electronics Technician",
      company: "Transcontrol",
      employmentType: "Full-time",
      period: "Nov 2012 - Feb 2019 · 6 yrs 4 mos",
      location: "Rio de Janeiro, Brazil · On-site",
      responsibilities: [
        "Developed optimization tools, including a Python script for full-scale resistor selection, to minimize equipment rework",
        "Supported the development and qualification of new products by assisting the engineering team with tests",
        "Created test procedures and assembly instructions for electronic products",
      ],
      skills: ["Python", "Electronics", "Technical Documentation"],
    },
  ],
  education: [
    {
      school:
        "Cefet/RJ - Federal Center for Technological Education of Rio de Janeiro",
      degree: "Bachelor's degree, Control and Automation Engineering",
      period: "2015 - Aug 2022",
    },
    {
      school: "State Technical School João Luiz do Nascimento - FAETEC",
      degree: "Industrial Electronics Technology/Technician",
      period: "2009 - 2011",
      description: "Vocational-technical school",
    },
  ],
  certifications: [
    {
      name: "Cognite Data Fusion Fundamentals Assessment",
      issuer: "Cognite",
      issueDate: "Aug 2023",
      credentialId: "dn4ouf52fhxa",
    },
  ],
};
