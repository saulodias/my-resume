export interface Skill {
  name: string;
  category?: string;
}

export interface Experience {
  title: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  responsibilities: string[];
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  url?: string;
}

export interface Profile {
  title: string;
  subtitle: string;
  photoUrl: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}
