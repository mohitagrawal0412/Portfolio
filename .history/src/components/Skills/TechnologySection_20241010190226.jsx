// src/components/Skill/TechnologySection.jsx
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import './Skill.css';

const TechnologySection = ({ title, technologies }) => {
    return (
        <div className="flex items-center relative pb-5 pt-5 justify-start">
            {/* Gradient Line */}
            <div className="gradient-line"></div>

            <FaCircle className="circle-icon" />
            <div className="absolute seccion font-bold italic text-white">
                {title}
            </div>

            <div className="ml-6 pt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <div key={index} className="tech-item flex flex-col items-center">
                            <IconComponent className="w-12 h-12 text-white mb-2 mt-8" />
                            <span className="text-sm text-black">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechnologySection;
