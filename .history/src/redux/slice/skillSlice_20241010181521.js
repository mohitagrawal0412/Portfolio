// src/redux/slice/skillSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Import icons from react-icons
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaPython,
  FaJava,
  FaJs,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import {
  SiMysql,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiNpm,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiPython,
} from "react-icons/si";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    backendTechnologies: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: FaDocker, name: "Docker" },
      { icon: SiSocketdotio, name: "Socket.io" },
    ],
    softwareTechnologies: [
      { icon: SiNpm, name: "npm" },
      { icon: FaGithub, name: "GitHub" },
    ],
    frontendTechnologies: [
      { icon: FaReact, name: "React" },
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3Alt, name: "CSS3" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiBootstrap, name: "Bootstrap" },
      { icon: SiJquery, name: "jQuery" },
      { icon: FaSass, name: "Sass" },
    ],
    programmingTechnologies: [
      { icon: FaJava, name: "Java" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaPython, name: "Python" },
    ],
  },
});

export const selectSkills = (state) => state.skills;
export default skillsSlice.reducer;
