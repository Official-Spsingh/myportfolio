
export interface Experience {
  role: string;
  company: string;
  department: string;
  period: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  score: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
