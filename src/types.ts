export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: 'Technical' | 'Academic' | 'Learning';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  role?: string;
  contribution?: string[];
  features?: string[];
  techExposure: string[];
  topics?: string[];
  contextNote?: string;
  visualType: 'virtual-mirror' | 'transitops' | 'python-code' | 'excel-stats';
}

export interface Achievement {
  id: string;
  title: string;
  institution?: string;
  award: string;
  dateOrYear?: string;
  description: string;
  badgeType: 'gold' | 'cyan' | 'purple' | 'blue';
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: 'Working with' | 'Exploring' | 'Project exposure' | 'Core strength';
    description?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status?: string;
  highlights: string[];
}
