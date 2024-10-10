import React from 'react';
import './Skill.css';
import TechnologySection from './TechnologySection';

import { FaReact } from "react-icons/fa6";
// Import other images as needed

const backendTechnologies = [
    [
        { src: <IoLogoNodejs />, alt: 'Backend Logo 1' },
        { src: <SiMysql />, alt: 'Backend Logo 2' },
        { src: <SiExpress />, alt: 'Backend Logo 1' },
        { src: <SiMongodb />, alt: 'Backend Logo 2' },
        { src:<FaDocker />, alt: 'Backend Logo 1' },
        { src: <SiSocketdotio />, alt: 'Backend Logo 2' },
    ],
    // Add more technology rows as needed
];

const softwareTechnologies = [
    [
        { src: <FaReact />, alt: 'Software Logo 1' },
        { src: <FaReact />, alt: 'Software Logo 2' },
    ],
    // Add more technology rows as needed
];

const frontendTechnologies = [
    [
        { src: <FaReact />, alt: 'Frontend Logo 1' },
        { src: <FaReact />, alt: 'Frontend Logo 2' },
    ],
    // Add more technology rows as needed
];

const mobileTechnologies = [
    [
        { src: <FaReact />, alt: 'Mobile Logo 1' },
        { src: <FaReact />, alt: 'Mobile Logo 2' },
    ],
    // Add more technology rows as needed
];

const Skill = () => {
    return (
        <div className="p-4 md:p-10 bg-white">
            {/* Technologies Section */}
            <div className="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
                <div className="md:mr-20 md:w-1/3">
                    <h1 className="font-bold italic mb-10">Technology Skills</h1>

                    <div className="relative mt-5 text-left">
                        {/* Backend Technologies */}
                        <TechnologySection title="BACKEND" technologies={backendTechnologies} />

                        {/* Software Technologies */}
                        <TechnologySection title="SOFTWARE" technologies={softwareTechnologies} />

                        {/* Frontend Technologies */}
                        <TechnologySection title="FRONTEND" technologies={frontendTechnologies} />

                        {/* Desarrollo Móvil (Mobile Development) Technologies */}
                        <TechnologySection title="DESAROLLO MÓVIL" technologies={mobileTechnologies} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
