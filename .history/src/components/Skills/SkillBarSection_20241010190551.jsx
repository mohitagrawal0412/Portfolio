import React from 'react';
import SkillBar from './SkillBar'; // Corrected import

const SkillBarSection = ({ skills }) => {
    return (
        <div>
            {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                    <div className="flex items-center justify-between">
                        {/* Render the technology name */}
                        <span className="text-white font-medium">{skill.name}</span>
                        {/* Display the percentage */}
                        <span className="text-white">{skill.percentage}%</span>
                    </div>
                    {/* Render the skill bar */}
                    <SkillBar
                        percentage={skill.percentage}
                        gradient="linear-gradient(to right, white #8a3ffc, #ff007f)" // Customize this gradient as needed
                    />
                </div>
            ))}
        </div>
    );
};

export default SkillBarSection;
