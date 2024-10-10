// src/components/Education/Education.jsx
import React from 'react';
import educationData from '../../data/educationData'; // Adjust the path as necessary
import { educationCOLORS } from '../../constant'; // Adjust the path as necessary

const Education = () => {
    return (
        <section>
            <div className="bg-black text-white py-8">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className={`ml-2 ${educationCOLORS.text.primary} uppercase tracking-loose`}>Education</p>
                        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">My Educational Journey</p>
                        <p className="text-sm md:text-base text-gray-50 mb-4">
                            My education has been a transformative journey, guiding me from the basics of knowledge to the complexities of my field. It reflects my dedication to learning and my commitment to personal and professional growth. With each milestone, I have acquired skills and insights that have shaped my career and fueled my passion for continuous improvement.
                        </p>

                        <a
                            href="#"
                            className={`bg-transparent mr-auto hover:bg-${educationCOLORS.text.secondary} text-${educationCOLORS.text.secondary} hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-${educationCOLORS.text.secondary} hover:border-transparent`}
                        >
                            Explore Now
                        </a>
                    </div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ right: '50%', border: `2px solid ${educationCOLORS.borders.primary}`, borderRadius: '1%' }}
                                ></div>
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ left: '50%', border: `2px solid ${educationCOLORS.borders.primary}`, borderRadius: '1%' }}
                                ></div>

                                {educationData.map((edu, index) => (
                                    <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'flex-row-reverse right-timeline'}`}>
                                        <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                            <p className={`mb-3 text-base ${educationCOLORS.text.secondary}`}>{edu.year}</p>
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">{edu.title}</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            <span className="font-semibold">{edu.institution}</span><br />
                                               
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <img
                                className="mx-auto -mt-36 md:-mt-36"
                                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                                alt="Process Illustration"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
