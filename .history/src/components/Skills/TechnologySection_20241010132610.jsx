import React from 'react';
import { FaCircle } from 'react-icons/fa';
import './Skill.css';

const TechnologySection = ({ title, technologies }) => {
    return (
        <div className="flex items-center relative pb-5 pt-5 justify-start">
            <div className="border-r-2 border-black absolute h-full top-2 z-10">
                <FaCircle className="-top-1 -ml-2 absolute" />
                <div className="absolute seccion -ml-8 font-bold italic text-gray-400">
                    {title}
                </div>
            </div>

            <div className="ml-6 pt-5">
                {technologies.map((techRow, rowIndex) => (
                    <div className="flex mb-4 space-x-16" key={rowIndex}>
                        {techRow.map((tech, techIndex) => (
                            <div key={techIndex}>
                                <img
                                    className="w-24"
                                    src={tech.src}
                                    alt={tech.alt}
                                    style={tech.style || {}}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologySection;
