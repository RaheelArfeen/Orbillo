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
            <div className='absolute inset-0 -top-[5500px] -z-10'>
                <Image
                    src={Bg}
                    alt='What we do background'
                    fill
                    className='object-cover'
                />
            </div>

            <section className='z-30 max-w-[1380px] mx-auto py-20 px-4'>
                {/* Header */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 mb-20'>
                    <div className='space-y-8 lg:text-left text-center w-full flex flex-col items-center lg:items-start'>
                        <p className='uppercase outfit text-sm lg:text-lg font-bold text-white/55 tracking-[2.7px]'>
                            What We Do
                        </p>
                        <h3 className='text-[28px] md:text-[40px] md:max-w-[700px] max-w-[500px] reloceta text-white leading-tight'>
                            <p>We offer a wide rande of <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-2 underline-offset-2'>design & development services</span> to high ambitious businesses <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-2 underline-offset-2'>worldwide</span></p>
                        </h3>
                    </div>
                    <div>
                        <p className='outfit text-xl md:text-2xl text-white/80 lg:max-w-[600px] md:max-w-[400px] max-w-[300px] text-center lg:text-right font-light'>
                            At Orbillo, we make digital simple, powerful and growth-focused
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3'>
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className='group relative md:rounded-[32px] rounded-2xl md:min-h-[420px] min-h-[300px] overflow-hidden'
                        >
                            <div className='absolute left-[-50%] top-[-50%] w-[200%] h-[200%] z-0
                                bg-[conic-gradient(transparent_10deg,#C9FF9060_45deg_55deg,transparent_70deg_180deg,#C9FF9060_250deg_200deg,transparent_260deg)]
                                animate-[spin_10s_ease-in-out_infinite]'
                            />

                            <div className='absolute inset-[2px] md:rounded-[32px] rounded-2xl z-10 flex flex-col justify-between px-7 py-8 
                                transition-all duration-300 ease-out
                                bg-[#1C413D] text-white
                                group-hover:bg-[#C9FF90] group-hover:text-[#052e26]'
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-[32px] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:48px_48px]"></div>

                                <div className='flex justify-end relative z-10'>
                                    <div
                                        className='md:w-16 w-12 md:h-16 h-12 transition-colors duration-300 bg-[#C9FF90] group-hover:bg-[#1A3C38]'
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

                                <div className='relative z-10 space-y-3 md:space-y-4'>
                                    <h3 className='reloceta md:text-2xl text-[18px]'>
                                        {item.title}
                                    </h3>
                                    {/* Text */}
                                    <p className='outfit md:text-lg text-[14px] font-light text-white/79 group-hover:text-[#052e26]/80 transition-colors duration-300'>
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