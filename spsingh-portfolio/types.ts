
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


export interface Experience1 {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Project1 {
  title: string;
  category: string;
  points: string[];
}

export interface SkillCategory1 {
  title: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  contact: {
    phone: string;
    email: string;
    links: {
      linkedin: string;
      portfolio: string;
      github: string;
    }
  };
  summary: string;
  experience: Experience1[];
  projects: Project1[];
  skills: {
    programming: {
      primary: string[];
      highVolume: string[];
      standardVolume: string[];
      familiar: string[];
    };
    tools: string[];
  };
  education: {
    school: string;
    degree: string;
    period: string;
    score: string;
  }[];
  awards: {
    title: string;
    date: string;
  }[];
}

export type MessageRole = 'user' | 'assistant';

export interface ChatMessage {
  role: MessageRole;
  content: string;
}
