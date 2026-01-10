
import { Experience, Education, Project, SkillCategory } from './types';
import pImage from './media/aboutimg1.jpeg';
import gImage from './media/githublogo.png'
import SpPdf from './media/sps.pdf'

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/shubhampratapsingh/",
  github: "https://github.com/Official-Spsingh",
  youtube: "https://www.youtube.com/channel/UCmouOiVcog-OmL999zHUhvg",
  instagram: "https://www.instagram.com/official_spsingh/"
};

export const PROFILE_IMAGE = pImage;

export const RESUME = SpPdf;

export const CAREER_HISTORY: Experience[] = [
  {
    role: "Technical Lead",
    company: "Lumenore | Netlink Software Pvt. Ltd.",
    department: "Full Stack Development",
    period: "Aug 2025 - Present"
  },
  {
    role: "Senior Software Engineer",
    company: "Lumenore | Netlink Software Pvt. Ltd.",
    department: "Full Stack Development",
    period: "June 2023 - July 2025"
  },
  {
    role: "Software Engineer",
    company: "Lumenore | Netlink Software Pvt. Ltd.",
    department: "Full Stack Development",
    period: "Apr 2021 - May 2023"
  },
  {
    role: "Associate Software Engineer",
    company: "Lumenore | Netlink Software Pvt. Ltd.",
    department: "Full Stack Development",
    period: "Aug 2019 - March 2021"
  },
  {
    role: "Internship",
    company: "Lumenore | Netlink Software Pvt. Ltd.",
    department: "Full Stack Development",
    period: "Jan 2019 - July 2019"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor Of Engineering",
    institution: "RGPV",
    location: "RITS Bhopal",
    score: "8.58 CGPA",
    period: "2016 - 2020"
  },
  {
    degree: "Intermediate",
    institution: "BSEB",
    location: "N.L.S College, Saran",
    score: "67%",
    period: "2014 - 2016"
  },
  {
    degree: "Matriculations",
    institution: "CBSE",
    location: "S.S Academy, Ami Saran",
    score: "9.2 CGPA",
    period: "2013 - 2014"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Amazon Clone",
    description: "A high-performance e-commerce engine with full cart functionality.",
    image: gImage,
    link: "https://github.com/Official-Spsingh/amazonclone",
    tags: ["ReactJS", "Redux", "Firebase"]
  },
  {
    title: "Instagram Clone",
    description: "Full-featured social media platform with real-time updates, media storage, and feed algorithms.",
    image: gImage,
    link: "https://github.com/Official-Spsingh/insta-clone-rn-sp",
    tags: ["ReactJS", "NodeJS", "MongoDB"]
  },
  {
    title: "NPM Component Library",
    description: "Enterprise-grade UI components optimized for accessibility and tree-shaking.",
    image: gImage,
    link: "https://github.com/Official-Spsingh/spcomponentlibrary",
    tags: ["React", "Javascript", "Storybook"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["ReactJS", "NextJS", "React Native", "Redux", "Typescript", "Javascript", "HTML", "CSS"]
  },
  {
    title: "Backend",
    skills: ["NodeJS", "ExpressJS", "Java"]
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Architecture",
    skills: ["System Design", "Micro frontend", "Scalable Systems"]
  },
  {
    title: "Cloud & Devops",
    skills: ["Azure", "Docker", "Kubernetes", "Firebase", "Git"]
  },
  {
    title: "Others",
    skills: ["Highchart", "AG Grid", "Leaflet", "Data structures", "Algorithms"]
  },
  {
    title: "Soft Skills",
    skills: ["Team work", "Adaptability", "Problem Solving", "Communication", "Leadership"]
  }
];
