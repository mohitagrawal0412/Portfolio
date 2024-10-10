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
                                        <p className="mb-3 text-base text-yellow-300">2015</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Class 10</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                           Class 10 , A very first steps towards carrier
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                                        <p className="mb-3 text-base text-yellow-300">2015-2017</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Class 12</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                          A very important part which opens lot of new worlds to you
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <p className="mb-3 text-base text-yellow-300">10 May, 2021</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be
                                            announced on the WhatsApp groups and will be mailed to you.
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4">
                                        <p className="mb-3 text-base text-yellow-300">12 May, 2021</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Prize Distribution</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            The winners will be contacted by our team for their addresses and the winning goodies will be sent
                                            to their addresses.
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
