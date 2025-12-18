'use client'

import Image from 'next/image';
import Bg from './Image/OurWorkMarqueBg.png' // Ensure this path is correct for your project
import React from 'react';

// DATA
const TAGS_ROW_1 = [
    'Real Estate', 'Education & E-Learning', 'Travel & Tourism',
    'Food & Beverage', 'Finance', 'Healthcare', 'Technology', 'Beauty'
];

const TAGS_ROW_2 = [
    'Beauty & Cosmetics', 'Fashion & Apparel', 'SaaS',
    'Non-profit Organizations', 'Branding for Startups', 'Finance',
    'Food & Beverage', 'Consulting'
];

const TAGS_ROW_3 = [
    'Fashion & Apparel', 'SaaS', 'Non-profit Organizations',
    'Branding for Startups', 'Beauty & Cosmetics', 'Travel & Tourism',
    'Food & Beverage', 'Real Estate'
];

// --- 1. CSS STYLES FOR ANIMATION ---
const animationStyles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  @keyframes scroll-reverse {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
  .animate-marquee {
    will-change: transform;
    animation: scroll linear infinite;
  }
  .animate-marquee-reverse {
    will-change: transform;
    animation: scroll-reverse linear infinite;
  }
  
  /* PAUSE ON HOVER LOGIC */
  .pause-on-hover:hover .animate-marquee,
  .pause-on-hover:hover .animate-marquee-reverse {
    animation-play-state: paused;
  }

  /* Hardware acceleration hack */
  .gpu-hack {
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`;

// --- 2. UPDATED TAG COMPONENT ---
const Tag = ({ text }) => (
    <div
        className={`
            group cursor-pointer
            /* Default: Gradient Border */
            /* Hover: Solid Green Border Color */
            hover:bg-none
            rounded-full mx-1 sm:mx-2 p-px shrink-0 transition-colors duration-300
        `}
    >
        <div
            className={`
                inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-4 rounded-full 
                text-sm sm:text-base md:text-lg lg:text-2xl whitespace-nowrap transition-all duration-300 outfit
                
                /* Default: Dark Green Background */
                bg-[#02403A] text-[#C9FF90] backdrop-blur-sm
                
                /* Hover: Transparent Background (reveals the solid border color from parent) */
                group-hover:bg-transparent group-hover:text-[#C9FF90]
            `}
        >
            {text}
        </div>
    </div>
);

// --- 3. OPTIMIZED MARQUEE ROW ---
const MarqueeRow = ({ items, direction = 'left', duration = '40s' }) => {
    return (
        // Added 'pause-on-hover' class here
        <div className="pause-on-hover relative w-full overflow-hidden py-2 mask-linear-fade flex select-none">
            <div
                className={`flex min-w-full shrink-0 items-center justify-around gap-2 gpu-hack ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
                style={{ animationDuration: duration }}
            >
                {items.map((item, idx) => (
                    <Tag key={`original-${idx}`} text={item} />
                ))}
            </div>

            <div
                className={`flex min-w-full shrink-0 items-center justify-around gap-2 gpu-hack ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
                style={{ animationDuration: duration }}
                aria-hidden="true"
            >
                {items.map((item, idx) => (
                    <Tag key={`dupe-${idx}`} text={item} />
                ))}
            </div>
        </div>
    );
};

const OurWorkMarque = () => {
    return (
        <div className='relative'>
            {/* Inject Styles */}
            <style>{animationStyles}</style>

            <div className='absolute top inset-0 -z-10 lg:rounded-t-[100px] overflow-hidden'>
                <Image
                    src={Bg}
                    alt="Background"
                    className='w-full h-full object-cover'
                />
            </div>

            <section className='mx-auto py-12 md:py-25'>
                <div className='max-w-[1380px] mx-auto px-5 md:px-10'>
                    <div className='space-y-8 text-center w-full flex flex-col items-center mb-12'>
                        <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#E3E3E3]/55 tracking-[2.7px]'>
                            Our Work
                        </p>
                        <h3 className='text-[28px] md:text-[40px] md:max-w-[850px] max-w-[500px] recoleta text-white leading-tight'>
                            <p>From Tech to Retail: Tailored Brand Design for Every Industry</p>
                        </h3>
                    </div>
                </div>

                <div className="w-full flex flex-col space-y-4 md:space-y-6 mask-gradient overflow-hidden">
                    {/* Top Row: Moves Right */}
                    <MarqueeRow items={TAGS_ROW_1} direction="right" duration="50s" />

                    {/* Middle Row: Moves Left */}
                    <MarqueeRow items={TAGS_ROW_2} direction="left" duration="50s" />

                    {/* Bottom Row: Moves Right */}
                    <MarqueeRow items={TAGS_ROW_3} direction="right" duration="50s" />
                </div>
            </section >
        </div>
    );
};

export default OurWorkMarque;