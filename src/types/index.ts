export interface Experience {
  date: string;
  company: string;
  title: string;
  description?: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  mission: string;
  category: string;
  image: string;
  technologies: string[];
  github?: string;
  demoUrl?: string;
  impact?: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}