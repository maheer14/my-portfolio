import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuLaptop } from "react-icons/lu";
import { LuGamepad2 } from "react-icons/lu";
import rmtdevImg  from "@/public/Parryform.png"; 
import corpcommentImg from "@/public/Schedulind.png";
import wordanalyticsImg from "@/public/Mavstream.png";

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
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Tech Lead",
    location: "Arlington, TX",
    description:
      "I worked at the central library as IT support. Hosted coding workshops on C++ and Python.",
    icon: React.createElement(LuLaptop),
    date: "2023",
  },
  {
    title: "Biomedical Research Assistant",
    location: "Fort Worth, TX",
    description:
      "Contributed to a rehab-focused project, assisting in data analysis, UI/UX and database management.",
    icon: React.createElement(LuGamepad2),
    date: "2024",
  },
  {
    title: "Research Assistant",
    location: "Arlington, TX",
    description:
      "I'm working as a full-stack developer on a video analytics research project, optimizing a Java-based backend with a React frontend.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "MavVStream",
    description:
      "The goal of this project is to easily extract information from videos so that users can analyze and interact with data.", 
    tags: ["React", "Java", "Flask", "Eclipse IDE", "XML"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "ParryForm",
    description:
      "Worked in an Agile 3-person team in a month as AI writer and animation dev on a 2D-game in Unity, compatible with Android.",
      //Made in an Agile 3-person team in a month, it has features like smart enemy behavior, selectable graphics, easy modding.",
    tags: ["Unity", "Python", "Git", "Android Studio"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Schedulink",
    description:
      "A lottery-based process scheduler. It assigns and inherits process attributes such as tickets and color identifiers, integrating ticket-based CPU allocation.",
    tags: ["C", "Linux Kernel", "PowerShell", "Bash"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Git",
  "Tailwind",
  "Matlab",
  "MongoDB",
  "Selenium",
  "VBA",
  "Power BI",
  "Tableau",
  "Express",
  "Flask",
  "NoSQL",
  "Django",
  "Framer Motion",
] as const;