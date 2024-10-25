import React, { useEffect, useState } from 'react';

const SkillBar = ({ percentage, gradient }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Trigger animation after component mounts
        setTimeout(() => {
            setWidth(percentage);
        }, 100); // Small delay to start the animation smoothly
    }, [percentage]);

    const barStyle = {
        width: `${width}%`,
        backgroundImage: gradient,
        transition: 'width 1.5s ease', // Smooth transition for animation
    };

    return (
        <div className="skill-bar-container w-full bg-gray-200 rounded-full h-4 mt-2">
            <div className="skill-bar h-full rounded-full" style={barStyle}></div>
        </div>
    );
};

export default SkillBar;
