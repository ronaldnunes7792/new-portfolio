import cashremitImg from "@/public/Screenshot_4.png";
import tjdistributorsImg from "@/public/Screenshot_5.png";
import próximoImg from "@/public/Screenshot_7.png";
import MentonImg from "@/public/Screenshot_41.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaReact, FaRaspberryPi } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiVuejsLine,

  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
} from "react-icons/tb";

import React from "react";
import { Langar } from "next/font/google";

const experienceInYears = new Date().getFullYear() - 2019;

export const profile = {
  avatar: "https://avatars.githubusercontent.com/u/34062262?v=4",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Ronald Nunes",
  title: "FullStack Developer",
  experience: `${experienceInYears} years`,
  likes: "building web and mobile apps",
  resumeLink: "../public/ronald_resume.pdf",
  linkedInLink: "https://www.linkedin.com/",
  githubLink: "https://github.com/ronaldnunes7792",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Full Stack Developer",
    location: "Magic Software Brasil",
    description:
      "Contributed to full-cycle web app development using React, Node.js, TypeScript, and GraphQL. Collaborated with clients, optimized performance, and delivered scalable apps that exceeded expectations and drove innovation in a collaborative environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Full stack developer",
    location: "Summatech Consultoria em Software Ltd",
    description:
      "Engineered and deployed dynamic web applications leveraging React, Node.js, TypeScript, and GraphQL, while integrating Tube technology to enhance data streaming efficiency and user experience across platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },

  {
    title: "Front end developer",
    location: "Y Brasil Smartsite",
    description:
      "Led development of key features using React, Redux, and Node.js, boosting performance and user satisfaction. Implemented serverless architecture with AWS, optimized UI with Material UI and Bootstrap, and built scalable microservices with Angular, Docker, and RabbitMQ. Developed dynamic frontends with TailwindCSS, a full-stack CRM with MEAN and Django, and Web3-based decentralized apps to drive innovation.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },

  {
    title: "Bachelor of Science in Information Technology",
    location: "Virtual University of the State of Sao Paulo",
    description:
      "As a co-founder and CTO of Opash Software, I've been working on various projects and contribute to the success of the company.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Maipê and Gabriel Elias collaboration",
    description:
      "Maipê collaborates with Gabriel Elias on new single `Me Ter`",
    tags: ["React", "NodeJS", "Next.js", "Tailwind Css"],
    imageUrl: cashremitImg,
    // url: "http://cashremit.com.au",
  },
  {
    title: "E-commerce Platform",
    description:
      "Feature-rich online shopping platform with integrated payment solutions", tags: ["React", "NodeJS", "MongoDB", "React Native"],
    imageUrl: tjdistributorsImg,
    // url: "",
  }, {
    title: "Seu próximo imóvel em São Paulo",
    description:
      "A real estate website for buying and renting properties in São Paulo with specialized services for different regions and property types.",
    tags: ["Next", "TypeScript", "Recharts", "TailwindCSS"],
    imageUrl: próximoImg,
    // url: "",
  }, {
    title: "Menton Travel Website Optimization",
    description:
      "Optimized a Brazilian travel website's performance, SEO, and mobile usability.", tags: ["Vue.js", "Tailwind Css", "JavaScript", "Netlify"],
    imageUrl: MentonImg,
    // url: "",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "Vue", icon: RiVuejsLine },
  { name: "NodeJS", icon: RiNodejsLine },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "Git", icon: RiGitBranchLine },
  { name: "Tailwind", icon: RiTailwindCssLine },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Redux", icon: TbBrandRedux },
  { name: "Gatsby", icon: RiGatsbyLine },
  { name: "GraphQL", icon: TbBrandGraphql },
  { name: "Express", icon: TbBrandNodejs },
  { name: "Socket IO", icon: TbBrandSocketIo },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "Python", icon: TbBrandPython },
  { name: "Flask", icon: TbBrandPython },
  { name: "FastAPI", icon: TbBrandPython },
  { name: "AWS", icon: FaAws },
  { name: "Raspberry Pi", icon: FaRaspberryPi },
  { name: "...and more", icon: React.Fragment },
] as const;
