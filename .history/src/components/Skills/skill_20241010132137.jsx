// Skill.jsx
import React from 'react';
import './Skill.css';
import TechnologySection from './TechnologySection';
import Logo1 from '../assets/HvlloWd.png';
import Logo2 from '../assets/xUbzfdw.png';
// Import other images as needed

const Skill = () => {
    // ... same as before

    return (
        <div className="p-4 md:p-10 bg-white">
            {/* Technologies Section */}
            <div className="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
                <div className="md:mr-20 md:w-1/3">
                    <h1 className="font-bold italic mb-10">TECNOLOGIAS QUE MÁS USO</h1>

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
