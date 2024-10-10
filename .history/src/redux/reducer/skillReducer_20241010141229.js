// src/redux/reducers/skillsReducer.js
const initialState = {
  backendTechnologies: [
    [
      { src: "path/to/node.svg", alt: "Node.js" },
      { src: "path/to/mysql.svg", alt: "MySQL" },
      { src: "path/to/express.svg", alt: "Express" },
      { src: "path/to/mongodb.svg", alt: "MongoDB" },
      { src: "path/to/docker.svg", alt: "Docker" },
      { src: "path/to/socketio.svg", alt: "Socket.io" },
    ],
  ],
  softwareTechnologies: [
    [
      { src: "path/to/npm.svg", alt: "npm" },
      { src: "path/to/github.svg", alt: "GitHub" },
    ],
  ],
  frontendTechnologies: [
    { src: "path/to/react.svg", alt: "React" },
    { src: "path/to/html.svg", alt: "HTML" },
    { src: "path/to/css.svg", alt: "CSS" },
    { src: "path/to/tailwind.svg", alt: "Tailwind CSS" },
    { src: "path/to/bootstrap.svg", alt: "Bootstrap" },
    { src: "path/to/jquery.svg", alt: "jQuery" },
    { src: "path/to/sass.svg", alt: "Sass" },
  ],
  programmingTechnologies: [
    { src: "path/to/java.svg", alt: "Java" },
    { src: "path/to/javascript.svg", alt: "JavaScript" },
    { src: "path/to/python.svg", alt: "Python" },
  ],
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your action cases if needed
    default:
      return state;
  }
};

export default skillsReducer;
