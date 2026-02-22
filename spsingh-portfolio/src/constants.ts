
import { Experience, Education, Project, SkillCategory, ResumeData } from './types';
import pImage from './media/aboutimg2.webp';
import SpPdf from './media/sps.pdf'
import SimillimumPro from './media/SimillimumPro.png'
import Iterion from './media/Iterion.png'
import lumenore from './media/lumenore.webp'

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/shubhampratapsingh/",
  github: "https://github.com/Official-Spsingh",
  youtube: "https://www.youtube.com/channel/UCmouOiVcog-OmL999zHUhvg",
  instagram: "https://www.instagram.com/official_spsingh/"
};

export const CONTACT_INFO = {
  phone: "+91-8109452048",
  email: "shubhampratpsingh@gmail.com",
  location: "Bhopal, India"
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
    title: "Lumenore",
    description: "Go from data to decisions, faster with enterprise-grade AI-driven analytics platform built to make complex analysis tasks easier.",
    image: lumenore,
    link: "https://lumenore.com",
    tags: ["ReactJS", "Typescript", "Micro-frontend"]
  },
  {
    title: "Iterion",
    description: "Iterion is an enterprise-grade Agile Delivery & Team Operations Platform designed to bridge the gap between high-level strategic initiatives and granular technical execution.",
    image: Iterion,
    link: "https://github.com/Official-Spsingh/Iterion",
    tags: ["ReactJS", "Typescript", "Tailwind"]
  },
  {
    title: "SimillimumPro",
    description: "Professional Homeopathic Decision Support System (HDSS). It is designed specifically for clinical practitioners to bridge the gap between patient case-taking and classical repertory analysis. By utilizing the Gemini 3 Pro model, it acts as an intelligent bridge between the raw patient narrative and the structured data within Kent's Repertory (1900) and Boericke's Materia Medica (1927).",
    image: SimillimumPro,
    link: "https://github.com/Official-Spsingh/SimillimumPro",
    tags: ["ReactJS", "Typescript", "GenAI", "Vite"]
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
    skills: ["MongoDB", "MySQL", "PostgreSQL"]
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

export const RESUME_DATA: ResumeData = {
  name: "Shubham Pratap Singh",
  contact: {
    phone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    links: {
      linkedin: SOCIAL_LINKS.linkedin,
      portfolio: "https://spsingh.in/",
      github: SOCIAL_LINKS.github
    }
  },
  summary: "Full Stack Engineer and Technical Lead with 6+ years of experience specializing in the MERN stack. Skilled in React.js, Node.js, JavaScript, and modern web technologies. Proven expertise in designing scalable architectures, leading teams, and building high-performance micro-frontend applications.",
  experience: [
    {
      company: "NETLINK SOFTWARE PVT LTD",
      role: "Technical Lead",
      period: "Aug 2025 - Present",
      location: "Bhopal, M.P",
      points: [
        "Lead the design and development of scalable systems, driving architecture decisions and performance optimization across enterprise analytics modules.",
        "Manage and mentor developers while ensuring the delivery of reliable, maintainable, and high-performance solutions aligned with business goals."
      ]
    },
    {
      company: "NETLINK SOFTWARE PVT LTD",
      role: "Senior Software Engineer",
      period: "Apr 2023 - July 2025",
      location: "Bhopal, M.P",
      points: [
        "Transitioned a monolithic project to a micro-frontend architecture, enhancing modularity and maintainability.",
        "Migrated common modules and libraries to micro-frontends, resulting in a 40% improvement in performance and 25% increase in user engagement."
      ]
    },
    {
      company: "NETLINK SOFTWARE PVT LTD",
      role: "Software Engineer",
      period: "Aug 2019 - Mar 2023",
      location: "Bhopal, M.P",
      points: [
        "Migrated from Polymer to React.js, improving UX and reducing page load times by 35%.",
        "Developed key modules (self-service, sharing, alerts, examiners) and maintained REST APIs/micro-services for seamless integration."
      ]
    },
    {
      company: "NETLINK SOFTWARE PVT LTD",
      role: "Intern",
      period: "Jan 2019 - Jun 2019",
      location: "Bhopal, M.P",
      points: [
        "Developed front-end modules using HTML, CSS, JavaScript, and React.js.",
        "Worked on cloud hosting services like Firebase and developed REST APIs with Node.js."
      ]
    }
  ],
  projects: [
    {
      title: "LUMENORE | Dashboards and Analytics",
      category: "Lead Frontend Development",
      points: [
        "Managed visualization module (self-service) using Highcharts, AG Grid, Leaflet map and integrated front-end with JS-based back-end.",
        "Developed micro-frontends and REST APIs and migrated product from Polymer to React.",
        "Led a team of 4+ front-end developers following Agile practices.",
        "Built utility features such as sharing, alerts, export, localization."
      ]
    },
    {
      title: "LUMENORE | App Creator",
      category: "Product Development",
      points: [
        "Built frontend for no-code App Creator with drag-and-drop UI and integrated visual workflow builders for custom logic.",
        "Implemented and maintained micro-frontend architecture ensuring modularity, scalability, and seamless module integration."
      ]
    }
  ],
  skills: {
    programming: {
      primary: ["MERN Stack"],
      highVolume: ["React.js", "JavaScript", "HTML", "CSS/SASS"],
      standardVolume: ["Node.js", "Express.js", "TypeScript", "REST APIs", "MongoDB", "MySQL"],
      familiar: ["Micro-frontend", "Micro-services", "System Design", "Next.js", "Jest/RTL", "Highcharts", "AG Grid", "Leaflet", "Docker", "Kubernetes", "Data Structures & Algorithms"]
    },
    tools: ["Git", "Jenkins", "Jira", "Postman", "VS Code", "AWS", "Azure", "Agile", "CI/CD"]
  },
  education: [
    {
      school: "RGPV (RITS)",
      degree: "Bachelor Of Engineering | CSE",
      period: "2016-2020",
      score: "CGPA: 8.58"
    }
  ],
  awards: [
    { title: "Pinnacle Performer Award", date: "June 2022" },
    { title: "Team Excellence Award", date: "Feb 2022" },
    { title: "Certificate Of Appreciation", date: "Oct 2019" }
  ]
};