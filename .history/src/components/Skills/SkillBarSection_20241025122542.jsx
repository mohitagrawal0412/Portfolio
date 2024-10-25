import React from 'react';
import SkillBar from './SkillBar';
import { skillBarCOLORS } from '../../constant';
import { useInView } from 'react-intersection-observer';

const SkillBarSection = ({ skills }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Trigger only once when in view
        threshold: 0.2,     // Trigger when 20% of the section is in view
    });

    return (
        <div ref={ref}>
            {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                    <div className="flex items-center justify-between">
                        <span style={{ color: skillBarCOLORS.text.primary }} className="font-medium">
                            {skill.name}
                        </span>
                        <span className="text-white">{skill.percentage}%</span>
                    </div>
                    <SkillBar
                        percentage={inView ? skill.percentage : 0}  // Animate width to full only when in view
                        gradient={skillBarCOLORS.gradient}
                    />
                </div>
            ))}
        </div>
    );
};

export default SkillBarSection;
