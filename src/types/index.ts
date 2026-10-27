export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  longDescription: string;
  problemSolved: string;
  technologies: string[];
  keyFeatures: string[];
  contributions: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  futureImprovements: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  featured: boolean;
  accentColor: string;
  iconName: string;
  image: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  passingYear: string;
  description: string;
  highlights: string[];
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
