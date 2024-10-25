import React from "react";
import { projectData } from "./Project"; // Importing project data
import macbook from "../../../public/"; // Path to MacBook image
import "./project.css"

const Projects = () => {
    return (
        <div className="projects-container">
            {projectData.map((project, index) => (
                <div key={index} className="project-card">
                    <div className="macbook-frame">
                        <img
                            src={macbook}
                            alt="MacBook frame"
                            className="macbook-image"
                        />
                        <img
                            src={project.image}
                            alt={project.name}
                            className="project-screenshot"
                        />
                    </div>
                    <div className="project-details">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;