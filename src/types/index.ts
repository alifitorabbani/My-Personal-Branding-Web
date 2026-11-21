export type Theme = "light" | "dark" | "system";

export interface Person {
  name: string;
  title: string;
  summary: string;
  email: string;
  location: string;
  availability: boolean;
  availabilityNote: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface SkillGroup {
  id: string;
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  type: "professional" | "academic" | "organizational" | "committee";
  company: string;
  companyFull?: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  highlights?: string[];
  relatedProject?: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  status: "completed" | "in-progress" | "concept";
  featured: boolean;
  technologies: string[];
  features: string[];
  challenge?: string;
  solution?: string;
  outcome?: string;
  role?: string;
  github?: string;
  demo?: string;
  images?: string[];
  startDate?: string;
  endDate?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "competition" | "award" | "certification";
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featured: boolean;
}

export interface LeadershipItem {
  id: string;
  organization: string;
  position: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  type: "organizational" | "event" | "committee";
}

export interface TimelineEntry {
  id: string;
  year: string;
  period: string;
  title: string;
  organization: string;
  category: "education" | "experience" | "project" | "leadership" | "event" | "research";
  description: string;
}

export interface Research {
  title: string;
  status: "proposal" | "in-progress" | "completed";
  organization: string;
  faculty: string;
  concentration: string;
  startedAt: string;
  description: string;
  interests: string[];
  datasetTarget: string;
  note: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo: string;
  lastUpdated: string;
}
