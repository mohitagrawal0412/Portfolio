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

const SkillBarSection = ({ skills }) => {
  return (
    <div className="md:w-2/3">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center justify-between">
            {/* Render the technology name */}
            <span className="text-gray-700 font-medium">{skill.name}</span>
            {/* Display the percentage */}
            <span className="text-gray-500">{skill.percentage}%</span>
          </div>
          {/* Render the skill bar */}
          <SkillBar
            percentage={skill.percentage}
            gradient="linear-gradient(to right, #8a3ffc, #ff007f)" // Customize this gradient as needed
          />
        </div>
      ))}
    </div>
  );
};

export default SkillBarSection;
