'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// 3. Custom CSS
const customSwiperStyles = `
  .swiper-pagination-bullet {
    background: #D9D9D9;
    opacity: 1;
    width: 10px;
    height: 10px;
    margin: 0 6px !important;
  }
  .swiper-pagination-bullet-active {
    background: #041E1D;
  }
  .swiper-wrapper {
    padding-bottom: 40px;
  }
`;

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

const WhatWeDo = () => {
    return (
        <div className='relative bg-[#EFEEEA] '>
            <style>{customSwiperStyles}</style>

            {/* Marquee Section */}
            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={true} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-wide reloceta">
                            Featured Works
                        </span>
                        <span className="text-white text-5xl font-black">•</span>
                    </div>
                </Marquee>
            </div>

            <div className='py-20 px-4'>
                {/* --- Section: Header --- */}
                <section className='z-30 max-w-[1380px] mx-auto'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 md:mb-20'>
                        <div className='space-y-8 lg:text-left text-center w-full flex flex-col items-center lg:items-start'>
                            <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#696969] tracking-[2.7px]'>
                                What We Do
                            </p>
                            <h3 className='text-[28px] md:text-[40px] md:max-w-[700px] max-w-[500px] reloceta text-[#373737]/85 leading-tight'>
                                <p>We offer a wide rande of <span className='text-[#041E1D] underline decoration-[#041E1D] decoration-2 underline-offset-2'>design services</span> to small & medium sized businesses <span className='text-[#041E1D] underline decoration-[#041E1D] decoration-2 underline-offset-2'>worldwide</span></p>
                            </h3>
                        </div>
                        <div>
                            <p className='outfit text-xl md:text-2xl text-[#373737]/80 lg:max-w-[600px] md:max-w-[400px] max-w-[300px] text-center lg:text-right font-light'>
                                At Orbillo, we make digital simple, powerful and growth-focused
                            </p>
                        </div>
                    </div>
                </section>

                <section className='z-30 max-w-[1380px] mx-auto'>

                    <div className='block lg:hidden'>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={16}
                            slidesPerView={1.2}
                            centeredSlides={false}
                            grabCursor={true}
                            pagination={{ clickable: true }}
                            className="w-full"
                        >
                            <SwiperSlide>
                                <div className='w-full h-[380px] rounded-xl bg-[#d7bfe2]' />
                            </SwiperSlide>

                            {/* The Green Grid Items */}
                            {GRID_ITEMS.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={`w-full h-[380px] rounded-xl ${item.color} relative group overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* --- DESKTOP VIEW: ORIGINAL GRID (>= 768px) --- */}
                    <div className='hidden lg:grid grid-cols-2 gap-6'>
                        <div className='w-full h-[480px] rounded-xl bg-[#d7bfe2] col-span-2' />
                        {GRID_ITEMS.map((item) => (
                            <div
                                key={item.id}
                                className={`w-full h-[480px] rounded-xl ${item.color} relative group overflow-hidden transition-all duration-300`}
                            >
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>

                </section>

                {/* --- Section: Stats --- */}
                <section className='w-full pt-8 lg:pt-16'>
                    <div className='max-w-[1380px] mx-auto'>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12'>
                            {STATS_DATA.map((stat, index) => (
                                <div
                                    key={index}
                                    className='bg-[#e5e2e2] rounded-xl flex flex-col items-center justify-center space-y-2 py-12 lg:py-0 lg:bg-transparent lg:h-auto'
                                >
                                    <h3 className='text-[60px] lg:text-[72px] leading-none reloceta font-medium text-[#559B36] flex items-start'>
                                        {stat.value} <span className='text-3xl lg:text-5xl relative top-0 lg:bottom-4'>{stat.plus ? '+' : ''}</span>
                                    </h3>
                                    <p className='outfit uppercase text-[10px] lg:text-[13px] font-bold tracking-[1.5px] lg:tracking-[2.7px] text-[#373737]/55 text-center px-2'>
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