'use client';

import Image from 'next/image';
import React from 'react';

// --- ASSETS ---
import Bg from '../assets/WhatWeDoBG.svg';
import penTool from '../assets/Icons/PenTool.svg';
import Layout from '../assets/Icons/Layout.svg';
import WordPress from '../assets/Icons/WordPress.svg';
import MegaPhone from '../assets/Icons/MegaPhone.svg';

const WhatWeDo = () => {
    const services = [
        {
            title: "Branding & Identity",
            description: "At Orbillo, we make digital simple, powerful and growth-focused",
            icon: penTool,
        },
        {
            title: "UI/UX Design",
            description: "At Orbillo, we make digital simple, powerful and growth-focused",
            icon: Layout,
        },
        {
            title: "Wordpress Development",
            description: "At Orbillo, we make digital simple, powerful and growth-focused",
            icon: WordPress,
        },
        {
            title: "Social Media Design",
            description: "At Orbillo, we make digital simple, powerful and growth-focused",
            icon: MegaPhone,
        },
    ];

    return (
        <div className='relative'>
            {/* Background Image */}
            <div className='absolute inset-0 -top-30 -z-10'>
                <Image
                    src={Bg}
                    alt='What we do background'
                    fill
                    className='object-cover opacity-60'
                />
            </div>

            <section className='z-30 max-w-[1380px] mx-auto py-20'>
                {/* Header */}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20'>
                    <div className='space-y-8'>
                        <p className='uppercase outfit text-sm md:text-lg font-bold text-white/55 tracking-[2.7px]'>
                            What We Do
                        </p>
                        <p className='text-[40px] max-w-[700px] reloceta text-white leading-tight'>
                            We offer a wide range of{' '}
                            <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-2 underline-offset-8'>
                                design & development services
                            </span>{' '}
                            to high ambitious businesses{' '}
                            <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-2 underline-offset-8'>
                                worldwide
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className='outfit text-xl md:text-2xl text-white/80 max-w-[450px] text-left md:text-right font-light'>
                            At Orbillo, we make digital simple, powerful and growth-focused
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className='group relative rounded-[32px] min-h-[420px] overflow-hidden'
                        >
                            {/* --- STATIONARY BORDER LAYER --- */}
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] z-0
                                bg-[conic-gradient(transparent_10deg,#C9FF9060_45deg_55deg,transparent_70deg_180deg,#C9FF9060_250deg_200deg,transparent_260deg)]
                                transition-all duration-500'
                            />


                            {/* --- CONTENT LAYER --- */}
                            <div className='absolute inset-[2px] rounded-[32px] z-10 flex flex-col justify-between px-7 py-8 transition-all duration-500 ease-in-out
                                bg-[#1C413D] text-white
                                group-hover:bg-[#C9FF90] group-hover:text-[#052e26]'
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-[32px] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:48px_48px]"></div>

                                <div className='flex justify-end relative z-10'>
                                    <div
                                        className='w-16 h-16 transition-colors duration-500 bg-[#C9FF90] group-hover:bg-[#1A3C38]'
                                        style={{
                                            maskImage: `url(${item.icon.src})`,
                                            WebkitMaskImage: `url(${item.icon.src})`,
                                            maskMode: 'alpha',
                                            WebkitMaskMode: 'alpha',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskSize: 'contain',
                                            WebkitMaskSize: 'contain'
                                        }}
                                    />
                                </div>

                                <div className='relative z-10 space-y-4'>
                                    <h3 className='reloceta text-2xl'>
                                        {item.title}
                                    </h3>
                                    <p className='outfit text-lg font-light text-white/79 group-hover:text-[#052e26]/80 transition-colors duration-500'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WhatWeDo;