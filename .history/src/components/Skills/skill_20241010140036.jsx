import React from 'react';
import './Skill.css';
import TechnologySection from './TechnologySection';
import { FaJava, FaPython, FaCss3, FaHtml5, FaBootstrap, FaGithub, FaSass } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoNpm } from "react-icons/io";
import { SiTailwindcss, SiJquery } from "react-icons/si";





// Import other images as needed

const backendTechnologies = [
    [
        { src: <IoLogoNodejs />, alt: 'Backend Logo 1' },
        { src: <SiMysql />, alt: 'Backend Logo 2' },
        { src: <SiExpress />, alt: 'Backend Logo 1' },
        { src: <SiMongodb />, alt: 'Backend Logo 2' },
        { src: <FaDocker />, alt: 'Backend Logo 1' },
        { src: <SiSocketdotio />, alt: 'Backend Logo 2' },
    ],
    // Add more technology rows as needed
];

const softwareTechnologies = [

    { src: <IoLogoNpm />, alt: 'npm' },
    { src: <FaGithub />, alt: 'GitHub' },            // Git icon
];

const frontendTechnologies = [
    { src: <FaReact />, alt: 'React' },                     // React icon
    { src: <FaHtml5 />, alt: 'HTML' },                  // HTML5 icon
    { src: <FaCss3 />, alt: 'CSS' },                 // CSS3 icon
    { src: <SiTailwindcss />, alt: 'Tailwind CSS' },     // Tailwind CSS icon
    { src: <FaBootstrap />, alt: 'Bootstrap' },          // Bootstrap icon
    { src: <SiJquery />, alt: 'jQuery' },       // jQuery icon
    { src: <FaSass />, alt: 'Sass' },
];


const programmingTechnologies = [

    { src: <FaJava />, alt: 'Java' },                  // Java icon
    { src: <IoLogoJavascript />, alt: 'JavaScript' },  // JavaScript icon
    { src: <FaPython />, alt: 'Python' },         // Python icon
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
