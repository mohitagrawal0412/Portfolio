import React from 'react';

const SkillBar = ({ percentage, gradient }) => {
    const barStyle = {
        width: `${percentage}%`,
        backgroundImage: gradient,
    };

    return (
        <div className="skill-bar-container w-full bg-gray-200 rounded-full h-4 mt-2">
            <div className="skill-bar h-full rounded-full" style={barStyle}></div>
        </div>
    );
};

export default SkillBar;
