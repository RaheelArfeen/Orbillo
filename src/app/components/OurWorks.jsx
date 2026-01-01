'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Counter from './Counter';

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
    { id: 1, imgUrl: 'https://i.ibb.co.com/hJ9rW61H/image.png', comingSoon: false, url: 'https://rankmet.com/' },
    { id: 2, imgUrl: 'https://i.ibb.co.com/G4dBy5kr/image.png', comingSoon: false, url: 'https://greaterdfa.com/' },
    { id: 3, imgUrl: 'https://i.ibb.co.com/mCTLCg7G/image.png', comingSoon: true },
    { id: 4, imgUrl: 'https://i.ibb.co.com/B26xhbTX/image.png', comingSoon: true },
];



const OurWorks = () => {


    return (
        <div className='relative bg-[#EFEEEA] '>
            <style>{customSwiperStyles}</style>

            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-wide recoleta">
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
                        <div className='space-y-8 w-full flex flex-col items-center'>
                            {/* <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#696969] tracking-[2.7px] text-center'>
                                Our works
                            </p> */}
                            <h3 className='text-[28px] md:text-[40px] max-w-[580px] recoleta text-center text-[#16332F] leading-tight -tracking-[0.48px]'>
                                We Craft Digital Experiences That Matter, Perform and Inspire
                            </h3>

                            <p className='outfit text-lg md:text-xl text-[#575757] max-w-[500px] text-center tracking-[0.20px]'>
                                A selection of projects where design helped businesses communicate better, stand stronger and grow with confidence.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='z-30 max-w-[1380px] mx-auto'>
                    <div className='block lg:hidden'>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={16}
                            slidesPerView={1.15}
                            centeredSlides={false}
                            pagination={{ clickable: true }}
                            className="w-full"
                        >
                            {GRID_ITEMS.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link href={item.url || '#'}>
                                        <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-sm">
                                            <img src={item.imgUrl} alt="work" className='w-full h-full object-cover' />
                                            {item.comingSoon ? (
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center ">
                                                    <span className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-[#C9FF90] text-[#17241F] text-xl px-5 py-2 font-bold rounded-full shadow-2xl outfit">
                                                        Coming Soon
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center ">
                                                    <span className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-[#C9FF90] text-[#17241F] text-xl px-5 py-2 font-bold rounded-full shadow-2xl outfit">
                                                        Live Preview
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className='hidden lg:grid grid-cols-2 gap-8'>
                        {GRID_ITEMS.map((item) => (
                            <Link href={item.url || '#'} target='_blank'>
                                <div
                                    key={item.id}
                                    className="group relative w-full min-h-[480px] rounded-3xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={item.imgUrl}
                                        alt="work"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {item.comingSoon ? (
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                            <span className="translate-y-4 group-hover:translate-y-0 py-3 px-10 rounded-full bg-[#C9FF90] text-[#17241F] transition duration-300 outfit md:text-xl text-base  max-[350px]:text-xs">
                                                Coming Soon
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                            <span className="translate-y-4 group-hover:translate-y-0 py-3 px-10 rounded-full bg-[#C9FF90] text-[#17241F] transition duration-300 outfit md:text-xl text-base  max-[350px]:text-xs">
                                                Live Preview
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* --- Section: Stats --- */}
                <Counter />
            </div>
        </div>
    );
};

export default OurWorks;