import React from 'react';
import Marquee from 'react-fast-marquee';

const Feedback = () => {
    return (
        <div className='bg-white'>
            {/* Marquee Section */}
            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee
                    autoFill={true}
                    pauseOnHover={true}
                    speed={80} // Adjust speed as needed
                    className="overflow-hidden"
                >
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-wide reloceta">
                            Client’s Feedback
                        </span>
                        {/* Dot Separator */}
                        <span className="text-white text-5xl font-black">•</span>
                    </div>
                </Marquee>
            </div>

            {/* Testimonial Section */}
            <section className="py-[120px] md:py-[160px] flex max-[350px]:flex-col max-md:items-center items-end justify-center gap-6 md:gap-10 px-4 overflow-hidden">

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

                    {/* SVG */}
                    <div className="absolute -top-5 sm:-top-10 -left-4 sm:-left-10">
                        <svg width="131" height="96" viewBox="0 0 131 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20">
                            <g opacity="0.12">
                                <path d="M27.975 0.535156H54.3772L36.9548 42.044L36.5739 42.9513H37.5579H57.1915V94.8706H0.5354V42.4921L27.975 0.535156ZM100.844 0.535156H127.246L109.824 42.044L109.443 42.9513H110.427H130.06V94.8706H73.4043V42.4921L100.844 0.535156Z" stroke="#0E3B1F" strokeWidth="1.07083" />
                            </g>
                        </svg>
                    </div>

                    {/* Text */}
                    <p className="md:text-2xl text-base sm:text-lg text-[#373737] outfit leading-snug">
                        Very few firms can make products look beautiful and work well at the same time, and that’s what I love about Orbillo!
                    </p>

                    {/* Person */}
                    <div className="mt-10 md:mt-20">
                        <p className="text-xl sm:text-2xl md:text-3xl text-[#07302C] reloceta">Abu Sayeed</p>
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