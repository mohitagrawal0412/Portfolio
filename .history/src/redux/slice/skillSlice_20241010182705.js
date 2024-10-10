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
      { icon: FaNodeJs, name: "Node.js", percentage: 80 },
      { icon: SiMysql, name: "MySQL", percentage: 70 },
      { icon: SiExpress, name: "Express.js", percentage: 75 },
      { icon: SiMongodb, name: "MongoDB", percentage: 65 },
      { icon: FaDocker, name: "Docker", percentage: 60 },
      { icon: SiSocketdotio, name: "Socket.io", percentage: 50 },
    ],
    softwareTechnologies: [
      { icon: SiNpm, name: "npm", percentage: 80 },
      { icon: FaGithub, name: "GitHub", percentage: 90 },
    ],
    frontendTechnologies: [
      { icon: FaReact, name: "React", percentage: 85 },
      { icon: FaHtml5, name: "HTML5", percentage: 90 },
      { icon: FaCss3Alt, name: "CSS3", percentage: 80 },
      { icon: SiTailwindcss, name: "Tailwind CSS", percentage: 75 },
      { icon: SiBootstrap, name: "Bootstrap", percentage: 65 },
      { icon: SiJquery, name: "jQuery", percentage: 70 },
      { icon: FaSass, name: "Sass", percentage: 60 },
    ],
    programmingTechnologies: [
      { icon: FaJava, name: "Java", percentage: 85 },
      { icon: FaJs, name: "JavaScript", percentage: 90 },
      { icon: FaPython, name: "Python", percentage: 80 },
    ],
  },
});

export const selectSkills = (state) => state.skills;
export default skillsSlice.reducer;
