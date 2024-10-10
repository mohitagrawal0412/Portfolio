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
      { src: "path/to/node.svg", alt: "Node.js", percentage: 80 },
      { src: "path/to/mysql.svg", alt: "MySQL", percentage: 70 },
      { src: "path/to/express.svg", alt: "Express", percentage: 75 },
      { src: "path/to/mongodb.svg", alt: "MongoDB", percentage: 65 },
      { src: "path/to/docker.svg", alt: "Docker", percentage: 60 },
      { src: "path/to/socketio.svg", alt: "Socket.io", percentage: 50 },
    ],
    softwareTechnologies: [
      { src: "path/to/npm.svg", alt: "npm", percentage: 80 },
      { src: "path/to/github.svg", alt: "GitHub", percentage: 90 },
    ],
    frontendTechnologies: [
      { src: "path/to/react.svg", alt: "React", percentage: 85 },
      { src: "path/to/html.svg", alt: "HTML", percentage: 90 },
      { src: "path/to/css.svg", alt: "CSS", percentage: 80 },
      { src: "path/to/tailwind.svg", alt: "Tailwind CSS", percentage: 75 },
      { src: "path/to/bootstrap.svg", alt: "Bootstrap", percentage: 65 },
      { src: "path/to/jquery.svg", alt: "jQuery", percentage: 70 },
      { src: "path/to/sass.svg", alt: "Sass", percentage: 60 },
    ],
    programmingTechnologies: [
      { src: "path/to/java.svg", alt: "Java", percentage: 85 },
      { src: "path/to/javascript.svg", alt: "JavaScript", percentage: 90 },
      { src: "path/to/python.svg", alt: "Python", percentage: 80 },
    ],
  },
});

export const selectSkills = (state) => state.skills;
export default skillsSlice.reducer;
