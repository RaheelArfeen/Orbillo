import Image from 'next/image';
import React from 'react';
import Redesign from './Icons/Redesign.svg'
import Identify from './Icons/Identify.svg'
import Guidelines from './Icons/Guidelines.svg'
import Marketing from './Icons/Marketing.svg'

const WhatWeDo = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    const cards = [
        {
            title: "Logo Design / Redesign",
            description: "Timeless and purpose-driven - tailored for your audience.",
            src: Redesign
        },
        {
            title: "Brand Identity System",
            description: "Colors, typography, and styles keep your brand consistent.",
            src: Identify
        },
        {
            title: "Brand Guidelines",
            description: "A digital brand book that ensures your team presents your brand correctly.",
            src: Guidelines
        },
        {
            title: "Marketing Ready Assets",
            description: "Social media kits, business cards, and templates to launch.",
            src: Marketing
        }
    ];

    return (
        <div>
            <section className='max-w-[1380px] mx-auto py-12 md:py-25 px-5 2xl:px-0'>

                <div className='mt-10 md:mt-15 w-full flex flex-col items-center flex-shrink-0 mb-25'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full border-t border-l border-[#E9E9E9]'>
                        {numbers.map((num) => (
                            <div
                                key={num}
                                className='hover:bg-gray-50 transition duration-300 w-full flex items-center justify-center border-r border-b border-[#E9E9E9] py-6 md:py-8 px-2 cursor-pointer group'
                            >
                                <span className="text-[#9CA3AF] font-bold text-sm md:text-lg group-hover:text-[#002A15] transition-colors text-center">
                                    OneSuite
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 mb-20'>
                        <div className='space-y-8 lg:text-left text-center w-full flex flex-col items-center lg:items-start'>
                            <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#07302C]/55 tracking-[2.7px]'>
                                What We Do
                            </p>
                            <h3 className='text-[28px] md:text-[40px] md:max-w-[700px] max-w-[500px] recoleta text-[#07302C] leading-tight'>
                                <p>Everything You Need for a Consistent, Professional Brand</p>
                            </h3>
                        </div>
                        <div>
                            <p className='outfit text-xl md:text-2xl text-[#07302C]/80 lg:max-w-[600px] md:max-w-[400px] max-w-[300px] text-center lg:text-right font-light'>
                                At Orbillo, we make digital simple, powerful and growth-focused
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className='group relative flex flex-col justify-between rounded-2xl min-h-[480px] overflow-hidden bg-[#07302C] hover:translate-y-[-5px] transition-transform duration-300'
                            >
                                <div className='relative z-10 px-6 py-8'>
                                    <h4 className='recoleta text-2xl leading-[140%] text-[#C9FF90] mb-4'>
                                        {card.title}
                                    </h4>
                                    <p className='outfit text-white text-lg'>
                                        {card.description}
                                    </p>
                                </div>

                                <div className='absolute bottom-0 right-0 h-[280px] flex items-end justify-center pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-out'>
                                    <Image
                                        src={card.src}
                                        alt={card.title}
                                        width={200}
                                        height={160}
                                        className="w-full h-full object-contain object-bottom"
                                    />
                                </div>

                                <div className="absolute -top-15 -right-35 w-[200px] h-[200px] rounded-full blur-[60px] bg-[#6BBE46]/55 z-0"></div>
                                <div className="absolute bottom-6 -left-30 w-[200px] h-[200px] rounded-full blur-[60px] bg-[#6BBE46]/55 z-0"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default WhatWeDo;
