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
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Programming Languages: Java, Python, JavaScript',
      'Web Technologies: React, Redux, Node.js',
      'Frameworks: Spring Boot, Django, Express',
      'Database/Cloud: MySQL, MongoDB, Heroku',
      'Tools: Git, Gradle, Tomcat,Docker'
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
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack applications with Java and Python',
        'Creating RESTful APIs with Spring Boot and Express',
        'Developing responsive web applications with React',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'Java', icon: 'logos:java' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'React', icon: 'logos:react' },
        { name: 'Node.js', icon: 'logos:nodejs' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
        { name: 'MySQL', icon: 'logos:mysql' },
      ],
    },
    {
      id: getId(),
      title: 'Backend Development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Developing scalable backend services with Java and Python',
        'Building and managing databases with MySQL and MongoDB',
        'Implementing containerization with Docker and deployment automation',
      ],
      softwareSkills: [
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Gradle', icon: 'logos:gradle' },
        { name: 'Tomcat', icon: 'logos:tomcat' },
        { name: 'Heroku', icon: 'logos:heroku-icon' },
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
      companyUrl: 'https://app.ezaspie.ai/',
      role: 'Software Engineering Intern',
      started: 'June 2025',
      upto: 'Aug 2025',
      tasks: [
        'Developing AI communication core: LLM integration (OpenAI/Replicate) + Twilio Voice/SMS systems',
        'Full-stack implementation: React frontend (Figma → production components) + Node.js backend (BI dashboard logic)',
        'Engineering ownership: End-to-end debugging/testing (cross-device compatibility) + async collaboration',
        'Key stack: OpenAI API · React · Node.js · Twilio · Figma · Jest/Puppeteer',
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
    "I'm currently seeking full-stack development opportunities.",
    'Feel free to reach out via email or phone (425-435-0107) to discuss potential positions or collaborations.',
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
