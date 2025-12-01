import React from 'react';
import Client from '../assets/Users/Client.png'
import Image from 'next/image';

const marqueeItems = new Array(10).fill("Client’s Feedback");

const Feedback = () => {
    return (
        <div className='bg-white'>
            {/* Marquee Section */}
            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 overflow-hidden relative z-30">
                <div className="animate-marquee whitespace-nowrap flex">
                    <div className="flex items-center">
                        {marqueeItems.map((text, i) => (
                            <div key={`set1-${i}`} className="flex items-center">
                                <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-wide">
                                    {text}
                                </span>
                                <span className="text-white text-5xl">•</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center">
                        {marqueeItems.map((text, i) => (
                            <div key={`set1-${i}`} className="flex items-center">
                                <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-wide">
                                    {text}
                                </span>
                                <span className="text-white text-5xl">•</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className='py-[160px] flex items-end justify-center gap-20'>
                <div className='h-[400px] w-[300px]'>
                    <Image src={Client} alt="Client image" />
                </div>
                <div className='py-5 relative'>
                    <div className='absolute -top-10 -left-10'>
                        <svg width="131" height="96" viewBox="0 0 131 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.12">
                                <path d="M27.975 0.535156H54.3772L36.9548 42.044L36.5739 42.9513H37.5579H57.1915V94.8706H0.5354V42.4921L27.975 0.535156ZM100.844 0.535156H127.246L109.824 42.044L109.443 42.9513H110.427H130.06V94.8706H73.4043V42.4921L100.844 0.535156Z" stroke="#0E3B1F" stroke-width="1.07083" />
                            </g>
                        </svg>
                    </div>
                    <p className='text-2xl text-[#373737] outfit max-w-[515px]'>Very few firms can make products look beautiful and work well at the same time, and that’s what I love about Orbillo!</p>
                    <div className='mt-20'>
                        <p className='text-3xl text-[#07302C] reloceta'>Abu Sayeed</p>
                        <span className='outfit text-lg tracking-[2.7px] text-[#373737]'>Founder, RankMet LLC</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;