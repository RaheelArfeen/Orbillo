import React from 'react';
import Marquee from 'react-fast-marquee';

const Feedback = () => {
    return (
        <div className='bg-white'>
            {/* Marquee Section */}
            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee
                    autoFill={true}
                    pauseOnHover={false}
                    speed={80} // Adjust speed as needed
                    className="overflow-hidden"
                >
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-wide recoleta">
                            Client’s Feedback
                        </span>
                        {/* Dot Separator */}
                        <span className="text-white text-5xl font-black">•</span>
                    </div>
                </Marquee>
            </div>

            {/* Testimonial Section */}
            <section className="py-[120px] md:py-[160px] flex max-[350px]:flex-col max-md:items-center items-end justify-center gap-6 md:gap-18 px-4 overflow-hidden">

                {/* Image */}
                <div className="h-[240px] sm:h-[300px] md:h-[400px] w-[180px] sm:w-[240px] md:w-[300px] rounded-lg overflow-hidden flex-shrink-0">
                    <img
                        src={'https://i.ibb.co.com/21yzK5J7/Client.png'}
                        alt="Client image"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Right Content */}
                <div className="py-5 relative max-w-[500px] flex-shrink">

                    {/* className="w-16 h-16 md:w-20 md:h-20" */}
                    {/* SVG */}
                    <div className="absolute -top-5 sm:-top-10 -left-4 sm:-left-10">
                        <svg width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 md:w-36 md:h-36">
                            <g opacity="0.28">
                                <path d="M41.1769 15.5H67.5791L50.1567 57.0088L49.7758 57.9162H50.7598H70.3934V109.835H13.7373V57.4569L41.1769 15.5ZM114.046 15.5H140.448L123.026 57.0088L122.645 57.9162H123.629H143.262V109.835H86.6062V57.4569L114.046 15.5Z" stroke="url(#paint0_linear_1184_670)" stroke-width="1.07083" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1184_670" x1="78.4998" y1="15.5" x2="78.4998" y2="109.835" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.365385" stop-color="#0E3B1F" />
                                    <stop offset="1" stop-color="white" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Text */}
                    <p className="md:text-2xl text-base sm:text-lg text-[#373737] outfit leading-snug">
                        Very few firms can make products look beautiful and work well at the same time, and that’s what I love about Orbillo!
                    </p>

                    {/* Person */}
                    <div className="mt-10 md:mt-20">
                        <p className="text-xl sm:text-2xl md:text-3xl text-[#07302C] recoleta">Abu Sayeed</p>
                        <span className="outfit text-sm sm:text-base md:text-lg uppercase md:tracking-[2.7px] tracking-[2px] text-[#373737]">
                            Founder, RankMet LLC
                        </span>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Feedback;