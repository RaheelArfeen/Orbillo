'use client';

import Image from 'next/image';
import React from 'react';

// --- ASSETS ---
import penTool from '../assets/Icons/PenTool.svg';
import Layout from '../assets/Icons/Layout.svg';
import WordPress from '../assets/Icons/WordPress.svg';
import MegaPhone from '../assets/Icons/MegaPhone.svg';
import Link from 'next/link';

const WhatWeDo = () => {
    const services = [
        {
            title: "Branding & Identity",
            description: "At Orbillo, we make digital simple, powerful and growth-focused",
            icon: penTool,
            route: '/services/branding',
        },
        {
            title: "UI/UX Design",
            description: "At Orbillo, we make digital simple, powerful and growth-focused",
            icon: Layout,
            route: '/services/ui-ux',
        },
        {
            title: "Wordpress Development",
            description: "At Orbillo, we make digital simple, powerful and growth-focused",
            icon: WordPress,
            route: '/services/wordpress',
        },
        {
            title: "Social Media Design",
            description: "At Orbillo, we make digital simple, powerful and growth-focused",
            icon: MegaPhone,
            route: '/services/social-media',
        },
    ];

    return (
        <div className='relative bg-[#041E1D] z-0'>

            <div className='h-[700px] w-[700px] bg-[#C9FF90]/21 rounded-full absolute -z-5 -top-35 -right-100 blur-[100px]'></div>
            <div className='h-[500px] w-[700px] bg-[#C9FF90]/21 rounded-full absolute -z-5 -top-80 left-30 blur-[100px]'></div>
            <div className='h-[700px] w-[700px] bg-[#C9FF90]/21 rounded-full absolute -z-5 -bottom-35 -left-100 blur-[100px]'></div>

            <section className='z-30 max-w-[1380px] mx-auto py-20 px-4'>
                {/* Header */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 mb-20'>
                    <div className='space-y-8 lg:text-left text-center w-full flex flex-col items-center lg:items-start'>
                        <p className='uppercase outfit text-sm lg:text-lg font-bold text-white/55 tracking-[2.7px]'>
                            What We Do
                        </p>
                        <h3 className='text-[28px] md:text-[40px] max-w-[580px] recoleta text-[#C9FF90] leading-tight -tracking-[0.48px]'>
                            <p>Purpose-led design services built for clarity, usability and long-term brand value.</p>
                        </h3>
                    </div>
                    <div>
                        <p className='outfit text-lg md:text-xl text-white/80 lg:max-w-[900px] md:max-w-[700px] text-center lg:text-right'>
                            We offer a focused range of design services for businesses that care about clarity, usability, and strong visual identity.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3'>
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className='group relative md:rounded-[20px] rounded-2xl md:min-h-[420px] min-h-[300px] overflow-hidden'
                        >
                            <Link href={item.route}>
                                {/* Animated Border Gradient */}
                                <div className='absolute left-[-50%] top-[-50%] w-[200%] h-[200%] z-0
                                bg-[conic-gradient(transparent_10deg,#C9FF9060_45deg_55deg,transparent_70deg_180deg,#C9FF9060_250deg_200deg,transparent_260deg)]
                                animate-[spin_10s_ease-in-out_infinite]'
                                />

                                {/* Main Card Content Container */}
                                <div className='absolute inset-[2px] md:rounded-[20px] rounded-2xl z-10 flex flex-col justify-between px-6 py-8 
                                transition-all duration-500 ease-in-out
                                bg-[#1C413D] text-white
                                group-hover:text-[#052e26]'
                                >

                                    <img className='absolute inset-0 top-0 left-0 w-full h-full scale-105 object-cover opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none' src="https://i.ibb.co.com/1JQtDmLt/svgviewer-png-output-1.png" alt="" />

                                    {/* Content: Icon */}
                                    <div className='flex justify-end relative z-20'>
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

                                    {/* Content: Text */}
                                    <div className='relative z-20 space-y-3 md:space-y-4'>
                                        <h3 className='recoleta md:text-2xl text-[18px]'>
                                            {item.title}
                                        </h3>
                                        <p className='outfit md:text-lg text-[14px] font-light text-white/70 group-hover:text-[#052e26] transition-colors duration-300'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WhatWeDo;