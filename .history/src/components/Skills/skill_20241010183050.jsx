// src/components/Skill/Skill.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './Skill.css';
import TechnologySection from './TechnologySection';
import { selectSkills } from '../../redux/slice/skillSlice.js';

const Skill = () => {
    const skills = useSelector(selectSkills);

    return (
        <div className="p-4 md:p-10 bg-white">
            {/* Technologies Section */}
            <div className="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
                <div className="md:mr-20 md:w-1/3">
                    <h1 className="font-bold italic mb-10">Technology Skills</h1>

                    <div className="relative mt-5 text-left">
                        {/* Backend Technologies */}
                        <TechnologySection title="BACKEND" technologies={skills.backendTechnologies} />
                        {/* Software Technologies */}
                        <TechnologySection title="SOFTWARE" technologies={skills.softwareTechnologies} />
                        {/* Frontend Technologies */}
                        <TechnologySection title="FRONTEND" technologies={skills.frontendTechnologies} />
                        {/* Programming Technologies */}
                        <TechnologySection title="DESARROLLO MÓVIL" technologies={skills.programmingTechnologies} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Skill;
