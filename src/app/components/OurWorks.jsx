'use client';

import React, { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Rankmet from '@/assets/projects/Rankmet.jpg'
import GDFA from '@/assets/projects/GDFA.jpg'
import Nestora from '@/assets/projects/Nestora.jpg'
import Resa from '@/assets/projects/Resa.jpg'

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';

const slugMap = {
    Branding: 'branding',
    'UI/UX Design': 'ui-ux',
    'Web Development': 'webDevelopment',
};

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
            'Branding',
            'UI/UX Design',
            'Web Development'
        ],
        Image: Rankmet,
        comingSoon: false,
        url: 'https://rankmet.com/',
    },
    {
        id: 2,
        title: 'GDFA Freelancers Connect | Event Branding Design',
        points: [
            'Branding',
            'UI/UX Design',
            'Web Development'
        ],
        Image: GDFA,
        comingSoon: false,
        url: 'https://greaterdfa.com/',
        reverse: true
    },
    {
        id: 3,
        title: 'Nestora – Modern Real Estate Landing Page ',
        points: [
            'Branding',
            'UI/UX Design',
            'Web Development'
        ],
        Image: Nestora,
        url: 'https://www.behance.net/gallery/241794947/Nestora-Modern-Real-Estate-Landing-Page-UIUX-Design'
    },
    {
        id: 4,
        title: 'Wedding & Event Planner Website UI Redesign',
        points: [
            'Branding',
            'UI/UX Design',
            'Web Development'
        ],
        Image: Resa,
        comingSoon: false,
        reverse: true,
        url: 'https://www.behance.net/gallery/242684157/Wedding-Event-Planner-Website-UI-Redesign'
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
                    <Image
                        src={item.Image}
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
                <h3 className="text-2xl lg:text-[32px] font-medium tracking-tighter text-[#212121] bricolage mb-4 lg:mb-6">
                    {item.title}
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 lg:mb-12 md:max-w-[400px]">
                    {item.points.map((point, i) => (
                        <span key={i} className="text-[#212121]/80 outfit text-sm lg:text-lg whitespace-nowrap">
                            <Link href={`/services/${slugMap[point]}`}>
                                # {point}
                            </Link>
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
                        className="text-center inline-block px-10 py-3 font-medium text-xl rounded-full border border-[#4B4B4B] hover:bg-[#4B4B4B] text-[#4B4B4B] hover:text-white transition-colors duration-300 outfit"
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

            <div className="w-full bg-[#5ba32b] py-6.5 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-[46px] font-medium mx-6 md:mx-10 tracking-tight bricolage">
                            Featured Works
                        </span>
                        <span className="text-white text-5xl font-black">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.0749 12.1C4.94157 12.1 3.91657 11.8334 2.9999 11.3C2.08324 10.75 1.3499 10.025 0.799903 9.12502C0.266569 8.20836 -9.74834e-05 7.18336 -9.74834e-05 6.05002C-9.74834e-05 4.91669 0.266569 3.90002 0.799903 3.00002C1.3499 2.08336 2.08324 1.35836 2.9999 0.825023C3.91657 0.275024 4.94157 2.3663e-05 6.0749 2.3663e-05C7.19157 2.3663e-05 8.20824 0.275024 9.1249 0.825023C10.0416 1.35836 10.7666 2.08336 11.2999 3.00002C11.8332 3.90002 12.0999 4.91669 12.0999 6.05002C12.0999 7.18336 11.8332 8.20836 11.2999 9.12502C10.7666 10.025 10.0416 10.75 9.1249 11.3C8.20824 11.8334 7.19157 12.1 6.0749 12.1Z" fill="white"/>
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
                                <span className="playfair italic text-4xl sm:text-4xl md:text-[52px]">That Speak</span> {' '}
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