'use client';

import React, { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

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
    {
        id: 1,
        title: 'Rankmet LLC | Digital Marketing Agency Website',
        points: [
            'Agency Website',
            'UI/UX design',
            'Web Development'
        ],
        imgUrl: 'https://i.ibb.co.com/DfSVR1kR/image.png',
        comingSoon: false,
        url: 'https://rankmet.com/'
    },
    {
        id: 2,
        title: 'GDFA Freelancers Connect | Event Branding Design',
        points: [
            'Agency Website',
            'UI/UX design',
            'Web Development'
        ],
        imgUrl: 'https://i.ibb.co.com/RTZz2wpC/image.png',
        comingSoon: false,
        url: 'https://greaterdfa.com/',
        reverse: true
    },
    {
        id: 3,
        title: 'Nestora – Modern Real Estate Landing Page ',
        points: [
            'Agency Website',
            'UI/UX design',
            'Web Development'
        ],
        imgUrl: 'https://i.ibb.co.com/bMmS6jZV/image.png',
        url: 'https://www.behance.net/gallery/241794947/Nestora-Modern-Real-Estate-Landing-Page-UIUX-Design'
    },
    {
        id: 4,
        title: 'Wedding & Event Planner Website UI Redesign',
        points: [
            'Agency Website',
            'UI/UX design',
            'Web Development'
        ],
        imgUrl: 'https://i.ibb.co.com/dJ329FSR/image.png',
        comingSoon: true,
        reverse: true
    },
];


const ProjectCard = ({ item }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <div className={`flex flex-col gap-8 md:gap-12 items-center ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full`}>
            {/* Image Container */}
            <Link
                href={item.url || '#'}
                target='_blank'
                className="w-full lg:flex-1"
            >
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group relative w-full aspect-video rounded-xl overflow-hidden cursor-none bg-gray-200"
                >
                    <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* The Floating Circle - Hidden on mobile/touch for better UX */}
                    <div
                        className={`hidden lg:flex pointer-events-none absolute z-50 items-center justify-center rounded-full font-medium transition-opacity duration-300 ease-out ${item.comingSoon ? 'bg-[#585858] text-[#FFFFFF]' : 'bg-[#C9FF90] text-[#17241F]'}`}
                        style={{
                            width: '130px',
                            height: '130px',
                            left: mousePos.x,
                            top: mousePos.y,
                            transform: 'translate(-50%, -50%)',
                            opacity: isHovered ? 1 : 0,
                        }}
                    >
                        <span className="outfit text-center leading-tight">
                            {item.comingSoon ? "Coming Soon" : "View Project"}
                        </span>
                    </div>
                </div>
            </Link>

            {/* Project Details Beside Image */}
            <div className="w-full lg:w-1/3 px-2 text-left">
                <h3 className="text-2xl lg:text-4xl font-medium text-[#212121] bricolage mb-4 lg:mb-6">
                    {item.title}
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 lg:mb-12 md:max-w-[400px]">
                    {item.points.map((point, i) => (
                        <span key={i} className="text-[#212121]/80 outfit text-sm lg:text-base whitespace-nowrap">
                            # {point}
                        </span>
                    ))}
                </div>

                {item.comingSoon ? (
                    <button
                        className="inline-block px-8 py-3 rounded-full border border-[#4B4B4B] bg-[#4B4B4B] text-white outfit opacity-80"
                    >
                        Coming Soon
                    </button>
                ) : (
                    <Link
                        href={item.url}
                        target='_blank'
                        className="text-center inline-block px-8 py-3 rounded-full border border-[#4B4B4B] hover:bg-[#4B4B4B] text-[#4B4B4B] hover:text-white transition-colors duration-300 outfit"
                    >
                        View Project
                    </Link>
                )}
            </div>
        </div>
    );
};



const OurWorks = () => {


    return (
        <div className='relative bg-[#F4F3F1] '>
            <style>{customSwiperStyles}</style>

            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-6xl font-medium mx-6 md:mx-10 tracking-tight bricolage">
                            Featured Works
                        </span>
                        <span className="text-white text-5xl font-black">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.05155 23.1694L3.41628 20.6729L8.4093 13.3585L0 10.424L1.40155 6.13178L9.85465 8.75969V0H14.6725V8.75969L23.1256 6.13178L24.5271 10.424L16.074 13.3585L21.1109 20.6729L17.4756 23.1694L12.2198 16.2492L7.05155 23.1694Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                </Marquee>
            </div>

            <div className='py-20 px-4 max-w-[1380px] mx-auto'>
                {/* --- Section: Header --- */}
                <section className='z-30 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 md:mb-20'>
                        <div className='space-y-4 w-full flex flex-col items-center'>
                            <h1 className="text-[36px] sm:text-[48px] md:text-[50px] font-medium text-[#212121] bricolage tracking-tight max-w-[700px] leading-[1.1] md:leading-[60px] md:text-center">
                                Results {''}
                                <span className="playfair italic text-4xl sm:text-4xl md:text-5xl">That Speak</span> {' '}
                                For Themselves
                            </h1>

                            <p className='outfit text-lg md:text-xl text-[#4B4B4B] max-w-[440px] md:text-center tracking-[0.20px]'>
                                We partner with founders to transform ideas into market-ready products.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='max-w-[1380px] mx-auto mb-12 md:mb-48'>
                    <div className='grid gap-12 md:gap-48'>
                        {GRID_ITEMS.map((item) => (
                            <ProjectCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default OurWorks;