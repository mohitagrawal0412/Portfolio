import React from 'react';

const Education = () => {
    return (

        <section>
            <div className="bg-black text-white py-8">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="ml-2 text-yellow-300 uppercase tracking-loose">Education</p>
                        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">My Educational Journey</p>
                        <p className="text-sm md:text-base text-gray-50 mb-4">
                            My education has been a transformative journey, guiding me from the basics of knowledge to the complexities of my field. It reflects my dedication to learning and my commitment to personal and professional growth. With each milestone, I have acquired skills and insights that have shaped my career and fueled my passion for continuous improvement.
                        </p>

                        <a
                            href="#"
                            className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                        >
                            Explore Now
                        </a>
                    </div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                                ></div>
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                                ></div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <p className="mb-3 text-base text-yellow-300">2017</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Class 10</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            Class 10 , A very first steps towards carrier
                                            Gyan Bharti public School guraru gaya
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                                        <p className="mb-3 text-base text-yellow-300">2017-2019</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Class 12</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            A very important part which opens lot of new worlds to you
                                            DAV public School Admapur sasaram
                                        </p>
                                    </div>
                                </div>// src/components/Education/Education.jsx
import React from 'react';
import educationData from '../../data/educationData'; // Adjust the path as necessary

const Education = () => {
    return (
        <section>
            <div className="bg-black text-white py-8">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="ml-2 text-yellow-300 uppercase tracking-loose">Education</p>
                        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">My Educational Journey</p>
                        <p className="text-sm md:text-base text-gray-50 mb-4">
                            My education has been a transformative journey, guiding me from the basics of knowledge to the complexities of my field. It reflects my dedication to learning and my commitment to personal and professional growth. With each milestone, I have acquired skills and insights that have shaped my career and fueled my passion for continuous improvement.
                        </p>

                        <a
                            href="#"
                            className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                        >
                            Explore Now
                        </a>
                    </div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                                ></div>
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                                ></div>

                                {educationData.map((edu, index) => (
                                    <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
                                        <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                            <p className="mb-3 text-base text-yellow-300">{edu.year}</p>
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">{edu.title}</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                {edu.description} <br />
                                                <span className="font-semibold">{edu.institution}</span>
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


                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <p className="mb-3 text-base text-yellow-300">2019-2023</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Graduation</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            The ultimate step
                                            Magadh University
                                            Bachelor of Computer Application
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4">
                                        <p className="mb-3 text-base text-yellow-300">2023-Ongoing</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Masters</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            The final destination
                                            Motilal Nehru National Institute Of Technology , Allahabad
                                            Master Of Computer Application
                                        </p>
                                    </div>
                                </div>
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
