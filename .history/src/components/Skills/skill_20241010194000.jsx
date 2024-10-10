// src/components/Skill/Skill.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './Skill.css';
import TechnologySection from './TechnologySection';
import SkillSectionContainer from './SkillSectionContainer';
import { selectSkills } from '../../redux/slice/skillSlice.js';
import { TechnologyCOLORS } from '../'; // Import your constants

const Skill = () => {
    const skills = useSelector(selectSkills);

    return (
        <div className="p-4 md:p-10 bg-black">
            {/* Technologies Section */}
            <div className="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
                <div className="md:mr-20 md:w-1/3">
                    <h1 className={`font-bold italic mb-10 text-${TechnologyCOLORS.text.primary}`}>Technology Skills</h1>

                    <div className="relative mt-10 text-left">
                        {/* Frontend Technologies */}
                        <TechnologySection title="FRONTEND" technologies={skills.frontendTechnologies} />
                        {/* Backend Technologies */}
                        <TechnologySection title="BACKEND" technologies={skills.backendTechnologies} />
                        {/* Programming Technologies */}
                        <TechnologySection title="DEVELOPMENT" technologies={skills.programmingTechnologies} />
                        {/* Software Technologies */}
                        <TechnologySection title="SOFTWARE" technologies={skills.softwareTechnologies} />
                    </div>
                </div>

                {/* Skills Progress Bar Section */}
                <div className="md:w-2/3">
                    <SkillSectionContainer /> {/* Use SkillSectionContainer */}
                </div>
            </div>
        </div>
    );
};

export default Skill;
