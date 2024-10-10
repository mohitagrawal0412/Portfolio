// src/components/Skill/TechnologySection.jsx
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import './Skill.css';

const TechnologySection = ({ title, technologies }) => {
    return (
        <div className="flex items-center relative pb-5 pt-5 justify-start">
            <div className="border-r-2 border-black absolute h-full top-2 z-10">
                <FaCircle className="circle-icon" />
                <div className="absolute seccion -ml-8 font-bold italic text-gray-400">
                    {title}
                </div>
            </div>

            <div className="ml-6 pt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <div key={index} className="tech-item flex flex-col items-center">
                            <IconComponent className="w-12 h-12 text-blue-500 mb-2 mt-7" />
                            <span className="text-sm text-bl ">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechnologySection;
