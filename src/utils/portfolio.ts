import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  github: 'https://github.com/Yuanyuan-Wu1',
  linkedin: 'https://www.linkedin.com/in/yuanyuan-yoyo-wu/',
  calendly: 'https://calendly.com/yuanyuanwu2024/30min',
};

export const author = {
  name: 'Yuanyuan Wu',
  email: 'yuanyuanwu2024@gmail.com',
  phone: '425-435-0107'
};

export const seoData = {
  title: 'Yuanyuan Wu | Full-Stack Developer',
  description:
    'Yuanyuan Wu is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    '',
  url: '',
  keywords: [
    'Yuanyuan',
    'Yuanyuan Wu',
    '@Yuanyuan Wu',
    'Yuanyuan Wu',
    'Portfolio',
    'Yuanyuan Portfolio ',
    'Yuanyuan Wu Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello  👋, I'm ",
  title: 'Yuanyuan Wu.',
  tagline: 'AI + Full-Stack Developer',
  description: 'AI-driven Full-Stack Development with familiarity in Java and Python, passionate about building scalable and robust applications.',
  specialText: "Master's Student @ Northeastern University",

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  description:
    "I am a results-driven software engineer specializing in the intersection of *full-stack development* and *artificial intelligence*. My passion lies in *architecting robust, scalable systems* from the ground up and embedding *intelligent, data-driven features* at their core.\n\nWhether it's designing a *CI/CD orchestration engine on Kubernetes*, implementing *real-time AI-powered communication platforms*, or *optimizing database performance* for high-traffic applications, I thrive on solving complex engineering challenges. My goal is to leverage this *dual expertise in software architecture and AI* to build *next-generation intelligent applications* that are not only powerful but also intuitive and user-centric.",
  list: {
    title: 'My technical toolkit includes:',
    items: [
      {
        category: 'Languages',
        skills: ['Java', 'Python', 'JavaScript/TypeScript'],
      },
      {
        category: 'Frontend',
        skills: [
          'React',
          'Next.js',
          'Redux',
          'TailwindCSS',
          'HTML/CSS',
          'Figma',
        ],
      },
      {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'RESTful APIs'],
      },
      {
        category: 'AI/ML',
        skills: ['OpenAI API', 'LLM Integration', 'Whisper AI', 'PyTorch'],
      },
      {
        category: 'Databases & Data Streaming',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'WebSockets'],
      },
      {
        category: 'DevOps & Cloud',
        skills: [
          'Docker',
          'Kubernetes',
          'CI/CD',
          'GitHub Actions',
          'AWS',
        ],
      },
    ],
  },
  img: '/yuanyuan-wu.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'AI-Powered Full-Stack Development',
      lottie: {
        light: '/lotties/Web Development.json',
        dark: '/lotties/Web Development.json',
      },
      points: [
        'Building end-to-end applications with integrated AI/LLM capabilities (e.g., OpenAI, Whisper).',
        'Developing responsive and dynamic UIs with React, Next.js, and Redux for complex applications.',
        'Architecting scalable backend services and RESTful APIs using Node.js/Express and Java/Spring Boot.',
        'Implementing real-time communication features using WebSockets and message brokers like Redis.',
      ],
      softwareSkills: [
        { name: 'React', icon: 'logos:react' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'Java', icon: 'logos:java' },
        { name: 'Spring', icon: 'logos:spring-icon' },
        { name: 'OpenAI', icon: 'logos:openai-icon' },
        { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      ],
    },
    {
      id: getId(),
      title: 'Cloud & DevOps Engineering',
      lottie: {
        light: '/lotties/cloudinfra.json',
        dark: '/lotties/cloudinfra.json',
      },
      points: [
        'Designing and implementing complete CI/CD pipelines from scratch using tools like GitHub Actions.',
        'Containerizing applications with Docker for consistent development and deployment environments.',
        'Deploying and managing services on Kubernetes, including configuration of Ingress, PV, and HPA.',
        'Building and scaling infrastructure on cloud platforms like AWS and Render.',
      ],
      softwareSkills: [
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Kubernetes', icon: 'logos:kubernetes' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'GitHub Actions', icon: 'logos:github-actions' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Nginx', icon: 'logos:nginx' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "My experience",
  experiences: [
    {
      company: 'EZASPIE',
      companyUrl: 'https://ezaspie.ai/',
      role: 'Software Engineering Intern',
      started: 'June 2025',
      upto: 'Aug 2025',
      tasks: [
        'Contributed to the core AI communication engine by implementing backend features in Node.js/Express.js, integrating OpenAI GPT and Twilio APIs to enable intelligent, automated voice and SMS support systems.',
        'Developed and implemented full-stack features for an AI-powered SaaS platform, translating Figma designs into responsive React/Next.js components and ensuring seamless integration with backend services.',
        'Improved API performance and reliability by diagnosing and resolving backend routing conflicts, and contributed to data model integrity by proposing and assisting with Mongoose schema optimizations.',
        'Actively participated in the end-to-end development lifecycle, from debugging and cross-browser testing to collaborating effectively in a fast-paced, async environment within a complex cloud stack (AWS, Docker).',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: "CI/CD Pipeline Visualization Tool",
      img: "/cicd.png",
      url: "https://pypi.org/project/t5_grp/", 
      repo: "https://github.com/CS6510-SEA-F24/t5-project.git",
      videoUrl: "",
      year: 2024,
      tags: [
        "Python",
        "Jinja2",
        "PyYAML",
        "Poetry",
        "GitHub Actions",
        "pytest",
        "Nox",
        "CI/CD"
      ],
    },
    {
      id: getId(),
      name: "My Travel Map",
      url: "",
      repo: "",
      img: "/project-map.jpg",
      year: 2023,
      tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Leaflet"],
    },
    {
      id: getId(),
      name: "Social Media Website",
      url: "https://aquamarine-croquembouche-7d27fa.netlify.app/tuiter/homescreen/",
      repo: "",
      img: "/tuiter.png",
      year: 2022,
      tags: ["React.js", "Node.js", "MongoDB", "Bootstrap", "Redux", "JWT"],
    },
    {
      id: getId(),
      name: "Dash Bot",
      url: "",
      repo: "",
      img: "/Dash-Bot.png",  // 作为视频封面图
      videoUrl: "https://www.youtube.com/embed/cVOmJRHzG6k",
      year: 2022,
      tags: ["Java",
        "Gradle",
        "MongoDB",
        "Docker",
        "MVC",
        "Discord API",
        "fly.io"],
    },
    {
      id: getId(),
      name: "Seattle Airbnb Web Application",
      url: "http://167.234.209.20:8080/voyage",
      repo: "https://github.com/Yuanyuan-Wu1/Seattle-Airbnb-Web-Application.git",
      img: "/voyage.png",
      year: 2021,
      tags: [
        "Java",
        "JSP",
        "MySQL",
        "Tomcat",
        "MVC",
        "HTML/CSS",
        "JavaScript"
      ],
    },
    {
      id: getId(),
      name: "AI Connect Four Game",
      url: "",
      repo: "",
      img: "/project-cntfour.jpg",
      year: 2021,
      tags: ["Python", "Processing", "AI", "Game Development"],
    }
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm actively seeking new opportunities in AI-powered full-stack development.",
    "Whether you have a role in mind, a project to discuss, or just want to talk tech, my inbox is always open. Let's build something great together.",
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'mdi:calendar-clock',  // Calendly 的图标
      url: socialLinks.calendly,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: '© 2024 Yuanyuan Wu. Built with Next.js & TailwindCSS',
  link: 'https://github.com/Yuanyuan-Wu1',
};
