'use client';

import React from 'react';

const GRID_ITEMS = [
    { id: 1, color: 'bg-[#cbe3be]' },
    { id: 2, color: 'bg-[#cbe3be]' },
    { id: 3, color: 'bg-[#cbe3be]' },
    { id: 4, color: 'bg-[#cbe3be]' },
];

const STATS_DATA = [
    { value: '2', label: 'Countries' },
    { value: '90', label: 'Days in Operation', plus: true },
    { value: '120', label: 'Projects Completed', plus: true },
    { value: '440', label: 'Cups of Coffee', plus: true },
];

const marqueeItems = new Array(10).fill("Featured Works");

const WhatWeDo = () => {
    return (
        <div className='relative bg-[#EFEEEA]'>
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

            <div className='py-20'>
                {/* --- Section: Header --- */}
                <section className='z-30 max-w-[1380px] mx-auto'>
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20'>

                        {/* Left Column */}
                        <div className='space-y-8'>
                            <p className='uppercase outfit text-sm md:text-lg font-bold text-[#696969] tracking-[2.7px]'>
                                What We Do
                            </p>
                            <p className='text-[40px] max-w-[700px] reloceta text-[#373737]/85 leading-tight'>
                                We offer a wide range of{' '}
                                <span className='text-[#041E1D] underline decoration-[#041E1D] decoration-2 underline-offset-8'>
                                    design  services
                                </span>{' '}
                                to small & medium sized businesses {' '}
                                <span className='text-[#041E1D] underline decoration-[#041E1D] decoration-2 underline-offset-8'>
                                    worldwide
                                </span>
                            </p>
                        </div>

                        <div>
                            <p className='outfit text-xl md:text-2xl text-[#373737]/75 max-w-[450px] text-left md:text-right font-light'>
                                At Orbillo, we make digital simple, powerful and growth-focused
                            </p>
                        </div>
                    </div>
                </section>

                <section className='z-30 max-w-[1380px] mx-auto grid grid-cols-2 gap-6'>
                    <div className='w-full h-[480px] rounded-xl bg-[#d7bfe2] col-span-2 mb-2' />

                    {GRID_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className={`w-full h-[480px] rounded-xl ${item.color}`}
                        />
                    ))}
                </section>

                <section className='w-full bg-[#EFEEEA] pt-16'>
                    <div className='max-w-[1380px] mx-auto px-4'>

                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
                            {STATS_DATA.map((stat, index) => (
                                <div key={index} className='flex flex-col items-center justify-center space-y-2'>

                                    {/* Number */}
                                    <h3 className='text-[56px] md:text-[72px] leading-none reloceta font-medium text-[#559B36] flex items-start'>
                                        {stat.value} <span className='text-5xl relative bottom-4'>{stat.plus ? '+' : ''}</span>
                                    </h3>

                                    {/* Label */}
                                    <p className='outfit uppercase text-[11px] md:text-[13px] font-bold tracking-[2.7px] text-[#373737]/55'>
                                        {stat.label}
                                    </p>

                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhatWeDo;