// src/components/Skill/SkillBarSection.jsx
import React from 'react';
import SkillBar from './SkillBar'; // Corrected import
import { skillBarCOLORS } from '../../constants'; // Import your constants

const SkillBarSection = ({ skills }) => {
    return (
        <div>
            {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                    <div className="flex items-center justify-between">
                        {/* Render the technology name with primary color from skillBarCOLORS */}
                        <span style={{ color: skillBarCOLORS.text.primary }} className="font-medium">
                            {skill.name}
                        </span>
                        {/* Display the percentage */}
                        <span className="text-white">{skill.percentage}%</span>
                    </div>
                    {/* Render the skill bar */}
                    <SkillBar
                        percentage={skill.percentage}
                        gradient={skillBarCOLORS.gradient} // Use the skill bar gradient from constants
                    />
                </div>
            ))}
        </div>
    );
};

export default SkillBarSection;
