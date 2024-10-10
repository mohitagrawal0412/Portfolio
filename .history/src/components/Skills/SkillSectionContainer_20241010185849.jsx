import React from 'react';
import { useSelector } from 'react-redux';
import SkillBarSection from './SkillBarSection'; // This is still the same

const SkillSectionContainer = () => {
    const skills = useSelector((state) => state.skills);

    return (
        <div>
            {/* Technology Section 1 */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Backend Technologies</h2>
                {/* Display skill bar section */}
                <SkillBarSection skills={skills.backendTechnologies} />
            </div>

            {/* Technology Section 2 */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Software Technologies</h2>
                {/* Display skill bar section */}
                <SkillBarSection skills={skills.softwareTechnologies} />
            </div>
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Frontend Technologies</h2>
                {/* Display skill bar section */}
                <SkillBarSection skills={skills.frontendTechnologies} />
            </div>

            {/* Technology Section 3 */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Programming Languages</h2>
                {/* Display skill bar section */}
                <SkillBarSection skills={skills.programmingTechnologies} />
            </div>

            {/* Technology Section 4 */}
           
        </div>
    );
};

export default SkillSectionContainer;
